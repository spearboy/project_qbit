import React from 'react'
import Essential from '../common/Essential'
import Select from '../common/Select'


const Detail_menu = () => {
    return (
        <div className='detail_menu_bottom'>
            <div className='basic'>
                <ul>
                    <li className='bold'>사이즈<Essential /></li>
                    <li>최대 1개 선택</li>
                </ul>
                <div className='check'>
                    <ul>
                        <li>기본</li>
                        <li>+0원</li>
                    </ul>
                    <input type="checkbox" class="custom-checkbox fixed-checkbox" checked></input>
                </div>
                <div className='check'>
                    <ul>
                        <li>밥 적게(돈카츠는 정사이즈)</li>
                        <li>+0원</li>
                    </ul>
                    <input type="checkbox" class="custom-checkbox"></input>
                </div>
                <div className='check'>
                    <ul>
                        <li>곱빼기(밥2배, 돈카츠 1/2개 추가)</li>
                        <li>8,000원</li>
                    </ul>
                    <input type="checkbox" class="custom-checkbox"></input>
                </div>
            </div>
            <div className='addition'>
                <ul>
                    <li className='bold'>양념<Select /></li>
                    <li>최대 1개 선택</li>
                </ul>
                <div className='check'>
                    <ul>
                        <li>양념 추가</li>
                        <li>+500원</li>
                    </ul>
                    <input type="checkbox" class="custom-checkbox fixed-checkbox" checked></input>
                </div>
                <div className='check'>
                    <ul>
                        <li>양념 빼기</li>
                        <li>+0원</li>
                    </ul>
                    <input type="checkbox" class="custom-checkbox"></input>
                </div>
            </div>
        </div>
    )
}

export default Detail_menu