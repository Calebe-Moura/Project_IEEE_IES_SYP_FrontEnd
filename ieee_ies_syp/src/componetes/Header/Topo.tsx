import { Logo } from "./Logo";
import { Navbar } from "./Navbar";


export function Header() {
  return (
    <header className="bg-white inline-flex items-center justify-between w-full px-4 py-4 z-20 sm:px-8">
      
      <Logo/>
      <Navbar/>      
    </header>
  );
}