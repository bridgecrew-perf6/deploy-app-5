import styled from "styled-components";
import theme from '../../styles/theme';

export const SideStyles = styled.div`

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  height: 100vh;
  position: absolute;
  background: #fff;
  transition: .3s;
  z-index: 1000;
}
.sidebar-open {
  display: flex;
  flex-direction: column;
  width: 184px;
  height: 100vh;
  position: absolute;
  background: #fff;
  transition: .3s;
  z-index: 1000;
}


.open-close {
  width: 16px;
  margin-top: 20px;
  position: absolute;
  top: 260px;
  cursor: pointer;
}
.arrow-close {
  transform: rotate(180deg);
  left: 175px;
  transition: .3s;
}
.arrow-open {
  left: 38px;
  transition: .3s;
}

.link-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 34px;

  a {
    text-decoration: none;
  }
}

.link-close {
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  transition: .1s;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &[aria-current] {
    path {
    fill: #7551DC;
    }
  }
}

.link-open {
  display: flex;
  height: 33px;  
  align-items: center;
  gap: 15px;
  transition: .1s;
  margin: 0px 6px 12px 6px;
  padding-left: 11px;

  p {
    color: ${theme.colors.text};
    font-weight: 600;
    font-size: 14px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[aria-current] {
    position: relative;
    background: #F2EDFF;
    border-radius: 5px;
    padding-left: 11px;

    p {
      color: ${theme.colors.purple};
    }

    path {
      fill: ${theme.colors.purple};
    }

    ::after {
      position: absolute;
      content: "";
      height: 33px;
      width: 2px;
      background: ${theme.colors.purple};
      left: -6px;
      top: 0;
    }
  }

}

`;