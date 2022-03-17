import styled, { css } from "styled-components";

export const InputStyles = styled.input(({type, wInput}) => {

  if(type==='file'){
    return css`
      cursor: pointer;
      width: 60px;
      overflow: hidden;

      :before {
        content: 'Upload';
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        text-decoration: underline;
        color: #2C6ECB;
      }

      ::-webkit-file-upload-button {
        visibility: hidden;
      }
  `;
  }else if(type==='color'){
     return css`
        height: 54px;
        width: 54px;
        appearance: none;
        background: none;
        cursor: pointer;
        border: none;

        ::-webkit-color-swatch{
          border-radius: 6px;
        }
      `;
  }else{
    return css`
      width: ${wInput || '100%'};
      height: 35px;
      border-radius: 0.3rem;
      border: 1px solid #b3b3b3;
      margin: 0.4rem 0 0.8rem 0;
      padding: 5px 12px;  
      
      :focus {
        outline: none;
      }
    `;
  }

})
