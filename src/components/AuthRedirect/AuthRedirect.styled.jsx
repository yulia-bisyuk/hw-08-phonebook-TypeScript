import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RedirectLink = styled(Link)`
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: fit-content;
    text-decoration: none;
    color: ${props => props.theme.darkBlue};

    :hover {text-decoration: underline;}

`

const Text = styled.span`
    display: block;
    text-align: center;
     margin-top: 30px;
    margin-bottom: 8px;
    color: ${props => props.theme.darkGrey};
`
export { Text, RedirectLink };