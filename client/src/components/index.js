import { lazy } from 'react'

export const AuthActions = lazy(() => import('components/Auth/Actions'))
export const AuthLogo = lazy(() => import('components/Auth/Logo'))
export const Logout = lazy(() => import('components/Auth/Logout'))
export const EmailAndPass = lazy(() => import('components/EmailAndPass'))
export const Main = lazy(() => import('components/Main'))
