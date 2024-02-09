import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: [],
    responseMessage: "",
    error: false,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
      // console.log("user", state.user);
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
    async registerUser({ commit }, payload) {
      commit("SET_RESPONSE_MESSAGE", "");
      commit("SET_ERROR", false);
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
        // console.log("response",response);
        commit("SET_RESPONSE_MESSAGE", response.data.message);
        commit("SET_ERROR", false);
      } catch (error) {
        commit("SET_RESPONSE_MESSAGE", error.response.statusText);
        commit("SET_ERROR", true);
        // console.error("Error registering user:", error.response.statusText);
      }
    },
    async authenticateUser({ commit }, payload) {
      
      commit("SET_RESPONSE_MESSAGE", "");
      commit("SET_ERROR", false);
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      // console.log(payload);
      try {
        const response = await axios.post(
          "http://3.232.244.22/api/login",
          payload,
          config
        );
        // console.log("response", response);
        // console.log(response.data.user.token);
        localStorage.setItem("token", response.data.user.token);

        commit("SET_USER", response.data.user);
        commit("SET_RESPONSE_MESSAGE", "Success,user Found!");
        commit("SET_ERROR", false);
      } catch (error) {
        console.error("Error authenticating user:", error);

        commit("SET_RESPONSE_MESSAGE", "Invalid email or password!");
        commit("SET_ERROR", true);
      }
    },
    async loogoutUser({ commit }) {
      try {
        const payload = {
          token: localStorage.getItem("token"),
        };
        const config = {
          headers: {
            Accept: "application/json",
          },
        };

        const response = await axios.post(
          "http://3.232.244.22/api/logout",
          payload,
          config
        );
        // console.log(response);
        localStorage.removeItem("token");
        commit("SET_RESPONSE_MESSAGE", "");
        commit("SET_ERROR", false);
      } catch (error) {
        // console.log(error);
        commit("SET_RESPONSE_MESSAGE", "Error loging out user");
        commit("SET_ERROR", true);
      }
    },
  },
  getters: {
    getResponseMessage(state) {
      return state.responseMessage;
    },
    getError(state) {
      // console.log("sts>>>>>>>>>>>>>>>>>>>>>>>>>>>", state.error);
      return state.error;
    },
  },
};
