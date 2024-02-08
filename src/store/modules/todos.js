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
    },
    async deleteTodo(_,payload){
      const userToken=localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        }
        console.log("id in action is>>>>>>",payload)
        const response =await axios.delete(`http://3.232.244.22/api/item/${payload}`,config) 
        console.log("response>>>>>>>>>>>>>>",response)     
    },
    async updateTodo(_,payload){
      // console.log("payload gt",payload)

      const userToken=localStorage.getItem("token")
      console.log(userToken)
      const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
      }
      const obj={
        title:payload.title,
        description:payload.description}
        console.log("obje>>>>",obj)
      const response= await axios.put(`http://3.232.244.22/api/item/${payload.id}`,obj,config)
      console.log("respobse>>>>",response)
    }
  },
  getters: {
    getTodos(state){
        return state.todos
    }
  },
};