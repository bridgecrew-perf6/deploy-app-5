import css from 'styled-jsx/css'
import theme from '../theme';


export default css`
.input-colors {
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.borderGris};
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
}

.input-colors > p {
  margin-left: 10px;
}
`