import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="glass-card border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-sora gradient-text mb-4 block">
              ModeAI
            </Link>
            <p className="text-text-muted font-inter mb-6 max-w-md">
              Next-generation AI agents and intelligent business automation with human-centric design. We create soulful
              automation that empowers people and transforms businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-text-muted">
                <Phone size={18} className="text-accent-purple" />
                <span className="font-inter">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-text-muted">
                <Mail size={18} className="text-accent-purple" />
                <span className="font-inter">hello@modeai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-text-muted">
                <MapPin size={18} className="text-accent-purple" />
                <span className="font-inter">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold font-poppins text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-purple transition-colors duration-300 font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold font-poppins text-text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-border-gray rounded-full flex items-center justify-center text-text-muted hover:bg-accent-purple hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-gray mt-8 pt-8 text-center">
          <p className="text-text-muted font-inter">© 2025 ModeAI. All rights reserved. | Designed with ❤️ in Pune</p>
        </div>
      </div>
    </footer>
  )
}
