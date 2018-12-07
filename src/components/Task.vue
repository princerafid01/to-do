<template>
	<li class="list-group-item">
		<div class="form-check">
			  <input v-model="task.isDone" class="form-check-input" type="checkbox" value="" :id="`defaultCheck-${index}`">
			  <label class="form-check-label" :for="`defaultCheck-${index}`">
			  	<span v-if="task.isDone"><del>{{ task.text }}</del></span>
			  	<span v-else>{{ task.text }}</span>
			    
			  </label>
		</div>
		<span class="float-right" @click="deleteTask(index)">X</span>
	</li>
</template>
<script>
import { mapActions } from "vuex";
	export default {
		props:['task','index'],
		methods:{
			...mapActions(['deleteTask'])
		}
	}
</script>
<style>
.form-check{
		display: inline-block!important;
	}
	span.float-right{cursor: pointer;}
	
</style>