import * as React from 'react';
import './index.css';

const variants = {
  primary: 'bg-green-500 hover:bg-green-600',
  secondary: 'bg-white hover:bg-slate-100',
  icon: 'text-white hover:text-slate-400'
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
  const classname = `py-2.5 px-4 tracking-widest font-bold ${variants[variant]} ${textSizes[textSize]}`;
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