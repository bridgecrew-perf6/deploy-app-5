import Image from "next/image";
import styled, { css } from "styled-components";

export const ImgStyle = styled(Image)(() => {

  return css`
    border-radius: 5px;
  `;
})