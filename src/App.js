import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CreateTask from "./components/CreateTask";
import TasksList from "./components/TasksList";
import UpdateTask from "./components/UpdateTask";
import DeleteTasksFromList from "./components/DeleteTasksFromList";
import NavigationBar from "./components/NavigationBar";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <NavigationBar />
      <Navigation />
    </>
  );
}

export default App;
