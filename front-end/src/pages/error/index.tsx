import { Link } from "react-router-dom";
export function Error() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col text-black ">
      <h1 className="font-bold text-6xl text-red-700">404 :(</h1>
      <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
      <p className="italic text-1xl mb-4">Essa página não existe</p>

      <Link className="bg-red-600 text-white py-1 px-4 rounded-md " to="/">
        Voltar para o home
      </Link>
    </div>
  );
}
