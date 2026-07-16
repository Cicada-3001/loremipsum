'use client';

import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from 'react-simple-maps';

interface CountryDetail {
  id: string;
  name: string;
  flag: string;
  capital: string;
  focus: string;
  specialization: string;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
}

export default function AfricanPresence() {
  const countries: CountryDetail[] = [
    {
      id: 'kenya',
      name: 'Kenya',
      flag: '🇰🇪',
      capital: 'Nairobi Hub',
      focus: 'Web & Cloud Software Products',
      specialization: 'React, Node.js, AI Coding, Cloud Solutions',
      color: '#00a4ef', // Microsoft Blue
      textColor: 'text-[#0078d4]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      coordinates: [36.8219, -1.2921],
      description: 'Our Nairobi cluster builds bespoke web platforms and cloud-native software products for global clients — from SaaS dashboards to enterprise portals delivered end-to-end.'
    },
    {
      id: 'nigeria',
      name: 'Nigeria',
      flag: '🇳🇬',
      capital: 'Lagos Hub',
      focus: 'Enterprise Backend & Fintech Systems',
      specialization: 'Python, Django, C# .NET Core, Backend Infrastructure',
      color: '#f25022', // Microsoft Orange/Red
      textColor: 'text-[#ea580c]',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      coordinates: [3.3792, 6.5244],
      description: 'Our Lagos cluster designs and ships custom enterprise backends, financial ledger systems, and scalable APIs — purpose-built software from the ground up.'
    },
    {
      id: 'uganda',
      name: 'Uganda',
      flag: '🇺🇬',
      capital: 'Kampala Hub',
      focus: 'Mobile & Cross-Platform Applications',
      specialization: 'Mobile App Swift, Kotlin, Flutter, Cross-Platform',
      color: '#ffb900', // Microsoft Gold
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      coordinates: [32.5825, 0.3476],
      description: 'Our Kampala cluster builds polished mobile applications and cross-platform products from concept to launch — custom-engineered for outstanding user experiences.'
    },
    {
      id: 'ethiopia',
      name: 'Ethiopia',
      flag: '🇪🇹',
      capital: 'Addis Ababa Hub',
      focus: 'Data-Intensive & High-Volume Systems',
      specialization: 'Java, Spring Boot, Big Data, SQL Systems',
      color: '#7fba00', // Microsoft Green
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      coordinates: [38.7469, 9.0192],
      description: 'Our Addis Ababa cluster builds custom data platforms, high-throughput processing systems, and relational database solutions for complex business domains.'
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      flag: '🇷🇼',
      capital: 'Kigali Hub',
      focus: 'AI Products & Intelligent Automation',
      specialization: 'AI Automation, Machine Learning Models, Analytics',
      color: '#8b5cf6', // Purple
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      coordinates: [30.0619, -1.9403],
      description: 'Our Kigali cluster develops AI-powered software products — intelligent automation tools, ML-driven analytics platforms, and decision-support systems built to spec.'
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      flag: '🇹🇿',
      capital: 'Dar es Salaam Hub',
      focus: 'DevOps & Cloud Infrastructure Products',
      specialization: 'DevOps Pipelines, AWS, Azure, CI/CD Cloud Sec',
      color: '#06b6d4', // Cyan
      textColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      coordinates: [39.2083, -6.7924],
      description: 'Our Dar es Salaam cluster engineers resilient cloud infrastructure and CI/CD systems as bespoke products — built for multi-region uptime and security compliance.'
    },
    {
      id: 'mozambique',
      name: 'Mozambique',
      flag: '🇲🇿',
      capital: 'Maputo Hub',
      focus: 'Cybersecurity & Secure Software',
      specialization: 'Cybersecurity, Pentesting, Networks, DB Security',
      color: '#ec4899', // Pink
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      coordinates: [32.5732, -25.9692],
      description: 'Our Maputo cluster builds security-first software products — from pentesting platforms to hardened network and database systems engineered for critical infrastructure.'
    }
  ];

  const [activeId, setActiveId] = useState<string>('kenya');
  const [mounted, setMounted] = useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeCountry = countries.find(c => c.id === activeId) || countries[0];

  return (
    <section className="py-24 bg-white border-t border-gray-150 select-none overflow-hidden" id="presence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Our Elite <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">African Engineering</span> Network<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Directly collaborate with elite in-house software engineering squads spanning major tech hubs across Africa.
          </p>
        </div>

        {/* Map and Details Card Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Vector Africa Map */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[460px] md:min-h-[520px]">
            
            <style>{`
              @keyframes map-dash {
                to {
                  stroke-dashoffset: -20;
                }
              }
              .map-dash-line {
                stroke-dasharray: 4 4;
                animation: map-dash 15s linear infinite;
              }
            `}</style>

            {/* The Map Container */}
            <div className="relative w-full max-w-[420px] aspect-[400/500] flex items-center justify-center">
              {mounted ? (
                <ComposableMap
                  width={400}
                  height={500}
                  projection="geoMercator"
                  projectionConfig={{
                    center: [17, 3],
                    scale: 360
                  }}
                  className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.03)]"
                >
                  <defs>
                    <linearGradient id="africa-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="50%" stopColor="#f1f5f9" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    
                    {/* Glowing Filter effects */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Render Geographies */}
                  <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const name = geo.properties.name;
                        const countryData = countries.find(c => c.name.toLowerCase() === name.toLowerCase());
                        const isTarget = !!countryData;
                        const isActive = activeId === countryData?.id;

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            style={{
                              default: {
                                fill: isActive
                                  ? countryData?.color
                                  : isTarget
                                  ? `${countryData?.color}18` // Soft brand color tint (opacity 0.1)
                                  : 'url(#africa-grad)',
                                stroke: isTarget ? countryData?.color : '#e2e8f0',
                                strokeWidth: isActive ? 1.5 : 0.75,
                                outline: 'none',
                                transition: 'all 300ms ease',
                              },
                              hover: {
                                fill: isTarget ? countryData?.color : '#f1f5f9',
                                stroke: isTarget ? '#ffffff' : '#cbd5e1',
                                strokeWidth: 1.5,
                                outline: 'none',
                                cursor: isTarget ? 'pointer' : 'default',
                              },
                              pressed: {
                                fill: isTarget ? countryData?.color : '#cbd5e1',
                                stroke: isTarget ? '#ffffff' : '#94a3b8',
                                strokeWidth: 1.5,
                                outline: 'none',
                              },
                            }}
                            onClick={() => {
                              if (isTarget && countryData) {
                                setActiveId(countryData.id);
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>

                  {/* Connector/Linkage lines to show network connectivity between hubs */}
                  {countries.map(other => (
                    other.id !== activeCountry.id && (
                      <Line
                        key={`line-${activeCountry.id}-${other.id}`}
                        from={activeCountry.coordinates}
                        to={other.coordinates}
                        stroke={activeCountry.color}
                        strokeWidth={1.2}
                        className="map-dash-line opacity-60"
                      />
                    )
                  ))}

                  {/* Country Pulsing Radars (Markers) */}
                  {countries.map(c => {
                    const isActive = activeId === c.id;
                    return (
                      <Marker
                        key={`hub-${c.id}`}
                        coordinates={c.coordinates}
                        onClick={() => setActiveId(c.id)}
                        className="cursor-pointer"
                      >
                        {/* Outer Glowing Pulsing halo ring */}
                        <circle
                          r={isActive ? 14 : 8}
                          fill={c.color}
                          className={`opacity-30 ${isActive ? 'animate-[ping_2s_infinite]' : 'opacity-15 hover:opacity-25'}`}
                        />
                        {/* Dynamic border highlight */}
                        <circle
                          r={isActive ? 6 : 4}
                          fill={c.color}
                          stroke="#ffffff"
                          strokeWidth={isActive ? 1.5 : 1}
                          filter={isActive ? 'url(#glow)' : ''}
                          className="transition-all duration-300"
                        />
                      </Marker>
                    );
                  })}

                  {/* Float Overlay Labels inside the SVG Map using foreignObject */}
                  {countries.map(c => {
                    const isActive = activeId === c.id;
                    return (
                      <Marker key={`label-${c.id}`} coordinates={c.coordinates}>
                        <foreignObject
                          x={-55}
                          y={-36}
                          width={110}
                          height={30}
                          style={{ overflow: 'visible' }}
                        >
                          <button
                            onClick={() => setActiveId(c.id)}
                            className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full shadow-sm text-[10px] font-extrabold transition-all duration-300 cursor-pointer border whitespace-nowrap ${
                              isActive
                                ? `${c.textColor} ${c.bgColor} ${c.borderColor} scale-105 z-20 shadow-md`
                                : 'text-gray-500 bg-white/95 border-gray-100 hover:bg-white hover:text-gray-800 scale-95 z-10'
                            }`}
                          >
                            <span>{c.flag}</span>
                            <span>{c.name}</span>
                          </button>
                        </foreignObject>
                      </Marker>
                    );
                  })}
                </ComposableMap>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm font-bold text-gray-500">Loading Network Map...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Selected Country Talent Card Dashboard */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Interactive Grid Selector Links */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {countries.map(c => (
                <button
                  key={`selector-${c.id}`}
                  onClick={() => setActiveId(c.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                    activeId === c.id
                      ? `${c.textColor} ${c.bgColor} ${c.borderColor} shadow-sm scale-[1.03]`
                      : 'text-gray-500 bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {c.flag} {c.name}
                </button>
              ))}
            </div>

            {/* Main Interactive Details Dashboard Card */}
            <div className={`bg-white rounded-3xl p-8 border ${activeCountry.borderColor} transition-all duration-500 transform scale-100`}>
              
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-5">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">{activeCountry.name}</h3>
                    <p className={`text-xs font-extrabold uppercase tracking-widest ${activeCountry.textColor}`}>
                      {activeCountry.capital}
                    </p>
                  </div>
                </div>
                
                {/* Active Hub Signal indicator */}
                <div className={`${activeCountry.bgColor} ${activeCountry.textColor} ${activeCountry.borderColor} border text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1.5`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Hub
                </div>
              </div>

              {/* Software Focus */}
              <div className="mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2">Software Focus</h4>
                <div className={`text-lg font-black ${activeCountry.textColor} mb-1`}>
                  {activeCountry.focus}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  Custom software products designed, built, and delivered end-to-end.
                </div>
              </div>



              {/* Hub Description */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2">Cluster Overview</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {activeCountry.description}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
