import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-white pt-24 md:pt-32 pb-16 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1600px] bg-[#2d414e] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-12 lg:px-20 lg:py-6 gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-white">
          <div className="bg-[#8ecfcb] text-[#1a3646] px-4 py-1 rounded-md text-[10px] font-normal mb-8 uppercase tracking-wider">
            Our Motto
          </div>
          <h2 className="text-xl lg:text-2xl font-light leading-relaxed mb-10 opacity-85 max-w-md">
            No matter how dark the path is, Student Forge stands beside students at every step toward their dreams.
          </h2>
          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="px-10 py-3 border border-white/30 rounded-full text-sm font-normal hover:bg-white/5 transition-all"
            >
              Learn More
            </Link>
            <Link 
              href="https://platform.studentforge.in" 
              className="px-10 py-3 bg-[#fbb03b] text-[#1a3646] rounded-full text-sm font-normal hover:bg-[#e09e35] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image - Reduced Border Radius */}
        <div className="flex-1 w-full aspect-[4/3] relative rounded-[16px] overflow-hidden">
          <Image 
            src="/our-mission.jpeg"
            alt="Student Forge Community Event"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover scale-105"
          />
        </div>
      </div>
    </section>
  );
}
