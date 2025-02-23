import styled, { createGlobalStyle } from 'styled-components';

import { mainBackgroundColor, mainColor } from '@utils/variables';

export const Global = createGlobalStyle`
    body, html {
        font-family: "Vollkorn", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: ${mainColor};
        background-color: ${mainBackgroundColor};
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`;
