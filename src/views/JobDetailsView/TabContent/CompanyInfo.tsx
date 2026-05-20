import React, { useCallback } from 'react'
import { CompanyAutosuggest, Suggestion } from '~/components/CompanyAutosuggest/CompanyAutosuggest'
import {
  CompanyInfo as Company,
  CompanyInfoContainer,
  CompanyLogo,
  MenuItem,
  MenuItemLogo,
} from './styles'
import { JobInfoKeys } from '../constants'
import { IJob } from '../../../shared/types'

interface ICompanyInfoProps {
  job: IJob
  setJobInfo: (name: string, value: string) => void
  isFetched: boolean
  handleInputChange: (value: string, key: string) => void
  eleKey: JobInfoKeys
}

export const CompanyInfo = React.memo(
  ({ job, setJobInfo, isFetched, handleInputChange, eleKey }: ICompanyInfoProps) => {
    const { company, logo } = job
    const handleSuggestionSelect = useCallback((e: React.ChangeEvent, { suggestion }) => {
      for (const name in suggestion) {
        if (name !== JobInfoKeys.link) setJobInfo(name, suggestion[name])
      }
    }, [])

    const renderSuggestion = useCallback(
      ({ logo, company }: Suggestion, state) => (
        <MenuItem isHighlighted={state.isHighlighted}>
          <MenuItemLogo borderRadius={'4px'} size={20} src={logo} alt={company} />
          {company}
        </MenuItem>
      ),
      [],
    )
    return (
      <CompanyAutosuggest
        value={job[`${eleKey}`]}
        onChange={({ target: { value } }) => handleInputChange(value, eleKey)}
        onSuggestionSelected={handleSuggestionSelect}
        renderCustomSuggestion={renderSuggestion}
      >
        {(inputProps) => (
          <CompanyInfoContainer>
            {company && <CompanyLogo size={20} alt={company} src={logo} />}
            <Company
              company={company}
              placeholder="Empty"
              {...inputProps}
              disabled={isFetched && company}
            />
          </CompanyInfoContainer>
        )}
      </CompanyAutosuggest>
    )
  },
)
