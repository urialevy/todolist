import "./style.css";
import { framework, projOne } from "./DOM/loadPage";
import { appendNodeToBody } from "./DOM/loadPage";
import { compareAsc, format } from "date-fns";
import { Task } from "./DATA/tasks";
import { Project } from "./DATA/projects";
import { injectProjHtml } from "./DOM/loadPage";
import { placeHolder } from "./DATA/projects";
import { getProjTitles } from "./DOM/loadPage";
import { injectTaskHtml } from "./DOM/loadPage";
import { navigateProjects } from "./DOM/loadPage";
import { addTask } from "./DOM/newProject";


appendNodeToBody(framework());
injectProjHtml(getProjTitles(placeHolder()));
injectTaskHtml(placeHolder(), 0);
navigateProjects()
addTask()