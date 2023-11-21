import  "./style.css"
import { framework } from "./DOM/loadPage"
import { appendNodeToBody } from "./DOM/loadPage"
import { Project } from "./DATA/projects"
import { compareAsc, format } from 'date-fns'
import { Task } from "./DATA/tasks"
import { Project } from "./DATA/projects"

appendNodeToBody(framework())
let projONe = new Project('testProj')