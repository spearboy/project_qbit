"use client";
import React from 'react';
import { useBag } from '@/context/BagContext';

const Your_bag = () => {
  const { otherBags } = useBag();

  return (
    <div className='you_bag'>
      <div className='detail_menu'>
        <h2>멤버가 담은 메뉴</h2>
        {otherBags.length === 0 ? (
          <p>담은 메뉴가 없어요</p>
        ) : (
          otherBags.map((bag, bagIndex) => (
            bag.items.map((item, itemIndex) => (
              <div className='detail' key={`${bagIndex}-${itemIndex}`}>
                <ul>
                  <li>{item.name}</li>
                  {item.options.map((option, optionIndex) => (
                    <li key={optionIndex}>{option.name} ({option.price}원)</li>
                  ))}
                  <li>{item.price * item.quantity}원</li>
                </ul>
              </div>
            ))
          ))
        )}
      </div>
      <div className='menu_plus'>
        <span>메뉴 추가</span>
        <div className="plus"></div>
      </div>
    </div>
  );
}

export default Your_bag;
