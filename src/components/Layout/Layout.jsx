import { Wrapper } from "./Layout.styled";
// import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return (
      <Wrapper>
        {children}
    </Wrapper>
  );
};

export default Layout;