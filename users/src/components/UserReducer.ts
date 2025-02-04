import { User } from "../models/userType"

export type Action = {
    type: 'EDIT_USER' | 'CREATE_USER' |'LOGIN_IN_USER'| 'GET_USER' | 'DELETE_USER'
    data: Partial<User>
}

export default (state: User, action: Action): User => {
    switch (action.type) {
        case 'CREATE_USER':
            const user = action.data
            return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email || '',
                password: user.password || '',
                address: user.address,
                phone: user.phone,
            }
        case 'EDIT_USER':
            return {
                id: action.data.id,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                email: action.data.email || '',
                password: action.data.password || '',
                address: action.data.address,
                phone: action.data.phone
            }
        case 'LOGIN_IN_USER':
            return {
                id: action.data.id,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                email: action.data.email || '',
                password: action.data.password || '',
                address: action.data.address,
                phone: action.data.phone
            }
        default:
            return state
    }
}
