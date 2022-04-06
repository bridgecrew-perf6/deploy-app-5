import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const SectionStyles = styled.div(() => {

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

      h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin: 25px 0 6px 0;
      }
      h3 {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        margin: 0 0 16px 0;

      }

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #6D7175;
        margin: 0 0 10px 0;
        text-align: center;
        padding: 0 40px 0 40px;
      }

      
      span {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
        margin: 10px 0;
      }
  `
})

export const EmptyStyle = styled.div(({height}) => {


  return css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${height || '130px' } ;
  font-weight: 600;
  font-size: 20px;
  background: ${theme.colors.btnHover};
  border-radius: 14px;
`;
})
