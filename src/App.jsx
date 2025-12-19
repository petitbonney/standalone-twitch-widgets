import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DebugWidget from "./widgets/DebugWidget";

const widgets = Array(DebugWidget);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home widgets={widgets} />} />
        {widgets.map((w) => (
          <Route path={w.route} element={<w.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
