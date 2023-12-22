// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Form } from "react-router-dom";
// import FormInput from "./FormInput";
// import { applyUser } from "../../store/slices/registerSlice";
// import { RegisterBtn } from "../../styles/form/LoginFrom.style";

// function Register() {
//   const dispatch = useDispatch();
//   const [inputData, setInputData] = useState({});

//   const registerInput = [
//     {
//       id: 1,
//       name: "nickname",
//       label: "暱稱",
//       type: "text",
//       placeholder: "請設定你的暱稱",
//       pattern: `^.{4,}$`,
//       errMes: "暱稱長度至少要大於三個字元長度",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       label: "電子郵件",
//       type: "email",
//       placeholder: "請設定您的電子郵件",
//       pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$`,
//       errMes: "郵件錯誤或是不存在",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "password",
//       label: "密碼",
//       type: "text",
//       placeholder: "請設定您的密碼",
//       pattern: `^(?=.*[A-Za-z])(?=.*d)(?=.*[@#$%^&+=!]).{8,20}$`,
//       errMes: "密碼長度應為8~20字元且含有特殊字元 數字 英文",
//       required: true,
//     },
//     {
//       id: 4,
//       name: "confirmpassword",
//       label: "二次確認密碼",
//       type: "text",
//       placeholder: "確認您的密碼",
//       //pattern: `^(?=.*[A-Za-z])(?=.*d)(?=.*[@#$%^&+=!]).{8,20}$`,
//       pattern: useSelector((state) => state.register.registerInfo.password),
//       errMes: "密碼錯誤或長度不符合",
//       required: true,
//     },
//   ];

//   function handleChange(e) {
//     const { name, value } = e.target;
//     const trimValue = value.trim();
//     setInputData((preData) => ({
//       ...preData,
//       [name]: trimValue,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     const data = new FormData(e.target);
//     const formData = Object.fromEntries(data);

//     dispatch(applyUser(formData));
//   }

//   const regitserContent = registerInput.map((item) => {
//     return <FormInput key={item.id} {...item} onChange={handleChange} />;
//   });

//   return (
//     <Form onSubmit={handleSubmit}>
//       {regitserContent}
//       <RegisterBtn>註冊</RegisterBtn>
//     </Form>
//   );
// }
// export default Register;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { applyUser } from "../../store/slices/registerSlice";
import { RegisterBtn } from "../../styles/form/LoginFrom.style";

function Register() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});
  const [proof, setProof] = useState(true);
  const { password } = useSelector((state) => state.register.registerInfo);
  const confirmPassword = useSelector(
    (state) => state.register.confirmPassword
  );

  const registerInput = [
    {
      id: 1,
      name: "nickname",
      label: "暱稱",
      type: "text",
      placeholder: "請設定你的暱稱",
      pattern: `^.{4,}$`,
      errMes: "暱稱長度至少要大於三個字元長度",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "電子郵件",
      type: "email",
      placeholder: "請設定您的電子郵件",
      pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$`,
      errMes: "郵件錯誤或是不存在",
      required: true,
    },
    {
      id: 3,
      name: "password",
      label: "密碼",
      type: "text",
      placeholder: "請設定您的密碼",
      pattern: `^(?=.*[A-Za-z])(?=.*d)(?=.*[@#$%^&+=!]).{8,20}$`,
      errMes: "密碼長度應為8~20字元且含有特殊字元 數字 英文",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "二次確認密碼",
      type: "text",
      placeholder: "確認您的密碼",
      //pattern: `^(?=.*[A-Za-z])(?=.*d)(?=.*[@#$%^&+=!]).{8,20}$`,

      errMes: "密碼錯誤或長度不符合",
      required: true,
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    const trimValue = value.trim();
    setInputData((preData) => ({
      ...preData,
      [name]: trimValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      // alert("密碼不一致");
      setProof(false);
      return;
    }

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);

    dispatch(applyUser(formData));
  }

  const regitserContent = registerInput.map((item) => (
    <FormInput key={item.id} {...item} onChange={handleChange} proof={proof} />
  ));

  return (
    <Form onSubmit={handleSubmit}>
      {regitserContent}
      <RegisterBtn>註冊</RegisterBtn>
    </Form>
  );
}
export default Register;
