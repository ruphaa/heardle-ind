import * as React from 'react';
import './index.css';

const variants = {
  primary: 'bg-green-500 hover:bg-green-600',
  secondary: 'bg-white hover:bg-slate-100',
  icon: 'text-white'
}

const textSizes = {
  small: 'text-base',
  medium: 'text-2xl',
  large: 'text-4xl'
}

const Button = ({
  variant = 'primary',
  textSize = 'medium',
  onClick,
  children,
}) => {
  const classname = `p-2 text-sm tracking-widest font-bold ${variants[variant]} ${textSizes[textSize]}`;
  return (
    <button 
        className={classname}
        onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;