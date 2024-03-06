import styled from "styled-components";
import palette from "../../styles/palette";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink"

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.brown[0]};
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.brown[1]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: ${palette.brown[0]};
        border-bottom: 1px solid ${palette.brown[0]};
    }
    &+& {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.brown[0]};
        text-decoration: underline;
        &:hover {
            color: ${palette.brown[1]};
        }
    }
`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
                <StyledInput 
                    autoComplete="id"
                    name="id"
                    placeholder="아이디" 
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password"
                />
                <Button full>로그인</Button>
                <Footer>
                    <CustomLink to="/register">회원가입</CustomLink>
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;