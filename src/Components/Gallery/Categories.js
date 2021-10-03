import React from 'react'

const Categories = ({ categories, filterItems, activeCategoryBtn }) => {
  return (
    <div className='gallery-categories'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type='button'
            className={category === activeCategoryBtn ? 'active' : ''}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
