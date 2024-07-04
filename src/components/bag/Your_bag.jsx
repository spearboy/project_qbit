import React from 'react'

const Your_bag = () => {
  return (
      <div className='you_bag'>
        <div className='detail_menu'>
          <h2>멤버가 담은 메뉴</h2>
          <p>담은 메뉴가 없어요</p> 
        </div> 
        <div className='menu_plus'>
          <span>메뉴 추가</span>
          <div className="plus"></div>
        </div>
      </div>
  )
}

export default Your_bag