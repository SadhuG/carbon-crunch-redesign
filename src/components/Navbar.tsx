import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// logo
import logo from "@/assets/carbon-crunch-logo.png";

const Navbar = () => {
  return (
    <nav>
      {/* nav container */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* logo */}
        <div className="flex items-center space-x-4">
          <Link href={""}>
            <Image
              src={logo}
              alt="Carbon Crunch Logo"
              width={200}
              height={50}
            />
          </Link>
        </div>

        <div className="hidden space-x-7 font-medium lg:flex lg:items-center lg:justify-between">
          {/* nav menu */}
          <Link href={""}>Services</Link>
          <Link href={""}>Blogs</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Contact</Link>
        </div>
        {/* nav cta */}
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center justify-between space-x-4 max-md:hidden">
            <Button variant={"secondary"}>Login</Button>
            <Button>Book Demo</Button>
          </div>
          <div className="flex items-center">
            <Sidebar logo={logo} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
