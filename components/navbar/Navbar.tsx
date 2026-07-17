"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <nav className="flex items-center justify-between mb-12">
        <ul className="flex h-20 items-center space-x-2">
          {NavData.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={` ${pathname === item.path ? "border-t-2 border-t-blue-500 py-4" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <h1 className="">Fix.Me</h1>
      </nav>
    </>
  )
}
