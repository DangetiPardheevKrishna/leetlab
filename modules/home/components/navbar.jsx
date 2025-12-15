// components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, User, Info, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ModeToggle from "@/components/modeToggle";

const Navbar = ({ userRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="w-4 h-4" />,
      show: true,
    },
    {
      name: "Problems",
      href: "/problems",
      icon: <FileText className="w-4 h-4" />,
      show: true,
    },
    {
      name: "Create Problems",
      href: "/create-problem",
      icon: <FileText className="w-4 h-4" />,
      show: userRole === "ADMIN",
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User className="w-4 h-4" />,
      show: true,
    },
    {
      name: "About",
      href: "/about",
      icon: <Info className="w-4 h-4" />,
      show: true,
    },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto">
      <div className="relative">
        {/* Glass morphism container */}
        <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-2xl shadow-black/5" />

        {/* Content */}
        <div className="relative px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  CodeMaster
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:ml-12 md:space-x-2">
                {navItems.map((item) => {
                  if (!item.show) return null;

                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 shadow-inner"
                          : "text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/50 hover:shadow-lg"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ModeToggle />
              </div>

              {/* Clerk User Button */}
              <SignedIn>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30" />
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 border-2 border-white/30",
                      },
                    }}
                  />
                </div>
              </SignedIn>

              {/* Clerk Auth Buttons */}
              <SignedOut>
                <div className="hidden sm:flex items-center space-x-4">
                  <SignInButton mode="modal">
                    <button className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-xl hover:bg-white/30 dark:hover:bg-gray-800/50">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-white/20 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/70"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 dark:border-gray-700/30">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navItems.map((item) => {
                  if (!item.show) return null;

                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Auth Buttons */}
              <SignedOut>
                <div className="mt-6 pt-4 border-t border-white/20 dark:border-gray-700/30 space-y-3">
                  <div className="flex justify-center">
                    <ModeToggle />
                  </div>
                  <SignInButton mode="modal">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/50 rounded-xl transition-colors"
                    >
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>

              {/* Mobile User Menu */}
              <SignedIn>
                <div className="mt-6 pt-4 border-t border-white/20 dark:border-gray-700/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <ModeToggle />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Signed in as:
                      <div className="font-medium text-gray-800 dark:text-gray-200">
                        {/* Display username */}
                      </div>
                    </div>
                  </div>
                </div>
              </SignedIn>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
