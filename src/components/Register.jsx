import React, { useState } from "react";
import useFirebase from "../hooks/useFirebase";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Input from "./Form/Input";
import ButtonUI from "./UI/ButtonUI";

const Register = () => {
  const { createUser } = useFirebase();
  const [toggle, setToggle] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailNew").value;
    const password = document.getElementById("passwordNew").value;
    await createUser(email, password);
    console.log(e);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <form className="flex flex-col p-5 gap-3">
        <Input label="Name" id="first_name" />
        <Input label="Last name" id="last_name" />
        <Input label="Email" id="emailNew" />

        <Input
          label="Password"
          id="passwordNew"
          type={toggle ? "password" : "text"}
          icon={
            toggle ? (
              <RemoveRedEyeIcon onClick={handleToggle} />
            ) : (
              <VisibilityOffIcon onClick={handleToggle} />
            )
          }
        />
        <ButtonUI value="Register" handleFn={handleRegister} />
      </form>
    </div>
  );
};

export default Register;
