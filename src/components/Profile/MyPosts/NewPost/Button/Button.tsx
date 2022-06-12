import React from 'react';
import s from './Button.module.css';


type ButtonPropsType = {
    value: string
}


const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button type="submit" className={s.button}>{props.value}</button>
        </div>
    );
};

export default Button;