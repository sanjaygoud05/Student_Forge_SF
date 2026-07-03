import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Student Forge | Mission & Vision',
  description: 'Explore the mission, vision, and core values of Student Forge. We are dedicated to nurturing the next generation of technical and entrepreneurial leaders.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
            Our Foundation
          </div>
          <h1 className="text-4xl lg:text-6xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Our Mission & <span className="text-white">Vision</span>.
          </h1>
          <p className="text-base lg:text-xl text-[#1a3646] opacity-80 max-w-2xl leading-relaxed">
            Student Forge is a dedicated national portal and initiative designed to bridge the gap between academic foundations and professional success.
          </p>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-24 px-6 flex justify-center bg-gray-50 overflow-hidden">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/about-section-img.png"
              alt="Student Forge Mission"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight decoration-[#fbb03b] decoration-4 underline-offset-8">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                To build India's most trusted student empowerment ecosystem, where every student—regardless of background, location, or financial condition—has access to the guidance, opportunities, skills, mentorship, and support needed to achieve their dreams.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight decoration-[#fbb03b] decoration-4 underline-offset-8">Our Mission</h2>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#fbb03b] rounded-full"></div>
                <p className="text-xl text-gray-700 leading-relaxed font-medium pl-4 py-2 bg-gray-50/50 rounded-r-xl border border-gray-100/50 shadow-sm">
                  To bridge the gap between students and opportunities by creating a platform that fosters learning, innovation, entrepreneurship, career growth, leadership, and community engagement through mentorship, industry connections, practical experiences, and transformative programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b] bg-gray-50 px-4 py-2 rounded-full">Our Values</span>
            <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight mt-6">The Pillars of Student Forge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Standardized Excellence", 
                desc: "We are committed to providing every student with access to high-quality learning, industry exposure, and mentorship—ensuring consistent opportunities regardless of their college, city, or background." 
              },
              { 
                title: "Opportunity Through Action", 
                desc: "We believe growth comes from real-world experience. From internships and live projects to hackathons, workshops, and industry collaborations, we help students gain practical skills that prepare them for successful careers." 
              },
              { 
                title: "Building a Connected Ecosystem", 
                desc: "Student Forge is creating a strong network that connects students, colleges, industry leaders, startups, and communities. Together, we foster innovation, collaboration, and career opportunities that empower the next generation of professionals." 
              }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-[#fbb03b]/10 rounded-2xl flex items-center justify-center mb-6 text-[#fbb03b] font-bold text-xl group-hover:bg-[#fbb03b] group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1a3646] mb-4">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
