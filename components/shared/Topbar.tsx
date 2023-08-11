import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

import { fetchUser } from "@/lib/actions/user.actions";

function Topbar() {

  return (
    <nav className='topbar items-center'>
      <Link href='/' className='flex items-center gap-4 text-center mx-auto'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;