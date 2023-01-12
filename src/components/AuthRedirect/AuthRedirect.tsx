import { RedirectLink, Text } from './AuthRedirect.styled';

const AuthRedirect = ({ page, text }) => {
  return (
    <>
      <Text>or</Text>
      <RedirectLink to={page}>{text}</RedirectLink>
    </>
  );
};

export default AuthRedirect;
