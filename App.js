import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// Importing Components
import { Form } from "./components/Form";
import { SensitivityList } from "./components/SensitivityList";
import { Result } from "./components/Result";
import { Error } from "./components/Error";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [sensitivities, setSensitivities] = useState([]);
  const [count, setCount] = useState(1);
  const [chooseText, setChooseText] = useState("");
  const [errMessage, setErrMessage] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              inputText={inputText}
              setInputText={setInputText}
              setSensitivities={setSensitivities}
              errMessage={errMessage}
              setErrMessage={setErrMessage}
            />
          }
        />
        <Route
          path="/sensitivity"
          element={
            <SensitivityList
              inputText={inputText}
              setInputText={setInputText}
              sensitivities={sensitivities}
              setSensitivities={setSensitivities}
              count={count}
              setCount={setCount}
              chooseText={chooseText}
              setChooseText={setChooseText}
            />
          }
        />
        <Route path="/result" element={<Result chooseText={chooseText} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};
