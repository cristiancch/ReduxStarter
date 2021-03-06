import React from "react";
import HomePage from "./components/home/HomePage";
import App from "./App";
import AboutPage from "./components/about/AboutPage";
import {Route, IndexRoute} from "react-router";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
  </Route>
);
