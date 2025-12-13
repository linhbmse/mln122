import React from 'react';

/**
 * Vintage Book Page Design System
 * Reusable design template from Marx Lenin Presentation
 */

const PageBorder = () => (
  <div className="absolute inset-4 border-4 border-red-800"></div>
);

const CornerDecorations = () => (
  <>
    <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-red-800"></div>
    <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-red-800"></div>
    <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-red-800"></div>
    <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-red-800"></div>
  </>
);

const PaperTexture = () => (
  <div className="absolute inset-0 opacity-30" 
       style={{
         backgroundImage: `
           linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
           linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)
         `,
         backgroundSize: '20px 20px'
       }}>
  </div>
);

const SpineShadow = ({ side = 'left' }) => (
  side === 'left' 
    ? <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent opacity-20"></div>
    : <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent opacity-20"></div>
);

export const PageContainer = ({ children, side = 'left' }) => (
  <div className="absolute inset-0 w-full h-full">
    <div className="absolute inset-0 bg-amber-50"></div>
    <PaperTexture />
    <SpineShadow side={side} />
    <PageBorder />
    <div className="absolute inset-6 border border-red-700"></div>
    <CornerDecorations />
    <div className="relative z-10 h-full flex items-center justify-center p-12">
      {children}
    </div>
  </div>
);

export const CoverPageContent = ({ title, subtitle, quote, icon }) => (
  <div className="text-center space-y-6 max-w-2xl">
    {icon && (
      <div className="flex justify-center mb-6">
        {icon}
      </div>
    )}
    
    <h1 className="text-6xl font-bold text-red-900 tracking-wider"
        style={{fontFamily: 'Georgia, serif', letterSpacing: '0.1em'}}>
      {title}
    </h1>

    <div className="flex items-center justify-center space-x-6 my-6">
      <div className="h-0.5 w-24 bg-red-800"></div>
      <div className="text-4xl">☭</div>
      <div className="h-0.5 w-24 bg-red-800"></div>
    </div>

    <h2 className="text-4xl font-bold text-red-800 tracking-widest"
        style={{fontFamily: 'Georgia, serif'}}>
      {subtitle}
    </h2>

    {quote && (
      <p className="text-xl text-gray-700 italic mt-6 leading-relaxed"
         style={{fontFamily: 'Georgia, serif'}}>
        "{quote}"
      </p>
    )}
  </div>
);

export const ContentPageContent = ({ number, title, subtitle, points, formula, formulaDesc }) => (
  <div className="w-full h-full flex flex-col">
    <div className="flex items-center space-x-4 mb-8">
      <div className="text-6xl font-bold text-red-900 opacity-20"
           style={{fontFamily: 'Georgia, serif'}}>
        {number}
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-red-900 tracking-wide mb-1"
            style={{fontFamily: 'Georgia, serif', textTransform: 'uppercase'}}>
          {title}
        </h1>
        <div className="h-0.5 w-32 bg-red-800"></div>
        <h2 className="text-lg text-gray-700 italic mt-2"
            style={{fontFamily: 'Georgia, serif'}}>
          {subtitle}
        </h2>
      </div>
    </div>

    {points && points.length > 0 && (
      <div className="space-y-4 flex-1">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z" 
                      fill="#991B1B"/>
              </svg>
            </div>
            <p className="text-base text-gray-800 leading-relaxed border-l-2 border-red-800 pl-4 py-1"
               style={{fontFamily: 'Georgia, serif'}}>
              {point}
            </p>
          </div>
        ))}
      </div>
    )}

    {formula && (
      <div className="mt-6 p-6 border-4 border-red-800 bg-amber-100 bg-opacity-50">
        <div className="text-center">
          <div className="text-5xl font-bold text-red-900 mb-3"
               style={{fontFamily: 'Courier New, monospace'}}>
            {formula}
          </div>
          {formulaDesc && (
            <div className="text-xs text-gray-700 italic"
                 style={{fontFamily: 'Georgia, serif'}}>
              {formulaDesc}
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

export const StarIcon = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path d="M50 10 L61 39 L92 39 L68 58 L78 87 L50 68 L22 87 L32 58 L8 39 L39 39 Z" 
          fill="#991B1B" stroke="#7F1D1D" strokeWidth="2"/>
    <circle cx="50" cy="50" r="15" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2"/>
  </svg>
);

export const PageNumber = ({ current, total }) => (
  <div className="absolute top-8 right-8 z-40">
    <div className="relative">
      <svg width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#991B1B" stroke="#7F1D1D" strokeWidth="3"/>
        <circle cx="50" cy="50" r="33" fill="none" stroke="#FCD34D" strokeWidth="2"/>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-50">
        <div className="text-2xl font-bold" style={{fontFamily: 'Georgia, serif'}}>
          {current}
        </div>
        <div className="text-xs">/ {total}</div>
      </div>
    </div>
  </div>
);

export default PageContainer;
