import React, { useState } from "react";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.backgroundColor = '#212121';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-xl m-5 p-3 transition-colors duration-300 bg-gray-800 text-white hover:bg-gray-700 hover:text-yellow-300 active:bg-gray-900 active:text-yellow-400 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300 dark:hover:text-yellow-600 dark:active:bg-gray-400 dark:active:text-yellow-700"
    >
      Toggle Dark Mode
    </button>
  );
};

export default ToggleDarkMode;
