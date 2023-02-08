import React from "react";
import styles from '../components/style.module.css';
import {getClasses} from './getClasses'

const Button = ({variant, img, text })=>{
    const ButtonTypes = {
        red: 'red',
        image: 'image',
        lime: 'lime',
        blue: 'blue', 
    }
    return(
        
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${ButtonTypes[variant]}`]]
        )}>
            <img src={img} alt='/' className={variant === 'image' ? styles.img : styles.hide} />
            
            {text}
        </button>
    );
};
export default Button;