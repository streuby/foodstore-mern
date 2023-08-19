import React, { Component } from "react";

// ErrorBoundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error
    console.error("Error caught by boundary:", error, errorInfo);

    // You can access the component stack trace from errorInfo.componentStack
    console.error("Component stack trace:", errorInfo.componentStack);

    // Set the error and errorInfo in the state for rendering
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render an error UI or message
      return (
        <div>
          <h2>Something went wrong in this component:</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Component Stack Trace:</p>
          <pre>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
