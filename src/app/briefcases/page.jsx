import React from 'react'
import Catr from './Catr'

export const allSuit = [
  {
    "id": 1,
    "name": "Classic Black Suit",
    "price": "25,000",
    "description": "A timeless black suit for formal occasions.",
    "image": "/brief8.png",
    "class": "case"
  },
  {
    "id": 2,
    "name": "Navy Blue Slim Fit Suit",
    "price": "30,000",
    "description": "A stylish navy blue slim fit suit.",
    "image": "/brief7.png",
    "class": "case"
  },
  {
    "id": 3,
    "name": "Charcoal Gray Suit",
    "price": "28,000",
    "description": "A versatile charcoal gray suit.",
    "image": "/brief6.png",
    "class": "case"
  },
  {
    "id": 4,
    "name": "Brown Tweed Suit",
    "price": "32,000",
    "description": "A classic brown tweed suit for a rustic look.",
    "image": "/brief5.png",
    "class": "case"
  },
  {
    "id": 5,
    "name": "Slim Fit Tuxedo",
    "price": "35,000",
    "description": "A sleek black tuxedo for special occasions.",
    "image": "/brief4.png",
    "class": "case"
  },
  {
    "id": 6,
    "name": "Light Gray Suit",
    "price": "29,000",
    "description": "A modern light gray suit for a contemporary look.",
    "image": "/brief3.png",
    "class": "case"
  },
  {
    "id": 7,
    "name": "Double-Breasted Pinstripe Suit",
    "price": "34,000",
    "description": "A classic pinstripe suit with a double-breasted design.",
    "image": "/brief2.png",
    "class": "case"
  },
  {
    "id": 8,
    "name": "Burgundy Velvet Suit",
    "price": "38,000",
    "description": "A luxurious burgundy velvet suit for special occasions.",
    "image": "/brief1.png",
    "class": "case"
  }
]

export default function page() {
  return (
    <div>
      <Catr suith = {allSuit}/>
    </div>
  )
}
