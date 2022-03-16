import React from 'react'
import styled, {css} from 'styled-components'

export const ButtonStyles = styled.button(() => css`

    width: 90px;
    height: 36px;
    background:  #FFFFFF;
    border: 1px solid #C9CCCF;
    border-radius: 5px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);

    &:hover {
      background: #f7f7f7;
      cursor: pointer;
    }
`)