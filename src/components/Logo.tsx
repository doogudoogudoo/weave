import Image from 'next/image';

export default function Logo({ style }: { style?: string }) {
  return (
    <div
      className={
        'w-10 h-10 bg-gradient-to-br from-[#8B7355] via-[#D4A574] to-[#6B8E23] rounded-xl flex items-center justify-center shadow-xl' +
        style
      }
    >
      <Image src='/weave.svg' alt='Weave Logo' width={30} height={30} />
    </div>
  );
}
