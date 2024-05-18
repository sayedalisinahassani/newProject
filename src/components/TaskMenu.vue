<template>
    <div class="btndiv">
        <button @click="filter = 'all'">All</button>
        <button @click="filter = 'favs'">Favs</button>
    </div>
    <div v-if="filter === 'all'">
        <p class="text">All task {{ taskStore.totalCount }}</p>
        <div v-for="task in taskStore.tasks" :key="task.id">
            <task-details :task="task"></task-details>
        </div>
    </div>
    <div v-if="filter === 'favs'">
        <p class="text">Favorite task {{ taskStore.favsCount }}</p>
        <div v-for="task in taskStore.favs" :key="task.id">
            <task-details :task="task"></task-details>
        </div>
    </div>

</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'
import TaskDetails from './TaskDetails.vue'
import { ref } from 'vue'
export default {
    components:{TaskDetails,},
    setup(){
        const taskStore = useTaskStore()
        const filter = ref('all')
        return {taskStore,filter}
    }
}
</script>

<style scoped>
div{
    margin: auto;
    max-width: 35rem;
    background-color: aliceblue;
}
div .text{
    padding-left: 20px;
}
.btndiv{
    display: flex;
    justify-content: end;
    margin-top: 20px;
}
div button{
    padding: 10px 15px;
    background-color: inherit;
    border: 2px solid #c2fd11;
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;
}
button:hover,
button:active{
    background-color: #c2fd11;
}
</style>