import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

export const Result = ({ chooseText }) => {
  let navigate = useNavigate();
  const reloadTransition = () => {
    navigate("/");
  };
  const pageTransition = () => {
    navigate("/");
  };

  // Event
  window.addEventListener("popstate", function (e) {
    window.location.reload();
  });
  window.addEventListener("load", function (e) {
    reloadTransition();
  });

  return (
    <div class="resultWrap">
      <header>
        <h1>Sensitivity Tool</h1>
      </header>
      <div className="result">
        <p>Best Sensitivity</p>
        <h1>{chooseText}</h1>
      </div>
      <Stack className="btn">
        <Button
          onClick={pageTransition}
          type="submit"
          variant="outlined"
          size="small"
          color="secondary"
        >
          Back
        </Button>
      </Stack>
    </div>
  );
};
