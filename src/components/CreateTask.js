import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import styles from "./UserDefinedCSS.module.css"; // Import CSS Module

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [message, setMessage] = useState({ text: "", variant: "" });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const newTask = {
      Title: title,
      Description: description,
      IsCompleted: isCompleted,
    };

    try {
      const response = await fetch(
        "https://taskmanagementapifunctionapp.azurewebsites.net/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMessage({
        text: `Task "${data.title}" created successfully!`,
        variant: "success",
      });

      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setIsCompleted(false);
    } catch (error) {
      setMessage({
        text: "Error creating task: " + error.message,
        variant: "danger",
      });
    }
  };

  return (
    <>
      <center>
        <div className={"bg-light text-dark min-vh-100 p-4"}>
          <Container className="mt-4">
            <h2 className={styles.h2}>Create a New Task</h2>
            {message.text && (
              <Alert variant={message.variant}>{message.text}</Alert>
            )}
            <Form
              onSubmit={handleSubmit}
              className="p-4 border rounded shadow-sm"
            >
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

              <Button variant="dark" type="submit" className="w-100">
                Create Task
              </Button>
            </Form>
          </Container>
        </div>
      </center>
    </>
  );
};

export default CreateTask;
