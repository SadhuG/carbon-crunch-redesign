"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface SidebarProps {
  logo: StaticImageData;
}

const Sidebar = ({ logo }: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="icon" size="icon">
          <div className="flex h-full w-full flex-col justify-center gap-1">
            <div className="bg-primary-green-darkest h-[3px] w-full rounded-full"></div>
            <div className="bg-primary-green-darkest h-[3px] w-full rounded-full"></div>
            <div className="bg-primary-green-darkest h-[3px] w-full rounded-full"></div>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="bg-primary-green-bg h-full">
          <SheetHeader>
            <SheetTitle>
              <div className="w-52">
                <a href="/">
                  <Image
                    src={logo}
                    alt="Carbon Crunch Logo"
                    width={200}
                    height={50}
                  />
                </a>
              </div>
            </SheetTitle>
            <SheetDescription>
              <div className="text-foreground mt-7 flex flex-col items-center justify-between space-y-7 text-base font-medium">
                {/* nav menu */}

                <Link href={""}>Services</Link>
                <Link href={""}>Blogs</Link>
                <Link href={""}>About Us</Link>
                <Link href={""}>Contact</Link>
                <div className="bg-primary-green-darkest h-px w-full"></div>
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <div className="flex flex-col gap-4">
                <Button variant={"secondary"}>Login</Button>
                <Button>Book Demo</Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
