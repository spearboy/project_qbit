import React from 'react'
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdShoppingBasket } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const Ksy = () => {
  return (
    <div>
        <div className="header">
          <div className="call"><HiMiniBellAlert />직원호출</div>
          <div className="header_icon"><RiMoneyDollarBoxFill /><MdShoppingBasket /></div>
        </div>
        <div className="store_name">
          <div className="name">
            <h2>토스라멘 역삼점</h2>
            <p>2명이 같이 주문하고 있어요</p>
          </div>
          <div className="table">테이블 : 바 01</div>
        </div>
        <div className="tab">
          <p>추천메뉴</p>
          <p>사이드</p>
        </div>
      </div>

  )
}

export default Ksy
