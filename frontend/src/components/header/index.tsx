import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header className="  font-bold text-center bg-black text-white p-4 h-22 ">
        <nav className="flex justify-between items-center mx-10">
          <Link to="/">
            {" "}
            <span className="flex items-center justify-center">
              <FaDatabase size={30} color="yellow" className="mr-2" />
              <h1 className="uppercase text-3xl text-yellow-3000">PatentiA</h1>
            </span>
          </Link>
          <a
            href="https://github.com/iJeferson/tcc-rpa-update"
            target="_blank"
            className="text-lg text-white hover:text-slate-300 transition-all duration-300"
          >
            Documentação
          </a>
        </nav>
      </header>
    </div>
  );
}
