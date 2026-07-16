"use client";

import { useState, useEffect, useRef } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isBackgroundFadingOut, setIsBackgroundFadingOut] = useState(false);
  const [isSloganFadingOut, setIsSloganFadingOut] = useState(false);
  const [transformStyle, setTransformStyle] = useState({});
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start fading out the slogan slightly before moving
    const sloganTimer = setTimeout(() => {
      setIsSloganFadingOut(true);
    }, 3800);

    // Calculate translation and start background fade out
    const moveTimer = setTimeout(() => {
      const target = document.getElementById("nav-logo");
      if (target && logoRef.current) {
        const targetRect = target.getBoundingClientRect();
        const sourceRect = logoRef.current.getBoundingClientRect();
        
        // Calculate the exact pixel difference from the top-left corner
        const deltaX = targetRect.left - sourceRect.left;
        const deltaY = targetRect.top - sourceRect.top;
        
        setTransformStyle({
          transform: `translate(${deltaX}px, ${deltaY}px)`,
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)", 
        });
      }
      setIsBackgroundFadingOut(true);
    }, 4000); 

    // completely remove from DOM after move completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4600); 

    return () => {
      clearTimeout(sloganTimer);
      clearTimeout(moveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Prevent scrolling while splash screen is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-500 ease-in-out ${
        isBackgroundFadingOut ? "bg-transparent pointer-events-none" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2 md:gap-3">
        {/* Animated SVG Logo */}
        <div 
          ref={logoRef}
          style={transformStyle}
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
        >
          <svg viewBox="0 0 23 23" className="w-5 h-5 md:w-6 md:h-6 overflow-visible">
            {/* Orange Square */}
            <rect
              x="0"
              y="0"
              width="10.5"
              height="10.5"
              fill="#f25022"
              className="drop-shadow-sm"
              style={{
                animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
                opacity: 0,
                transform: "scale(0)",
                transformBox: "fill-box",
                transformOrigin: "center"
              }}
            />
            {/* Green Square */}
            <rect
              x="12"
              y="0"
              width="10.5"
              height="10.5"
              fill="#7fba00"
              className="drop-shadow-sm"
              style={{
                animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.15s forwards",
                opacity: 0,
                transform: "scale(0)",
                transformBox: "fill-box",
                transformOrigin: "center"
              }}
            />
            {/* Blue Square */}
            <rect
              x="0"
              y="12"
              width="10.5"
              height="10.5"
              fill="#00a4ef"
              className="drop-shadow-sm"
              style={{
                animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s forwards",
                opacity: 0,
                transform: "scale(0)",
                transformBox: "fill-box",
                transformOrigin: "center"
              }}
            />
          </svg>
        </div>

        {/* Animated Text Block */}
        <div className={`flex flex-col justify-center transition-opacity duration-300 ${isBackgroundFadingOut ? 'opacity-0' : 'opacity-100'}`}>
          <span
            className="text-base md:text-lg font-bold text-[#00a4ef] tracking-tight select-none leading-none"
            style={{
              animation: "fadeInRight 0.6s ease-out 0.5s forwards",
              opacity: 0,
              transform: "translateX(-10px)",
            }}
          >
            KOMPAS IT
          </span>
          <div className={`transition-opacity duration-300 ${isSloganFadingOut ? 'opacity-0' : 'opacity-100'}`}>
            <span
              className="block text-[10px] md:text-[11px] text-slate-500 font-medium tracking-wide mt-1 select-none"
              style={{
                animation: "fadeInRight 0.6s ease-out 0.7s forwards",
                opacity: 0,
                transform: "translateX(-10px)",
              }}
            >
              Navigate Tomorrow. Today
            </span>
          </div>
        </div>
      </div>

      {/* Global CSS for these specific animations */}
      <style jsx global>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(-15px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
