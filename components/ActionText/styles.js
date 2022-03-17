import styled, {css} from 'styled-components'

export const Div = styled.div(({reverse, divMargin}) => {
 
  if(reverse === 'reverse'){
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row-reverse;
      justify-content: flex-end;
    `
  }

  else{
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: ${ divMargin || 0};
    `
  }
 
}
)