import React from 'react'

const My_basket = () => {
  
  return (
      <div className='mymenu'>
        <div className='detail_menu' style={{ display: 'none' }}>
          <h2>내가 담은 메뉴</h2>
          <p>담은 메뉴가 없어요</p>
          <div className='detail' style={{ display: 'none' }}>
            <ul>
              <li>병현 멍청 덮밥</li>
              <li>양념추가(+500원)</li>
              <li>18,500원</li>
            </ul>
          <i className='icon-24-delete'></i>
          </div>
        </div>
        <div className='coin'>
          <ul>
            <li>총 <span>4</span>개</li>
            <li>43,500원</li>
            <li>결제는 카운터에서 해주세요</li>
          </ul>
        </div>
      </div>

  )
}

export default My_basket