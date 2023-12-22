import { useState } from "react";
import {
  Container,
  InputModule,
  InputLabel,
  InputSpan,
} from "../../styles/Input.style";

function FormInput(prop) {
  const { label, errMes, onChange, pattern, proof, ...inputprops } = prop;
  const [isValid, setIsValid] = useState(true);
  console.log("label" + label);
  //傳遞資料給予Login
  function handleInput(e) {
    const { value } = e.target;
    const isValidInput = !pattern || value.match(new RegExp(pattern)) !== null;
    setIsValid(isValidInput);
    onChange(e);
  }

  //驗證輸入資料
  function handleBlur(e) {
    const { value } = e.target;
    const isValidInput = !pattern || value.match(new RegExp(pattern)) !== null;
    setIsValid(isValidInput);
  }

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputModule {...inputprops} onChange={handleInput} onBlur={handleBlur} />
      {!isValid && <InputSpan>{errMes}</InputSpan>}
      {!proof && label === "二次確認密碼" && <InputSpan>{errMes}</InputSpan>}
    </Container>
  );
}
export default FormInput;
