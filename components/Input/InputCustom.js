import React from "react";
import { InputStyles } from "./styles";

/* Props Component = <InputCustom/>
  ( typeInput=default text optional, 
    nameInput=name, 
    handle=functionChange, 
    valueInput=value, 
    hideValue=(true o false, optional-> field not need value)) */

const InputCustom = ({
  dataId,
  labelText,
  typeInput = "text",
  nameInput,
  handle,
  valueInput = "",
  classCustom = "input",
  idInput = "default",
  status,
  placeh,
  wInput,
  hInput,
}) => { 
  return (
    <>
      {labelText && <p>{labelText}</p>}
      <InputStyles
        data-id={dataId}
        type={typeInput}
        name={nameInput}
        onChange={handle}
        {...(typeInput !== "file" && { value: valueInput })}
        autoComplete="off"
        className={classCustom}
        id={idInput}
        wInput={wInput}
        hInput={hInput}
        placeholder={placeh}
        {...(status && { checked: true })}
      />
    </>
  );
};

export default InputCustom;
