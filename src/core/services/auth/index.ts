import { IAuthLoginReqPayload, IAuthLoginResPayload } from "../../interfaces/auth/login";
import axios from 'axios'
import { K_AUTH_API } from "../../constants/apis";
import { IAuthSignupReqPayload, IAuthSignupResPayload } from "../../interfaces/auth/signup";

export const PerformLogin = async (payload: IAuthLoginReqPayload): Promise<IAuthLoginResPayload> => {
    try {
        const res = (await axios.post<IAuthLoginResPayload>(K_AUTH_API.LOGIN(), payload)).data
        return res
    }catch(e) {
        throw e.response.data;
    }
}

export const PerformSignup = async (payload: IAuthSignupReqPayload): Promise<IAuthSignupResPayload> => {
    try {
        const res = (await axios.post<IAuthSignupResPayload>(K_AUTH_API.SIGNUP(), payload)).data
        return res
    }catch(e) {
        throw e.response.data;
    }
}

