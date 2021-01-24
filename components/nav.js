import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Nav() {
  //untuk membuka navbar ketika width menyentuh 768px kebawah
  const [isOpen, setIsOpen] = useState(false);
  //function buat cjeck apakah scroll kebawah atau ngga
  let listener = null;
  const [scrollState, setScrollState] = useState("top");
  console.log(listener, "listener");
  console.log(scrollState, "scrollState");
  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 40) {
        if (scrollState !== "amir") {
          setScrollState(true);
        }
      } else {
        if (scrollState !== "top") {
          setScrollState(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <nav
      className={
        scrollState
          ? "bg-semi-red fixed top-0 left-0 right-0 transition-all duration-1000  ease-in md:p-8 py-8 p-3 z-30 shadow-xl "
          : "md:p-8 py-8 p-3"
      }
    >
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/">
            <a className=" text-gray-900 text-4xl  font-bold ">
              Boat
              <span className={scrollState ? "" : "text-semi-red"}>Ria</span>
            </a>
          </Link>
        </li>
        <div className="cursor-pointer md:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            // height="80"
            // width="80"
            className="text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* navbar mobile */}
          {isOpen && (
            <div
              className={
                scrollState
                  ? "z-50 text-gray-900 text-2xl flex flex-col text-center text-blue-dark items-center bg-semi-red fixed top-24 bottom-0 left-0 right-0"
                  : "z-50 text-gray-900 text-2xl flex flex-col text-center text-blue-dark items-center bg-white fixed top-28 bottom-0 left-0 right-0"
              }
            >
              <a href="#" className="no-underline py-5 ">
                Berlibur
              </a>
              <a href="#" className="no-underline py-5">
                Paket Wisata
              </a>
              <a href="#" className="no-underline py-5">
                Masuk
              </a>
            </div>
          )}
        </div>
        {/* navbar desktop */}
        <ul className=" text-gray-900 text-2xl md:block hidden">
          <li>
            <a href="#" className="no-underline px-5 ">
              Berlibur
            </a>
            <a href="#" className="no-underline px-5">
              Paket Wisata
            </a>
            <a
              href="#"
              className={
                scrollState
                  ? "no-underline px-5"
                  : "no-underline px-5 ml-4 text-semi-red  border-semi-red border-4 rounded-3xl hover:text-gray-900 hover:bg-semi-red"
              }
            >
              Masuk
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
