import React from 'react'
import Cap from './Cap'

export const cap = [
    {
        "id": 1,
        "name": "Classic Black Cap",
        "price": "₦500",
        "description": "A stylish black cap for everyday wear.",
        "image": "/capblack.png",
        "class": "cap"
      },
      {
        "id": 2,
        "name": "Navy Blue Baseball Cap",
        "price": "600",
        "description": "A comfortable navy blue baseball cap.",
        "image": "/cap2.png",
        "class": "cap"
      },
      {
        "id": 3,
        "name": "Red Snapback Cap",
        "price": "550",
        "description": "A trendy red snapback cap for a casual look.",
        "image": "/capred.png",
        "class": "cap"
      },
      {
        "id": 4,
        "name": "Green Camouflage Cap",
        "price": "650",
        "description": "A camouflage-patterned cap for outdoor enthusiasts.",
        "image": "/capgreen.png",
        "class": "cap"
      },
      {
        "id": 5,
        "name": "Vintage Brown Cap",
        "price": "700",
        "description": "A vintage-style brown cap for a retro vibe.",
        "image": "/cap5.png",
        "class": "cap"
      },
      {
        "id": 6,
        "name": "Gray Woolen Cap",
        "price": "550",
        "description": "A warm and cozy gray woolen cap for cold days.",
        "image": "/cap4.png",
        "class": "cap"
      },
      {
        "id": 7,
        "name": "Striped Beanie",
        "price": "600",
        "description": "A stylish striped beanie cap for a casual look.",
        "image": "/cap1.png",
        "class": "cap"
      },
      {
        "id": 8,
        "name": "Royal Blue Snapback Cap",
        "price": "650",
        "description": "A royal blue snapback cap for a sporty style.",
        "image": "/cap3.png",
        "class": "cap"
      }
]

export default function page() {
  return (
    <div>
        <Cap capp = {cap}/>
    </div>
  )
}
