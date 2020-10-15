import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
export default function IncrementButoon({ increment }) {
  return (
    <button
      onClick={increment}
      style={{ backgroundColor: "gray", border: "none" }}
    >
      <FontAwesomeIcon icon={faPlusSquare} color="white" />
    </button>
  );
}
