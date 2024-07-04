"use client"
import Image from 'next/image';
import React from 'react';
import iconAdd from '@/assets/images/icons/ic24_add.svg';
import iconRightArrow from '@/assets/images/icons/ic24_right.svg';

const Button = ({ onClick, children, className, hasIcon, itemQuantity }) => {
  const iconMap = {
    'arrow-right': iconRightArrow,
    'add': iconAdd,
  };

  const iconSrc = hasIcon ? iconMap[hasIcon] : '';

  return (
    <button onClick={onClick} className={className}>
      {itemQuantity && (
        <div className='button__count__box'>{itemQuantity}</div>
      )}
      {children}
      {hasIcon && iconSrc && (
        <Image
          src={iconSrc}
          width={16}
          height={16}
          alt={hasIcon}
        />
      )}
    </button>
  );
};

export default Button;
