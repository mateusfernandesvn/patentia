# RPA INPI - Automação de Pesquisa de Patentes

Este projeto tem como objetivo automatizar o processo de consulta de patentes no INPI (Instituto Nacional da Propriedade Industrial) e exibir os resultados por meio de uma interface web. O sistema utiliza Python para realizar a raspagem dos dados, armazenando-os em um banco de dados, e o frontend é desenvolvido em React para exibição dos dados. O projeto é composto por três partes principais:

## 💻	 Funcionalidades
- **Raspagem de Dados de Patentes**: Realiza a raspagem de dados de patentes diretamente do site do **INPI** (Instituto Nacional de Propriedade Industrial).
- **Armazenamento em Banco de Dados**: Armazena as informações extraídas das patentes em um banco de dados (MySQL).
- **Exibição na Interface Web**: Exibe os dados de patentes na interface web, permitindo ao usuário **consultar os registros de patentes** de forma interativa e dinâmica.
- **Download de Excel**: Permite ao usuário **baixar os dados** em formato de **planilha Excel** para análise offline.

## 🛠️ Tecnologias Utilizadas
- **Backend**:
  - **Python**: Para realizar a raspagem de dados do INPI.
  - **Bibliotecas para Raspagem de Dados**:
    - **Selenium**: Para interagir com páginas dinâmicas (se necessário) e realizar a raspagem de dados de forma mais robusta.
    - **Requests**: Para realizar requisições HTTP ao site do INPI.
  - **Banco de Dados**:
    - **MySQL**: Para armazenar as informações extraídas das patentes.
  - **Node.js**: Usado para expor a API que comunica o backend com o frontend, permitindo que os dados sejam acessados pela interface web.

<<<<<<< HEAD
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
=======
- **Frontend**:
  - **React.js**: Para a construção da interface web interativa.
  - **Tailwind CSS**: Para estilização da interface, proporcionando um design responsivo e moderno.
  - **Axios**: Para realizar requisições HTTP ao backend, buscando e exibindo os dados na interface.
  - **react-spinners**: Para mostrar animações de carregamento (spinners) enquanto os dados estão sendo carregados ou processados.
  - **Material-UI (MUI)**: Para componentes prontos, acelerando o desenvolvimento da interface e oferecendo uma experiência de usuário consistente e moderna.
 
## 📋 Pré-Requisitos
>>>>>>> 6962c2e7506fce75a276ba46c3508e47f65c6e20

- Node.js (para o frontend)
- Python (para o backend)
- Banco de dados (MySQL)


## 🚀  Rodando localmente

### 1. Clonar o Repositório

Primeiro, clone o repositório do projeto para sua máquina local:

```bash
git clone git@github.com:iJeferson/tcc-rpa-update.git
```
### 2. Instalar as Dependências

O projeto está dividido em duas partes: o backend e o frontend. Siga as etapas abaixo para instalar as dependências e rodar o projeto.

Na raiz do seu projeto, onde estão as pastas frontend e backend, execute o comando abaixo para instalar as dependências principais:

```bash
npm install
```

Entre na pasta frontend e instale as dependências do React:

```bash
cd frontend
npm install
```
Entre na pasta backend e instale as dependências do Node.js:

```bash
cd ../backend
npm install
```

###  3. Configurar o Banco de Dados

Antes de rodar as migrations, verifique as configurações do banco de dados no arquivo de configuração do backend. Certifique-se de que as credenciais do banco de dados (nome de usuário, senha, nome do banco) estão corretas para o ambiente local.
Agora, execute a migration para criar as tabelas necessárias no banco de dados. Navegue até a pasta src dentro do diretório backend e execute o comando da migration:
```bash
cd src
npx sequelize-cli db:migrate
```

###  4. Rodar o Projeto

Agora que as dependências estão instaladas e o banco de dados está configurado, basta rodar o projeto.Na raiz do projeto, execute o comando:

```bash
npm run dev
```
### 5. Acessar a Aplicação

Agora você pode acessar a aplicação localmente no seu navegador:

- Frontend (React): Acesse http://localhost:5173 para visualizar a interface web.

### 6. Testar Funcionalidades
Após iniciar o frontend e backend, você pode testar as funcionalidades do sistema, como:

- Raspagem de dados: Verifique se a raspagem de patentes do INPI está funcionando corretamente.

- Consulta de patentes: Acesse os dados extraídos via a interface web no frontend.

- Download de Excel: Teste o download dos dados no formato de planilha.


   
## 🤝 Autores

- [Jeferson Oliveira](https://github.com/iJeferson)
- [Hercules Oliveira](https://github.com/GodHercules)
- [Ielber Pellegrini](https://github.com/ielberPellegrini)
- [Mateus Fernandes](https://github.com/mateusfernandesvn)


<<<<<<< HEAD
   ```bash
   git clone https://github.com/seu-usuario/rpa-inpi.git
   cd rpa-inpi
   ```
=======
>>>>>>> 6962c2e7506fce75a276ba46c3508e47f65c6e20
