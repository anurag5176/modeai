"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import StarBorder from "./StarBorder"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with StarBorder */}
          <StarBorder
            as={Link}
            href="/"
            className="font-bold font-sora hover:shadow-primary-glow transition-all duration-300"
            color="#FF2EC5"
            speed="2s"
          >
            <span className="text-2xl gradient-text px-2">ModeAI</span>
          </StarBorder>

          {/* Desktop Navigation with StarBorder */}
          <nav className="hidden md:block">
            <StarBorder
              className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300"
              color="#29FFE3"
              speed="3s"
            >
              <div className="flex items-center space-x-8 px-4 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white font-bold font-poppins hover:text-neon-pink transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </StarBorder>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <StarBorder
              as={Link}
              href="/contact"
              className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300"
              color="#A686D1"
              speed="2.5s"
            >
              Book Your Appointment
            </StarBorder>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-primary-bg/95 backdrop-blur-md border border-border-gray rounded-xl p-3 text-text-primary shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <StarBorder
              className="font-bold font-poppins hover:shadow-primary-glow transition-all duration-300"
              color="#FF2EC5"
              speed="3s"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white font-bold font-poppins hover:text-neon-pink transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border-gray">
                  <StarBorder
                    as={Link}
                    href="/contact"
                    className="font-bold font-poppins w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Your Appointment
                  </StarBorder>
                </div>
              </div>
            </StarBorder>
          </div>
        )}
      </div>
    </header>
  )
}
