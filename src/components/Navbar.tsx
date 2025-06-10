"use client";

import CartIcon from "@/assets/icons/cart.png";
import UserIcon from "@/assets/icons/user.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Espaço vazio para centralizar o logo */}
        <div className="flex-1" />

        {/* Logo */}
        <Link href="/" className="text-2xl text-white flex-1 text-center">
          GAMESHOP MAO
        </Link>

        {/* Ações */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <Link
            href="/cart"
            className="text-white hover:text-purple-400 text-xl"
          >
            <Image src={CartIcon} alt="cart" width={25} height={25} />
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-purple-400 text-xl"
          >
            <Image src={UserIcon} alt="user" width={28} height={28} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
