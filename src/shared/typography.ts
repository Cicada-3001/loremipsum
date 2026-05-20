import { STATUSES } from './constants'

export type Optional<T> = T | null | undefined

export interface IJob {
  company: string
  title: string
  link: string
  location: string
  notes: string
  status: string
  logo: string
  description: string
}
export interface IJobCard {
  id: number
  status: STATUSES
}

export type User = {
  firstName: string
  lastName: string
  avatar?: string | null
  jwt: string
  hasPremium: boolean
  jwtExpiresAt?: string
  baseDomain: string
  isRioUser?: boolean
  token: string
  refreshToken: string
  autoApplyEnabled?: boolean
  autoApplyCreditsCount?: number
  autoApplyCreditsUsed?: number
  billingInfo?: UserBillingInfo
}

export enum UserType {
  /** no premium features */
  free = 'free',
  /** an user earlier was a premium and now a free user */
  postPremium = 'post_premium',
  /** premium features will expire on `UserBillingInfo['premiumEndsAt']` */
  premium = 'premium',
}
export interface UserBillingInfo {
  subscriptionProvider: string
  upgradeUrl: string
  onTrial: boolean
  cancelledAt: Optional<string>
  premiumEndsAt: Optional<string>
  nextPaymentAt: Optional<string>
  userType: UserType
  alreadyGotDiscountDuringSubCancellation: boolean
  alreadyGotFreePausePeriodDuringCancellation: boolean
  recurringAmount?: number
}
export type IResumeItemResponse = Pick<
  IResume,
  | 'type'
  | 'displayName'
  | 'downloadTxtUrl'
  | 'renderingToken'
  | 'createdAt'
  | 'updatedAt'
  | 'resumeScore'
  | 'averageScore'
  | 'responseApiScore'
  | 'employerName'
  | 'jobTitle'
  | 'averageScore'
  | 'id'
  | 'secureId'
  | 'name'
  | 'userId'
  | 'version'
  | 'template'
>

export interface ICoverLetter {
  type: DocumentType
  renderingToken: string
  updatedAt: string
  createdAt: string
  id: number
  name: string
  locale: string
  color: string
  template: string
  company: string
  address: string
  city: string | null
  phoneNumber: string | null
  email: string
  senderName: string
  companyRecipient: string
  content: string
  applyingPosition: string
  userId: number
  version: string
  aiGenerated: boolean
  openCl: boolean
  sourceResumeId: number | null
}
export interface IResume {
  type: DocumentType
  displayName: string
  downloadTxtUrl: string
  renderingToken: string
  updatedAt: string
  createdAt: string
  resumeScore: number
  averageScore: number | null
  responseApiScore: number | null
  jobTitle: string
  id: number
  secureId: string
  name: string
  userId: number
  version: string
  template: string
  position: string
  // Data that will be auto filled in job applications
  employerName: string | null
  firstName: string
  lastName: string
  phoneNumber: string | null
  countryName: string
  nationality: string | null
  email: string | null
  gender: string | null
  married: boolean
  birthDate: string | null
  city: string | null
  address: string | null
  postalCode: string | null
  linkedin: string | null
}

export type AutofillPayload = {
  resume: IResume
  user: User
  resumeFileDataUrl: string | ArrayBuffer | null
  coverLetterDataUrl: string | ArrayBuffer | null
}

export type ResumeFieldMapping = {
  employerName: string[]
  name: string[]
  firstName: string[]
  lastName: string[]
  phoneNumber: string[]
  countryName: string[]
  nationality: string[]
  email: string[]
  gender: string[]
  married: string[]
  birthDate: string[]
  city: string[]
  address: string[]
  postalCode: string[]
  linkedin: string[]
  // These are for file uploads
  resume: string[]
  coverLetter: string[]
}

export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  registeredAt: string
  socialAccount: boolean
  hasPremiumFeatures: boolean
  hasPremiumPlusFeatures: boolean
  autoApplyPlan?: AutoApplyPlan | null
  autoApplyPlanExpiresAt: string | null
  isRioUser: boolean
  scopes: {
    autoApply: boolean | { creditCount: number; creditCountUsed: number }
    premium: boolean
    resumeDistribution: boolean
  }
  billingInfo: UserBillingInfo
  profilePicture: {
    transform: string | null
    largeUrl: string | null
    thumbUrl: string | null
    mediumUrl: string | null
    originalUrl: string | null
    blank: boolean
  }
}

export enum AutoApplyPlan {
  FREE = 'free',
  PREMIUM = 'premium',
}

export type UserAccountResponse = {
  jwt: string
  jwtExpiresAt: string
  success: boolean
  user: IUser
}

export enum DocumentType {
  RESUME = 'resume',
  COVER_LETTER = 'cover_letter',
}

export type JobBoardResponse = {
  success: boolean
  jobCards: IJobCard[]
}

export type JobBoardPost = Omit<IJob, 'notes' | 'logo' | 'status'> | undefined
