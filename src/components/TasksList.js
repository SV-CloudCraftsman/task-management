import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import styles from "./UserDefinedCSS.module.css"; // Import CSS Module

function TasksList() {
  const [tasks, setTasks] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Function to fetch tasks
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://taskmanagementapifunctionapp.azurewebsites.net/api/tasks"
        ); // Replace with actual API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Convert response to JSON
        setTasks(data); // Set the received data
        setLoading(false);
      } catch (err) {
        setError("Error fetching tasks");
        setLoading(false);
      }
    };

    fetchTasks(); // Call the function
  }, []); // Empty dependency array means this runs only once on mount

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <center>
        <h2 className={styles.h2}>Tasks List</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>IsCompleted?</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.isCompleted ? "Completed ✅" : "Pending ❌"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </center>
    </>
  );
}

export default TasksList;
