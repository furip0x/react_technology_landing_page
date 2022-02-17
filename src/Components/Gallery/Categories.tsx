import React from "react"

interface ICategoriesProps {
  categories: string[]
  filterItems: (category: string) => void
  activeCategoryBtn: string
}

const Categories = ({
  categories,
  filterItems,
  activeCategoryBtn,
}: ICategoriesProps) => {
  return (
    <div className="gallery-categories">
      {categories.map((category: string, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className={category === activeCategoryBtn ? "active" : ""}
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
