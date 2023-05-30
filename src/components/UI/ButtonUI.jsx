import React from "react";
import Button from "@mui/material/Button";

const ButtonUI = (props) => {
    const {value, handleFn} = props;
  return (
    <Button
      variant="contained"
      className="bg-primary text-black"
      onClick={handleFn}
    >
      {value}
    </Button>
  );
};

export default ButtonUI;
