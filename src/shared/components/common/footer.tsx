import * as React from 'react'
import { NavigationItem } from './navigation'

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-border" id="footer">
      <div className="px-16 py-8 flex items-center justify-between">
        <div className="flex">
          <span className="font-medium text-sm">
            Copyright &copy; 2024 Guna Transport
          </span>
        </div>

        <div className="flex">
          <ul className="flex items-center gap-5">
            <NavigationItem href="/moments">Catatan perjalanan</NavigationItem>
            <NavigationItem href="/trans-list">Daftar kendaraan</NavigationItem>
            <NavigationItem href="/privacy">Privasi</NavigationItem>
            <NavigationItem href="/terms">Ketentuan</NavigationItem>
          </ul>
        </div>
      </div>
    </footer>
  )
}
