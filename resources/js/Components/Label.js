import React from "react";

export default function Label({ forInput, value, className, children }) {
  return (
    <label htmlFor={forInput} className={`form-label` + className}>
      {value ? value : { children }}
    </label>
  );
}
