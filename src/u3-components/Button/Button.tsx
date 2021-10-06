import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
    outline?: any
}

export const Button: React.FC<ButtonPropsType> = ({ className, outline, children, ...restProps }) => {

    return (
        <button className={classNames('button', className, {
            'button--outline': outline,
        })}
            {...restProps}
        >{children}</button>
    )
}