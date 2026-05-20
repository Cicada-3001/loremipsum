import React from 'react'
import {
  CompanyLogo,
  RedirectIcon,
  RedirectIconContainer,
  SuccessCard,
  SuccessCardContainer,
  SuccessCompanyTitle,
  SuccessSubtitle,
} from './styles'
import { IJob } from '../../../shared/types'

interface ISuccessContentCardProps {
  job: IJob
}

export const SuccessContentCard = React.memo(({ job }: ISuccessContentCardProps) => {
  const { company, logo, title } = job
  return (
    <SuccessCardContainer>
      <SuccessCard>
        <RedirectIconContainer>
          <RedirectIcon />
        </RedirectIconContainer>
        <CompanyLogo src={logo} size={32} alt={company} />
        <SuccessCompanyTitle>{company}</SuccessCompanyTitle>
        <SuccessSubtitle>{title}</SuccessSubtitle>
      </SuccessCard>
    </SuccessCardContainer>
  )
})
