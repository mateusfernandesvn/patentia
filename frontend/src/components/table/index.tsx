import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

interface DataRow {
  pedido: string;
  deposito: string;
  titulo: string;
  ipc: string;
  link: string;
  pesquisa: string;
  codigo: string;
  descricaoWipo: string;
}

interface BasicTableProps {
  rows: DataRow[];
}

const BasicTable: React.FC<BasicTableProps> = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  function handleExcel(){
    alert("Gerar Excel")
  }

  return (
    <div className="overflow-x-auto bg-slate-100 p-6 rounded-lg">
      <div className="flex justify-around items-center my-4">
        <h1 className="text-3xl font-semibold">Visualizar Dados</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleExcel}>
          Gerar Excel
        </button>
        </div>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-800 text-white">
                Pedido
              </th>
              <th className="border px-4 py-2 bg-gray-800 text-white">
                Depósito
              </th>
              <th className="border px-4 py-2 bg-gray-800 text-white">
                Título
              </th>
              <th className="border px-4 py-2 bg-gray-800 text-white">
                Código
              </th>
              <th className="border px-4 py-2 bg-gray-800 text-white">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.length > 0 ? (
              paginatedRows.map((row) => (
                <tr
                  key={row.codigo}
                  className=" text-sm hover:bg-gray-100 transition-all duration-300"
                >
                  <td className="border px-4 py-2 ">
                    <a
                      href={row.link}
                      target="_blank"
                      className="underline underline-offset-2 hover:text-gray-700 transition-all duration-300"
                    >
                      {row.pedido}
                    </a>
                  </td>
                  <td className="border px-4 py-2 ">{row.deposito}</td>
                  <td className="border px-4 py-2 ">{row.titulo}</td>
                  <td className="border px-4 py-2 ">{row.ipc}</td>
                  <td className="border px-4 py-2 ">{row.descricaoWipo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="border px-4 py-2 text-center">
                  Nenhum dado encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Linhas por página:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count}`
          }
        />
 
    </div>
  );
};

export default BasicTable;
