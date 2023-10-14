import css from "./style.css"
import { framework } from "./DOM/loadPage"
import { appendNodeToBody } from "./DOM/loadPage"
import { Task } from "./DATA/taskFactory"
import { compareAsc, format } from 'date-fns'


const testTask = new Task('test', 'create a test task', '31.12.2023', 'low')

appendNodeToBody(framework())