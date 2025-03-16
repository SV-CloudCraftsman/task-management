import styles from "./UserDefinedCSS.module.css"; // Import CSS Module
function About() {
    return (
        <div className="container mx-auto p-4 flex justify-center">
            <div className="w-full max-w-4xl text-left">
                <center>
                <h1 className={styles.h2}>About Task Management System</h1>
                <p className="text-lg mb-6">
                    Our Task Management System is designed to help individuals and teams manage their tasks efficiently, improve productivity, and collaborate seamlessly.
                </p>
                </center>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-semibold">Our Mission</h2>
                        <p>To provide an intuitive and powerful platform for task management, ensuring seamless workflow and collaboration.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md bg-white">
                        <h2 className="text-xl font-semibold">Key Features</h2>
                        <ul className="list-disc pl-5">
                            <li>Task creation and assignment</li>
                            <li>Real-time tracking and updates</li>
                            <li>Collaborative team features</li>
                            <li>Deadline management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
