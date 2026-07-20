"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../DarkModeButton"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

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
      <nav className="flex items-center justify-between mb-12">
        <ul className="xxs:flex h-20 items-center space-x-2 hidden">
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
          <div className="hidden"></div>
        </div>
        <div className="flex xxs:hidden h-20 items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="px-2">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {NavData.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`rounded-md px-3 py-2 hover:bg-accent ${pathname === item.path ? "bg-accent border-t-2 border-t-blue-500 py-4" : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}
