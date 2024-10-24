const url = "https://pokeapi.co/api/v2/"

const options = {
  get: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
}

const api = {
  getRandomPokemon: async () => {
    const random = Math.floor(Math.random() * 1010)
    const a = await fetch(`${url}pokemon/${random}`, options.get)
    const b = await a.json()
    return b;
  },
  getPokemonsByType: async (type) => {
    const a = await fetch(`${url}type/${type.toLowerCase()}`, options.get)
    const b = await a.json()
    return b;
  },
  getPaginatedPokemons: async () => {
    const a = await fetch(`${url}pokemon?limit=10&offset=0`, options.get)
    const b = await a.json()
    return b;
  },
  getPokemonById: async (id) => {
    const a = await fetch(`${url}pokemon/${id}`, options.get)
    const b = await a.json()
    return b;
  }
}

export default api