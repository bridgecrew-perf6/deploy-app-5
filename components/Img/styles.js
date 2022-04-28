import styled, { css } from "styled-components";

export const ImgStyle = styled.img(({ wImg, hImg }) => {
  return css`
    border-radius: 5px;
    width: ${wImg || "42.3px"};
    height: ${hImg || "42.3px"};
    object-fit: cover;
    margin-right: 5px;
  `;
});
