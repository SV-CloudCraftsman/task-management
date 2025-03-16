import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";
import DeleteTasksFromList from "./DeleteTasksFromList";
import UpdateTask from "./UpdateTask";
 
function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/taskslist" element={<TasksList />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/deletetask" element={<DeleteTasksFromList />} />
        <Route path="/updatetask" element={<UpdateTask />} />
        <Route
          path="/shubham"
          element={
            <>
              <h1>Shubham Page</h1>
            </>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default Navigation;

// 🔹 Differences Between <Switch> (v5) and <Routes> (v6):
// Feature	               |   React Router v5 (<Switch>)	  |    React Router v6 (<Routes>)
// Component name	       |   <Switch>	                      |    <Routes>
// Matching behavior	   |  Stops at first match	          |    Stops at first match
// Route Syntax	           |  component={} / render={}	      |    element={<Component />}

// Notes:==========
// React Router v5 → Use <Switch> to render only the first matching route.
// React Router v6 → <Routes> replaces <Switch> and works the same way.
// Use exact on / routes to avoid unintended matches.
