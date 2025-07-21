"use client";
import { useState } from "react";
import {
  HiOutlineChartBar,
  HiOutlineCash,
  HiMenu,
  HiOutlineLogout,
} from "react-icons/hi";
import Link from "next/link";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section
      className={`relative bg-neutral text-base-300 transition-all duration-300 rounded-xl m-2 ${
        collapsed ? "w-16" : "w-40"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <div className="text-xl font-bold">NEXELL</div>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-ghost btn-sm text-base-300 hover:bg-base-300 hover:text-neutral p-1 rounded"
        >
          <HiMenu size={20} />
        </button>
      </div>

      <ul className="menu px-2 w-full ">
        <li className="menu-item">
          <Link
            href="/ingresos"
            className={`flex items-center gap-2 text-xs transition-all hover:bg-base-300 hover:text-neutral p-2 rounded-xl ${
              collapsed ? "justify-center" : "justify-start"
            }`}
          >
            <HiOutlineCash size={18} />
            {!collapsed && "Ingresos"}
          </Link>
        </li>
        <li className="menu-item">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 text-xs transition-all hover:bg-base-300 hover:text-neutral p-2 rounded-xl ${
              collapsed ? "justify-center" : "justify-start"
            }`}
          >
            <HiOutlineChartBar size={18} />
            {!collapsed && "Dashboard"}
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-4 left-0 w-full px-2">
        <button
          className={`w-full flex items-center gap-2 text-xs transition-all hover:bg-base-300 hover:text-neutral p-2 rounded-xl ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          <HiOutlineLogout size={18} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </section>
  );
};
