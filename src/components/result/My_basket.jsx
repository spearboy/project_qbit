import React from 'react'

const My_basket = () => {
  
  return (
      <div className='mymenu'>
        <h2>내가 담은 메뉴</h2>
        <p style={{ display: 'none' }}>담은 메뉴가 없어요</p>
          <div className='detail'>
            <ul>
              <li>병현 멍청 덮밥</li>
              <li>양념추가(+500원)</li>
              <li>18,500원</li>
            </ul>
          <i className='icon-24-delete'></i>
          </div>
        </div>

  )
}

export default My_basket