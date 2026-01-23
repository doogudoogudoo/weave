'use client';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Network, Globe, Zap } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Connect Hub',
      description:
        '기업과 프리랜서를 연결하는 협업 플랫폼으로, 프로젝트 매칭부터 완료까지 전 과정을 지원합니다',
      icon: Network,
      color: '#8B7355',
      status: '운영 중',
      impact: '1,500+ 성공적인 매칭',
    },
    {
      title: 'Community Weave',
      description:
        '지역 커뮤니티를 활성화하고 이웃 간의 연결을 강화하는 소셜 네트워크 서비스입니다',
      icon: Globe,
      color: '#D4A574',
      status: '베타 테스트',
      impact: '50개 지역 커뮤니티 참여',
    },
    {
      title: 'Skill Exchange',
      description:
        '재능과 지식을 교환하는 플랫폼으로, 서로의 강점을 나누며 함께 성장하는 문화를 만듭니다',
      icon: Zap,
      color: '#6B8E23',
      status: '개발 중',
      impact: '2026년 1분기 출시 예정',
    },
  ];

  return (
    <section id='projects' className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-[#5C4033] mb-4'>
            진행 중인 프로젝트
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#8B7355] via-[#D4A574] to-[#6B8E23] mx-auto rounded-full'></div>
          <p className='mt-6 text-xl text-[#6B5D52] max-w-3xl mx-auto'>
            연결의 가치를 실현하는 다양한 프로젝트를 진행하고 있습니다
          </p>
        </div>

        <div className='mb-16 relative rounded-2xl overflow-hidden shadow-2xl'>
          <ImageWithFallback
            src='https://images.unsplash.com/photo-1757085242652-f8cd4d3de889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwcGVvcGxlfGVufDF8fHx8MTc2OTEwNzY1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            alt='Creative Workshop'
            className='w-full h-[400px] object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#5C4033]/80 to-transparent flex items-end'>
            <div className='p-8 md:p-12 text-white'>
              <h3 className='text-3xl md:text-4xl mb-4'>
                혁신적인 연결 솔루션
              </h3>
              <p className='text-lg md:text-xl max-w-2xl'>
                기술과 인간미를 결합하여 의미있는 연결을 만들어갑니다
              </p>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className='bg-white border-2 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 duration-300'
                style={{ borderColor: `${project.color}30` }}
              >
                <div
                  className='w-16 h-16 rounded-xl flex items-center justify-center mb-6'
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <Icon size={32} style={{ color: project.color }} />
                </div>

                <div className='mb-4 flex items-center gap-2'>
                  <span
                    className='px-3 py-1 rounded-full text-sm text-white'
                    style={{ backgroundColor: project.color }}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className='text-2xl text-[#5C4033] mb-3'>
                  {project.title}
                </h3>

                <p className='text-[#6B5D52] mb-4 leading-relaxed'>
                  {project.description}
                </p>

                <div className='pt-4 border-t border-gray-200'>
                  <p className='text-sm' style={{ color: project.color }}>
                    {project.impact}
                  </p>
                </div>

                <button
                  className='mt-6 flex items-center gap-2 transition-colors'
                  style={{ color: project.color }}
                >
                  <span>자세히 보기</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        <div className='mt-16 bg-gradient-to-br from-[#8B7355]/10 via-[#D4A574]/10 to-[#6B8E23]/10 p-12 rounded-2xl text-center'>
          <h3 className='text-3xl text-[#5C4033] mb-4'>
            함께 만들어갈 프로젝트가 있으신가요?
          </h3>
          <p className='text-lg text-[#6B5D52] mb-8'>
            연결의 가치를 실현하는 여정에 함께하세요
          </p>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='px-8 py-4 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5D52] transition-colors shadow-lg inline-flex items-center gap-2'
          >
            <span>프로젝트 제안하기</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
