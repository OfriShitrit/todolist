import ToDoListPage from "./pages/ToDoListPage";
import "./App.css";
import "./style.css";

//Import the server file
//const server = require("./server");

function App() {
  // Use the server as needed
  //server.use("../store/taskApi", server);
  return (
    <div className="App">
      <ToDoListPage />
    </div>
  );
}

export default App;
