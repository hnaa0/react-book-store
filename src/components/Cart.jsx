import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Cart() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleCartAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div
      className={`transition-all duration-250 fixed absolute bottom-10 right-5 w-10 sm:w-76 sm:right-10 ${
        isAccordionOpen ? "h-120 w-76" : "h-10"
      } border-1 bg-white z-10`}
    >
      <div
        onClick={handleCartAccordion}
        className={`cursor-pointer flex items-center h-10 justify-center ${
          isAccordionOpen ? "mb-auto" : null
        }`}
      >
        {windowWidth >= 640 ? (
          <>
            <span className="text-sm mr-1">cart(4)</span>
            <CiShoppingBasket size={22} />
          </>
        ) : (
          <CiShoppingBasket size={22} />
        )}
      </div>
      <div className={`px-2 ${isAccordionOpen ? "visible" : "invisible"}`}>
        <div className="h-92 pb-4 overflow-y-auto">
          <ul className="divide-y divide-sky-400">
            <li className="px-2 py-3">
              <Link to={"detail/123"} className="flex">
                <img
                  className="aspect-2/3 w-18 object-cover"
                  src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                  alt=""
                />
                <div className="w-full ml-2 mt-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm line-clamp-1 mb-2">
                      title book title
                    </p>
                    <span className="text-xs line-clamp-1">author name</span>
                  </div>
                  <div className="flex text-xs">
                    <span>x 1</span>
                    <span className="ml-auto">12,000</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="px-2 py-3 flex">
              <img
                className="aspect-2/3 w-18 object-cover"
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt=""
              />
              <div className="w-full ml-2 mt-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm line-clamp-1">title book title</p>
                  <span className="text-xs line-clamp-1">author name</span>
                </div>
                <span className="text-xs ml-auto">12,000</span>
              </div>
            </li>
            <li className="px-2 py-3 flex">
              <img
                className="aspect-2/3 w-18 object-cover"
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt=""
              />
              <div className="w-full ml-2 mt-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm line-clamp-1">title book title</p>
                  <span className="text-xs line-clamp-1">author name</span>
                </div>
                <span className="text-xs ml-auto">12,000</span>
              </div>
            </li>
            <li className="px-2 py-3 flex">
              <img
                className="aspect-2/3 w-18 object-cover"
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt=""
              />
              <div className="w-full ml-2 mt-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm line-clamp-1">
                    title book title title title title
                  </p>
                  <span className="text-xs line-clamp-1">author name</span>
                </div>
                <span className="text-xs ml-auto">12,000</span>
              </div>
            </li>
          </ul>
        </div>
        <Link to={"/cart"}>
          <div className="mt-8 w-full border-1 border-lime-400 hover:border-black hover:bg-lime-400 cursor-pointer text-center py-1 text-sm">
            장바구니로 이동
          </div>
        </Link>
      </div>
    </div>
  );
}
