
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

import "./Header.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const leftNavigation = [
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
];

const rightNavigation = [
  { name: "Gallery", to: "/gallery"},
  { name: "FAQ", to: "/faq" },
];

export default function Header() {
 
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <NavLink to="/" aria-label="Go to home">
            <img
              alt="Logo"
              src="/images/Padour.png"
              className="h-10 w-auto ml-2"
            />
            </NavLink>
            <h1 className="Title">&nbsp; MC the Barber</h1>
          </div>
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton 
            className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="hidden sm:flex items-center gap-x-6">
            {/* Left Navigation - About us & Services */}
            <div className="flex space-x-20">
              {leftNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-black hover:bg-gray-700 hover:text-white",
                      "rounded-md px-4 py-2 text-xl font-medium"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0 mx-16">
            <NavLink to="/" aria-label="Go to home">
              <img
                alt="Logo"
               src="/images/Padour.png"
                className="h-16 w-auto rounded-full"
              />
              </NavLink>
            </div>

            {/* Right Navigation - Gallery & FAQ */}
            <div className="flex space-x-20">
              {rightNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-black hover:bg-gray-700 hover:text-white",
                      "rounded-md px-4 py-2 text-xl font-medium"
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
      {/* Mobile Menu */}

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {leftNavigation.concat(rightNavigation).map((item) => (
            <DisclosureButton key={item.name} as={NavLink} to={item.to}
            className={classNames(
              "block rounded-md px-3 py-2 text-base font-medium",
              item.current
                ? "bg-gray-900 text-white"
                : "text-black hover:bg-gray-700 hover:text-white"
            )}
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            {item.name}
              </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}