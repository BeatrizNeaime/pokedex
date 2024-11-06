
const url = "http://localhost:5284/"

const postOptions = {
  auth: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: null
  },
  post: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: null
  }
}

const getOptions = {
  auth: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem("token")
    }
  },
  get: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }
}

const serverApi = {
  registerUser: async (data) => {
    try {
      postOptions.post.body = JSON.stringify(data)
      const a = await fetch(`${url}auth/register`,
        postOptions.post
      )
      const b = await a.json()
      if (b.token) {
        sessionStorage.setItem("token", b.token)
        sessionStorage.setItem("user", b.username)
        sessionStorage.setItem("id", b.id)
        sessionStorage.setItem("name", b.name)
      }
      return b;
    } catch (error) {
      console.error(error)
      return false
    }
  },
  loginUser: async (data) => {
    try {
      postOptions.post.body = JSON.stringify(data)
      const a = await fetch(`${url}auth/login`,
        postOptions.post
      )
      const b = await a.json()
      if (b.token) {
        sessionStorage.setItem("token", b.token)
        sessionStorage.setItem("user", b.username)
        sessionStorage.setItem("id", b.id)
        sessionStorage.setItem("name", b.name)
      }
      return b;
    } catch (error) {
      console.error(error)
      return false
    }
  },
  getCapturedPokemons: async () => {
    try {
      const a = await fetch(`${url}pokemon/captured`,
        getOptions.get
      )
      const b = await a.json()
      console.log(b)
      return b;
    } catch (error) {
      console.error(error)
      return false
    }
  },
  capturePokemon: async (pokemonName) => {
    try {
      debugger;
      postOptions.auth.body = JSON.stringify({ pokemonName: pokemonName, userId: sessionStorage.getItem("id") })
      const a = await fetch(`${url}pokemon/capture`, postOptions.auth)
      const b = await a.json()

      if (a.status === 200) {
        return { message: b.message, status: true }
      } else if (a.status === 401) {
        return { message: "Unauthorized", status: false }
      }

    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export default serverApi;