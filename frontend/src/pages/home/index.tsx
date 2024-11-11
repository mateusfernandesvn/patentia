import { useState, FormEvent } from "react";
import { Container } from "../../components/container";
import BasicTable from "../../components/table";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader"; 

export function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setHasSearched(true);
    console.log(search);

    try {
      const response = await axios.post('http://localhost:3000/pesquisar',{
        input: search,
    });
      setData(response.data);
    } catch (error) {
      setError("Erro ao buscar dados. Tente novamente.");
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-center m-4 uppercase">
        Pesquise por uma patente
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mt-4 gap-4">
          <input
            type="text"
            placeholder="Inserir o nome da patente"
            className="border-2 border-gray-300 rounded-md p-2 w-1/2 h-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-700 border-none h-12 text-white rounded-lg p-3 hover:bg-blue-800 transition-all duration-300">
            Pesquisar
          </button>
        </div>
      </form>

      <div className="mt-10">
        {hasSearched &&
          (loading ? (
            <p className="text-center text-blue-600"><ClipLoader /></p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : data.length > 0 ? (
            <BasicTable rows={data} />
          ) : (
            <p className="text-center text-gray-600">
              Nenhuma patente encontrada.
            </p>
          ))}
      </div>
    </Container>
  );
}
