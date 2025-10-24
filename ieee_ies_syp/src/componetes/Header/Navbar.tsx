import MenuDropdown from "./MenuDropdown";
import "./style.css";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <nav>
      <Button variant="contained" component="a" href="#" id="basic-button">
        Home
      </Button>
      <Button variant="contained" component="a" href="#" id="basic-button">
        About Us
      </Button>
      <MenuDropdown
        buttonLabel={"Program"}
        options={[
          { label: "Schedule", href: "#" },
          { label: "Speakers", href: "#" },
          { label: "Multicultural Night", href: "#" },
          { label: "Poster Session", href: "#" },
        ]}
      />
      <MenuDropdown
        buttonLabel={"Venue"}
        options={[
          { label: "Congress Venue", href: "#" },
          { label: "Visa Information", href: "#" },
          { label: "About Tunisia", href: "#" },
        ]}
      />
      <Button variant="contained" component="a" href="#" id="basic-button">
        Sponsors
      </Button>
      <Button variant="contained" component="a" href="#" id="basic-button">
        Travel Grant
      </Button>
      <Button variant="contained" component="a" href="#" id="basic-button">
        Apply For 2026 Host
      </Button>
      <Button
        variant="contained"
        component="a"
        href="#"
        id="basic-button1"
      > Registration Closed</Button>
    </nav>
  );
}
