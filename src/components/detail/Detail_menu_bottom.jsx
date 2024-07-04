import { useState } from 'react';
import Essential from '../common/Essential';
import Select from '../common/Select';

const Detail_menu_bottom = ({ onOptionChange }) => {
  const [selectedMainOption, setSelectedMainOption] = useState(0);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);

  const handleMainOptionChange = (optionPrice) => {
    setSelectedMainOption(optionPrice);
    const totalSubOptionsPrice = selectedSubOptions.reduce((sum, price) => sum + price, 0);
    onOptionChange(optionPrice, totalSubOptionsPrice);
  };

  const handleSubOptionChange = (optionPrice, checked) => {
    let newSubOptions;
    if (checked) {
      newSubOptions = [...selectedSubOptions, optionPrice];
    } else {
      newSubOptions = selectedSubOptions.filter(price => price !== optionPrice);
    }
    setSelectedSubOptions(newSubOptions);
    const totalSubOptionsPrice = newSubOptions.reduce((sum, price) => sum + price, 0);
    onOptionChange(selectedMainOption, totalSubOptionsPrice);
  };

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
          <input type="radio" name='main_option' onChange={() => handleMainOptionChange(0)} />
        </div>
        <div className='check'>
          <ul>
            <li>밥 적게(돈카츠는 정사이즈)</li>
            <li>+0원</li>
          </ul>
          <input type="radio" name='main_option' onChange={() => handleMainOptionChange(0)} />
        </div>
        <div className='check'>
          <ul>
            <li>곱빼기(밥2배, 돈카츠 1/2개 추가)</li>
            <li>8,000원</li>
          </ul>
          <input type="radio" name='main_option' onChange={() => handleMainOptionChange(8000)} />
        </div>
      </div>
      <div className='addition'>
        <ul>
          <li className='bold'>양념<Select /></li>
          <li>여러 개 선택 가능</li>
        </ul>
        <div className='check'>
          <ul>
            <li>양념 추가</li>
            <li>+500원</li>
          </ul>
          <input type="checkbox" name='sub_option' onChange={(e) => handleSubOptionChange(500, e.target.checked)} />
        </div>
        <div className='check'>
          <ul>
            <li>양념 빼기</li>
            <li>+0원</li>
          </ul>
          <input type="checkbox" name='sub_option' onChange={(e) => handleSubOptionChange(0, e.target.checked)} />
        </div>
        {/* 다른 서브 옵션들도 추가할 수 있습니다. */}
      </div>
    </div>
  );
}

export default Detail_menu_bottom;
