import axios from "axios";


export default {
  namespaced: true,
  state: {
    todos:[],
    responseMessage:'',
    error:false

  },
  mutations: {

    SET_TODOS(state,payload){
        state.todos=payload
        // console.log(state.todos)
    },
    SET_RESPONSE_MESSAGE(state, payload) {
      state.responseMessage = payload;
      // console.log(state.responseMessage)
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async createTodo({commit}, payload) {
      try{

        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);
          // console.log("helloooo?>>>>>>>>>>>>>>>>>")
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
        // console.log(response)
        commit("SET_RESPONSE_MESSAGE", '');
        commit("SET_ERROR", false);
      }
      catch(error){
        commit("SET_RESPONSE_MESSAGE", 'Failed to create todo(Unproceesable Content)');
        commit("SET_ERROR", true);
      }
    },
    async readTodos({commit}){
      try{
        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);
        // console.log("heloooooo")
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
              // console.log(response.data.items.data)
              commit("SET_TODOS",response.data.items.data)
              commit("SET_RESPONSE_MESSAGE", '');
              commit("SET_ERROR", false);
      }
      catch(error){
        commit("SET_RESPONSE_MESSAGE", 'Failed to load todos');
        commit("SET_ERROR", false);
      }
    },
    async deleteTodo(_,payload){
      try{
        
        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);
        const userToken=localStorage.getItem("token")
          const config = {
              headers: {
                  Authorization: `Bearer ${userToken}`,
              },
          }
          // console.log("id in action is>>>>>>",payload)
          const response =await axios.delete(`http://3.232.244.22/api/item/${payload}`,config) 
          // console.log("response>>>>>>>>>>>>>>",response)   
          
        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);  

      }
      catch(error){
        
        commit("SET_RESPONSE_MESSAGE", "Unable to delete (may be unauthorized)");
        commit("SET_ERROR", false);
      }
    },
    async updateTodo({commit},payload){
      try{
        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);  
        // console.log("payload gt",payload)
  
        const userToken=localStorage.getItem("token")
        // console.log(userToken)
        const config = {
          headers: {
              Authorization: `Bearer ${userToken}`,
          },
        }
        const obj={
          title:payload.title,
          description:payload.description}
          // console.log("obje>>>>",obj)
        const response= await axios.put(`http://3.232.244.22/api/item/${payload.id}`,obj,config)
        // console.log("respobse>>>>",response)
        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);  
      }
      catch(error){
        commit("SET_RESPONSE_MESSAGE", "Unauthorized or missing some values");
        commit("SET_ERROR", true);  
      }

      }
  },
  getters: {
    getTodos(state){
        return state.todos
    },
    getResponseMessage(state) {
      // console.log("response>etter",state.responseMessage)
      return state.responseMessage;
    },
    getError(state) {
      // console.log("sts>>>>>>>>>>>>>>>>>>>>>>>>>>>", state.error);
      return state.error;
    },
  },
};
