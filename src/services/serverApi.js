
const url = "https://localhost:7280/"

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
  }
}

export default serverApi;