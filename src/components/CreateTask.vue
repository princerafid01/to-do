<template>
	<div class="card">
		<div class="card-header">
				Create Task
		</div>
		<div class="card-body">
			<form @submit.prevent="createTask">
				<div class="form-group">
					<textarea class="form-control" rows="4" v-model="body"></textarea>
				</div>
			<button class="btn btn-primary">Create</button>
			</form>
		</div>
	</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
	data(){
		return{
			body: ''
		}
	},
	methods:{
		...mapActions(['addTask']),
		createTask(){
			this.addTask(this.body)
			this.body = ''
		}
	}
}
	
</script>
<style>
	
</style>