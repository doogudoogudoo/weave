'use client';
import LogoBig from './Logo_big';
import { WeavePattern } from './WeavePattern';
import Image from 'next/image';

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* 배경 직조 패턴 */}
      <div className='absolute inset-0 opacity-30'>
        <WeavePattern />
      </div>

      {/* 콘텐츠 */}
      <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
        <div className='mb-8 flex justify-center'>
          {/* <div className='w-20 h-20 bg-gradient-to-br from-[#8B7355] via-[#D4A574] to-[#6B8E23] rounded-2xl flex items-center justify-center shadow-xl'>
            <span className='text-white text-4xl'>⋈</span>

            <Image
              src={'/weave-icon-white.png'}
              alt='Weave Icon'
              width={100000}
              height={100000}
            />
          </div> */}
          <LogoBig />
        </div>

        <h1 className='text-5xl md:text-7xl mb-6 text-[#5C4033] font-title'>
          사람과 사람을
          <br />
          <span className='text-[#8B7355] font-title'>연결</span>
          하는 힘
        </h1>

        <p className='text-xl md:text-2xl text-[#6B5D52] mb-12 leading-relaxed font-p font-bold'>
          직조하듯 촘촘하게, 따뜻하게
          <br />
          우리는 연결의 가치를 만들어갑니다
        </p>

        <div className='flex flex-wrap gap-4 justify-center'>
          <button
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='px-8 py-4 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5D52] transition-colors shadow-lg font-pretendard-bold'
          >
            더 알아보기
          </button>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='px-8 py-4 border-2 border-[#8B7355] text-[#8B7355] rounded-lg hover:bg-[#8B7355] hover:text-white transition-colors font-pretendard-bold '
          >
            문의하기
          </button>
        </div>
      </div>

      {/* 하단 장식 웨이브 */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          viewBox='0 0 1440 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z'
            fill='white'
          />
        </svg>
      </div>
    </section>
  );
}
