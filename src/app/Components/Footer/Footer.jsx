import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-center text-gray-500">
    <p>© 2025 Roads & Rides Club | All Rights Reserved</p>
    <div className="flex justify-center space-x-6 mt-4">
      <a
        href="https://instagram.com/roadsnridesegypt"
        target="_blank"
        className="hover:text-red-500"
      >
        Instagram
      </a>
      <a href="#" className="hover:text-red-500">
        Facebook
      </a>
      <a href="#" className="hover:text-red-500">
        YouTube
      </a>
    </div>
    <p className='m-2'>Youssef Hashish | All Rights Reserved</p>
    <p className='m-2'><a className='hover:text-red-500' href="https://youssef-s-portfolio-six.vercel.app/">Visit My Portfolio</a></p>

  </footer>
  )
}
