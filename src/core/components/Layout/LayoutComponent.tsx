import React, { FunctionComponent } from 'react'
import { NavBarComponent } from '../NavBarComponent/NavBarComponent'

import './LayoutComponent.scss'

type TLayoutComponentProps = {
}

export const LayoutComponent: FunctionComponent<TLayoutComponentProps> = ({children}) => {
    return (
        <main className="body">

            <div className="d-flex flex-column vh-100">
                <div>
                    <NavBarComponent />
                </div>
                <div className="flex-grow-1">
                    {children}
                </div>
            </div>

        </main>
    )
}