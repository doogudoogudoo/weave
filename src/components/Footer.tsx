'use client';
export function Footer() {
  return (
    <footer className='bg-[#5C4033] text-white py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-[#8B7355] to-[#6B8E23] rounded-lg flex items-center justify-center'>
                <span className='text-white text-xl'>⋈</span>
              </div>
              <h3 className='text-2xl'>Weave</h3>
            </div>
            <p className='text-[#D4A574] leading-relaxed'>
              사람과 사람을 연결하는
              <br />
              따뜻한 기술
            </p>
          </div>

          <div>
            <h4 className='text-lg mb-4'>회사</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#about'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  회사 소개
                </a>
              </li>
              <li>
                <a
                  href='#philosophy'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  철학
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  프로젝트
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg mb-4'>지원</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#contact'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  문의하기
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  지원센터
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg mb-4'>법적 고지</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-[#D4A574] hover:text-white transition-colors'
                >
                  쿠키 정책
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-[#8B7355]/30 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-[#D4A574] text-sm'>
            © 2024 Weave. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <a
              href='#'
              className='text-[#D4A574] hover:text-white transition-colors'
            >
              LinkedIn
            </a>
            <a
              href='#'
              className='text-[#D4A574] hover:text-white transition-colors'
            >
              Instagram
            </a>
            <a
              href='#'
              className='text-[#D4A574] hover:text-white transition-colors'
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
