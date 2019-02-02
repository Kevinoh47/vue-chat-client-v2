import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    chats : null,
    handle : ""
  },
  getters : {
    CHATS : state => {
      console.log('store getters CHATS state: ', state);
      console.log('store getters CHATS state chats: ', state.chats);
      return state.chats
    },
    HANDLE : state => {
      return state.handle
    }
  },
  mutations : {
    SET_CHAT : (state,payload) => {
      console.log('SET_CHAT MUTATION - payload: ', payload);
      state.chats = payload;
    },
    ADD_CHAT : (state,payload) => {
      console.log('ADD_CHAT MUTATION - payload: ', payload);
      state.chats.push(payload);
    },
    SET_HANDLE : (state,payload) => {
      state.handle = payload;
    }
  },

  actions : {
    SET_CHAT : async (context,payload) => {
      console.log("SET_CHAT ACTION: context, payload:", context, payload);
      let {data} = await Axios.get('http://localhost:3001');
      console.log(data);
      context.commit("SET_CHAT",data);
    },
    ADD_CHAT : (context,payload)=> {
      context.commit("ADD_CHAT",payload);
    },
    SET_HANDLE : (context,payload)=> {
      context.commit("SET_HANDLE",payload);
    }
  },

})
