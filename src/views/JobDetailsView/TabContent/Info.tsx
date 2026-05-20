import React from 'react'
import { EMPTY_PLACEHOLDER, JobInfoKeys, STATUS_OPTIONS } from '../constants'
import { InfoSkeleton, JobInfo, SkeletonWrapper } from './styles'
import CustomSelect from '~/components/CustomSelect'
import { CompanyInfo } from './CompanyInfo'
import Colors from '~/shared/colors'
import { IJob } from '../../../shared/types'
import useUser from '../../../hooks/useUser'
import { STATUSES } from '../../../shared/constants'
import isAuthorizedToAutoApply from '../../../helpers/autoApplyAccess'

interface IInfoProps {
  eleKey: JobInfoKeys
  job: IJob
  setJobInfo: (name: string, value: string) => void
  isFetching: boolean
  isFetched: boolean
  handleInputChange: (value: string, key: string) => void
  unFetchedFields: string[]
}

export const Info = React.memo(
  ({
    eleKey,
    job,
    setJobInfo,
    isFetched,
    isFetching,
    handleInputChange,
    unFetchedFields,
  }: IInfoProps) => {
    const { user } = useUser()
    const { isAuthorized } = isAuthorizedToAutoApply(user)
    if (isFetching)
      return (
        <SkeletonWrapper>
          <InfoSkeleton
            baseColor={Colors.Neutral50}
            highlightColor={Colors.Neutral150}
            duration={1}
          />
        </SkeletonWrapper>
      )

    switch (eleKey) {
      case JobInfoKeys.company:
        return <CompanyInfo {...{ handleInputChange, isFetched, job, eleKey, setJobInfo }} />

      case JobInfoKeys.status:
        return (
          <CustomSelect
            options={
              isAuthorized
                ? STATUS_OPTIONS
                : STATUS_OPTIONS.filter((option) => option.value !== STATUSES.autoApply)
            }
            handleSelect={(option) => handleInputChange(option.value, eleKey)}
            placeholder={EMPTY_PLACEHOLDER}
            value={job.status}
            setValue={(val: string) => setJobInfo(eleKey, val)}
          />
        )

      default:
        return (
          <JobInfo
            placeholder={EMPTY_PLACEHOLDER}
            onChange={({ target: { value } }) => handleInputChange(value, eleKey)}
            value={job[`${eleKey}`]}
            disabled={isFetched && !unFetchedFields.includes(eleKey)}
            key={eleKey}
            border={!!([JobInfoKeys.title, JobInfoKeys.link].includes(eleKey) && !job[`${eleKey}`])}
          />
        )
    }
  },
)
