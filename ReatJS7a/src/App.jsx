import React, { useState } from "react";

function UserGreeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>User Greeting</h2>

      {/* Ternary Operator */}
      <h3>
        {isLoggedIn ? "Welcome back!" : "Please log in"}
      </h3>

      {/* && Operator */}
      {isLoggedIn && (
        <p>You are successfully logged in.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);

  // If-else approach
  const displayContent = () => {
    if (isLoading) {
      return <h3>⏳ Loading...</h3>;
    } else {
      return <h3>Content Loaded Successfully!</h3>;
    }
  };

  return (
    <div>
      <h2>Loading Indicator</h2>

      {displayContent()}

      <button onClick={() => setIsLoading(!isLoading)}>
        {isLoading ? "Stop Loading" : "Start Loading"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      <UserGreeting />

      <hr />

      <LoadingIndicator />
    </div>
  );
}

export default App;