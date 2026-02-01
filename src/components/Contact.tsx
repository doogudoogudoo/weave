'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import { WeavePattern } from './WeavePattern';

export function Contact() {
  return (
    <section
      id='contact'
      className='py-24 px-6 bg-gradient-to-b from-white to-[#F5F1ED] relative overflow-hidden'
    >
      {/* 배경 패턴 */}
      <div className='absolute bottom-0 left-0 w-full h-1/2 opacity-10'>
        <WeavePattern />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-[#5C4033] mb-4 font-title'>
            문의하기
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#8B7355] via-[#D4A574] to-[#6B8E23] mx-auto rounded-full'></div>
          <p className='mt-6 text-xl text-[#6B5D52] max-w-3xl mx-auto font-p font-bold'>
            새로운 연결의 시작, 함께 이야기 나눠요
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* 연락처 정보 */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl text-[#5C4033] mb-6 font-pretendard'>
                연락처 정보
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#8B7355]/20'>
                  <div className='w-12 h-12 bg-[#8B7355]/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='text-[#8B7355]' size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-[#6B5D52] mb-1'>이메일</p>
                    <a
                      href='mailto:hello@weave.com'
                      className='text-lg text-[#5C4033] hover:text-[#8B7355]'
                    >
                      weave.people@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#D4A574]/20'>
                  <div className='w-12 h-12 bg-[#D4A574]/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='text-[#D4A574]' size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-[#6B5D52] mb-1'>전화</p>
                    <a
                      href='tel:+82-2-1234-5678'
                      className='text-lg text-[#5C4033] hover:text-[#D4A574]'
                    >
                      +82-2-1234-5678
                    </a>
                  </div>
                </div> */}

                <div className='flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#6B8E23]/20'>
                  <div className='w-12 h-12 bg-[#6B8E23]/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='text-[#6B8E23]' size={24} />
                  </div>
                  <div>
                    <p className='text-sm text-[#6B5D52] mb-1'>주소</p>
                    <p className='text-lg text-[#5C4033]'>
                      서울 영등포구 국제금융로2길 17 시티플라자
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-[#8B7355] to-[#6B8E23] p-8 rounded-2xl text-white'>
              <h4 className='text-xl mb-4 font-pretendard-bold'>영업 시간</h4>
              <p className='mb-2'>월요일 - 금요일: 09:00 - 18:00</p>
              <p className='opacity-80'>주말 및 공휴일: 휴무</p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className='bg-white p-8 rounded-2xl shadow-xl'>
            <h3 className='text-2xl text-[#5C4033] mb-6'>문의 보내기</h3>

            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm text-[#5C4033] mb-2'
                >
                  이름 *
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-colors'
                  placeholder='홍길동'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm text-[#5C4033] mb-2'
                >
                  전화번호 *
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-colors'
                  placeholder='010-0000-0000'
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm text-[#5C4033] mb-2'
                >
                  제목 *
                </label>
                <input
                  type='text'
                  id='subject'
                  className='w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-colors'
                  placeholder='문의 제목을 입력하세요'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm text-[#5C4033] mb-2'
                >
                  메시지 *
                </label>
                <textarea
                  id='message'
                  rows={5}
                  className='w-full px-4 py-3 border border-[#8B7355]/30 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-colors resize-none'
                  placeholder='문의 내용을 자세히 작성해주세요'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full px-8 py-4 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5D52] transition-colors shadow-lg font-pretendard-bold'
              >
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
