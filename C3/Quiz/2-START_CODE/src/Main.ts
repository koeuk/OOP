import { Task } from "./Task";
import { TaskList } from "./TaskList";

let vueJs = new Task(1, "Vue js","We will learn about vue js",false);
let laravel = new Task(2, "Laravel","We will learn about laravel",false);
let php = new Task(3, "PHP","We will learn about php",true);
let nodeJs = new Task(4, "Node js","We will learn about Node js",true);

let taskList = new TaskList();
taskList.addTask(vueJs);
taskList.addTask(laravel);
taskList.addTask(php);
taskList.addTask(nodeJs);

// console.log(taskList.getCompletedTasks());
// console.log(taskList.getIncompleteTasks());
// console.log(taskList.getTaskById(4));
// console.log(taskList.searchTask('Node JS'));
taskList.deleteTask(3);
console.log(taskList.getTasks());
// taskList.updateTask();
