import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const MyLinkContents = styled(Link)`
    list-style: none;
    text-decoration: none;
    &:visited {
        ${(props) => {
            return css`
                color: ${props.color};
            `;
        }}
    }
    &:link {
        ${(props) => {
            return css`
                color: ${props.color};
            `;
        }}
    }
`;

export default function MyLink({ children, to, color }) {
    return (
        <MyLinkContents to={to} color={color}>
            {children}
        </MyLinkContents>
    );
}
