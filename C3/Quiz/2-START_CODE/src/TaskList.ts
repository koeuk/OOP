import { Task } from "./Task";

export class TaskList {
    private tasks: Task[] = [];
    // add tasks
    addTask(task: Task): void {
        this.tasks.push(task);
    }
    //get tasks
    getTasks(): Task[] {
        return this.tasks;
    }
    //get tasks is completed
    getCompletedTasks(): Task[] {
        return this.tasks.filter(task =>task.getCompleted() === true);
    }
    //get completed tasks not completed
    getIncompleteTasks(): Task[] {
        return this.tasks.filter(task =>task.getCompleted() === false);
    }

    /// gat tasks by ID
    getTaskById(id: number): Task | undefined{
        return this.tasks.find(task => task.getId() === id);
    }

    /// search tasks by name
    searchTask (title:string):Task[] {
        return this.tasks.filter(task => task.getTitle().toLowerCase().includes(title.toLowerCase()));
    }
    /// delete task by ID
    deleteTask(id:number) :void {
       console.log(this.tasks.findIndex(task => task.getId() === id));
       let index  = this.tasks.findIndex(task=> task.getId()=== id);
       if(index > -1){
           this.tasks.splice(index, 1);
       } 
    }
    /// update task by ID
    updateTask(updatedTask, id) {
        let targetTask = this.getTaskById(id);

        if (!targetTask) {
            throw new Error(`Cannot Update Task with Id "${id}"`);
        }

        // Update task properties
        // if (updatedTask.getTitle()) {
        //     targetTask.setTitle(updatedTask.getTitle());
        // }
        // if (updatedTask.getDescription()) {
        //     targetTask.setDescription(updatedTask.getDescription());
        // }
        // Update other properties as needed

        return targetTask;
    }
}