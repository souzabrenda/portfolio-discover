import styled from "styled-components";

export const TecnologyItem = styled.li `
  padding: 0.3rem 0.8rem;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.Colors.techs};
  color: ${props => props.theme.Colors.textColor};
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;  
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`