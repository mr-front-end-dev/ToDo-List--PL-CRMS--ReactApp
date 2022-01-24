import React from "react";
import Tasks from "./features/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import Author from "./features/author/Author";

import { 
  HashRouter, 
  Switch, 
  Route, 
  Redirect 
} from "react-router-dom";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

export default () => (
  <HashRouter>
    <Navigation />
    
      <Switch>
        <Route path={toTask()}>
          <Task />
        </Route>
        <Route path={toTasks()}>
          <Tasks />
        </Route>
        <Route path={toAuthor()}>
          <Author />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
  </HashRouter>
);