import { CAREER_IO_APP_DOMAIN, RESUME_IO_DOMAIN } from '~/shared/constants'
import { User } from '~/shared/types'

export const getUserBaseDomain = (user: User | null) => {
  return user?.baseDomain
    ? user.baseDomain
    : user?.isRioUser
    ? RESUME_IO_DOMAIN
    : CAREER_IO_APP_DOMAIN
}
