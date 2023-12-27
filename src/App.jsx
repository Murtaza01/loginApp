import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <Navbar show={toggleForm} />
      {showForm && <Form hide={toggleForm} />}
    </>
  );
}
