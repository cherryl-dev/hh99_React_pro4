import styled from "styled-components";
import palette from "../../styles/palette";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


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

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const router = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClickLogin = async () => {
        const login = await axios.post('http://3.38.191.164/login', { id, password });
        console.log("로그인 성공");
        const token = login.data.token;
        localStorage.setItem('token', token);
        router('/myPage');
    }

    return (
        <AuthFormBlock>
            <h3>로그인</h3>
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
                <Button full onClick={onClickLogin}>로그인</Button>
                <Footer>
                    <CustomLink to="/register">회원가입</CustomLink>
            </Footer>
        </AuthFormBlock>
    )
};

export default LoginForm;