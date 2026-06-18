import { Metadata } from 'next';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import AchievementsSection from "@/components/AchievementsSection";
import UpdateSection from "@/components/UpdateSection";
import ImpactSection from "@/components/ImpactSection";
import CollegePartnersSection from "@/components/CollegePartnersSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Student Forge | Empowering Next-Gen Innovators',
  description: 'Student Forge provides tools, mentorship, and a global network to turn academic foundation into professional legacy. Join the national portal for future leaders.',
  keywords: ['Student Forge', 'Education', 'Startup', 'Innovation', 'Mentorship', 'Career Development'],
  openGraph: {
    title: 'Student Forge | Empowering Next-Gen Innovators',
    description: 'Transform your academic foundation into a professional legacy with Student Forge.',
    url: 'https://studentforge.in',
    siteName: 'Student Forge',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <AboutSection />
      <PartnersSection />
      <AchievementsSection />
      <UpdateSection />
      <ImpactSection />

      <QuoteSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
