import { Logo, Profile, Menu } from "@/svg/view";
import Link from "next/link";

const MobileNav = () => {
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
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-[250px] h-full bg-base-200 text-base-content">
              <li className="active:bg-transparent">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <a>Sidebar Item 1</a>
                </label>
              </li>
              <li>
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <a>Sidebar Item 2</a>
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
