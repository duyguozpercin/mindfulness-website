"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";

function getNavLinkClass(pathname: string, href: string, exact = false) {
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return `transition-colors duration-200 hover:text-[#b8839a] ${
    isActive
      ? "text-[#b8839a] border-b-2 border-[#f2a7c3]"
      : "text-[#5c5470]"
  }`;
}

function getMobileNavLinkClass(pathname: string, href: string, exact = false) {
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return `block rounded-xl px-3 py-2.5 text-sm transition-colors ${
    isActive
      ? "bg-[#fdf0f5] text-[#b8839a]"
      : "text-[#5c5470] hover:bg-[#fdf0f5]"
  }`;
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isProductsActive = pathname.startsWith("/products");

  return (
    <div className="flex min-h-screen flex-col bg-[#fdfaf7] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#f0e6ee] bg-[#fdfaf7]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f7c5d5] to-[#c8dff5] text-lg">
                🌸
              </div>
              <span className="font-serif text-lg tracking-wide text-[#5c5470]">
                Mindful Moments
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-[0.95rem] md:flex">
              <Link href="/" className={getNavLinkClass(pathname, "/", true)}>
                Home
              </Link>

              <Link
                href="/blog"
                className={getNavLinkClass(pathname, "/blog")}
              >
                Blog
              </Link>

              <div ref={productsRef} className="relative">
                <button
                  type="button"
                  onClick={() => setProductsOpen((prev) => !prev)}
                  className={`flex items-center gap-1 transition-colors duration-200 hover:text-[#b8839a] ${
                    isProductsActive ? "text-[#b8839a]" : "text-[#5c5470]"
                  }`}
                >
                  Products
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="absolute left-1/2 top-8 z-50 w-48 -translate-x-1/2 rounded-2xl border border-[#f0e6ee] bg-white py-2 shadow-lg">
                    <Link
                      href="/products/digital"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#5c5470] transition-colors hover:bg-[#fdf0f5] hover:text-[#b8839a]"
                    >
                      <span>💻</span>
                      Digital Products
                    </Link>

                    <Link
                      href="/products/physical"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#5c5470] transition-colors hover:bg-[#fdf0f5] hover:text-[#b8839a]"
                    >
                      <span>📦</span>
                      Physical Products
                    </Link>

                    <div className="mx-4 my-1 border-t border-[#f0e6ee]" />

                    <a
                      href="https://www.etsy.com/shop/MindfulMomentsShop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#b8839a] transition-colors hover:bg-[#fdf0f5]"
                    >
                      <ShoppingBag size={14} />
                      Visit Etsy Shop ↗
                    </a>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={getNavLinkClass(pathname, "/about")}
              >
                About
              </Link>

              <a
                href="https://www.etsy.com/shop/MindfulMomentsShop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-[#f7c5d5] px-4 py-2 text-sm text-[#7d4f6b] transition-colors duration-200 hover:bg-[#f2b0c5]"
              >
                <ShoppingBag size={14} />
                Etsy Shop
              </a>
            </nav>

            <button
              type="button"
              className="p-2 text-[#5c5470] md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="space-y-1 border-t border-[#f0e6ee] bg-white px-4 py-4 md:hidden">
            <Link href="/" className={getMobileNavLinkClass(pathname, "/", true)}>
              Home
            </Link>

            <Link href="/blog" className={getMobileNavLinkClass(pathname, "/blog")}>
              Blog
            </Link>

            <div className="py-1">
              <p className="px-3 py-1 text-xs uppercase tracking-widest text-[#9e8aa0]">
                Products
              </p>

              <Link
                href="/products/digital"
                className={getMobileNavLinkClass(pathname, "/products/digital")}
              >
                💻 Digital Products
              </Link>

              <Link
                href="/products/physical"
                className={getMobileNavLinkClass(pathname, "/products/physical")}
              >
                📦 Physical Products
              </Link>
            </div>

            <Link href="/about" className={getMobileNavLinkClass(pathname, "/about")}>
              About
            </Link>

            <a
              href="https://www.etsy.com/shop/MindfulMomentsShop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[#b8839a] transition-colors hover:bg-[#fdf0f5]"
            >
              <ShoppingBag size={16} />
              Visit Etsy Shop ↗
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-[#f0e6ee] bg-[#fdf0f5]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#f7c5d5] to-[#c8dff5] text-base">
                  🌸
                </div>
                <span className="font-serif text-[#5c5470]">
                  Mindful Moments
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#9e8aa0]">
                Resources for mindfulness and compassion — for teachers, parents,
                and anyone on the path to a kinder inner life.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-serif text-[#5c5470]">Explore</h4>
              <ul className="space-y-2 text-sm text-[#9e8aa0]">
                <li>
                  <Link href="/blog" className="transition-colors hover:text-[#b8839a]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/digital"
                    className="transition-colors hover:text-[#b8839a]"
                  >
                    Digital Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/physical"
                    className="transition-colors hover:text-[#b8839a]"
                  >
                    Physical Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition-colors hover:text-[#b8839a]">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-serif text-[#5c5470]">Shop</h4>
              <p className="mb-4 text-sm text-[#9e8aa0]">
                Find all our mindfulness cards and posters on Etsy.
              </p>
              <a
                href="https://www.etsy.com/shop/MindfulMomentsShop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f7c5d5] px-4 py-2 text-sm text-[#7d4f6b] transition-colors hover:bg-[#f2b0c5]"
              >
                <ShoppingBag size={14} />
                Visit Our Etsy Shop
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#f0e6ee] pt-6 text-xs text-[#c4a8c0] sm:flex-row">
            <p>© 2026 Mindful Moments. Made with 🌸 and intention.</p>
            <p>All content is for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}