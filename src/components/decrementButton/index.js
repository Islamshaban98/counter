import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default function DecrementButton({ decrement, disabled }) {
  return (
    <button
      onClick={decrement}
      disabled={disabled}
      style={{ backgroundColor: "#3498db", border: "none" }}
    >
      <FontAwesomeIcon icon={faMinusCircle} color="white" />
    </button>
  );
}
