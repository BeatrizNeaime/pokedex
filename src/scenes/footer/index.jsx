import { Row } from "../../components/common";

const Footer = () => {
  return (
    <Row
      style={{
        height: "50px",
        marginTop: "64px",
        paddingBottom: "16px",
      }}
    >
      <span>
        &copy;{" "}
        <a
          href="https://beatrizneaime.com"
          style={{
            color: "white",
          }}
        >
          Beatriz Neaime
        </a>{" "}
        - 2024
      </span>
    </Row>
  );
};

export default Footer;
