import React from 'react';
import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div className='img_menu'>
        <Image 
        src="/img/detail_img.png" 
        alt="디테일이미지" 
        width={375} 
        height={240}/> 
    </div>
  )
}

export default ImageComponent;