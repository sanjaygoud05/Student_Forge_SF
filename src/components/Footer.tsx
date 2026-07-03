import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-[#1a3646] pt-16 pb-12 px-8 flex justify-center border-t border-gray-200">
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {/* Brand Block */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="transition-transform hover:scale-105">
              <img
                src="https://ik.imagekit.io/dypkhqxip/sflogo?updatedAt=1774952380858"
                alt="Student Forge Logo"
                className="h-10 lg:h-12"
              />
            </Link>
            <div className="h-8 w-[1px] bg-gray-300" />
            <img
              src="https://ik.imagekit.io/dypkhqxip/platform"
              alt="Student platform Logo"
              className="h-8 lg:h-10"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="https://aartisto.com/wp-content/uploads/2020/11/msme1.png" alt="MSME" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ministry_of_Corporate_Affairs_India.svg/1280px-Ministry_of_Corporate_Affairs_India.svg.png" alt="MCA" className="h-8" />
            </div>
            <p className="text-[11px] font-semibold opacity-40 uppercase tracking-widest">Official Affiliations</p>
          </div>
          <div className="flex items-center gap-6 text-[#1a3646] opacity-60 mt-4">
            <Link href="#" className="hover:text-[#fbb03b] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.64 9.08 8.4 9.83v-6.95h-2.53v-2.88h2.53v-2.19c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.88h-2.33v6.95c4.76-.75 8.4-4.86 8.4-9.83 0-5.5-4.46-9.96-9.96-9.96z" /></svg></Link>
            <Link href="#" className="hover:text-[#fbb03b] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg></Link>
            <Link href="#" className="hover:text-[#fbb03b] transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg></Link>
          </div>
        </div>

        {/* Center Locations */}
        <div className="flex flex-col gap-10">
          <a
            href="https://maps.google.com/?q=HF2R%2BCCV,+Devender+Colony,+Kompally,+Hyderabad,+Telangana+500100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 group text-left"
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a3646] group-hover:text-[#fbb03b] transition-colors">Hyderabad Office</h4>
            <p className="text-xs font-normal opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">
              HF2R+CCV, Devender Colony,<br />
              Kompally, Hyderabad, 500100
            </p>
          </a>
          <a
            href="https://maps.google.com/?q=H.no+10-11-860/5,+Bypass+Road,+Raparthi+Nagar,+Khammam,+507003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 group text-left"
          >
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a3646] group-hover:text-[#fbb03b] transition-colors">Khammam Office</h4>
            <p className="text-xs font-normal opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">
              H.no 10-11-860/5, Bypass Road,<br />
              Raparthi Nagar, Khammam, 507003
            </p>
          </a>
        </div>

        {/* Contact Block */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a3646]">Direct Support</h4>
            <div className="flex flex-col gap-3 text-xs font-normal">
              <a
                href="tel:+916304218064"
                className="flex items-center gap-3 font-medium text-[#1a3646] hover:text-[#fbb03b] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#fbb03b]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 6304218064
              </a>
              <a
                href="mailto:info@studentforge.in"
                className="flex items-center gap-3 font-medium text-[#1a3646] hover:text-[#fbb03b] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#fbb03b]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@studentforge.in
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-300 mt-auto">
            <p className="text-[10px] font-medium tracking-wide opacity-100">
              © 2026 Student Forge. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
