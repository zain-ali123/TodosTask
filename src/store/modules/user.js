import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: [],
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
      console.log("user", state.user);
    },
  },
  actions: {
    async registerUser(_, payload) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      try {
        const response = await axios.post(
          "http://3.232.244.22/api/register",
          payload,
          config
        );
        console.log(response);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
    async authenticateUser({ commit }, payload) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      console.log(payload);
      try {
        const response = await axios.post(
          "http://3.232.244.22/api/login",
          payload,
          config
        );
        console.log(response.data.user.token);
        localStorage.setItem("token", response.data.user.token);

        commit("SET_USER", response.data.user);
      } catch (error) {
        console.error("Error authenticating user:", error);
      }
    },

  },
  getters: {},
};
