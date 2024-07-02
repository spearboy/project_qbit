import React from 'react'


const Detail_menu = () => {
    return (
        <div className='detail_menu_bottom'>
            <div className='basic'>
                <ul>
                    <li>사이즈</li>
                    <li>최대 1개 선택</li>
                </ul>
                <ul>
                    <li>기본</li>
                    <li>+0원</li>
                </ul>
                <ul>
                    <li>밥 적게(돈카츠는 정사이즈)</li>
                    <li>+0원</li>
                </ul>
                <ul>
                    <li>곱빼기(밥2배, 돈카츠 1/2개 추가)</li>
                    <li>8,000원</li>
                </ul>
            </div>
            <div className='addition'>
                <ul>
                    <li>양념</li>
                    <li>최대 1개 선택</li>
                </ul>
                <ul>
                    <li>양념 추가</li>
                    <li>+500원</li>
                </ul>
                <ul>
                    <li>양념 빼기</li>
                    <li>+0원</li>
                </ul>
            </div>
        </div>
    )
}

export default Detail_menu