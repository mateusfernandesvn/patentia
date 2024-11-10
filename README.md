# RPA INPI - Automação de Pesquisa de Patentes

Este projeto tem como objetivo automatizar o processo de consulta de patentes no INPI (Instituto Nacional da Propriedade Industrial) e exibir os resultados por meio de uma interface web. O sistema utiliza Python para realizar a raspagem dos dados, armazenando-os em um banco de dados, e o frontend é desenvolvido em React para exibição dos dados. O projeto é composto por três partes principais:

- **Backend (RPA em Python)**: Responsável por realizar a raspagem de dados no INPI e armazenar as informações em um banco de dados.
- **Frontend (React)**: Exibe as informações extraídas do banco de dados de forma dinâmica e interativa.
- **Banco de Dados**: Armazena os dados extraídos para fácil consulta e manipulação.

## Funcionalidades

- Realiza a raspagem de dados de patentes do site do INPI.
- Armazena as informações extraídas em um banco de dados.
- Exibe os dados na interface web, permitindo ao usuário consultar os registros de patentes.
- Validação e estruturação de dados no backend usando Express Validator.

## Tecnologias Utilizadas

- **Backend (RPA)**: 
  - Python
  - Bibliotecas para raspagem de dados (BeautifulSoup, Requests)
  - Banco de dados (SQLite ou PostgreSQL)
  
- **Frontend**:
  - React.js
  - React Hook Form (para formulários)
  - Tailwind CSS (para estilos)
  - Zod (para validações)

- **Validações**:
  - Express Validator (para o backend)

## Como Rodar o Projeto

### Requisitos

- Node.js (para o frontend)
- Python 3.x (para o backend)
- Banco de dados (SQLite ou PostgreSQL)

### Passos para Rodar o Backend (Python)

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/rpa-inpi.git
   cd rpa-inpi
