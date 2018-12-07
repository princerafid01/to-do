import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		tasks: []
	},
	getters: {
		tasks(state){
			return state.tasks
		}
	},
	mutations:{
		createTask(state , body){
			state.tasks.push({
				text: body,
				isDone: false
			})
		},
		destroyTask(state,index){
			state.tasks.splice(index,1)
		}
	},
	actions: {
		addTask({ commit } , body){
			commit('createTask',body)
		},
		deleteTask({commit} , taskIndex){
			commit('destroyTask',taskIndex)
		}
	}
})