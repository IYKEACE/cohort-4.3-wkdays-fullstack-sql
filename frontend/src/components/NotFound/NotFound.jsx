import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="container">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Back To Home Page</Link>
    </section>
  );
}

export default NotFound
