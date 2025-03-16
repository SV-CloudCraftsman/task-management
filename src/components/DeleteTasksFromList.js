import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import styles from "./UserDefinedCSS.module.css"; // Import CSS Module

function DeleteTasksFromList() {
  const [tasks, setTasks] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
 
  useEffect(() => {
    // Function to fetch tasks
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://taskmanagementapifunctionapp.azurewebsites.net/api/tasks"
        );
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

  // Function to delete a task
  const handleDelete = async (taskId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://taskmanagementapifunctionapp.azurewebsites.net/api/tasks/${taskId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete task! Status: ${response.status}`);
      }

      // Update state to remove the deleted task
      setTasks(tasks.filter((task) => task.id !== taskId));
      alert("Task deleted successfully!");
    } catch (err) {
      alert("Error deleting task: " + err.message);
    }
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <center>
        <h2 className={styles.h2}>Delete From Tasks List</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>IsCompleted?</th>
              <th>Action</th> {/* New Column for Delete Button */}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.isCompleted ? "Completed ✅" : "Pending ❌"}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    🗑 Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </center>
    </>
  );
}

export default DeleteTasksFromList;
