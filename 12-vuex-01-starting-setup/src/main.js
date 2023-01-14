import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

const countModule = {
  namespaced: true,
  state: () => ({ count: 0 }),
  mutations: {
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.count * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
};

const store = createStore({
  modules: { numbers: countModule },
  state() {
    return {
      //   count: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    // increment(state) {
    //   state.count++;
    // },
    // increase(state, payload) {
    //   state.count += payload.value;
    // },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    // finalCounter(state) {
    //   return state.count * 3;
    // },
    // normalizedCounter(_, getters) {
    //   const finalCounter = getters.finalCounter;
    //   if (finalCounter < 0) {
    //     return 0;
    //   }
    //   if (finalCounter > 100) {
    //     return 100;
    //   }
    //   return finalCounter;
    // },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    // increment(context) {
    //   setTimeout(() => {
    //     context.commit('increment');
    //   }, 2000);
    // },
    // increase(context, payload) {
    //   context.commit('increase', payload);
    // },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
});

app.use(store);

app.mount('#app');
