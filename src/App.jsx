import React, { useState } from "react";
import {
  Image as ImageIcon,
  Plus,
  Send,
  Layers,
  ChevronDown,
  Menu,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import AionSpark from "./components/AionSpark";
import Library from "./components/Library";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex h-screen w-screen bg-[#161616] text-[#9ca3af] font-sans antialiased overflow-hidden relative">
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)} 
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity"
        />
      )}

      {/* 1. Left Sidebar Navigation */}
      <div
        className={`fixed md:relative inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileOpen(false);
          }} 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
        />
      </div>

      {/* 2. Main Content Router */}
      {activeTab === "Library" ? (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="md:hidden flex items-center p-4 bg-[#131313] border-b border-[#272727]">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="text-[#A0A0A0] hover:text-white p-1"
            >
              <Menu size={22} />
            </button>
            <span className="ml-3 text-white text-sm font-medium">Menu</span>
          </div>
          <Library />
        </div>
      ) : (
        <main className="flex-1 flex flex-col justify-between h-full bg-[#161616] relative overflow-y-auto px-4 sm:px-8">
          
          {/* Top Header Bar */}
          <header className="w-full flex items-center justify-between pt-5 px-4 z-20">
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileOpen(true)}
                className="text-[#A0A0A0] hover:text-white p-2 bg-[#202020] rounded-lg border border-[#2f2f2f]"
              >
                <Menu size={20} />
              </button>
            </div>

            <div className="hidden md:block"></div>

            {/* Right Top Links & Sign In Button */}
            <div className="flex items-center gap-6 ml-auto text-xs font-medium text-[#A0A0A0]">
              <a href="#" className="hidden sm:block hover:text-white transition">About Aion</a>
              <a href="#" className="hidden sm:block hover:text-white transition">Get App</a>
              <a href="#" className="hidden lg:block hover:text-white transition">Subscriptions</a>
              <a href="#" className="hidden lg:block hover:text-white transition">For Business</a>
              <button className="h-[34px] px-4 bg-[#7BC53C] hover:bg-[#6ab330] text-black font-semibold text-xs rounded-full transition shadow-sm">
                Sign in
              </button>
            </div>
          </header>

          {/* Center Workspace Builder */}
          <div className="flex flex-col items-center justify-center w-full max-w-[886px] mx-auto my-auto py-6">
            
            {/* Main Hero Heading (Cleaned up from hardcoded user name to general welcome style) */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-7 text-center">
              <AionSpark className="w-[36px] sm:w-[40.4px] h-[28px] sm:h-[30.7px] flex-shrink-0" />
              <h1 className="text-xl sm:text-[28px] font-bold text-white tracking-tight">
                Let's build something amazing
              </h1>
            </div>

            {/* Outer Main Frame Card */}
            <div className="w-full bg-[#1A1A1A] border border-[#272727] rounded-[18.75px] p-4 sm:p-[16px] shadow-2xl flex flex-col gap-4">
              {/* 4 Image Upload Slots Row */}
              <div className="grid grid-cols-2 sm:flex items-center justify-between gap-3 w-full">
                {[1, 2, 3, 4].map((slot, index) => (
                  <React.Fragment key={slot}>
                    <div className="w-full sm:flex-1 h-[65px] sm:h-[73.2px] bg-[#202020] border border-dashed border-[#2D2D2D] rounded-[4.23px] flex items-center justify-center text-[#A0A0A0] hover:border-[#444] hover:text-white transition cursor-pointer">
                      <ImageIcon size={20} strokeWidth={1.8} />
                    </div>
                    {index < 3 && (
                      <div className="hidden sm:flex w-[24px] h-[24px] rounded-full bg-[#2B2B2B] items-center justify-center text-[#A0A0A0] flex-shrink-0">
                        <Plus size={13} strokeWidth={1.8} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Inner Prompt Input Container */}
              <div className="w-full bg-[#202020] border border-[#303030] rounded-[9.08px] p-3.5 flex flex-col gap-3">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe about the screen you have uploaded....."
                  rows={3}
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-[#5F5F5F] outline-none resize-none leading-relaxed"
                />

                {/* Action Toolbar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2">
                  <button className="flex items-center justify-center gap-2 h-[32px] px-3.5 bg-[#2C2C2C] hover:bg-[#383838] text-white text-xs font-medium rounded-[8px] transition">
                    <Layers size={14} strokeWidth={1.67} />
                    <span>Connect Design System</span>
                  </button>

                  <div className="flex items-center justify-between sm:justify-end gap-2.5">
                    <button className="flex items-center gap-2 h-[32px] px-3 bg-[#2C2C2C] hover:bg-[#383838] text-white text-xs font-medium rounded-[8px] transition">
                      <span>Select Techstack</span>
                      <ChevronDown size={13} strokeWidth={1.67} />
                    </button>
                    <button className="w-[50px] h-[33px] bg-[#2C2C2C] hover:bg-[#383838] text-[#A0A0A0] hover:text-white rounded-[10px] transition flex items-center justify-center flex-shrink-0">
                      <Send size={14} strokeWidth={1.67} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Disclaimers */}
          <footer className="w-full text-center pb-4 text-[11px] text-[#7A7A7A]">
            <p>
              Aion AI can make mistakes. Please verify critical design code.
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}