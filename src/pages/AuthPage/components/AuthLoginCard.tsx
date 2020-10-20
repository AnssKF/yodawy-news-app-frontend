import React, { FunctionComponent } from 'react'
import { Card, Button } from 'react-bootstrap'

import { FormInput } from '../../../core/components/FormInput/FormInput'
import './AuthPage.scss'

type TAuthLoginCardComponentProps = {
}

export const AuthLoginCardComponent: FunctionComponent<TAuthLoginCardComponentProps> = () => {
    return (
        <Card className="c__card shadow p-3 rounded-0 border-0">

            <div className="">
                <div className="text-center font-weight-lighter p-3 c__card__title mb-3">
                    LOGIN
                </div>
                <div>
                    <FormInput title="Email" type="text" required />
                    <FormInput title="Password" type="password" required />
                    <Button variant="outline-primary" block>Submit</Button>
                </div>
            </div>

        </Card>
    )
}