import styled, { css } from "styled-components";
import theme from "../../styles/theme";
export const InputStyles = styled.input(({ type, wInput, hInput }) => {
  if (type === "file") {
    return css`
      cursor: pointer;
      width: 60px;
      overflow: hidden;
      :before {
        content: "Upload";
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        text-decoration: underline;
        color: ${theme.colors.blue};
      }

      ::-webkit-file-upload-button {
        visibility: hidden;
      }
    `;
  } else if (type === "color") {
    return css`
      height: 54px;
      width: 54px;
      appearance: none;
      background: none;
      cursor: pointer;
      border: none;
      margin-right: 5px;

      ::-webkit-color-swatch {
        border-radius: 6px;
      }
    `;
  } else if (type === "textEditable") {
  } else {
    return css`
      width: ${wInput || "100%"};
      height: ${hInput || "35px"};
      border-radius: 5px;
      border: 1px solid ${theme.colors.inputBorder};
      margin: 0.4rem 0 0.8rem 0;
      padding: 5px 12px;

      :focus {
        outline: none;
      }
    `;
  }
});
