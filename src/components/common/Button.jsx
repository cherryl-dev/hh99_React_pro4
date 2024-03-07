import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'
import palette from "../../styles/palette";

const buttonStyle = css`
    border : none;
    border-radius : 4px;
    font-size : 1rem;
    font-weight : bold;
    padding : 0.25rem 1rem;
    color : white;
    outline : none;
    cursor : pointer;
    text-decoration: none;

    background: ${palette.brown[1]};
    &hover {
        background: ${palette.brown[0]};
    }

    ${props =>
        props.full &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
            margin-top: 1rem;
        `}

`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = props => {
    return props.to ? (
            <StyledLink {...props} />
        ) : ( 
            <StyledButton {...props} />
        );
    };

export default Button;