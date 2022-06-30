import { Wrapper } from "./Layout.styled";

const Layout = ({children}) => {
    return (
      <Wrapper>
        {children}
    </Wrapper>
  );
};

export default Layout;