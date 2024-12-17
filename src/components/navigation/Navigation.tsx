import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sprout, Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export function Navigation() {
  const navigate = useNavigate();
  const { isDark, toggleDarkMode } = useDarkMode();
  const isScrolled = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              Padiku
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
