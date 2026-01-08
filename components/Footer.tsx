"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Filters */}
        <div>
          <h3 className="font-semibold mb-3">Filters</h3>
          <ul className="text-sm space-y-1">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <Facebook className="cursor-pointer hover:text-blue-200" size={18} />
            <Twitter className="cursor-pointer hover:text-blue-200" size={18} />
            <Instagram className="cursor-pointer hover:text-blue-200" size={18} />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-600 text-center py-3 text-sm">
        © 2024 American
      </div>

    </footer>
  );
}
