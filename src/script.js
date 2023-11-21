import  "./style.css"
import { framework } from "./DOM/loadPage"
import { appendNodeToBody } from "./DOM/loadPage"
import { compareAsc, format } from 'date-fns'
import { Task } from "./DATA/tasks"
import { Project } from "./DATA/projects"
import { Descriptions } from "antd"

appendNodeToBody(framework())
const projOne = new Project('testProj',"Description","12.31.2023")
projOne.addTask("testTask")
console.log(projOne)

const taskOne = new Task ('testTask',"","")
const projTwo = new Project("test two", "","")

projTwo.addTask(taskOne)
console.log(projTwo)
