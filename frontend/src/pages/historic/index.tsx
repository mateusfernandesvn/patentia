import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { Card } from "../../components/card";

export function Historic() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('')
    .then((res) => res.json())
    .then((data) => {
        setDados(data);
        setLoading(false);
    })
    .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
    });
   
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center font-medium uppercase text-3xl">Carregando...</p>
      </div>
    );
  }

  if (!dados.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center font-medium uppercase text-3xl">Nenhum dado encontrado.</p>
      </div>
    );
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-center m-4">
        Histórico de Pesquisa
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4 w-full h-full mt-12">
        {dados.map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </Container>
  );
}
