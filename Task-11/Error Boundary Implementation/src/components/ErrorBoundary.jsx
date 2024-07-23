import React from "react";
import useErrorBoundary from "../hooks/useErrorBoundary";

const ErrorBoundary = ({ children }) => {
  const { hasError, error, errorInfo, ErrorBoundaryWrapper } =
    useErrorBoundary();

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo && errorInfo.componentStack}
        </details>
      </div>
    );
  }

  return <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>;
};

export default ErrorBoundary;
