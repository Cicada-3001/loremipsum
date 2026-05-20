import { styled } from "styled-components";
import Colors from "~/shared/colors";
import Typography, { FontWeight } from "~/shared/typography"

export const OnboardingContainer = styled.div`
  background: ${Colors.White};
  padding: 24px 24px 0px;
  width: 100%;
`

export const VisualContainer = styled.div`
  width: 272px;
  background: ${Colors.White};
  height: 174px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: 0px;
`

export const BottomContainer = styled.div`
  background: ${Colors.White};
`

export const ContentContainer = styled.div`
  padding: 16px 0px 24px;
  height: 144px;
`

export const Caption = styled.span`
  ${Typography.Caption};
  ${FontWeight.Regular};
  color: ${Colors.Neutral600};
`

export const Title = styled.p`
  ${Typography.Body};
  ${FontWeight.Medium};
  color: #000;
  margin: 8px 0px 8px;
`

export const Description = styled.span`
  font-size: 15px;
  line-height: 20px;
  ${FontWeight.Regular};
  color: ${Colors.Neutral600};
`

export const ControlsContainer = styled.div`
  padding: 0px 0px 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 0px;
  width: 85px;
  margin-right: 16px;
`

export const Dot = styled.div<{ isActive?: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? Colors.Blue500 : Colors.Neutral150)};
  transition: width 0.2s ease;
  cursor: pointer;
  margin: 4px;
`

export const PrimaryButton = styled.div<{ isLastStep: boolean }>`
  height: 36px;
  padding: 8px 12px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${Colors.Neutral200};
  color: ${({ isLastStep }) => (isLastStep ? Colors.White : Colors.Neutral900)};
  background: ${({ isLastStep }) => (isLastStep ? Colors.Blue500 : Colors.White)};
  height: 100%;
  width: 217px;
  cursor: pointer;
  ${Typography.Caption};
  ${FontWeight.Medium};
`
