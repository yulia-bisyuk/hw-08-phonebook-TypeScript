import { Wrapper } from "./Layout.styled";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;