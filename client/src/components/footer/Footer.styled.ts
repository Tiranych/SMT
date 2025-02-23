import { footerBackgroundColor } from "@utils/variables";
import styled from "styled-components";

export const Inner = styled.footer`
    padding: 20px 0;
    background-color: ${footerBackgroundColor};
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoBox =styled.a`
    display: flex;
    gap: 0 10px;
    align-items: center;
`

export const Logo = styled.img`
    max-width: 32px;
    max-height: 32px;
`

export const CompanyName = styled.span`
    font-size: 24px;
    margin-top: 5px;
`

export const Menu = styled.ul`
    display: flex;
    gap: 0 20px;
    font-size: 18px;
`

export const Item = styled.li``

export const Anchor = styled.a``

export const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
    gap: 0 5px;
`