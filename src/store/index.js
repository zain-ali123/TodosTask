import { createStore } from "vuex";
import user from "./modules/user";
import todos from "./modules/todos";

export default createStore({
  modules: {
    user,
    todos,
  },
});
