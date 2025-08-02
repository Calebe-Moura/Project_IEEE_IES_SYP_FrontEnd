import Logo from '../assets/ies_syp_logo.png';


export function Header() {
  return (
    <header>
      <img
        alt="IES Logo"
        loading="lazy"
        width="100"
        height="100"
        decoding="async"
        src={Logo.src}
      />

      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/Abount_us">About Us</a></li>
          <li><a href="/Program">Program</a></li>
          <li><a href="/Venue">Venue</a></li>
          <li><a href="/Sponsors">Sponsors</a></li>
          <li><a href="/Travel_Grant">Travel Grant</a></li>
          <li><a href="/Apply_for_Host">Apply for Host</a></li>
        </ul>
      </nav>

      <button>Register Now</button>
     
    </header>
  );
}