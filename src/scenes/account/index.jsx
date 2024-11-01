import { useContext, useState } from "react";
import {
  Button,
  CloseButton,
  Column,
  Overlay,
  StatsTitle,
} from "../../components/common";
import { accountContext } from "../../contexts/accountContext";
import { AccountModalStyle } from "./components";
import InputGroup from "../../components/inputGroup";

const Account = () => {
  const { data, setData } = useContext(accountContext);
  const [form, setForm] = useState("sign-in");
  const [loginData, setLoginData] = useState({
    username: null,
    password: null,
  });
  const [signUpData, setSignUpData] = useState({
    name: null,
    username: null,
    password: null,
  });

  const closeModal = () => {
    setData((prev) => {
      return {
        ...prev,
        modal: false,
      };
    });
  };

  if (!data.modal) {
    return null;
  }

  return (
    <Overlay onClick={closeModal}>
      <AccountModalStyle
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton
          className="fa-solid fa-circle-xmark"
          onClick={closeModal}
        ></CloseButton>
        <h1>Account</h1>

        {form === "sign-in" && (
          <Column
            gap={"16px"}
            width={"90%"}
            style={{
              marginTop: "32px",
            }}
          >
            <StatsTitle
              style={{
                alignSelf: "flex-start",
              }}
            >
              {" "}
              <i class="fa-solid fa-user"></i> Sign-in
            </StatsTitle>

            <InputGroup
              data={{
                label: "Username",
                placeholder: "Ash123",
                value: loginData.username,
                onBlur: () => {
                  setLoginData({
                    ...loginData,
                    username: loginData.username,
                  });
                },
              }}
            />
            <InputGroup
              data={{
                label: "Password",
                placeholder: "********",
                value: loginData.password,
                onBlur: () => {
                  setLoginData({
                    ...loginData,
                    password: loginData.password,
                  });
                },
                type: "password",
              }}
            />
            <Button
              style={{
                width: "100%",
              }}
              onClick={() => {
                console.log("Login data", loginData);
              }}
            >
              <i class="fa-solid fa-sign-in"></i> Sign-in
            </Button>

            <p>
              Don't have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setForm("sign-up");
                }}
              >
                Sign-up
              </span>
            </p>
          </Column>
        )}

        {form === "sign-up" && (
          <Column
            gap={"16px"}
            width={"90%"}
            style={{
              marginTop: "32px",
            }}
          >
            <StatsTitle
              style={{
                alignSelf: "flex-start",
              }}
            >
              {" "}
              <i class="fa-solid fa-user"></i> Sign-up
            </StatsTitle>

            <InputGroup
              data={{
                label: "Username",
                placeholder: "Ash123",
                value: signUpData.username,
                onBlur: setSignUpData,
              }}
            />
            <InputGroup
              data={{
                label: "Password",
                placeholder: "********",
                value: loginData.password,
                onBlur: setSignUpData,
                type: "password",
              }}
            />
            <Button
              style={{
                width: "100%",
              }}
            >
              <i class="fa-solid fa-sign-in"></i> Sign-up
            </Button>

            <p>
              Already have an account?{" "}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setForm("sign-in");
                }}
              >
                Sign-in
              </span>
            </p>
          </Column>
        )}
      </AccountModalStyle>
    </Overlay>
  );
};

export default Account;
