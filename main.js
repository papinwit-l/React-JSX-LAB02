const divMain = {
  padding: "2px 20px",
  height: "700px",
  color: "white",
  backgroundColor: "#23272F",
  fontFamily: "sans-serif",
  letterSpacing: "0.6px",
};

const divContent = {
  backgroundColor: "#343A46",
  padding: "1px 16px",
  borderRadius: "12px",
  border: "1px solid #424752",
};

function App() {
  return (
    <div style={divMain}>
      <h1>Quick Start</h1>
      <p>
        Welcome to the React documentation! This page will give you an
        introduction to the 80% of React concepts that you will use on a daily
        basis.
      </p>
      <div style={divContent}>
        <h2>You will learn</h2>
        <ul>
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li>How to share data between components</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(App());
