import styles from "./UserDefinedCSS.module.css"; // Import CSS Module
function Home() {
  return (
    <div className="container mx-auto p-4">
      <center>
        <h2 className={styles.h2}>Task Management System</h2>
        <p className="text-lg mb-6">
          Welcome to the Task Management System! This platform helps you
          organize, prioritize, and track your tasks efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">Task Creation</h2>
            <p>
              Create new tasks, set deadlines, and assign them to team members.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">Task Tracking</h2>
            <p>
              Monitor task progress with status updates and completion tracking.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">Collaboration</h2>
            <p>
              Work together with your team by sharing tasks and adding comments.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold">Task Deletion</h2>
            <p>Delete task with status updates and completion tracking.</p>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Home; 
