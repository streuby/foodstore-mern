import React, { Component } from "react";

// ErrorBoundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error tracking service here
    console.error("Error caught by boundary:", error, errorInfo);
    // Custom error handling logic
    if (error instanceof TypeError) {
      console.error("A TypeError occurred:", error);
      // Perform actions specific to handling TypeError
    } else if (error instanceof ReferenceError) {
      console.error("A ReferenceError occurred:", error);
      // Perform actions specific to handling ReferenceError
    } else {
      // Handle other types of errors
      console.error("An error occurred:", error);
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
