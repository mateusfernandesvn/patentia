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

  const handleChangePage = (_event: unknown, newPage: number) => {
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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-black table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-yellow-400 text-black">
              Pedido
            </th>
            <th className="border px-4 py-2 bg-yellow-400 text-black">
              Depósito
            </th>
            <th className="border px-4 py-2 bg-yellow-400 text-black">
              Título
            </th>
            <th className="border px-4 py-2 bg-yellow-400 text-black">
              Código
            </th>
            <th className="border px-4 py-2 bg-yellow-400 text-black">
              Descrição
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedRows.length > 0 ? (
            paginatedRows.map((row) => (
              <tr
                key={row.codigo}
                className="text-sm text-white border hover:bg-neutral-800 transition duration-300"
              >
                <td className="border px-4 py-2 max-w-sm overflow-hidden whitespace-nowrap text-ellipsis">
                  <a
                    href={row.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 "
                  >
                    {row.pedido}
                  </a>
                </td>
                <td className="border px-4 py-2">{row.deposito}</td>
                <td className="border px-4 py-2">{row.titulo}</td>
                <td className="border px-4 py-2 overflow-hidden whitespace-nowrap text-ellipsis">
                  {row.ipc}
                </td>
                <td className="border px-4 py-2">{row.descricaoWipo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="border px-4 py-2 text-center text-gray-700"
              >
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
        labelRowsPerPage={
          <span style={{ color: "white" }}>Linhas por página:</span>
        }
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count}`
        }
        sx={{
          "& .MuiTablePagination-toolbar": {
            color: "white",
          },
          "& .MuiSelect-root": {
            color: "white",
          },
          "& .MuiSelect-icon": {
            color: "white",
          },
          "& .MuiMenuItem-root": {
            color: "white",
          },
          "& .MuiTablePagination-actions button": {
            color: "white",
          },
        }}
      />
    </div>
  );
};

export default BasicTable;
