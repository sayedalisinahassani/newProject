<template>
  <the-header></the-header>
  <task-form></task-form>
  <task-menu></task-menu>
</template>
<script>
import TheHeader from './components/TheHeader.vue'

import TaskMenu from './components/TaskMenu.vue'
import TaskForm from './components/TaskForm.vue'
export default{
  components:{
    TheHeader,
    TaskMenu,
    TaskForm,
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
</style>
