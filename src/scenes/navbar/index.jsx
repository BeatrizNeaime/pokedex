import { Button, Logo, Row } from "../../components/common";
import logo from "../../assets/svg/logo.svg";
import colors from "../../constants/colors";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { accountContext } from "../../contexts/accountContext";

const Navbar = () => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const { setData } = useContext(accountContext);
  const [logoSize, setLogoSize] = useState("100px");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setLogoSize(desktop ? "50px" : "45px");
      } else {
        setLogoSize(desktop ? "100px" : "60px");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Row
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999999,
        backgroundColor: colors.black,
        padding: "16px 0",
      }}
      width={"100vw"}
    >
      <Logo
        src={logo}
        style={{
          height: logoSize,
          transition: "height 0.5s",
        }}
      />

      <Button
        style={{
          position: "absolute",
          right: "5%",
        }}
        onClick={() => setData((prev) => ({ ...prev, modal: true }))}
      >
        Login
      </Button>
    </Row>
  );
};

export default Navbar;
