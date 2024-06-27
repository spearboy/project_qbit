import React from 'react'
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdShoppingBasket } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { PiSpeakerHighFill } from "react-icons/pi";

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
          <div className="side">
            <p>추천메뉴</p>
            <p>사이드</p>
          </div>
          <div className="side_icon"><IoIosArrowDropdownCircle /></div>
        </div>
        <div className="notice">
          <PiSpeakerHighFill />
          <p>✨ 영수증 리뷰 작성시 무료로 차슈를 추가해드려요 ✨</p>
          <span>주문 전에 미리 말씀해주시면 영수증을 드립니다. </span>
        </div>
      </div>

  )
}

export default Ksy
