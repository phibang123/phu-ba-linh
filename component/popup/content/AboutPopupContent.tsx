'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPopupContent: React.FC = () => {
  return (
    <div className="flex flex-col w-[950px] max-h-[450px] overflow-y-auto font-mono">
      <div className="grid grid-cols-[300px_1fr] gap-4">
        {/* Left Column - Personal Info */}
        <div className="flex flex-col items-center p-4 border-r border-dashed border-[#FEEEEF]">
          <div className="relative mb-6">
            <div className="h-[120px] w-[120px] rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/favicon-ico/icon.png"
                alt="Clover Jam"
                width={100}
                height={100}
                className="rounded-full"
                style={{
                    filter: 'drop-shadow(0px 3.5px 3.5px #00000040)',
                }}
              />
            </div>
          </div>
          
          <h2 className="font-sans text-2xl font-semibold mb-1 text-[#8C7D7D]">Clover Jam</h2>
          <p className="font-sans text-md mb-6 text-[#8C7D7D]">五木海翔</p>
          
          <div className="text-left w-full space-y-4 text-[#8C7D7D]">
            <h3 className="text-xl font-semibold">Hello there!</h3>
                         <p>
               I&apos;m Clover Jam, a seasoned Roblox Studio developer with <span className="font-semibold">5 years of experience</span>. I specialize in LuaU programming for complex game systems and excel in graphic design, creating 3D models and UI/UX.
             </p>
             <p>
               My skills also extend to 3D rendering, animation, and video editing for my projects and YouTube channel. Additionally, I&apos;m currently studying music and language to support my future career goals.
             </p>
            <p>
              In short, my work encompasses: LuaU scripting, 3D/2D design (including UI/UX), animation, rendering, and project management, alongside content creation, storytelling, and music/sound composition.
            </p>
            <p className="text-sm mt-4">
              See more in <Link href="/works" className="text-[#42ECE4] hover:underline">works</Link>
            </p>
          </div>
        </div>
        
        {/* Right Column - Skills Grid */}
        <div className="grid grid-cols-3 gap-4 p-2">
          {/* Education */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Education</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Independent Study & Skill Development.</li>
              <li>Relevant Online Coursework.</li>
            </ul>
          </div>
          
          {/* Programming */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Programming</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Core works expertise centered on LuaU.</li>
              <li>Possess working in other languages gained through personal interest and short-term projects.</li>
            </ul>
            <div className="flex flex-wrap gap-1 mt-3">
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">LuaU</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Python</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">C/C++</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">HTML/CSS</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Next.js</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">TypeScript</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">C#</span>
            </div>
          </div>
          
          {/* Game Engines */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Game Engines</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>
                Primary Development Platform: <span className="font-semibold">Roblox Studio</span>, where I possess extensive experience.
              </li>
              <li>
                Explored <span className="font-semibold">Unity</span> and <span className="font-semibold">Unreal Engine</span> for broader understanding.
              </li>
            </ul>
          </div>
          
          {/* 2D Design */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">2D Design</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Designing intuitive and visually appealing 2D interfaces, including game UI/UX, plugin interfaces, and elements for web interfaces.</li>
            </ul>
            <p className="text-xs mt-2 text-[#8C7D7D] font-semibold">Tools:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Figma</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Affinity Designer 2</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Canvas</span>
            </div>
          </div>
          
          {/* Art works */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Art works</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Producing distinct 2D artwork in anime and cartoon styles, suitable for concept art, illustration, and character design.</li>
            </ul>
            <p className="text-xs mt-2 text-[#8C7D7D] font-semibold">Tools:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Adobe Photoshop</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Clip Studio Paint</span>
            </div>
          </div>
          
          {/* Project Management */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Project Management</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Leading and overseeing development cycles as the head of <span className="font-semibold">String Island Studio</span>, managing teams and ensuring project delivery to completion.</li>
            </ul>
          </div>
          
          {/* 3D Design */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">3D Design</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Creating high-quality 3D models and assets, proficient in both stylized and realistic aesthetics.</li>
            </ul>
            <p className="text-xs mt-2 text-[#8C7D7D] font-semibold">Tools:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Blender</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Adobe Substance 3D</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Maya</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">ZBrush</span>
            </div>
          </div>
          
          {/* Visual Effects */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Visual Effects</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Developing dynamic particle effects and visual elements to enhance gameplay immersion and aesthetic quality.</li>
            </ul>
            <p className="text-xs mt-2 text-[#8C7D7D] font-semibold">Tools:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Adobe Photoshop</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Clip Studio Paint</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Adobe After Effect</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Houdini</span>
            </div>
          </div>
          
          {/* StoryTelling */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">StoryTelling</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Crafting compelling narratives, including game lore, character backstories, scripts, and standalone fictional works (novels, etc.).</li>
            </ul>
          </div>
          
          {/* Content Creating */}
          <div className="bg-[#FFF5F5] p-2 rounded-lg" style={{
            boxShadow: '0px 3.5px 3.5px 0px #00000040',
          }}>
            <h3 className="text-lg font-semibold text-[#8C7D7D] mb-2">Content Creating</h3>
            <ul className="list-disc pl-5 text-sm text-[#8C7D7D] space-y-2">
              <li>Producing engaging content: Focused on building tutorials, animations, and sharing development insights.</li>
            </ul>
            <p className="text-xs mt-2 text-[#8C7D7D] font-semibold">Tools:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Adobe Premiere</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">Adobe After Effect</span>
              <span className="px-2 py-1 bg-white rounded-md text-xs text-[#8C7D7D]">CapCut PC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPopupContent; 