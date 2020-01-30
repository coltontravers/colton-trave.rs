import Styled from "styled-components";

export const StyledBackgroundWrapper = Styled.div`
    height: 100vh;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    z-index: -1;
    background: rgba(204,209,255,1);
    background: linear-gradient(135deg, rgba(204,209,255,1) 0%, rgba(69,56,255,1) 27%, rgba(0,39,179,1) 49%, rgba(0,25,107,1) 71%, rgba(0,26,59,1) 100%);
`;
