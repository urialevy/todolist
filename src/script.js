import css from "./style.css"
import { framework } from "./DOM/loadPage"
import { appendNodeToBody } from "./DOM/loadPage"
import { Project } from "./DATA/projects"
import { compareAsc, format } from 'date-fns'

appendNodeToBody(framework())