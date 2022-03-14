// styles/global.js
import css from 'styled-jsx/css'
import theme from '../theme';

export default css.global`

.mt-10 {
  margin-top: 10px;
}
  
body, .navbar {
  font-family: ${theme.fontFamily.segoe} !important;
}
.container{
  width: 80%;
  position: absolute;
  top: 0;
  left: 220px;
}

.Polaris-Tabs__Wrapper {
  background: #f6f6f7;
}

.card-diagnostic--tab{
  position: absolute;
  width: 55%;
  top: 145px
}

.card-diagnostic--customize{
  position: absolute;
  top: 145px;
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

textarea {
  width: 100%;
  height: 75px;
}

.setting-required > .check-custom {
  width: 20px ;
}

.setting-multiple > .check-custom {
  width: 20px ;
}
.setting-recommended > .check-custom {
  width: 20px ;
}

.setting-score > .check-custom {
  width: 20px ;
}
`