import Link from 'next/link'
import { Facebook, Twitter, Instagram, Phone, MapPin, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 w-full">
      <div className="px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Social Links</h3>
            <div className="font-bold space-y-2">
              <SocialLink href="https://www.facebook.com/maharishikapi?mibextid=ZbWKwL" icon={<Facebook />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter />} label="Twitter" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
            <div className=" font-bold space-y-2">
              <ContactInfo icon={<Phone className="h-5 w-5" />} info="+91-8510979331" />
              <ContactInfo icon={<MessageCircle className="h-5 w-5" />} info="+91-8510979331" />
              <ContactInfo icon={<MapPin className="h-5 w-5" />} info="Noida, Bharat - 201301" />
            </div>
          </div>

          {/* YouTube Subscription */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Subscribe to us</h3>
            <Link href="https://youtube.com/@Maharishikapi?si=qp2D3AGCOqzfy7gL" className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
              <Youtube className="h-8 w-8" />
              <span className="text-lg font-semibold">On YouTube</span>
            </Link>
          </div>
        </div>

        <div className="mt-2 pt-3 border-t border-gray-200 text-center text-sm font-extrabold text-gray-500">
          © {new Date().getFullYear()} ArkConnection. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function ContactInfo({ icon, info }: { icon: React.ReactNode; info: string }) {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      {icon}
      <span>{info}</span>
    </div>
  )
}