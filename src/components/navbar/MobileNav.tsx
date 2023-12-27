import { Logo, Profile, Menu } from "@/svg/view";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileNav = () => {
  const router = useRouter();

  const handlNavigate = (link: string) => {
    router.push(link);
  };
  return (
    <nav className="lg:flex hidden h-[90px] flex-row items-center justify-between container-p">
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button">
              <Menu color="#f2360a" size={20} />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu flex flex-col gap-4  p-4 w-[250px] h-full bg-base-200 text-base-content">
              <li>
                <div>My Profile</div>
              </li>
              <li className="active:bg-transparent">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay w-full l-1125 text-text232"
                  onClick={() => handlNavigate("/about")}
                >
                  About
                </label>
              </li>
              <li className="active:bg-transparent">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay w-full l-1125 text-text232"
                  onClick={() => handlNavigate("/menu")}
                >
                  Menu
                </label>
              </li>
              <li className="active:bg-transparent">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay w-full l-1125 text-text232"
                  onClick={() => handlNavigate("/career")}
                >
                  Careers
                </label>
              </li>
              <li className="active:bg-transparent">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay w-full l-1125 text-text232"
                  onClick={() => handlNavigate("/order")}
                >
                  Oreder
                </label>
              </li>
              <li className="active:bg-transparent">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay w-full l-1125 text-text232"
                  onClick={() => handlNavigate("/contact")}
                >
                  Contact
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <Profile color="#F2360A" />
      </div>
    </nav>
  );
};

export default MobileNav;
