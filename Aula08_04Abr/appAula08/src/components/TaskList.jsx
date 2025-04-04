import AddTaskBox from "./AddTaskBox";
import TaskListItem from "./TaskListItem"
import { useState } from "react"

export default function TaskList() {
    const [ tasks, setTasks ] = useState([ "Uma tarefa legal", "Ir na feira", "Estudar React", "Programar mais" ])

    function addTask(taskName) {
        console.log("addTask",taskName);
        setTasks([...tasks, taskName])
    }

    return (
        <>
            <AddTaskBox onAddTaskName={addTask}/>
            <div className="border border-black p-2 m-2 rounded md:w-120">
                <div>
                    Lista de tarefas: 
                </div>
                <hr className="my-2" />
                <div>
                    { tasks.map((elem,idx) => <TaskListItem key={idx} taskName={elem} />) }
                </div>
            </div>
        </>
    )
}