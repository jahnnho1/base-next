import React, { useState } from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    console.log('isOpen', isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className="fixed top-2 left-2"
        style={{
          zIndex: 6,
          background: 'red',
          top: '50rem',
          left: '20rem',
        }}
      >
        <MenuIcon
          id="peruanito"
          className="h-8 w-8 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </>
  )
}

export default Sidebar
