"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../DarkModeButton"

const NavData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      {/* <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/80 backdrop-blur-sm md:w-5xl mx-auto">
        <div className="mx-auto flex h-full w-full items-center justify-between px-2 lg:w-5xl">
          <ul className="flex h-full items-center space-x-2">
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
          <div className="flex items-center space-x-2">
            <ModeToggle />
          </div>
        </div>
      </nav> */}

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
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </nav>
    </>
  )
}
