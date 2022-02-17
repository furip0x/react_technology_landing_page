import React from "react"

interface IImageGridProps {
  items: {
    id: number
    category: string
    img: string
  }[]
}

const ImageGrid: React.FC<IImageGridProps> = ({ items }) => {
  return (
    <div className="gallery-images">
      {items.map((item) => {
        return (
          <div key={item.id} className="gallery-image-item">
            <img src={item.img} alt="gallery img" />
          </div>
        )
      })}
    </div>
  )
}

export default ImageGrid
