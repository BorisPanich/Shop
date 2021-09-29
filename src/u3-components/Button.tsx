import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
    outline?: any
}

export const Button: React.FC<ButtonPropsType> = ({ onClick, className, outline, children }) => {

    return (
        <button onClick={() => {
        }}
            className={classNames('button', className, {
                'button--outline': outline,
            })}
        >{children}</button>
    )
}