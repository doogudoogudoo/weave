'use client';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id='about' className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-[#5C4033] mb-4'>소개</h2>
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
              WEAVE는 청춘의 감정을 엮어내는 미디어 콘텐츠 스튜디오입니다.
            </p>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              20–30대가 일상 속에서 느끼는 작은 고민과 설렘, 흔들리는 순간들을
              놓치지 않고 진솔한 이야기로 담아내고 있습니다.
            </p>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              우리의 콘텐츠가 일방적으로 전달되는 메시지가 아니라, 누군가에게
              말을 거는 따뜻한 창구가 되길 바랍니다.
            </p>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              소비자의 마음에 닿고 서로 소통하는 미디어를 만들어가고자 합니다.
            </p>
            <p className='text-lg text-[#6B5D52] leading-relaxed'>
              사람과 사람 사이를 공감으로 연결할 수 있도록, WEAVE는 오늘도
              이야기를 엮어갑니다.
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
