import Image from 'next/image';

export default function LogoBig({ style }: { style?: string }) {
  return (
    <div
      className={
        'w-30 h-30 bg-gradient-to-br from-[#8B7355] via-[#D4A574] to-[#6B8E23] rounded-4xl flex items-center justify-center shadow-xl' +
        style
      }
    >
      <Image src='/weave.svg' alt='Weave Logo' width={100} height={100} />
    </div>
  );
}
