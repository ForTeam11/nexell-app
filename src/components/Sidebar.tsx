"use client";
import { useState } from "react";
import { HiOutlineChartBar, HiOutlineCash, HiMenu, HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section
      className={`relative bg-neutral text-base-300 transition-all duration-300 rounded-xl m-4 ${
      collapsed ? "w-16" : "w-48"
      }`}>
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
          <Link href="/ingresos" className={`childlist ${
              collapsed ? "justify-center" : "justify-start"
            }`}
          >
            <HiOutlineCash size={20} />
            {!collapsed && "Ingresos"}
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/dashboard" className={`childlist ${
              collapsed ? "justify-center" : "justify-start"
            }`}
          >
            <HiOutlineChartBar size={20} />
            {!collapsed && "Dashboard"}
          </Link>
        </li>
      </ul>

      <div className="absolute bottom-4 left-0 w-full px-2">
        <button className={`w-full childlist ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          <HiOutlineLogout size={20} />
          {!collapsed && "Logout"}
        </button>
      </div>
    </section>
  );
};