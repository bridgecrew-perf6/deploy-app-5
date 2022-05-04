import styled, { css } from "styled-components";
import theme from "../../styles/theme";


export const Textarea = styled.textarea(({wTxtarea}) => {
  return css`

    width: ${wTxtarea || '100%'};
    height: 75px;
    resize:none;
    border-color: ${theme.colors.inputBorder};
    padding: 5px 12px;
    border-radius: 5px;
    margin: 0.4rem 0;


    :focus {
      outline: none;
    }
  `;
})
