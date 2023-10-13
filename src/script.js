import css from "./style.css"
import frame from "./frame"
import  appendNodeToBody from "./appendNodeToBody"
import { Task } from "./taskFactory"
import { compareAsc, format } from 'date-fns'


const testTask = new Task('test', 'create a test task', '31.12.2023', 'low')

appendNodeToBody(frame())