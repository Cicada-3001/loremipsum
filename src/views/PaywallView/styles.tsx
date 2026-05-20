import styled from 'styled-components'
import Colors from '~/shared/colors'
import Typography, { FontWeight } from '../../shared/typography'
import { Icon20 } from '~/components/Icon'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 544px;
  background-color: ${Colors.White};
  border-radius: 16px;
  z-index: 999;
`
export const Visual = styled.img`
  width: 70%;
  border-radius: 16px 16px 0 0;
  margin: 0 auto;
`
export const Close = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 32px;
  right: 32px;
  border-radius: 32px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.Neutral30};
  cursor: pointer;
  transition: color 0.1s;
  background-color: ${Colors.White};

  &:hover {
    color: ${Colors.Blue50};
  }
`
export const DescriptionSection = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 32px;
`
export const Description = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`
export const Header = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
`
export const PremiumBadge = styled.div`
  width: 218px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 40px;
  padding: 4px 12px 4px 8px;
  background-color: ${Colors.Indigo10};
`
export const PremiumText = styled.div`
  ${FontWeight.SemiBold};
  color: ${Colors.Indigo70};
`
export const PremiumIcon = styled(Icon20.Crown)`
  width: 24px;
  height: 24px;
  color: ${Colors.Indigo70};
`
export const Title = styled.div`
  ${Typography.SmallCaps};
  ${FontWeight.SemiBold};
`
export const SubTitle = styled.div`
  ${Typography.Caption};
  color: ${Colors.Neutral500};
`
export const UnlockFeaturesSection = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`
export const UnlockText = styled.div`
  ${Typography.Caps};
  ${FontWeight.SemiBold};
  color: ${Colors.Neutral80};
`
export const FeaturesContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 12px;
  background-color: ${Colors.Neutral50};
`
export const FeatureItem = styled.div`
  display: flex;
  gap: 4px;
`
export const Feature = styled.div`
  ${Typography.Caption};
`
export const GreenTick = styled(Icon20.Tick)`
  color: ${Colors.Green40};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`
