import styled from 'styled-components'

// export const StyledToggle =  = styled()

export const ToggleWrapper = styled.div`
  position: relative;
`
export const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 39px;
  height: 24px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 2px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const StyledToggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 39px;
  height: 24px;
  &:checked + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`
