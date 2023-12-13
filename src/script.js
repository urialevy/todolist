import "./style.css";
import { framework, projOne } from "./DOM/loadPage";
import { appendNodeToBody } from "./DOM/loadPage";
import { compareAsc, format } from "date-fns";
import { Task } from "./DATA/tasks";
import { Project } from "./DATA/projects";
import { Descriptions } from "antd";
import { injectProjHtml } from "./DOM/loadPage";
import { placeHolder } from "./DATA/projects";
import { getProjTitles } from "./DOM/loadPage";

appendNodeToBody(framework());

console.log("Hello world");
console.log(getProjTitles(placeHolder()));
injectProjHtml(getProjTitles(placeHolder()));
