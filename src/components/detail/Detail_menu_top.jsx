import React from 'react'
import Quantity from '../common/Quantity'


const Detail_menu = () => {
    return (

        <div className='detail_menu_top'>
            <h2>병현 멍청 덮밥</h2>
            <p>큐빗 라멘에서 선보이는 신메뉴 가츠동입니다! 제주산 흑돼지 특등심을 수비드 조리 한 후 빠르게 튀겨냈습니다.</p>
            <div className='btn'>
                <p>18,000원</p>
                <Quantity />
            </div>
        </div>
    
    )
}

export default Detail_menu