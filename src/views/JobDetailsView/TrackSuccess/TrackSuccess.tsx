import React, { useCallback } from 'react'
import {
  SuccessContentContainer,
  SuccessControlsContainer,
  SuccessHeader,
  SuccessPrimaryButton,
  SuccessSecondaryButton,
  SuccessSubtitle,
  SuccessTitle,
  TrackSuccessContainer,
} from './styles'
import { SuccessContentCard } from './SuccessCard'
import { IJob } from '../../../shared/types'
import useUser from '../../../hooks/useUser'
import { JOB_TRACKING_URL } from '../../../shared/constants'
import { getUserBaseDomain } from '~/shared/helpers'

interface ITrackSuccessProps {
  job: IJob
}

export const TrackSuccess = React.memo(({ job }: ITrackSuccessProps) => {
  const { user } = useUser()
  const handleJobTrackerClick = useCallback(() => {
    const baseDomain = getUserBaseDomain(user)
    window.open(JOB_TRACKING_URL(baseDomain), '_blank')
  }, [])

  const handleContinue = useCallback(() => {
    window.close()
  }, [])

  return (
    <TrackSuccessContainer>
      <SuccessContentContainer>
        <SuccessHeader>
          <SuccessTitle>Success!</SuccessTitle>
          <SuccessSubtitle>Job added to Job Tracker</SuccessSubtitle>
        </SuccessHeader>
        <SuccessContentCard job={job} />
      </SuccessContentContainer>
      <SuccessControlsContainer>
        <SuccessSecondaryButton onClick={handleJobTrackerClick}>
          Go to Job Tracker
        </SuccessSecondaryButton>
        <SuccessPrimaryButton onClick={handleContinue}>Continue Browsing</SuccessPrimaryButton>
      </SuccessControlsContainer>
    </TrackSuccessContainer>
  )
})
