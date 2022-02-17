import React, { useState } from "react"
import { useGlobalContext } from "../../context"
import Categories from "./Categories"
import "./gallery-styles.css"
import ImageGrid from "./ImageGrid"
import { IContextData } from "../../context-types"

const Gallery = () => {
  const { data } = useGlobalContext()

  const allCategories: string[] = [
    "all",
    ...new Set(data.galleryItems.map((item) => item.category)),
  ]

  const [categories, setCategories] = useState(allCategories)
  const [activeCategoryBtn, setActiveCategoryBtn] = useState<string>("all")
  const [images, setImages] = useState<IContextData["galleryItems"]>(
    data.galleryItems
  )

  const filterItems = (category: string) => {
    if (category === "all") {
      setImages(data.galleryItems)
      setActiveCategoryBtn("all")
      return
    }
    const newItems = data.galleryItems.filter(
      (item) => item.category === category
    )
    setImages(newItems)
    setActiveCategoryBtn(category)
  }

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h3 className="section-title">{data.gallery.title}</h3>
        <p className="section-desc">{data.gallery.desc}</p>
        <Categories
          categories={categories}
          filterItems={filterItems}
          activeCategoryBtn={activeCategoryBtn}
        />
        <ImageGrid items={images} />
      </div>
    </section>
  )
}

export default Gallery
