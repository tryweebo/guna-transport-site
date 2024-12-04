import * as React from 'react'
import { NavigationItem } from './navigation'

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-border" id="footer">
      <div className="px-5 tablet:px-16 py-4 tablet:py-8 flex flex-col tablet:flex-row tablet:items-center justify-between gap-5">
        <div className="flex">
          <span className="font-medium text-sm">
            Copyright &copy; 2024 Guna Transport
          </span>
        </div>

        <div className="flex">
          <ul className="flex flex-wrap items-center gap-y-2 gap-5">
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
