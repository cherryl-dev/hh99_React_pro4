import styled from "styled-components";
import palette from "../../styles/palette";
import CustomLink from "../common/CustomLink"

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.brown[1]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    background-color: white;
    border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
    return <AuthTemplateBlock>
        <WhiteBox>
            <div className="logo-area">
                <CustomLink to="/">MY TODO LIST</CustomLink>
            </div>
            {children}
        </WhiteBox>
    </AuthTemplateBlock>;
};

export default AuthTemplate;