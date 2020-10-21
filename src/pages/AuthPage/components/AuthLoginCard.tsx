import React, { FunctionComponent, useState, FormEvent } from 'react'
import { Card, Button } from 'react-bootstrap'

import { FormInput } from '../../../core/components/FormInput/FormInput';
import { IAuthLoginForm, IAuthLoginReqPayload } from '../../../core/interfaces/auth/login';
import { K_EMAIL_REGEX, K_PASSWORD_REGEX } from '../../../core/constants/regex';

import { PerformLogin } from '../../../core/services/auth'
import { useAuth } from '../../../core/services/auth/store';
import { useHistory } from 'react-router-dom';

type TAuthLoginCardComponentProps = {
}

const LOGINFORM_INITIALSTATE: IAuthLoginForm = {
    email: {
        value: '',
        msg: '',
    },
    password: {
        value: '',
        msg: ''
    }
}

export const AuthLoginCardComponent: FunctionComponent<TAuthLoginCardComponentProps> = () => {

    const routeHistory = useHistory();
    const [authState, setAuthState] = useAuth()
    const [loginForm, setLoginForm] = useState<IAuthLoginForm>(LOGINFORM_INITIALSTATE)

    const validate = (field: 'email' | 'password', value: string) => {
        let error: string = '';

        switch (field) {
            case 'email':
                if (!value || !value.match(K_EMAIL_REGEX)) error = 'Please Enter a valid email address.'
                break;
            case 'password':
                if (!value || !value.match(K_PASSWORD_REGEX)) error = 'Please should be at least 8 charachters.'
                break;
            default:
                error = ''
                break;
        }

        setLoginForm((oldState) => {
            let newState = { ...oldState }
            newState[field].value = value
            newState[field].msg = error
            return newState
        })
    }

    const isValid = () => {
        return loginForm.email.value && !loginForm.email.msg && loginForm.password.value && !loginForm.password.msg
    }
    const navigate = (route: string) => routeHistory.push(route)

    const onSubmit = async () => {
        const payload: IAuthLoginReqPayload = {
            email: loginForm.email.value,
            password: loginForm.password.value
        }

        try {
            const res = await PerformLogin(payload)
            setAuthState(res)
            setLoginForm({
                email: {
                    value: '',
                    msg: '',
                },
                password: {
                    value: '',
                    msg: ''
                }
            });
            navigate('../../headlines')
        }catch(e){
            setLoginForm((oldState) => {
                let newState = { ...oldState }
                newState['email'].msg = e.message
                return newState
            })
        }
    }


    return (
        <Card className="c__card shadow p-3 rounded-0 border-0">

            <div className="">
                <div className="text-center font-weight-lighter p-3 c__card__title mb-3">
                    LOGIN
                </div>
                <div>
                    <FormInput
                        title="Email"
                        type="text"
                        required
                        value={loginForm.email.value}
                        onChange={($e: FormEvent<HTMLInputElement>) => validate('email', $e.currentTarget.value)} />
                    {
                        !!loginForm.email.msg ?
                            <small className="text-danger">{loginForm.email.msg}</small>
                            : ''
                    }
                    <FormInput
                        title="Password"
                        type="password"
                        required
                        value={loginForm.password.value}
                        onChange={($e: FormEvent<HTMLInputElement>) => validate('password', $e.currentTarget.value)} />
                    {
                        !!loginForm.password.msg ?
                            <small className="text-danger">{loginForm.password.msg}</small>
                            : ''
                    }
                    <Button
                        variant="outline-primary"
                        block
                        disabled={!isValid()}
                        onClick={onSubmit}>Login</Button>

                    <Button 
                        variant="link"
                        block
                        onClick={()=> navigate('/auth/signup') }>Or Signup</Button>
                </div>
            </div>

        </Card>
    )
}