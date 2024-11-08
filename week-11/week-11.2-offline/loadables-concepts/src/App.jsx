import "./App.css";
import { RecoilRoot, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

// Function to render the App component
function App() {
  // Return the Todo component with the id of 1
  return (
    <RecoilRoot>
      <Todo id={1} />
    </RecoilRoot>
  );
}

// Function to render the Todo component
function Todo({ id }) {
  // Use the useRecoilStateLoadable hook to get the state of the todo
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  // Check if the state is loading
  if (todo.state === "loading") {
    return <div>loading</div>;
  }

  // Return the title and description of the todo
  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  );
}

// Export the App component as the default export
export default App;
