<template>
  <section>
    <p>{{ task.title }}</p>
    <div>
      <img src="../assets/Delete Icon.jpg" 
      alt="deleteImg"
      @click="taskStore.deleteTask(task.id)">
      <img src="../assets/dsdsa.jpg" 
      :class="{'active': task.isFav}"
      alt="favsImg"
      @click="taskStore.toggleTask(task.id)">
      <img src="../assets/ffff.jpg" alt="">
    </div>
  </section>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'
export default {
  props:['task'],
  setup(){
    const taskStore = useTaskStore();

    return {taskStore}
  }
}
</script>

<style scoped>
section{
  height: 4rem;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  
}
p{
  font-size: 20px;
  color: rgb(13, 108, 13);
}
div img{
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
}
.active{
  border-bottom: 3px solid red;
  border-right: 3px solid red;
}


</style>