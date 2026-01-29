'use client';
import { WeavePattern } from './WeavePattern';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';

export function Philosophy() {
  const values = [
    {
      description: [
        'WEAVE가 만드는 콘텐츠는 말하는 미디어가 아니라, 함께 대화하는 미디어입니다.',
        '일방적으로 전달되는 메시지가 아닌, 사람과 사람을 잇는 소통의 다리가 되고자 합니다.',
      ],
      color: '#8B7355',
    },
    {
      description: [
        '우리는 빠르게 소비되고 사라지는 이야기를 만들지 않습니다.',
        '보고 난 뒤에도 마음에 남아, 한 번쯤 더 생각하게 만드는 여운 있는 콘텐츠를 지향합니다.',
      ],
      color: '#D4A574',
    },
    {
      description: [
        '개인의 고민에 귀 기울이며, 그 속에서 지금의 사회를 들여다봅니다.',
        '과장된 서사가 아닌, 시민 한 사람 한 사람의 목소리를 직접 묻고 기록합니다.',
      ],
      color: '#6B8E23',
    },
    {
      description: [
        'WEAVE의 미디어는 보는 것으로 끝나지 않습니다.',
        '참여하고, 공감하고, 함께 완성해 나가는 경험.',
        '그 연결의 과정 자체가 우리가 믿는 미디어의 역할입니다.',
      ],
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

      <div className='bg-white p-12 rounded-2xl shadow-xl max-w-4xl mx-auto mb-20'>
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

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-[#5C4033] mb-4'>
            우리의 철학
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#8B7355] via-[#D4A574] to-[#6B8E23] mx-auto rounded-full'></div>
          <p className='mt-6 text-xl text-[#6B5D52] max-w-3xl mx-auto'>
            직조의 과정처럼, 우리는 각각의 실이 만나 하나의 아름다운 패턴을
            만들어냅니다
          </p>
        </div> */}

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='relative order-2 md:order-1'>
            <div className='space-y-6'>
              {values.map((value, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-lg border-l-4 hover:shadow-xl transition-shadow'
                  style={{ borderColor: value.color }}
                >
                  {/* <h3 className='text-2xl mb-2' style={{ color: value.color }}>
                    {value.title}
                  </h3> */}
                  {value.description.map((line, lineIndex) => (
                    <p key={lineIndex} className='text-[#6B5D52]'>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='relative order-1 md:order-2'>
            <div className='absolute -inset-4 bg-gradient-to-br from-[#8B7355]/20 to-[#6B8E23]/20 rounded-2xl transform -rotate-3'></div>
            <div className='relative rounded-2xl overflow-hidden shadow-xl'>
              {/* <ImageWithFallback
                src='https://images.unsplash.com/photo-1740065592719-052d3e5ec6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHRvZ2V0aGVyJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2OTE1MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Community Together'
                className='w-full h-[500px] object-cover'
              /> */}

              <Image
                src='/post1.jpeg'
                alt='weave company'
                width={5000}
                height={400}
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
