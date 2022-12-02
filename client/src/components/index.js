import { lazy } from 'react'

export const AuthActions = lazy(() => import('components/Auth/Actions'))
export const AuthLogo = lazy(() => import('components/Auth/Logo'))
export const Banners = lazy(() => import('components/Banners'))
export const Comments = lazy(() => import('components/Comments/index2'))
export const EmailAndPass = lazy(() => import('components/EmailAndPass'))
export const Logout = lazy(() => import('components/Auth/Logout'))
export const Main = lazy(() => import('components/Main'))
export const ProfileImage = lazy(() => import('components/ProfileImage'))
export const ProfilePitches = lazy(() => import('components/Pitches'))
export const PitchBadge = lazy(() => import('components/PitchBadge'))
export const Searchbox = lazy(() => import('components/Searchbox'))
