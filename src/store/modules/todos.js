import axios from "axios";


export default {
  namespaced: true,
  state: {
    todos:[]

  },
  mutations: {

    SET_TODOS(state,payload){
        state.todos=payload
        // console.log(state.todos)
    }
  },
  actions: {
    async createTodo(_, payload) {
        console.log("helloooo?>>>>>>>>>>>>>>>>>")
        const userToken=localStorage.getItem("token")
      const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
      };

      const response = await axios.post(
        "http://3.232.244.22/api/item",
        payload,
        config
      );
      console.log(response)
    },
    async readTodos({commit}){
        console.log("heloooooo")
        const userToken=localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        }
            const response = await axios.get(
                "http://3.232.244.22/api/items",
                config
              );
              console.log(response.data.items.data)
              commit("SET_TODOS",response.data.items.data)
    }
  },
  getters: {
    getTodos(state){
        return state.todos
    }
  },
};
