import { IUser } from "../user";

export interface IAuthSignupReqPayload {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export interface IAuthSignupResPayload {
    user: IUser,
    access_token: string
}

export interface IAuthSignupForm {
    name: {
        value: string,
        msg: string,
    },
    email: {
        value: string,
        msg: string,
    },
    password: {
        value: string,
        msg: string
    }
    password_confirmation: {
        value: string,
        msg: string
    }
}