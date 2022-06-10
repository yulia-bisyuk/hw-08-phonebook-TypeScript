
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { MdContactPhone } from 'react-icons/md';
import { FaUserCheck, FaUserPlus } from 'react-icons/fa';
import { IconContext } from "react-icons";

import { PageWrapper, InvitationTitle, PageTitle, AuthLink, IconWrapper, Text } from './HomePage.styled';

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            
            <PageWrapper>
                <IconWrapper>
            <IconContext.Provider value={{ color: '#0c005a', size: "60px" }}>
                <MdContactPhone/>
                </IconContext.Provider>
                </IconWrapper>
            <PageTitle>Phonebook</PageTitle>
                <InvitationTitle>Save your contacts here!</InvitationTitle>
                 <IconContext.Provider value={{ color: '#0c005a', size: "20px" }}>
                <IconWrapper>
              <FaUserPlus />
                </IconWrapper>
            <AuthLink to='register'>Registration</AuthLink>
                <Text>Already have an account?</Text>
                <IconWrapper>
              <FaUserCheck />
                </IconWrapper>
                </IconContext.Provider>
            <AuthLink to='login'>Login</AuthLink>
            </PageWrapper>
            </ThemeProvider>
    )
};

export default HomePage;