<template>
	<div class="card">
		<div class="card-header">
			Tasks
		</div>
		<div class="card-body">
			<ul class="list-group" v-if="tasks.length">
				<Task :task="task" :index="index" :key="index + 1" v-for="(task,index) in tasks" />
			</ul>
			<p v-else class="text-center alert-danger pb-4 pt-4">No Task to do today</p>
		</div>
	</div>
</template>
<script>
import Task from "./Task.vue";
import { mapGetters } from "vuex";
export default {
	// props: ['tasks'],
	components: {
		Task
	},
	computed: {
		...mapGetters(['tasks'])
	}
}
	
</script>
<style>
	
</style>