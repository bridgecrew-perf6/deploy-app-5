import styled from "styled-components";
import theme from "../../styles/theme";


export const Textarea = styled.textarea`

  width: 100%;
  height: 75px;
  resize:none;
  border-color: ${theme.colors.inputBorder};
  padding: 5px 12px;
  border-radius: 5px;


  :focus {
    outline: none;
  }
`;