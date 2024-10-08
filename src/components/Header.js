import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Padour from "../images/Padour.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const leftNavigation = [
  { name: "About us", to: "/about", current: true },
  { name: "Services", to: "/services", current: false },
];

const rightNavigation = [
  { name: "Gallery", to: "/gallery", current: false },
  { name: "FAQ", to: "/faq", current: false },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="flex items-center gap-x-6">
            {/* Left Navigation - About us & Services */}
            <div className="flex space-x-4">
              {leftNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0 ">
              <img
                alt="Padour Barbershop Logo"
                src={Padour}
                className="h-16 w-auto rounded-full"
              />
            </div>

            {/* Right Navigation - Gallery & FAQ */}
            <div className="flex space-x-4">
              {rightNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
