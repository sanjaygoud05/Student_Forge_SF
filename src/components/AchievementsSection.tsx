"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function AchievementsSection() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const scrollPositionRef = useRef(0);
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest('button')) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
      setPosition({ x: 0, y: 0 });
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section className="py-24 px-6 bg-[#f8f9fa]">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3646] mb-3">
            Our Achievements
          </h2>
          <p className="text-base text-[#1a3646]/50 max-w-2xl mx-auto">
            Celebrating milestones and success stories from our journey of empowering students and startups.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-[#fbb03b]/50"
              onClick={() => card.link ? window.open(card.link, '_blank') : setActive(card)}
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={card.src}
                  alt={card.title}
                  className={`w-full h-full object-cover ${index === 1 ? 'object-top' : index === 2 ? 'object-top' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3646] mb-3 group-hover:text-[#fbb03b] transition-colors duration-300">{card.title}</h3>
                <p className="text-sm text-[#1a3646]/70 mb-5 leading-relaxed">{card.shortDescription}</p>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#1a3646] rounded-full hover:bg-[#fbb03b] transition-all duration-300 shadow-md hover:shadow-lg">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {active && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                onClick={() => setActive(null)}
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  ref={popupRef}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl cursor-move"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                  }}
                >
                  {/* Header */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={active.src}
                      alt={active.title}
                      className={`w-full h-full ${active.title.includes("CMRIT") ? 'object-contain' : 'object-cover'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button
                      onClick={() => setActive(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <X size={20} className="text-[#1a3646]" />
                    </button>
                  </div>

                  {/* Content */}
                  <div 
                    className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-16rem)] scrollbar-hide lenis"
                    data-lenis-prevent
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a3646] mb-6">{active.title}</h3>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#1a3646] mb-3 hover:text-[#fbb03b] transition-colors duration-300 cursor-default">About This Achievement</h4>
                      <div className="text-[#1a3646]/70 leading-relaxed hover:bg-[#f8f9fa] p-2 rounded-lg transition-colors duration-300 cursor-default">
                        {active.description.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-4' : ''}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    {/* Gallery */}
                    {active.gallery && active.gallery.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-[#1a3646] mb-3 hover:text-[#fbb03b] transition-colors duration-300 cursor-default">Gallery</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {active.gallery.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${active.title} ${idx + 1}`}
                              className={`w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${
                                active.title.includes("BITS") && idx === 1 ? 'object-[top_35%]' : 
                                active.title.includes("BITS") && idx === 3 ? 'object-[top_25%]' : ''
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats */}
                    {active.stats && (
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {active.stats.map((stat, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl p-4 text-center border border-gray-100 hover:border-[#fbb03b]/50 hover:shadow-md transition-all duration-300 cursor-pointer">
                            <p className="text-2xl font-bold text-[#fbb03b]">{stat.value}</p>
                            <p className="text-sm text-[#1a3646]/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Link Button */}
                    {active.link && (
                      <div className="mt-6">
                        <a
                          href={active.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1a3646] rounded-full hover:bg-[#fbb03b] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Read Full Article
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const cards = [
  {
    title: "Featured in Startup By DOC",
    shortDescription: "Student Forge, founded by Jashwanth Sonti, is emerging as one of India's most student-centric learning platforms born directly from the founder's own journey through confusion, lack of guidance, and the struggle to find direction.",
    src: "/1st-card.png",
    description: "Student Forge, founded by Jashwanth Sonti, is emerging as one of India's most student-centric learning platforms born directly from the founder's own journey through confusion, lack of guidance, and the struggle to find direction. After completing his 10th grade, Jashwanth took an unconventional path by joining a Diploma program to explore new possibilities. His passion for technology led him to pursue B.Tech, shifting departments from EEE to CSE - a dream move, but one filled with challenges. Entering straight into second year with no foundational knowledge, he found himself overwhelmed with no mentorship, no roadmap, and no structured support system. This struggle led to the creation of Student Forge - a platform designed 'For Students. By Students.' to bridge the gap between college education and real-world industry requirements through skill-based learning, practical projects, peer-driven mentorship, and guidance for academic and career clarity.",
    gallery: [
      "/about-torch-new.jpg",
      "/about-torch.png",
      "/forge-bg.png",
      "/mission-forge.png",
    ],
    stats: [
      { value: "Featured", label: "In Article" },
      { value: "Jashwanth", label: "Founder" },
    ],
    link: "https://startupbydoc.com/student-forge-the-student-led-platform-built-from-a-founders-struggle/",
  },
  {
    title: "Featured in CMRIT Shades 2026 Magazine",
    shortDescription: "Student Forge was proudly featured in the CMRIT Shades 2026 college magazine under the Student Startups section. Jashwanth Sonti, a B.Tech graduate in Artificial Intelligence & Machine Learning (2024), is a passionate young entrepreneur and mentor dedicated to transforming student careers.",
    src: "/cmrit-card-main.jpeg",
    description: "Student Forge was proudly featured in the CMRIT Shades 2026 college magazine under the Student Startups section. Jashwanth Sonti, a B.Tech graduate in Artificial Intelligence & Machine Learning (2024), is a passionate young entrepreneur and mentor dedicated to transforming student careers.\n\nSpark that launched Student Forge\n\nThe spark behind Student Forge came from Jashwanth Sonti's own struggle as a student. After shifting from EEE to CSE in B.Tech without any foundational knowledge, he faced constant confusion, fear, and a complete lack of guidance. There was no mentorship, no roadmap, and no structured support system to help him navigate this transition. This personal challenge made him realize that many students silently go through the same phase. That realization became the foundation for Student Forge — a platform he wished existed during his own journey.\n\nBiggest challenge as a founder\n\nOne of the biggest challenges Jashwanth faced was building something meaningful from uncertainty while carrying the responsibility of trust placed in him. After graduation, he worked in an MNC and saved his salary to fund the idea. The turning point came when his family believed in his vision and contributed their own savings. That support became both motivation and pressure — pushing him to create a platform that genuinely helps students rather than just building another startup.\n\nStay innovative in such a fast-moving industry\n\nJashwanth stays innovative by keeping Student Forge deeply connected to real student problems. The platform is built \"For Students, By Students,\" ensuring that solutions are practical, relatable, and constantly evolving. By focusing on skill-based learning, real-world projects, peer-driven mentorship, and career clarity, he ensures the platform adapts to what students actually need — not just what traditional systems offer. His innovation comes from listening, observing, and continuously improving based on student experiences.",
    gallery: [],
    stats: [
      { value: "2026", label: "Edition" },
      { value: "CMRIT", label: "Featured In" },
    ],
  },
  {
    title: "Invited by BITS Pilani E-Cell for LAUNCHPAD E-Summit 2026",
    shortDescription: "Received an invitation from the E-Cell at BITS Pilani Hyderabad Campus to participate in the LAUNCHPAD E-Summit 2026 internship initiative, recognizing our commitment to student development and industry collaboration.",
    src: "/bits card-img.jpeg",
    description: "Received an invitation from the E-Cell at BITS Pilani Hyderabad Campus to participate in the LAUNCHPAD E-Summit 2026 internship initiative, recognizing our commitment to student development and industry collaboration. This invitation reflects our growing reputation in the startup ecosystem and our dedication to bridging the gap between academia and industry through meaningful internship opportunities.",
    gallery: [
      "/bits-card-inside-img.jpeg",
      "/bits-card-inside-img2.jpeg",
      "/bits-card-inside-img3.jpeg",
      "/bits-card-inside-img4.jpeg",
    ],
    stats: [
      { value: "BITS", label: "Institution" },
      { value: "E-Summit", label: "Event" },
    ],
  },
  {
    title: "Knowledge Partner & Jury at SRM Hackathon 10.0",
    shortDescription: "Student Forge was invited by the team behind SRM Hackathon 10.0 at SRM University, Chennai as a Knowledge Partner and to serve on the Jury Panel, reflecting our commitment to fostering innovation and supporting student talent.",
    src: "/srm card.jpeg",
    description: "Student Forge was invited by the team behind SRM Hackathon 10.0 at SRM University, Chennai as a Knowledge Partner and to serve on the Jury Panel. This recognition reflects our commitment to fostering innovation, supporting student talent, and contributing to the entrepreneurial and technology ecosystem. Our involvement in such prestigious events demonstrates our expertise and dedication to nurturing the next generation of innovators.",
    gallery: [
      "/srm-inside-img1.jpeg",
      "/srm-inside-img2.jpeg",
      "/srm-inside-img3.jpeg",
      "/srm-inside-img4.jpeg",
    ],
    stats: [
      { value: "SRM", label: "University" },
      { value: "Hackathon", label: "Event" },
    ],
  },
  {
    title: "Supported TGIC Innovation Panchayat in Khammam",
    shortDescription: "Student Forge proudly supported the successful organization of the TGIC Innovation Panchayat in Khammam District, contributing to the promotion of innovation, entrepreneurship, and collaboration among students, startups, and the local ecosystem.",
    src: "/tgic-card.jpeg",
    description: "Student Forge proudly supported the successful organization of the TGIC Innovation Panchayat in Khammam District, contributing to the promotion of innovation, entrepreneurship, and collaboration among students, startups, and the local ecosystem. This initiative brought together diverse stakeholders to foster a culture of innovation and provided a platform for aspiring entrepreneurs to showcase their ideas and connect with mentors and investors.",
    gallery: [
      "/tgic-inside-img1.jpeg",
      "/tgic-inside-img2.jpeg",
      "/tgic-inside-img3.jpeg",
      "/tgic-inside-img4.jpeg",
    ],
    stats: [
      { value: "TGIC", label: "Partner" },
      { value: "Khammam", label: "Location" },
    ],
  },
  {
    title: "Internship Hiring Partner for WE Hub GYIP Internship Drive",
    shortDescription: "Student Forge was invited by WE Hub as an Internship Hiring Partner for the Grassroots Youth Innovation Program (GYIP) Internship Drive, reflecting our commitment to creating meaningful opportunities for young innovators.",
    src: "/we-hub-card.jpeg",
    description: "Student Forge was invited by WE Hub as an Internship Hiring Partner for the Grassroots Youth Innovation Program (GYIP) Internship Drive. This collaboration reflects our commitment to creating meaningful opportunities for young innovators and supporting the startup and entrepreneurship ecosystem. Through this partnership, we aim to provide valuable internship experiences that bridge the gap between academic learning and real-world industry requirements.",
    gallery: [
      "/we-hub-inside-img1.jpeg",
      "/we-hub-inside-img2.jpeg",
      "/we-hub-inside-img3.jpeg",
      "/we-hub-inside-img4.jpeg",
    ],
    stats: [
      { value: "WE Hub", label: "Partner" },
      { value: "GYIP", label: "Program" },
    ],
  },
];
