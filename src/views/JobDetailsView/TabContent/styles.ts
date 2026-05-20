import styled from 'styled-components'
import Colors from '../../../shared/colors'
import Typography from '../../../shared/typography'
import Avatar from '~/components/Avatar/Avatar'
import Skeleton from 'react-loading-skeleton'

export const CompanyInfo = styled.input<{ company: string }>`
  ${Typography.Caption};
  color: ${Colors.Neutral1000};
  margin: 2px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ company }) => (!company ? Colors.Red400 : 'transparent')};
  outline: none;
  padding: 4px 8px 4px ${({ company }) => (!company ? '8px' : '32px')};
  border-radius: 4px;
  width: 180px;
  background: ${({ company }) => (!company ? Colors.Neutral100 : Colors.White)};
  overflow-x: scroll;
  border-width: 2px;
  border-style: solid;
  border-bottom-color: ${({ company }) => (!company ? Colors.Amber400 : 'transparent')};
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  position: relative;

  &:hover {
    background: ${Colors.Neutral100};
  }

  &:focus {
    background: ${Colors.Neutral100};
  }
`

export const JobInfo = styled.input<{ border: boolean }>`
  display: block;
  box-sizing: border-box;
  ${Typography.Caption};
  color: ${Colors.Neutral1000};
  margin: 2px 0px;
  outline: none;
  padding: 4px 8px;
  border-radius: 4px;
  width: 180px;
  background: ${({ border }) => (border ? Colors.Neutral100 : Colors.White)};
  overflow-x: scroll;
  border-width: 2px;
  border-style: solid;
  border-bottom-color: ${({ border }) => (border ? Colors.Amber400 : 'transparent')};
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;

  &:hover {
    background: ${Colors.Neutral100};
  }

  &:focus {
    background: ${Colors.Neutral100};
  }
`

export const MenuItem = styled.div<{ isHighlighted: boolean }>`
  ${Typography.Caption};
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  color: ${Colors.Neutral1000};
  background-color: ${({ isHighlighted }) => (isHighlighted ? Colors.Neutral50 : 'transparent')};
`

export const MenuItemLogo = styled(Avatar)`
  margin-right: 8px;
`

export const NotesInput = styled.textarea`
  display: flex;
  height: 104px;
  width: 100%;
  padding: 12px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
  background: ${Colors.Neutral50};
  outline: none;
  border: none;
  ${Typography.Caption};
  color: ${Colors.Neutral1000};
  resize: none;
  margin-top: 16px;
  white-space: pre-line;

  &::placeholder {
    color: ${Colors.Neutral400};
  }
`

export const DescriptionContainer = styled.div`
  margin: 16px 0px 0px;
  max-height: 299px;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }
`

export const Description = styled.textarea`
	${Typography.Caption};
	color: ${Colors.Neutral500};
	white-space: pre-line;
	min-height: 284px;
	resize: none;
	width: 100%;
	display: flex;
	height: 104px;
	width: 100%;
	padding: 12px;
	align-items: flex-start;
	gap: 8px;
	align-self: stretch;
	border-radius: 4px;
	outline: none;
	border: none;
	${Typography.Caption};
	resize: none;

	&::placeholder {
    color: ${Colors.Neutral400};
`

export const CompanyInfoContainer = styled.div`
  position: relative;
  ${Typography.Caption};
  color: ${Colors.Neutral1000};
  margin: 0px;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 180px;
  background: ${Colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CompanyLogo = styled(Avatar)`
  pointer-events: none;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  position: absolute;
  z-index: 1;
  left: 8px;
`

export const JobInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 16px 0px 0px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const SkeletonWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`

export const InfoSkeleton = styled(Skeleton)`
  height: 20px;
  width: 145px;
`

export const InfoTitle = styled.p`
  ${Typography.Caption};
  color: ${Colors.Neutral500};
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  gap: 4px;
  padding: 8px 0px;
`
