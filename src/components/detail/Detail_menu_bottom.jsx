"use client"
import { useState } from 'react';
import Essential from '../common/Essential';
import Select from '../common/Select';

const Detail_menu_bottom = ({ menuItem, onOptionChange }) => {
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
      {menuItem.optionFix && (
        <div className='basic'>
          <ul>
            <li className='bold'>{menuItem.optionFix.type}<Essential /></li>
            <li>최대 {menuItem.optionFix.maxSelect}개 선택</li>
          </ul>
          {menuItem.optionFix.text.map((option, index) => (
            <div className='check' key={index}>
              <ul>
                <li>{option.name}</li>
                <li>{option.price}원</li>
              </ul>
              <input type="radio" name='main_option' onChange={() => handleMainOptionChange(option.price)} />
            </div>
          ))}
        </div>
      )}
      {menuItem.option && (
        <div className='addition'>
          <ul>
            <li className='bold'>{menuItem.option.type}<Select /></li>
            <li>여러 개 선택 가능</li>
          </ul>
          {menuItem.option.text.map((option, index) => (
            <div className='check' key={index}>
              <ul>
                <li>{option.name}</li>
                <li>{option.price}원</li>
              </ul>
              <input type="checkbox" name='sub_option' onChange={(e) => handleSubOptionChange(option.price, e.target.checked)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail_menu_bottom;
