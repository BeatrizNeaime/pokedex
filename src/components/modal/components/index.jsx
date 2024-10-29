import styled from "styled-components";

const Overlay = styled.div`
  background: rgb(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999999999;
`;

const ModalContainer = styled.div`
  background: ${(props) => props.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  min-height: 350px;
  border-radius: 6px;
  box-shadow: 0 8px 32px 0 rgba(8, 8, 8, 0.37);
  position: relative;
  padding: 0px 8px;
`;

const PhysioData = styled.div`
  display: flex;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 100%;
  gap: 16px;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 0;
  margin: 10px 0;
`;

export { Overlay, ModalContainer, PhysioData };
