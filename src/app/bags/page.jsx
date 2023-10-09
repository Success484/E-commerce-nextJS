import React from 'react'
import Bag from './Bag'


export const bag = [
    {
      "id": 1,
      "name": "Leather Tote Bag",
      "price": "1200",
      "description": "A classic leather tote bag for everyday style.",
      "image": "/bag8.jpg",
      "class": "bag"
    },
    {
      "id": 2,
      "name": "Canvas Shoulder Bag",
      "price": "850",
      "description": "A versatile canvas shoulder bag for casual outings.",
      "image": "/bag7.jpg",
      "class": "bag"
    },
    {
      "id": 3,
      "name": "Designer Clutch",
      "price": "1500",
      "description": "A designer clutch for special occasions and events.",
      "image": "/bag6.jpg",
      "class": "bag"
    },
    {
      "id": 4,
      "name": "Crossbody Sling Bag",
      "price": "1800",
      "description": "A crossbody sling bag for hands-free convenience.",
      "image": "/bag5.jpg",
      "class": "bag"
    },
    {
      "id": 5,
      "name": "Boho Fringe Bag",
      "price": "2100",
      "description": "A boho-inspired fringe bag for a free-spirited look.",
      "image": "/bag4.jpg",
      "class": "bag"
    },
    {
      "id": 6,
      "name": "Luxury Leather Handbag",
      "price": "2800",
      "description": "A luxury leather handbag with exquisite craftsmanship.",
      "image": "/bag3.png",
      "class": "bag"
    },
    {
      "id": 7,
      "name": "Chic Tote with Tassel",
      "price": "2200",
      "description": "A chic tote bag with a stylish tassel accent.",
      "image": "/bag2.png",
      "class": "bag"
    },
    {
      "id": 8,
      "name": "Suede Bucket Bag",
      "price": "1900",
      "description": "A suede bucket bag for a trendy and casual look.",
      "image": "/bag1.png",
      "class": "bag"
    }
  ]

export default function page() {
  return (
    <div>
        <Bag/>
    </div>
  )
}
