import Link from "next/link";
import { Button } from "./ui/button";
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/contact">
          <h1 className="text-4xl font-semibold">
            Ananya <span className="text-accent">Garg</span>
          </h1>
        </Link>
        {/* Desktop Nav & Hire Me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button variant="primary" size="md">
            Hire Me
          </Button>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
