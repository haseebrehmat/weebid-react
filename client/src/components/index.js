import { lazy } from 'react'

export const AuthActions = lazy(() => import('components/Auth/Actions'))
export const AuthLogo = lazy(() => import('components/Auth/Logo'))
export const Banners = lazy(() => import('components/Banners'))
export const EmailAndPass = lazy(() => import('components/EmailAndPass'))
export const Logout = lazy(() => import('components/Auth/Logout'))
export const Main = lazy(() => import('components/Main'))
export const ProfileImage = lazy(() => import('components/Profile/Image'))
export const ProfilePitches = lazy(() => import('components/Profile/Pitches'))
export const PitchBadge = lazy(() => import('components/PitchBadge'))
