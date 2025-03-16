import React, { useState } from "react";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import styles from "./UserDefinedCSS.module.css"; // Import CSS Module

function UpdateTask() {
  const [taskId, setTaskId] = useState(""); // Task ID input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [message, setMessage] = useState({ text: "", variant: "" });

  // Function to fetch existing task details
  const fetchTaskById = async () => {
    if (!taskId) {
      setMessage({ text: "Please enter a Task ID.", variant: "warning" });
      return;
    }

    try {
      const response = await fetch(
        `https://taskmanagementapifunctionapp.azurewebsites.net/api/tasks/${taskId}`
      );

      if (!response.ok) {
        throw new Error(`Task not found! Status: ${response.status}`);
      }

      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
      setIsCompleted(data.isCompleted);
      setMessage({ text: "Task loaded successfully!", variant: "success" });
    } catch (error) {
      setMessage({
        text: "Error fetching task: " + error.message,
        variant: "danger",
      });
    }
  };

  // Function to update task details
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!taskId) {
      setMessage({ text: "Task ID is required!", variant: "danger" });
      return;
    }

    const updatedTask = {
      Title: title,
      Description: description,
      IsCompleted: isCompleted,
    };

    try {
      const response = await fetch(
        `https://taskmanagementapifunctionapp.azurewebsites.net/api/tasks/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update task! Status: ${response.status}`);
      }

      setMessage({ text: "Task updated successfully!", variant: "success" });
    } catch (error) {
      setMessage({
        text: "Error updating task: " + error.message,
        variant: "danger",
      });
    }
  };

  return (
    <>
      <center>
        <Container className="mt-4">
          <h2 className={styles.h2}>Update Task</h2>

          {message.text && (
            <Alert variant={message.variant}>{message.text}</Alert>
          )}

          <Card className="p-4 shadow-sm">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Task ID</Form.Label>
                <Form.Control
                  type="text"
                  value={taskId}
                  onChange={(e) => setTaskId(e.target.value)}
                  placeholder="Enter Task ID"
                  required
                />
                <Button variant="info" className="mt-2" onClick={fetchTaskById}>
                  Load Task
                </Button>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter task title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter task description"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Completed"
                  checked={isCompleted}
                  onChange={(e) => setIsCompleted(e.target.checked)}
                  className={"form-check-input bg-light border-light"}
                />
              </Form.Group>

              <Button variant="dark" className="w-100" onClick={handleUpdate}>
                Update Task
              </Button>
            </Form>
          </Card>
        </Container>
      </center>
    </>
  );
}

export default UpdateTask; 
