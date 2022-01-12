import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

export const Sensitivity = ({ changeTextHandler, number, name }) => {
  return (
    <div className="gridWrap">
      {name === "Base_Sens" ? (
        <li>
          <p className="sensName">{name}</p>
          <p className="sensLevel">{number}</p>
        </li>
      ) : (
        <li>
          <p className="sensName">{name}</p>
          <p className="sensLevel">{number}</p>
          <Stack className="btn">
            <Button
              onClick={changeTextHandler}
              type="submit"
              value={number}
              variant="outlined"
              size="small"
              color="secondary"
            >
              Select
            </Button>
          </Stack>
        </li>
      )}
    </div>
  );
};
