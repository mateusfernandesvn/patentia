import { useState, FormEvent } from "react";
import axios from "axios";
import { Container } from "../../components/container";
import BasicTable from "../../components/table";
import ClipLoader from "react-spinners/ClipLoader";

export function Home() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null); 
    setHasSearched(true);

    try {
      const response = await axios.post("http://localhost:3000/pesquisar", {
        input: search,
      });
      
      console.log("Resposta do servidor:", response.data);

      
      if (response.data.resultado && Array.isArray(response.data.resultado)) {
        const formattedData = response.data.resultado.map((item: any) => ({
          pedido: item.pedido,
          deposito: item.deposito,
          titulo: item.titulo,
          link: item.link,
          ipc: item.ipc,
          pesquisa: item.pesquisa_realizada,
          descricaoWipo: item.descricaoWipo?.descricao || "Descrição não disponível",
        }));
        setData(formattedData);
      } else {
        setData([]); 
        console.warn("Nenhum dado encontrado na chave 'resultado'.");
      }
    } catch (error) {
      setError("Erro ao buscar dados. Tente novamente.");
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <div className="my-8">
        <h1 className="text-2xl font-bold text-center m-4 uppercase">
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
            <button className="bg-blue-600 border-none h-12 text-white rounded-lg p-3 hover:bg-blue-500 transition-all duration-300">
              Buscar
            </button>
          </div>
        </form>
      </div>

      <div className="my-8">
        {hasSearched && (
          <>
            {loading ? (
              <p className="text-center text-blue-600">
                <ClipLoader size={50} />
              </p>
            ) : error ? (
              <p className="text-center text-red-600">{error}</p>
            ) : data.length === 0 && !loading ? (
              <p className="text-center text-gray-600">
                Nenhuma patente encontrada.
              </p>
            ) : (
              <BasicTable rows={data} />
            )}
          </>
        )}
      </div>
    </Container>
  );
}
