// components/Header.jsx
'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Servicios', href: '#ourServices' },
    { label: '¿Quienes somos?', href: '#aboutUs' },
    { label: 'Fragancias', href: '#aromas' },
    { label: 'Contacto', href: '#footer' },
  ]

  return (
    <header className='fixed top-0 w-full z-50 px-4 md:px-10 py-3 bg-transparent'>
      <div className='max-w-6xl mx-auto bg-[#f8ebf8] rounded-xl shadow-sm flex items-center justify-between px-6 py-1'>
        <div className='flex'>
          <Image
            alt='Logo'
            src='/logo/logo.svg'
            href='#home'
            className='text-secondary font-semibold text-xl'
            width={20}
            height={0}
          />
          <Image
            alt='Logo Text'
            src='/logo/logo-removebg.png'
            href='#home'
            className='text-secondary font-semibold text-xl'
            width={100}
            height={0}
          />
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-6 text-sm text-black/80 font-medium text-[1rem]'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='hover:text-black transition-colors'>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-black'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className='md:hidden bg-[#f8ebf8] mt-2 mx-4 rounded-xl shadow-md p-4 space-y-3 text-sm font-medium text-black/80'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='block hover:text-black transition-colors'
              onClick={() => setOpen(false)} // Close menu after click
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
