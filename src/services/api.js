const url = "https://pokeapi.co/api/v2/"
const itemsPerPage = 10

const options = {
  get: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
}

const api = {
  getPaginatedPokemons: async (offset) => {
    const a = await fetch(`${url}pokemon?limit=10&offset=0`, options.get)
    const b = await a.json()
    return b;
  },
  getPokemon: async (endpoint) => {
    const a = await fetch(endpoint ?? `${url}pokemon?limit=10&offset=0`, options.get)
    const b = await a.json()
    return b;
  },
  getPokemonsByHabitat: async (habitat) => {
    const a = await fetch(`${url}pokemon-habitat/${habitat.toLowerCase()}`, options.get)
    const b = await a.json()
    return b;
  },
  getFilteredPokemons: async (filters, offset) => {
    let res = {
      count: 0,
      next: 0,
      previous: 0,
      results: []
    };
    const a = await fetch(`${url}pokemon?limit=100000&offset=0`, options.get)
    const b = await a.json()

    if (filters.habitat) {
      const habitat = await api.getPokemonsByHabitat(filters.habitat.toLowerCase().replace(" ", "-"))
      res.results = habitat.pokemon_species
    } else if (filters.type) {
      b.results.filter(pokemon => {
        if (Array.isArray(pokemon.types) && pokemon.types.find(type => type.type.name === filters.type)) {
          res.results.push(pokemon)
        }
      })
    } else if (filters.name) {
      if (res.results.length === 0) {
        res.results = b.results
      }
      res.results.filter(pokemon => {
        if (pokemon.name.includes(filters.name)) {
          res.results.push(pokemon)
        }
      })
    }

    res.count = res.results.length
    res.next = offset + itemsPerPage
    res.previous = offset - itemsPerPage > 0 ? offset - itemsPerPage : 0
    res.results = res.results.slice(offset, offset + itemsPerPage)

    return res;
  },

}

export default api