import axios from "axios"

export default{
    namespaced:true,
    state: {
        user:[]
    },
    mutations: {
        SET_USER(state,payload){
            state.user=payload
            console.log(state.user)
        }
    },
    actions: {
        async registerUser(_,payload){

            const config= {
                headers: {
                  'Accept': 'application/json'
                }
        }
            const response= await  axios.post('http://3.232.244.22/api/register',payload,config) 
            console.log(response)  
        },
        async authenticateUser({commit},payload){
            
            const config= {
                headers: {
                  'Accept': 'application/json'
                }
        }
        console.log(payload)
            const response= await  axios.post('http://3.232.244.22/api/login',payload,config) 
            console.log(response.data)  
            commit('SET_USER',response.data)
        }
    },
    getters: {
    },
}