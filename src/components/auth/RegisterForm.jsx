import styled from "styled-components";
import palette from "../../styles/palette";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRegister } from "../../api/getRegister";


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

const RegisterForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const router = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClickRegister = async () => {
        await getRegister(id, password)
        router('/login');
    }

    return (
        <AuthFormBlock>
            <h3>회원가입</h3>
                <StyledInput 
                    autoComplete="id"
                    name="id"
                    placeholder="아이디"
                    value={id}
                    onChange={onChangeId}
                />
                <StyledInput 
                    autoComplete="new-password" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <Button full onClick={onClickRegister}>회원가입</Button>
                <Footer>
                    <CustomLink to="/login">로그인</CustomLink>
            </Footer>
        </AuthFormBlock>
    )
};

export default RegisterForm;