"use client"

import React from 'react';
import Quantity from '../common/Quantity';
import { useRouter } from 'next/navigation';
import { useBag } from '@/context/BagContext';

const My_bag = () => {
  const { bag, removeItem } = useBag();
  const router = useRouter();

  const handleDelete = (id) => {
    removeItem(id);
  };

  const handleOptionChange = (id) => {
    router.push(`/detail?id=${id}`);
  };

  return (
    <div className='my_bag'>
      <div className='detail_menu'>
        <h2>내가 담은 메뉴</h2>
        {bag.items.length === 0 ? (
          <p>담은 메뉴가 없어요</p>
        ) : (
          bag.items.map((item) => (
            <div className='detail' key={item.id}>
              <ul>
                <li>{item.name}</li>
                {item.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
                <li>{item.price * item.quantity}원</li>
              </ul>
              <i className='icon-24-delete' onClick={() => handleDelete(item.id)}></i>
              <div className='btnQuan'>
                <button onClick={() => handleOptionChange(item.id)}>옵션변경</button>
                <Quantity />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default My_bag;
