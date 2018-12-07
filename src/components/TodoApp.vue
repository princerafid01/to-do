<template>
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<CreateTask @taskCreated="addTask"/>
			<br>
			<Tasks :tasks="tasks" />
		</div>
	</div>

</template>
<script>
import CreateTask from './CreateTask.vue';
import Tasks from './Tasks.vue';
import { mapActions } from './Tasks.vue';
	export default {
		data(){
			return {
				tasks: []
			}
		},
		methods:{
			// addTask(task){
			// 	this.tasks.push({
			// 		text: task,
			// 		isDone: false
			// 	});
			// }
		},
		mounted(){
			// this.$on('deleteTask', (index) => {
			// 	this.tasks.splice(index,1);
			// })
		},
		components: {
			CreateTask,Tasks
		}
	}
</script>