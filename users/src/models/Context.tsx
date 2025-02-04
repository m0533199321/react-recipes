import { createContext, Dispatch } from "react"
import { User } from './userType'
import { Action } from '../components/UserReducer'

export type UserContextType = {
    user: User;
    userDispatch: Dispatch<Action>;
}

export const defaultUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
}

const defaultContextValue: UserContextType = {
    user: defaultUser,
    userDispatch: () => null,
}

export const UserContext = createContext<UserContextType>(defaultContextValue)