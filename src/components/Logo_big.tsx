import Image from 'next/image';

export default function LogoBig({ style }: { style?: string }) {
  return (
    <div
      className={
        'w-20 h-20 bg-gradient-to-br from-[#8B7355] via-[#D4A574] to-[#6B8E23] rounded-3xl flex items-center justify-center shadow-xl' +
        style
      }
    >
      <Image src='/weave.svg' alt='Weave Logo' width={60} height={60} />
    </div>
  );
}
