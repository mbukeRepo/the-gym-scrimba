/* eslint-disable linebreak-style */
import React, { useState, useEffect, useCallback } from "react";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import "./styles.css";

const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [formData, setFormData] = useState({
    category: "any",
    difficulty: "",
    answerType: "",
    amountOfQuestions: "5",
  });

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  const toggleIsHome = useCallback(() => setIsHome((prev) => !prev), []);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  return (
    <div className="app">
      {isHome ? (
        <Home
          toggleIsHome={toggleIsHome}
          formData={formData}
          handleFormChange={handleFormChange}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      ) : (
        <Quiz
          formData={formData}
          toggleIsHome={toggleIsHome}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      )}
    </div>
  );
};
export default App;
