import css from 'styled-jsx/css'
import theme from '../theme'


export default css`

.container-preview-question {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.preview-title {
  margin-bottom: 1rem;
}

.preview-question {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}

.options-question-list {
  width: 100%;
}

.option{
  height: 38px;
  margin: 0.6rem 0;
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid ${theme.colors.borderGris};
}

`





