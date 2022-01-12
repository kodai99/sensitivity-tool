import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export const Form = ({
  inputText,
  setInputText,
  setSensitivities,
  errMessage,
  setErrMessage,
}) => {
  let navigate = useNavigate();
  const reloadTransition = () => {
    navigate("/");
  };
  const pageTransition = () => {
    navigate("/sensitivity");
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitSensitivityHandler = (e) => {
    e.preventDefault();

    const result = inputText.match(/^([1-9]\d*|0)(\.\d+)?$/);
    if (result) {
      setSensitivities([
        {
          sens: Math.round(inputText * 0.5 * 100) / 100,
          id: 0,
          name: "Lower_Sens",
        },
        { sens: inputText, id: 1, name: "Base_Sens" },
        {
          sens: Math.round(inputText * 1.5 * 100) / 100,
          id: 2,
          name: "Higher_Sens",
        },
      ]);
      pageTransition();
    } else {
      setErrMessage("error");
      setInputText("");
    }
  };

  // Event
  window.addEventListener("popstate", function (e) {
    window.location.reload();
  });
  window.addEventListener("load", function (e) {
    reloadTransition();
  });

  return (
    <div className="formWrap">
      <header>
        <h1>Sensitivity Tool</h1>
        <p>ゲーム内で使用している感度を入力して下さい</p>
      </header>
      <form>
        {errMessage === "" ? (
          <Box
            className="textField"
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Sensitivity"
              size="small"
              variant="outlined"
              type="text"
              value={inputText}
              onChange={inputTextHandler}
            />
          </Box>
        ) : (
          <Box
            className="textField"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "90%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              error
              id="outlined-error-helper-text"
              label="Sensitivity"
              defaultValue=""
              size="small"
              helperText="正しい数値を入力して下さい（半角数字のみ）"
              type="text"
              value={inputText}
              onChange={inputTextHandler}
            />
          </Box>
        )}
        <Stack className="btn">
          <Button
            onClick={submitSensitivityHandler}
            type="submit"
            variant="outlined"
            size="small"
            color="secondary"
          >
            <i>Start</i>
          </Button>
        </Stack>
      </form>
    </div>
  );
};
