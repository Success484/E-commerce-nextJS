import React from 'react'
import Glass from './Glass'

export const glass = [
    {
      "id": 1,
      "name": "Classic Round Frame Glasses",
      "price": "1,200",
      "description": "Timeless round frame glasses for a sophisticated look.",
      "image": "/glass1.png",
      "class": "glass"
    },
    {
      "id": 2,
      "name": "Rectangle Reading Glasses",
      "price": "800",
      "description": "Rectangle reading glasses for clear vision and comfort.",
      "image": "/glass2.png",
      "class": "glass"
    },
    {
      "id": 3,
      "name": "Fashionable Cat-Eye Glasses",
      "price": "1,500",
      "description": "Cat-eye glasses for a trendy and stylish appearance.",
      "image": "/glass3.png",
      "class": "glass"
    },
    {
      "id": 4,
      "name": "Metallic Aviator Glasses",
      "price": "1,800",
      "description": "Metallic aviator glasses for a classic and iconic look.",
      "image": "/glass4.png",
      "class": "glass"
    },
    {
      "id": 5,
      "name": "Sporty Wraparound Sunglasses",
      "price": "2,000",
      "description": "Sporty wraparound sunglasses for outdoor activities.",
      "image": "/glass5.png",
      "class": "glass"
    },
    {
      "id": 6,
      "name": "Retro Square Frame Glasses",
      "price": "1,300",
      "description": "Retro square frame glasses for a vintage-inspired look.",
      "image": "/glass6.png",
      "class": "glass"
    },
    {
      "id": 7,
      "name": "Designer Oversized Glasses",
      "price": "2,500",
      "description": "Designer oversized glasses for a bold and fashionable statement.",
      "image": "/glass7.png",
      "class": "glass"
    },
    {
      "id": 8,
      "name": "Wooden Frame Sunglasses",
      "price": "1,700",
      "description": "Wooden frame sunglasses for a natural and eco-friendly style.",
      "image": "/glass8.png",
      "class": "glass"
    }
  ]

export default function page() {
  return (
    <div>
        <Glass />
    </div>
  )
}
