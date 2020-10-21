import React, { FunctionComponent, useState, FormEvent } from 'react'
import { Card, Button } from 'react-bootstrap'

import { FormInput } from '../../../core/components/FormInput/FormInput';
import { IAuthSignupForm, IAuthSignupReqPayload } from '../../../core/interfaces/auth/signup';
import { K_EMAIL_REGEX, K_PASSWORD_REGEX, K_NAME_REGEX } from '../../../core/constants/regex';
import { PerformSignup } from '../../../core/services/auth';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../core/services/auth/store';

type TAuthRegisterCardComponentProps = {
}

const SIGNUPFORM_INITIALSTATE: IAuthSignupForm = {
    name: {
        value: '',
        msg: '',
    },
    email: {
        value: '',
        msg: '',
    },
    password: {
        value: '',
        msg: ''
    },
    password_confirmation: {
        value: '',
        msg: ''
    }
}

export const AuthRegisterCardComponent: FunctionComponent<TAuthRegisterCardComponentProps> = () => {

    const routeHistory = useHistory();
    const [authState, setAuthState] = useAuth()
    const [signupForm, setSignupForm] = useState<IAuthSignupForm>(SIGNUPFORM_INITIALSTATE)

    const validate = (field: 'name' | 'email' | 'password' | 'password_confirmation', value: string) => {
        let error: string = '';

        switch (field) {
            case 'name':
                if (!value || !value.match(K_NAME_REGEX)) error = 'Please enter a valid name.'
                break;
            case 'email':
                if (!value || !value.match(K_EMAIL_REGEX)) error = 'Please Enter a valid email address.'
                break;
            case 'password':
                if (!value || !value.match(K_PASSWORD_REGEX)) error = 'Please should be at least 8 charachters with capital and small letters.'
                break;
            case 'password_confirmation':
                if (!value || value !== signupForm.password.value) error = 'Password Confirmation doen\'t match.'
                break;
            default:
                error = ''
                break;
        }

        setSignupForm((oldState) => {
            let newState = { ...oldState }
            newState[field].value = value
            newState[field].msg = error
            return newState
        })
    }

    const isValid = () => {
        return signupForm.email.value && !signupForm.email.msg &&
            signupForm.password.value && !signupForm.password.msg &&
            signupForm.name.value && !signupForm.name.msg &&
            signupForm.password_confirmation.value && !signupForm.password_confirmation.msg;
    }

    const navigate = (route: string) => routeHistory.push(route)

    const onSubmit = async () => {
        const payload: IAuthSignupReqPayload = {
            name: signupForm.name.value,
            email: signupForm.email.value,
            password: signupForm.password.value,
            password_confirmation: signupForm.password_confirmation.value,
        }

        try {
            const res = await PerformSignup(payload)
            setAuthState(res)
            setSignupForm({
                name: {
                    value: '',
                    msg: '',
                },
                email: {
                    value: '',
                    msg: '',
                },
                password: {
                    value: '',
                    msg: ''
                },
                password_confirmation: {
                    value: '',
                    msg: ''
                }
            });
            navigate('/headlines')
        }catch(e) {
            console.log('LOGIN FORM E');
            console.log(e);
        }
    }

    return (
        <Card className="c__card shadow p-3 rounded-0 border-0">

            <div className="">
                <div className="text-center font-weight-lighter p-3 c__card__title mb-3">
                    Register
                </div>
                <div>
                    <FormInput
                        title="Name"
                        type="text"
                        required
                        value={signupForm.name.value}
                        onChange={($e: FormEvent<HTMLInputElement>) => validate('name', $e.currentTarget.value)} />
                    {
                        !!signupForm.name.msg ?
                            <small className="text-danger">{signupForm.name.msg}</small>
                            : ''
                    }
                    <FormInput
                        title="Email"
                        type="text"
                        required
                        value={signupForm.email.value}
                        onChange={($e: FormEvent<HTMLInputElement>) => validate('email', $e.currentTarget.value)} />
                    {
                        !!signupForm.email.msg ?
                            <small className="text-danger">{signupForm.email.msg}</small>
                            : ''
                    }
                    <FormInput
                        title="Password"
                        type="password"
                        required
                        value={signupForm.password.value}
                        onChange={($e: FormEvent<HTMLInputElement>) => validate('password', $e.currentTarget.value)} />
                    {
                        !!signupForm.password.msg ?
                            <small className="text-danger">{signupForm.password.msg}</small>
                            : ''
                    }
                    <FormInput
                        title="Confirm Password"
                        type="password"
                        required
                        value={signupForm.password_confirmation.value}
                        onChange={($e: FormEvent<HTMLInputElement>) => validate('password_confirmation', $e.currentTarget.value)} />
                    {
                        !!signupForm.password_confirmation.msg ?
                            <small className="text-danger">{signupForm.password_confirmation.msg}</small>
                            : ''
                    }
                    <Button 
                        variant="outline-primary" 
                        block
                        disabled={!isValid()}
                        onClick={onSubmit}>Submit</Button>

                    <Button 
                        variant="link"
                        block
                        onClick={()=> navigate('/auth/login') }>Or Login</Button>
                </div>
            </div>

        </Card>
    )
}