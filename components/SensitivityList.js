import { useNavigate } from "react-router-dom";
import { Sensitivity } from "./Sensitivity";

export const SensitivityList = ({
  inputText,
  setInputText,
  sensitivities,
  setSensitivities,
  count,
  setCount,
  setChooseText,
}) => {
  let navigate = useNavigate();
  const reloadTransition = () => {
    navigate("/");
  };
  const pageTransition = () => {
    setInputText("");
    navigate("/result");
  };

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  const resetCount = () => {
    setCount(1);
    pageTransition();
  };

  const changeTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.currentTarget.value);
    console.log(inputText);

    const baseSens = parseFloat(inputText);
    const chooseSens = parseFloat(e.currentTarget.value);
    const nextBaseSens =
      Math.round(
        ((parseFloat(inputText) + parseFloat(e.currentTarget.value)) / 2) * 1000
      ) / 1000;

    setChooseText(nextBaseSens);

    if (chooseSens < baseSens) {
      setSensitivities([
        { sens: chooseSens, id: 0, name: "Lower_Sens" },
        { sens: nextBaseSens, id: 1, name: "Base_Sens" },
        { sens: baseSens, id: 2, name: "Higher_Sens" },
      ]);
    } else {
      setSensitivities([
        { sens: baseSens, id: 0, name: "Lower_Sens" },
        { sens: nextBaseSens, id: 1, name: "Base_Sens" },
        { sens: chooseSens, id: 2, name: "Higher_Sens" },
      ]);
    }
    setInputText(nextBaseSens);
    console.log(count);
    count < 7 ? handleClick() : resetCount();
  };

  // Event
  window.addEventListener("popstate", function (e) {
    window.location.reload();
  });
  window.addEventListener("load", function (e) {
    reloadTransition();
  });

  return (
    <div className="SensitivityWrap">
      <header>
        <h1>Sensitivity Tool</h1>
        <p>選択して下さい（{count} / 7）</p>
      </header>
      <ul>
        {sensitivities.map((sensitivity) => {
          return (
            <Sensitivity
              number={sensitivity.sens}
              name={sensitivity.name}
              setInputText={setInputText}
              changeTextHandler={changeTextHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};
