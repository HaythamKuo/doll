import { useState } from "react";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "./FormInput";
import { setUser } from "../../store/slices/loginSlice";
import { LoginBtn, ThirdPartyLogin } from "../../styles/form/LoginFrom.style";
import { FaGoogle, FaLine } from "react-icons/fa";

const loginInputs = [
  {
    id: 1,
    name: "email",
    label: "電子郵件",
    type: "email",
    placeholder: "請輸入電子郵件",
    pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$`,
    errMes: "郵件錯誤或是不存在",
    required: true,
  },
  {
    id: 2,
    name: "password",
    label: "密碼",
    type: "password",
    placeholder: "請輸入密碼",
    pattern: `^(?=.*[A-Za-z])(?=.*d)(?=.*[@#$%^&+=!]).{8,20}$`,
    errMes: "密碼錯誤",
    required: true,
  },
];

function Login() {
  const [inputData, setInputData] = useState({});
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login.loginInfo);
  const isSubmitDisabled = !(email && password);

  //更新最新輸入資料方法
  function handleChange(e) {
    const { name, value } = e.target;
    const trimValue = value.trim();

    setInputData((preData) => ({
      ...preData,
      [name]: trimValue,
    }));
  }

  //將資料打包到RTK
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    dispatch(setUser(formData));
  }

  const loginContent = loginInputs.map((input) => (
    <FormInput key={input.id} {...input} onChange={handleChange} />
  ));

  return (
    <Form onSubmit={handleSubmit}>
      {loginContent}
      <LoginBtn cursor="not-allowed" disabled={isSubmitDisabled}>
        登入
      </LoginBtn>

      <ThirdPartyLogin>
        <FaGoogle />
        <FaLine />
      </ThirdPartyLogin>
    </Form>
  );
}
export default Login;
