'use client';
import { WeavePattern } from './WeavePattern';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Philosophy() {
  const values = [
    {
      title: '촘촘함',
      description: '세심한 배려로 모든 연결점을 꼼꼼하게 엮어냅니다',
      color: '#8B7355',
    },
    {
      title: '따뜻함',
      description: '사람 중심의 가치로 신뢰를 쌓아갑니다',
      color: '#D4A574',
    },
    {
      title: '견고함',
      description: '오래 지속되는 튼튼한 관계망을 구축합니다',
      color: '#6B8E23',
    },
    {
      title: '유연함',
      description: '변화에 적응하며 함께 성장합니다',
      color: '#B8860B',
    },
  ];

  return (
    <section
      id='philosophy'
      className='py-24 px-6 bg-gradient-to-b from-white to-[#F5F1ED] relative overflow-hidden'
    >
      {/* 배경 패턴 */}
      <div className='absolute top-0 right-0 w-1/3 h-full opacity-10'>
        <WeavePattern />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-[#5C4033] mb-4'>
            우리의 철학
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#8B7355] via-[#D4A574] to-[#6B8E23] mx-auto rounded-full'></div>
          <p className='mt-6 text-xl text-[#6B5D52] max-w-3xl mx-auto'>
            직조의 과정처럼, 우리는 각각의 실이 만나 하나의 아름다운 패턴을
            만들어냅니다
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='relative order-2 md:order-1'>
            <div className='space-y-6'>
              {values.map((value, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-shadow'
                  style={{ borderColor: value.color }}
                >
                  <h3 className='text-2xl mb-2' style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className='text-[#6B5D52]'>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative order-1 md:order-2'>
            <div className='absolute -inset-4 bg-gradient-to-br from-[#8B7355]/20 to-[#6B8E23]/20 rounded-2xl transform -rotate-3'></div>
            <div className='relative rounded-2xl overflow-hidden shadow-xl'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1740065592719-052d3e5ec6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHRvZ2V0aGVyJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2OTE1MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Community Together'
                className='w-full h-[500px] object-cover'
              />
            </div>
          </div>
        </div>

        <div className='bg-white p-12 rounded-2xl shadow-xl max-w-4xl mx-auto'>
          <blockquote className='text-center'>
            <p className='text-2xl md:text-3xl text-[#5C4033] mb-6 leading-relaxed'>
              한 올의 실은 약하지만,
              <br />
              함께 엮이면 그 무엇보다 강해집니다
            </p>
            <footer className='text-lg text-[#8B7355]'>
              — Weave의 핵심 가치
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
