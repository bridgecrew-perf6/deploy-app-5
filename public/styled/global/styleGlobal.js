// styles/global.js
import css from 'styled-jsx/css'
import theme from '../theme';

export default css.global`
  
  
body, .navbar {
  font-family: ${theme.fontFamily.segoe} !important;
}
.container{
  width: 80%;
  position: absolute;
  top: 0;
  left: 220px;
}

.card-diagnostic--tab{
  width: 60%;
}

.card-diagnostic--customize{
  position: absolute;
  top: 72px;
  right: 0px;
  width: 40%;
}

.input-text, .input-textarea{
  margin: 4rem 0;
}

.input-question > .input {
  width: 100%;
}

.input-colors > .input {
  height: 50px;
  margin: 0;
  padding: 0px;
  width: 16%;
  border: none;
}

`