import React from 'react'

const ImageGrid = ({ items }) => {
  return (
    <div className='gallery-images'>
      {items.map((item) => {
        return (
          <div key={item.id} className='gallery-image-item'>
            <img src={item.img} alt='gallery img' />
          </div>
        )
      })}
    </div>
  )
}

export default ImageGrid
