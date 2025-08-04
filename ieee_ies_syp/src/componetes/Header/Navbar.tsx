import Link from 'next/link';
import '../../app/globals.css';
import MenuPopupState from './Button_Navbar';


export function Navbar() {
  return (
    <nav className="hidden items-center gap-6 lg:flex mr-10 px-4 py-2">
      <Link href="/" className="text-gray-500 hover:text-black text-xl flex items-center gap-1">
        Home
      </Link>

      <Link href="/About_us" className="text-gray-500 hover:text-black text-xl flex items-center gap-1">
        About Us
      </Link>
      
      
      <MenuPopupState
        label_bnt="Program"
        items={[
          { label: 'Scheduler', url: '/Program' },
          { label: 'Speakers', url: '/Speakers' },
          { label: 'Poster Session', url: '/Poster_Session' },
        ]}
        
      />

       <MenuPopupState
        label_bnt="Venue"
        items={[
          { label: 'Congress Venue', url: '/Venue' },
          { label: 'Visa Information', url: '/Visa_Information' },
                             
        ]}
      /> 

      <Link href="/Travel_Grant" className="text-gray-500 hover:text-black text-xl flex items-center gap-1">
        Travel Grant
      </Link>

      <Link href="/Apply_for_Host" className="text-gray-500 hover:text-black text-xl flex items-center gap-1">
        Apply for 2026 Host
      </Link>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://registration.ies-syp.ieee.eventizer.io/#/form-choice/996"
        className="inline-flex items-center justify-center rounded-md bg-[#215F9A] px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 animate-[shadow-pulse_2s_ease-in-out_infinite] hover:animate-none"
        style={{
          animationName: 'shadow-pulse',
          animationDuration: '4s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
        }}
        id='bnt-register'
      >
        Register Now
      </a>
    </nav>
  );
}
