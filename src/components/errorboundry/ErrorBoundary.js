import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error(error);
      console.error(errorInfo);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return useRouter().push("/error");
  }

  // Render the child components normally if no error occurred
  return children;
};

export default ErrorBoundary;
