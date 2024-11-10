import { FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header className="text-3xl uppercase font-bold text-center bg-gray-800 text-white p-4 h-22 ">
        <nav className="flex justify-around items-center">
        <span className="flex items-center justify-center"> 
        <FaDatabase  size={30} color="yellow" className="mr-2"/>
        <Link to="/"  className="text-3xl text-white hover:text-slate-300 transition-all duration-300">Raspa INPI</Link>
        </span>
        <Link to="/historico" className="text-lg text-white hover:text-slate-300 transition-all duration-300">Histórico</Link>
        </nav>
      </header>
    </div>
  );
}
