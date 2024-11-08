# Pokédex

O Pokédex é o resultado do meu teste técnico para a vaga de Desenvolvedor Full Stack na Sistema ESO; e permite aos usuários explorar informações sobre Pokémon, incluindo detalhes como tipos, habitats e estatísticas.
A aplicação utiliza a [PokéAPI](https://pokeapi.co/) para obter dados atualizados sobre todos os Pokémon disponíveis.

Você pode acessá-la [neste link](https://pokedex-seven-inky.vercel.app)

## Tenologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Styled Components**: Para estilização dos componentes.
- **Signal R**: Para atualizações em tempo real.
- **Context API**: Para gerenciamento de estado global da aplicação.
- **PokéAPI**: Para obter dados sobre Pokémon.

## Funcionalidades

- **Busca por Nome**: Permite que os usuários procurem Pokémon pelo nome.
- **Filtros**: Os usuários podem filtrar Pokémon por tipo e habitat.
- **Paginação**: A aplicação suporta paginação para facilitar a navegação entre grandes conjuntos de dados.
- **Modal de Detalhes**: Exibe detalhes adicionais sobre um Pokémon selecionado.
- **Modal de login e cadastro**: Permite o acesso dos usuários
- **Modal para atualizar conta**: permite atualizar nome, nome de usuário e senha.
- **Modal para confirmar a exclusão da conta**: garante que a conta não foi excluída 'sem querer'.
- **Página com dados da conta**: exibe os dados do usuário (nome, nume de usuário e Pokémons capturados)

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados.

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/BeatrizNeaime/pokedex.git
```

2. Instale as dependências

```bash
cd pokedex
npm install
```

3. Inicie o servidor de desenvolvimento

```bash
npm run start
```

created by [Beatriz Neaime](https://beatrizneaime.com)
