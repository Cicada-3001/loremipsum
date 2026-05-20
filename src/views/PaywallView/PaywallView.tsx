import React from 'react'
import Button from '../../components/Button'
import useUser from '../../hooks/useUser'
import * as Styles from './styles'
import { getUserBaseDomain } from '~/shared/helpers'

interface IProps {
  setIsPaywallOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function PaywallView({ setIsPaywallOpen }: IProps) {
  const { user } = useUser()

  const handleUpgrade = () => {
    if (!user) return
    const baseDomain = getUserBaseDomain(user)
    window.open(`${baseDomain}/app/billing/plans`, '_blank')
  }
  const handleSkip = () => {
    setIsPaywallOpen(false)
  }

  const features = [
    { id: 1, text: 'All resume templates' },
    { id: 2, text: 'Unlimited resume downloads' },
    { id: 3, text: 'Unlimited cover letters' },
  ]

  const paywallMain = require('~/assets/images/paywall/paywall.svg')

  return (
    <Styles.Container>
      <Styles.Visual src={paywallMain} />
      <Styles.DescriptionSection>
        <Styles.Description>
          <Styles.Header>
            <Styles.PremiumBadge>
              <Styles.PremiumIcon />
              <Styles.PremiumText>Available for Premium</Styles.PremiumText>
            </Styles.PremiumBadge>
            <Styles.Title>You've reached the Job Tracker limit</Styles.Title>
          </Styles.Header>
          <Styles.SubTitle>
            Only 3 cards are available in the free plan. Upgrade your free plan to add unlimited
            number of job cards.
          </Styles.SubTitle>
        </Styles.Description>
        <Styles.UnlockFeaturesSection>
          <Styles.UnlockText>Also Unlock:</Styles.UnlockText>
          <Styles.FeaturesContainer>
            {features.map((feature) => (
              <Styles.FeatureItem key={feature.id}>
                <Styles.GreenTick />
                <Styles.Feature>{feature.text}</Styles.Feature>
              </Styles.FeatureItem>
            ))}
          </Styles.FeaturesContainer>
        </Styles.UnlockFeaturesSection>
        <Styles.ButtonContainer>
          <Button size="small" theme="ghost" onClick={handleSkip}>
            Skip
          </Button>
          <Button size="small" onClick={handleUpgrade}>
            Upgrade now
          </Button>
        </Styles.ButtonContainer>
      </Styles.DescriptionSection>
    </Styles.Container>
  )
}

export default PaywallView
