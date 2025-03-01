import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";


interface HeaderProps {
  title: string;
  goBack?: string;
  onAdd?: () => void;
}

const Header = ({ title, goBack, onAdd }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-3 px-5 bg-[#866DED] text-white mb-5 shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="flex gap-4">
        {onAdd && (
          <button
            onClick={onAdd}
            className="bg-white/90 hover:bg-white text-black p-1 px-3 rounded cursor-pointer"
          >
            <IoAddOutline className="text-xl" />
          </button>
      )}

      {goBack && (
          <Link to={goBack} className="text-black/90 bg-white/90 hover:bg-white hover:text-black transition-all p-1 rounded-full">
            <IoArrowBackOutline className="text-xl" />
          </Link>
        )}
      </div>

    </header>
  );
};

export default Header;
