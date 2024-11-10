import { Link } from "react-router-dom";

export function Card() {
  return (
    <Link to="/">
      <div className="flex bg-slate-200 border-solid border-2 border-zinc-700 p-4 rounded-lg shadow-lg w-60 h-40 mt-4 hover:scale-105 duration-300 transition-all ">
        <p className="text-2xl font-medium m-auto text-center">Teste</p>
      </div>
    </Link>
  );
}
