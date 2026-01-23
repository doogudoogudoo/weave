'use client';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id='about' className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-[#5C4033] mb-4'>
            회사 소개
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#8B7355] via-[#D4A574] to-[#6B8E23] mx-auto rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-[#8B7355]/20 to-[#6B8E23]/20 rounded-2xl transform rotate-3'></div>
            <div className='relative rounded-2xl overflow-hidden shadow-xl'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkxMDM4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Weave Team Collaboration'
                className='w-full h-[400px] object-cover'
              />
            </div>
          </div>

          <div className='space-y-6'>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              Weave는 2024년 설립된 연결 플랫폼 전문 기업입니다. 우리는 사람과
              사람, 조직과 조직을 연결하여 더 나은 협력과 소통의 문화를
              만들어갑니다.
            </p>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              마치 실을 엮어 하나의 튼튼한 직물을 만들듯이, 우리는 각자의 개성과
              강점을 존중하면서도 조화롭게 연결되는 네트워크를 구축합니다.
            </p>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              따뜻한 색감처럼 부드럽고, 직조된 천처럼 견고한 연결을 통해 모두가
              함께 성장하는 생태계를 만들어갑니다.
            </p>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-gradient-to-br from-[#8B7355]/5 to-[#8B7355]/10 p-8 rounded-2xl border border-[#8B7355]/20'>
            <div className='w-14 h-14 bg-[#8B7355] rounded-xl flex items-center justify-center mb-6'>
              <Users className='text-white' size={28} />
            </div>
            <h3 className='text-2xl text-[#5C4033] mb-4'>연결의 힘</h3>
            <p className='text-[#6B5D52]'>
              개인의 역량을 넘어 함께할 때 더 큰 가치를 창출합니다
            </p>
          </div>

          <div className='bg-gradient-to-br from-[#D4A574]/5 to-[#D4A574]/10 p-8 rounded-2xl border border-[#D4A574]/20'>
            <div className='w-14 h-14 bg-[#D4A574] rounded-xl flex items-center justify-center mb-6'>
              <Heart className='text-white' size={28} />
            </div>
            <h3 className='text-2xl text-[#5C4033] mb-4'>따뜻한 협업</h3>
            <p className='text-[#6B5D52]'>
              신뢰와 존중을 기반으로 한 지속가능한 관계를 만듭니다
            </p>
          </div>

          <div className='bg-gradient-to-br from-[#6B8E23]/5 to-[#6B8E23]/10 p-8 rounded-2xl border border-[#6B8E23]/20'>
            <div className='w-14 h-14 bg-[#6B8E23] rounded-xl flex items-center justify-center mb-6'>
              <Sparkles className='text-white' size={28} />
            </div>
            <h3 className='text-2xl text-[#5C4033] mb-4'>혁신의 네트워크</h3>
            <p className='text-[#6B5D52]'>
              다양성이 만나 새로운 아이디어와 솔루션이 탄생합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
