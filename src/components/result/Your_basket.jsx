import React from 'react'

const Your_basket = () => {
  return (
      <div className='youmenu'>
        <div className='detail_menu'  style={{ display: 'none' }}>
          <h2>멤버가 담은 메뉴</h2>
          <p>담은 메뉴가 없어요</p> 
        </div> 
        <div className='detail_menuplus'>
            <ul>
              <li>병현 멍청 덮밥</li>
              <li>기본(+0원), 양념추가(+500원)</li>
              <li>18,500원</li>
            </ul>
            <ul>
              <li>큐빗 돈코츠 라멘</li>
              <li>기본(+0원)</li>
              <li>10,000원</li>
            </ul>
            <ul>
              <li>큐빗 마제소바</li>
              <li>기본(+0원)</li>
              <li>9,000원</li>
            </ul>
            <ul>
              <li>지나가 좋아하는 교자</li>
              <li>6,000원</li>
            </ul>
        </div>
      </div>
  )
}

export default Your_basket