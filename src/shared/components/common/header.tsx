import * as React from 'react'
import { NavigationItem } from './navigation'
import { Button } from '../ui/button'
import Link from 'next/link'

function Brand(): React.ReactElement {
  return (
    <Link
      href={'/'}
      className="flex items-center gap-3 transition-all duration-300 hover:scale-95"
    >
      <i className="fi fi-rr-compass-north text-xl rotate-45" />
      <span className="font-semibold">Guna Transport</span>
    </Link>
  )
}

function Navbar(): React.ReactElement {
  return (
    <div className="hidden tablet:flex items-center">
      <ul className="flex items-center gap-6">
        <NavigationItem
          className="text-foreground/60 hover:text-foreground"
          href="/"
        >
          Beranda
        </NavigationItem>
        <NavigationItem
          className="text-foreground/60 hover:text-foreground"
          href="/about"
        >
          Tentang Kami
        </NavigationItem>
        <NavigationItem
          className="text-foreground/60 hover:text-foreground"
          href="/#services"
        >
          Pelayanan
        </NavigationItem>
        <NavigationItem
          className="text-foreground/60 hover:text-foreground"
          href="/#testimonials"
        >
          Ulasan
        </NavigationItem>
        <NavigationItem
          className="text-foreground/60 hover:text-foreground"
          href="/trans-list"
        >
          Daftar Kendaraan
        </NavigationItem>
      </ul>
    </div>
  )
}

function Actions(): React.ReactElement {
  return (
    <div className="flex items-center gap-3">
      <Button
        asChild
        variant={'outline'}
        size={'base'}
        className="transition-all duration-300 hover:scale-95"
      >
        <Link href="/contact">Pesan sekarang</Link>
      </Button>
    </div>
  )
}

export function Header(): React.ReactElement {
  return (
    <header
      className="flex items-center w-full px-5 tablet:px-16 justify-between h-16 mt-4 z-20"
      id="header"
    >
      <Brand />
      <Navbar />
      <Actions />
    </header>
  )
}
