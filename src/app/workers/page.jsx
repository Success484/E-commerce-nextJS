import React from 'react'
import Workers from './Workers'

export const workers = [
    {
      "name": "John Smith",
      "image": "/worker7.png",
      "work": "Web Developer"
    },
    {
      "name": "Emily Johnson",
      "image": "/worker1.png",
      "work": "Web Developer"
    },
    {
        "name": "David Miller",
        "image": "/worker2.png",
        "work": "Web Designer"
      },
    {
        "name": "David Miller",
        "image": "/worker4.png",
        "work": "Web Designer"
      },
    {
      "name": "Sarah Wilson",
      "image": "/worker3.png",
      "work": "Web Developer"
    },
    {
      "name": "John Richard",
      "image": "/worker5.png",
      "work": "Web Developer"
    },
    {
      "name": "Linda Lee",
      "image": "/worker6.png",
      "work": "Web Developer"
    }
  ]

export default function page() {
  return (
    <div>
      <Workers />
    </div>
  )
}
