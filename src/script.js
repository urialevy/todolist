import "./style.css";
import { framework, projOne, updateTasks } from "./DOM/loadPage";
import { appendNodeToBody } from "./DOM/loadPage";
import { compareAsc, format } from "date-fns";
import { Task } from "./DATA/tasks";
import { injectProjHtml } from "./DOM/loadPage";
import { placeHolder } from "./DATA/projects";
import { getProjTitles } from "./DOM/loadPage";
import { injectTaskHtml } from "./DOM/loadPage";
import { navigateProjects } from "./DOM/loadPage";
import { addTask } from "./DOM/newProject";
import { addForm, addTaskBtn, formListener } from "./DOM/addTask";
import { projectsArray } from "./DATA/projects";
import { projBtns } from "./DOM/loadPage";


appendNodeToBody(framework());
injectProjHtml(projectsArray);
navigateProjects()
updateTasks()
addTaskBtn()
projBtns()