"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Home, Cloud, Sprout, Calendar, Settings, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <Button
        variant="ghost"
        className="md:hidden fixed top-4 left-4 z-20"
        onClick={toggleSidebar}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static inset-y-0 left-0 z-10 w-64 bg-card border-r overflow-y-auto`}>
        <div className="p-6"> 
          <h1 className="text-5xl font-bold text-primary text-center p-5 hindi">Drishti</h1>
        </div>
        <nav className="mt-6 space-y-1 px-2">
          <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setIsOpen(false)}>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setIsOpen(false)}>
            <Link href="/weather">
              <Cloud className="mr-2 h-4 w-4" />
              Weather
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setIsOpen(false)}>
            <Link href="/crops">
              <Sprout className="mr-2 h-4 w-4" />
              Crops
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setIsOpen(false)}>
            <Link href="/tasks">
              <Calendar className="mr-2 h-4 w-4" />
              Tasks
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setIsOpen(false)}>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>

          <footer>
            <p className="text-center text-xs text-muted-foreground"></p>
          </footer>
        </nav>
      </div>
    </>
  )
}

