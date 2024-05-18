import { defineStore } from 'pinia'


export const useTaskStore = defineStore('taskStore',{
  state: ()=>({
    tasks:[
      {id:1,title:"play gloomhaven",isFav:true},
      {id:2,title:"buy some things",isFav:false},
      {id:3,title:"something else",isFav:true
      }
    ],
}),
  
  getters:{
    totalCount:(state) => {
      return state.tasks.length
    },
    favs(){
      return this.tasks.filter(t=> t.isFav)
    },
    favsCount(){
      return this.tasks.reduce((p,c)=>{
        return c.isFav ? p+1 :p
      },0)
    }
  },
  actions:{
    addTask(task){
      this.tasks.push(task)
    },
    deleteTask(id){
      this.tasks = this.tasks.filter((t)=>{
        return t.id !== id
      }
      )
    },
    toggleTask(id){
      const t = this.tasks.find((u)=> u.id === id)
      t.isFav = !t.isFav
    },
    EditTask(id){
      const y = this.tasks.find((i)=> i.id ===id)
      console.log('edit')
    }
  }
})
