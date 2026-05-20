import React, { useCallback } from 'react'
import { INFOS, JobInfoKeys, TABS } from '../constants'
import {
  Description,
  DescriptionContainer,
  InfoContainer,
  InfoTitle,
  JobInfosContainer,
  NotesInput,
} from './styles'
import { Info } from './Info'
import { IJob } from '../../../shared/types'

interface ITabContentProps {
  job: IJob
  setJobInfo: (name: string, value: string) => void
  isFetching: boolean
  isFetched: boolean
  selectedTab: TABS
  unFetchedFields: string[]
}

export const TabContent = React.memo(
  ({ job, setJobInfo, isFetched, isFetching, selectedTab, unFetchedFields }: ITabContentProps) => {
    const handleInputChange = useCallback((value: string, key: string) => {
      setJobInfo(key, value)
    }, [])

    if (selectedTab === TABS.description)
      return (
        <DescriptionContainer>
          <Description
            value={job.description}
            onChange={({ target: { value } }) => handleInputChange(value, JobInfoKeys.description)}
            disabled={isFetched}
          />
        </DescriptionContainer>
      )

    return (
      <JobInfosContainer>
        {INFOS.map((ele) => {
          const { icon: Icon, id, title, key } = ele
          return (
            <InfoContainer key={id}>
              <InfoTitle>
                <Icon /> {title}
              </InfoTitle>
              <Info
                eleKey={key}
                {...{ job, setJobInfo, isFetched, isFetching, unFetchedFields }}
                handleInputChange={handleInputChange}
              />
            </InfoContainer>
          )
        })}
        <NotesInput
          placeholder="Type your notes here"
          value={job.notes}
          onChange={({ target: { value } }) => handleInputChange(value, 'notes')}
        />
      </JobInfosContainer>
    )
  },
)
