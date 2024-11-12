import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { Card } from "../../components/card";

export function Historic() {
 

  return (
    <Container>
      <div>
      <Link to={"/"} className="bg-blue-600 rounded-lg text-white p-2 hover:bg-blue-500 transition-all duration-300">Voltar</Link>
      </div>

      <h1 className="text-3xl font-bold text-center m-4">
        Histórico de Pesquisa
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4 w-full h-full mt-12">
        <Card   />
      </div>
    </Container>
  );
}
