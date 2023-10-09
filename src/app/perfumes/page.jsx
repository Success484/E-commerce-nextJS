import React from 'react'
import Perfumes from './Perfumes'

export const perfume = [
    {
      "id": 1,
      "name": "Eau de Parfum - Floral Delight",
      "price": "1800",
      "description": "A floral delight with a captivating fragrance.",
      "image": "/perfume4.jpg",
      "class": "perfume"
    },
    {
      "id": 2,
      "name": "Citrus Zest Eau de Toilette",
      "price": "1500",
      "description": "An invigorating citrus scent for a fresh feeling.",
      "image": "/perfume5.jpg",
      "class": "perfume"
    },
    {
      "id": 3,
      "name": "Oud Wood Perfume Oil",
      "price": "2100",
      "description": "A rich and luxurious Oud Wood perfume oil.",
      "image": "/perfume6.jpg",
      "class": "perfume"
    },
    {
      "id": 4,
      "name": "Musk Sensation Eau de Parfum",
      "price": "1900",
      "description": "Musk sensation with an enchanting fragrance.",
      "image": "/perfume3.png",
      "class": "perfume"
    },
    {
      "id": 5,
      "name": "Vanilla Dreams Perfume Spray",
      "price": "1700",
      "description": "A sweet and dreamy vanilla perfume spray.",
      "image": "/perfume1.png",
      "class": "perfume"
    },
    {
      "id": 6,
      "name": "Spicy Amber Eau de Parfum",
      "price": "2200",
      "description": "A spicy amber scent for a bold and exotic aura.",
      "image": "/perfume7.jpg",
      "class": "perfume"
    },
    {
      "id": 7,
      "name": "Fresh Ocean Breeze Cologne",
      "price": "1600",
      "description": "A fresh ocean breeze cologne for a clean and crisp scent.",
      "image": "/perfume8.jpg",
      "class": "perfume"
    },
    {
      "id": 8,
      "name": "Sensual Rose Perfume Mist",
      "price": "2000",
      "description": "A sensual rose perfume mist with a romantic allure.",
      "image": "/perfume2.png",
      "class": "perfume"
    }
  ]

export default function page() {
  return (
    <div>
        <Perfumes />
    </div>
  )
}
