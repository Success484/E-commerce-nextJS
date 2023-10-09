import React from 'react'
import Shoes from './Shoes'

export const shoes = [
    {
      "id": 1,
      "name": "Classic Leather Loafers",
      "price": "1500",
      "description": "Classic leather loafers for a timeless look.",
      "image": "/shoe4.jpg",
      "class": "shoe"
    },
    {
      "id": 2,
      "name": "Sneakers for Active Lifestyle",
      "price": "1200",
      "description": "Comfortable sneakers for an active lifestyle.",
      "image": "/shoe5.jpg",
      "class": "shoe"
    },
    {
      "id": 3,
      "name": "Formal Oxford Shoes",
      "price": "1800",
      "description": "Formal Oxford shoes for elegant occasions.",
      "image": "/shoe6.jpg",
      "class": "shoe"
    },
    {
      "id": 4,
      "name": "Casual Canvas Slip-Ons",
      "price": "900",
      "description": "Casual canvas slip-on shoes for everyday comfort.",
      "image": "/shoe7.jpg",
      "class": "shoe"
    },
    {
      "id": 5,
      "name": "Running and Training Shoes",
      "price": "1400",
      "description": "Running and training shoes for fitness enthusiasts.",
      "image": "/shoe8.jpg",
      "class": "shoe"
    },
    {
      "id": 6,
      "name": "High Heel Pumps",
      "price": "1600",
      "description": "High heel pumps for a sophisticated look.",
      "image": "/shoe3.png",
      "class": "shoe"
    },
    {
      "id": 7,
      "name": "Outdoor Hiking Boots",
      "price": "2000",
      "description": "Sturdy outdoor hiking boots for adventures.",
      "image": "/shoe2.png",
      "class": "shoe"
    },
    {
      "id": 8,
      "name": "Slip-Resistant Work Boots",
      "price": "1700",
      "description": "Slip-resistant work boots for safety and comfort.",
      "image": "/shoe1.png",
      "class": "shoe"
    }
  ]

export default function page() {
  return (
    <div>
        <Shoes />
    </div>
  )
}
