import React, { FunctionComponent, useState, FormEvent } from 'react'
import { Card, Button } from 'react-bootstrap'

import { FormInput } from '../../../core/components/FormInput/FormInput';
import { IAuthLoginForm, IAuthLoginReqPayload } from '../../../core/interfaces/auth/login';
import { K_EMAIL_REGEX, K_PASSWORD_REGEX } from '../../../core/constants/regex';

import { PerformLogin } from '../../../core/services/auth'

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

    const onSubmit = async () => {
        const payload: IAuthLoginReqPayload = {
            email: loginForm.email.value,
            password: loginForm.password.value
        }

        const res = await PerformLogin(payload)
        console.log(res);
        setLoginForm(LOGINFORM_INITIALSTATE);
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
                </div>
            </div>

        </Card>
    )
}