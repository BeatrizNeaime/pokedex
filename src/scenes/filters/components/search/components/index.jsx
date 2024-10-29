import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  i {
    position: absolute;
    right: 10px;
    font-size: 20px;
    color: #c4c4c4;
    cursor: pointer;
  }
`;

const Input = styled.input`
  height: 45px;
  background-color: white;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 5px 10px;
  width: 100%;
  outline: none;
  font-size: 16px;

  &:focus {
    border: none;
  }
`;

export { InputContainer, Input };
