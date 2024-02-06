import "./App.css";
import { DocumentContextProvider } from "./contexts/DocumentContext/DocumentContextProvider";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <DocumentContextProvider>
      <MainPage />
    </DocumentContextProvider>
  );
}

export default App;
