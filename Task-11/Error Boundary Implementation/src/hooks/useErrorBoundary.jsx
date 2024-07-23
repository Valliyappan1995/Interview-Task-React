import { useState, useEffect } from 'react';

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const ErrorBoundaryWrapper = ({ children }) => {
    return children;
  };

  const resetError = () => {
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  };

  useEffect(() => {
    const errorHandler = (event) => {
      setHasError(true);
      setError(event.error);
      setErrorInfo(event.errorInfo);
      event.preventDefault();
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return { hasError, error, errorInfo, resetError, ErrorBoundaryWrapper };
};

export default useErrorBoundary;
