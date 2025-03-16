import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserDefinedCSS.module.css"; // Import CSS Module

function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className={styles.link}>
        Go to Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
