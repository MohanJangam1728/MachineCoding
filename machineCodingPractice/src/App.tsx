import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const exampleList = ["InfiniteScroll"];
  const renderExample = (example: string) => {
    switch (example) {
      case "InfiniteScroll":
        navigate("/scroll");
        break;

      default:
        break;
    }
  };
  return (
    <>
      {exampleList.map((listItem,index) => {
        return (
          <button key={index} onClick={() => renderExample(listItem)}>{listItem}</button>
        );
      })}
    </>
  );
}

export default App;
