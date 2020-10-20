import React, { FunctionComponent } from 'react'

import './FormInput.scss'

type TFormInputComponentProps = {
    title: string,
    [key: string]: any
}

export const FormInput: FunctionComponent<TFormInputComponentProps> = ({title, ...props}) => {
    return (
        <div className="group mb-2 mt-4">
            <input {...props} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{title}</label>
        </div>
    )
}