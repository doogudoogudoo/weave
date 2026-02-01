'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#8B7355]/20'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/'>
          <div className='flex items-end gap-3 hover:cursor-pointer'>
            {/* <div className='w-10 h-10 bg-gradient-to-br from-[#8B7355] to-[#6B8E23] rounded-lg flex items-center justify-center'>
            <span className='text-white text-xl'>⋈</span>

            <Image
              src={'/weave-icon-white.png'}
              alt='Weave Icon'
              width={10000}
              height={10000}
            />
          </div> */}
            <Logo />
            <h1 className='text-2xl text-[#8B7355] font-title'>Weave</h1>
          </div>
        </Link>

        <nav className='hidden md:flex gap-8'>
          <button
            onClick={() => scrollToSection('about')}
            className='text-[#5C4033] hover:text-[#8B7355] transition-colors font-pretendard-bold'
          >
            소개
          </button>
          {/* <button
            onClick={() => scrollToSection('philosophy')}
            className='text-[#5C4033] hover:text-[#8B7355] transition-colors'
          >
            철학
          </button> */}
          <button
            onClick={() => scrollToSection('projects')}
            className='text-[#5C4033] hover:text-[#8B7355] transition-colors font-pretendard-bold'
          >
            프로젝트
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className='text-[#5C4033] hover:text-[#8B7355] transition-colors font-pretendard-bold'
          >
            문의하기
          </button>
        </nav>

        <button
          className='md:hidden text-[#5C4033]'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-[#8B7355]/20'>
          <nav className='flex flex-col px-6 py-4 gap-4'>
            <button
              onClick={() => scrollToSection('about')}
              className='text-left text-[#5C4033] hover:text-[#8B7355] transition-colors'
            >
              회사 소개
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className='text-left text-[#5C4033] hover:text-[#8B7355] transition-colors'
            >
              철학
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className='text-left text-[#5C4033] hover:text-[#8B7355] transition-colors'
            >
              프로젝트
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='text-left text-[#5C4033] hover:text-[#8B7355] transition-colors'
            >
              문의하기
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
