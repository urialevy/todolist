import  "./style.css"
import { framework } from "./DOM/loadPage"
import { appendNodeToBody } from "./DOM/loadPage"
import { compareAsc, format } from 'date-fns'
import { Task } from "./DATA/tasks"
import { Project } from "./DATA/projects"
import { Descriptions } from "antd"

appendNodeToBody(framework())
const projONe = new Project('testProj',"Description","12.31.2023")
projONe.addTask("testTask")
console.log(projONe)