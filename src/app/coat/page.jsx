import React from 'react'
import Coat from './Coat'

export const coat = [
    {
      "id": 1,
      "name": "Classic Wool Coat",
      "price": "2500",
      "description": "A classic wool coat for timeless elegance.",
      "image": "/coat4.jpg",
      "class": "coat"
    },
    {
      "id": 2,
      "name": "Trench Coat",
      "price": "1800",
      "description": "A stylish trench coat for a polished look.",
      "image": "/coat5.jpg",
      "class": "coat"
    },
    {
      "id": 3,
      "name": "Faux Fur Parka",
      "price": "2800",
      "description": "A faux fur parka for warmth and style.",
      "image": "/coat6.jpg",
      "class": "coat"
    },
    {
      "id": 4,
      "name": "Puffer Jacket",
      "price": "1500",
      "description": "A cozy puffer jacket for cold weather.",
      "image": "/coat7.jpg",
      "class": "coat"
    },
    {
      "id": 5,
      "name": "Long Overcoat",
      "price": "2200",
      "description": "A long overcoat for a sophisticated winter look.",
      "image": "/coat8.jpg",
      "class": "coat"
    },
    {
      "id": 6,
      "name": "Leather Biker Jacket",
      "price": "2100",
      "description": "A leather biker jacket for a rugged and stylish appearance.",
      "image": "/coat3.png",
      "class": "coat"
    },
    {
      "id": 7,
      "name": "Quilted Down Jacket",
      "price": "1900",
      "description": "A quilted down jacket for lightweight warmth.",
      "image": "/coat2.png",
      "class": "coat"
    },
    {
      "id": 8,
      "name": "Hooded Parka",
      "price": "2700",
      "description": "A hooded parka for a casual and practical style.",
      "image": "/coat1.png",
      "class": "coat"
    }
  ]

export default function page() {
  return (
    <div>
      <Coat />
    </div>
  )
}
