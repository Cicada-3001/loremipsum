import React, { useCallback, useEffect, useState } from 'react'
import { useMemo } from 'react'
import * as Styled from './styles'
import { ONBOARDING_STEPS } from './constants'
import { useLocation } from 'wouter'
import useUser from '~/hooks/useUser'
import useAuthApi from '~/hooks/useAuthApi'
import {
  BUS_EVENT_NAMES,
  BUS_SENDER,
  CAREER_IO_APP_DOMAIN,
  CAREER_IO_CAREER_MINDS_APP_DOMAIN,
  CAREER_IO_TR_APP_DOMAIN,
  MAIN_SIGNIN_URL,
  RESUME_IO_DOMAIN,
  TOP_CV_APP_DOMAIN,
} from '~/shared/constants'

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const currStepDetails = ONBOARDING_STEPS[currentStep]
  const isLastStep = useMemo(() => currentStep === ONBOARDING_STEPS.length - 1, [currentStep])
  const [, setLocation] = useLocation()
  const {
    setUserData,
    user,
    isAuthorized,
    apiClient,
    resumeIoClient,
    trClient,
    careerMindsClient,
    topCVClient,
  } = useUser()
  const { signInWithJwt } = useAuthApi(apiClient)
  const { signInWithJwt: signInRio } = useAuthApi(resumeIoClient)
  const { signInWithJwt: signInTR } = useAuthApi(trClient)
  const { signInWithJwt: signInCM } = useAuthApi(careerMindsClient)
  const { signInWithJwt: signInTopCV } = useAuthApi(topCVClient)

  const handleMessageEvent = useCallback(
    async ({ data }) => {
      if (!apiClient) return
      const { sender, token, refreshToken, name, isRioUser, baseDomain } = data || {}
      if (sender !== BUS_SENDER) return
      if (name === BUS_EVENT_NAMES.setJwt) {
        ;[apiClient, resumeIoClient, trClient, careerMindsClient].forEach((el) =>
          el.setAuthTokens(token, refreshToken),
        )

        let result
        switch (true) {
          case baseDomain === TOP_CV_APP_DOMAIN:
            result = await signInTopCV()
            break
          case baseDomain === CAREER_IO_TR_APP_DOMAIN:
            result = await signInTR()
            break
          case baseDomain === CAREER_IO_CAREER_MINDS_APP_DOMAIN:
            result = await signInCM()
            break
          case baseDomain === CAREER_IO_APP_DOMAIN:
            result = await signInWithJwt()
            break
          case baseDomain === RESUME_IO_DOMAIN:
            result = await signInRio()
            break

          default:
            result = isRioUser ? await signInRio() : await signInWithJwt()
            break
        }

        const { user, success, jwt, jwtExpiresAt } = result
        if (!success) return
        setUserData({
          firstName: user.firstName,
          lastName: user.lastName,
          jwt,
          jwtExpiresAt,
          hasPremium: user.hasPremiumFeatures,
          autoApplyEnabled: !!user.scopes?.autoApply,
          autoApplyCreditsCount:
            typeof user.scopes.autoApply !== 'boolean'
              ? user.scopes.autoApply.creditCount
              : undefined,
          autoApplyCreditsUsed:
            typeof user.scopes.autoApply !== 'boolean'
              ? user.scopes.autoApply.creditCountUsed
              : undefined,
          token,
          baseDomain,
          refreshToken,
          isRioUser,
          billingInfo: user.billingInfo,
        })

        setLocation('/')
      }
    },
    [setUserData, setLocation, signInWithJwt, apiClient],
  )

  useEffect(() => {
    if (isAuthorized && user) {
      setLocation('/')
    }

    window.addEventListener('message', handleMessageEvent)
    return () => {
      window.removeEventListener('message', handleMessageEvent)
    }
  }, [handleMessageEvent, setLocation, user, isAuthorized])

  const handlePrimaryClick = () => {
    if (isLastStep) {
      setLocation('/signin')
      window.open(MAIN_SIGNIN_URL)
      return
    } else setCurrentStep((prev) => prev + 1)
  }

  return (
    <Styled.OnboardingContainer>
      <Styled.VisualContainer>
        <Styled.Image src={currStepDetails.imgUrl} alt={currStepDetails.subtitle} />
      </Styled.VisualContainer>
      <Styled.BottomContainer>
        <Styled.ContentContainer>
          <Styled.Caption>How to get started:</Styled.Caption>
          <Styled.Title>{currStepDetails.title}</Styled.Title>
          <Styled.Description>{currStepDetails.subtitle}</Styled.Description>
        </Styled.ContentContainer>
        <Styled.ControlsContainer>
          <Styled.DotsContainer>
            {ONBOARDING_STEPS.map((_, index) => (
              <Styled.Dot key={index} isActive={index === currentStep} />
            ))}
          </Styled.DotsContainer>

          <Styled.PrimaryButton onClick={handlePrimaryClick} isLastStep={isLastStep}>
            {isLastStep ? 'Login' : 'Next'}
          </Styled.PrimaryButton>
        </Styled.ControlsContainer>
      </Styled.BottomContainer>
    </Styled.OnboardingContainer>
  )
}
