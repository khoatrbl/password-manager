import { assets } from "../assets/assets.ts";
import SideBarNav from "./SidebarNav.tsx";

export default function Sidebar() {
  return (
    <>
      <div className="h-screen w-full flex justify-center bg-gray-500">
        <div className="m-5">
          {/* Logo and app name */}
          <div className="block">
            <div className="flex justify-center mb-3">
              <div className="w-32">
                <img src={assets.logo} />
              </div>
            </div>
            <div className="flex items-center justify-center font-bold lg:text-2xl md:text-md text-sm text-center">
              Password Manager
            </div>
          </div>

          {/*Nav*/}
          <div className="block">
            <div>
              <SideBarNav icon={assets.dashboard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
