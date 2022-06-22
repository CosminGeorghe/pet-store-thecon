import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

function Button(props) {
  const validateId = () => {
    if (props.data.id === "") return false;
    if (isNaN(props.data.id)) return false;
    return true;
  };

  const validateName = () => {
    if (props.data.name === "") return false;
    return true;
  };

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
   // navigate('/', {replace: true})
   console.log(props.data);
  console.log(validateName(props.data.name));

  }, [navigate]);

  const handleOnClick = () => {
    if (validateName() && validateId()) {
      props.
    }
  };

  return (
    <button type="button" onClick={handleOnClick}>
      Go home
    </button>
  );
}

export default Button;
