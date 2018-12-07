<template>
  <div id="app">
    <div class="container">
      <TodoApp /> 
    </div>
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";


export default {
  name: 'app',
  components: {
    TodoApp
  }
}
</script>
<style src="./assets/bootstrap.min.css"></style>
<style>

</style>
