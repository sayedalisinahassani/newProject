<template>
    <form  @submit.prevent="handleSubmit">
        <input
         type="text" 
         v-model="newTask">
        <button>Add Text</button>
    </form>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'

export default {
    setup(){
        const taskStore = useTaskStore()
        const newTask = ref('')

        const handleSubmit = () => {
            if(newTask.value.length > 0){
                taskStore.addTask({
                    title: newTask.value,
                    isFav: false,
                    id: new Date().toISOString()
                })
                newTask.value = ''
            }
        }
        return {handleSubmit,newTask}
    }
}
</script>

<style scoped>
form{
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
}
form input{
    height: 25px;
    border: 1px solid #000000;
}
form button{
    padding: 8px 15px;
    background-color: #c2fd11;
    border: 1px solid #c2fd11;
    margin: 0 10px;
    cursor: pointer;
}
input:focus{
    outline-color: #c2fd11;
}

</style>