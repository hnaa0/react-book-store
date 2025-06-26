import { CiImageOff } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ItemGrid() {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
      {books.map((book, index) => (
        <Link key={`${book.isbn}_${index}`} to={`/detail/${book.isbn}`}>
          <div className="aspect-2/3 border-1 group hover:border-sky-400 relative">
            {book.thumbnail ? (
              <img
                src={book.thumbnail}
                alt="책 표지"
                className="object-cover w-full h-full group-hover:brightness-90 transition duration-150"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-sky-100 group-hover:brightness-90 transition duration-150">
                <CiImageOff size={28} />
              </div>
            )}
            <div className="hidden group-hover:block px-2 py-3 absolute bottom-0 bg-black/30 text-white w-full">
              <p className="text-sm sm:text-base text-ellipsis line-clamp-1">
                {book.title}
              </p>
              <p className="font-light text-xs sm:text-sm pt-3 overflow-hidden text-ellipsis line-clamp-1 sm:line-clamp-2">
                {book.contents}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
