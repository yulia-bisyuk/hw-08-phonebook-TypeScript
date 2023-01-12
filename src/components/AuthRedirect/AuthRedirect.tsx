import { RedirectLink, Text } from './AuthRedirect.styled';

interface AuthRedirectProps {
  page: string;
  text: string;
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({ page, text }) => {
  return (
    <>
      <Text>or</Text>
      <RedirectLink to={page}>{text}</RedirectLink>
    </>
  );
};

export default AuthRedirect;
