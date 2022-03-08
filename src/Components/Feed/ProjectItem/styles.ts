import styled from "styled-components";

export const ProjectItem = styled.div `
  width: 100%;
  max-width: 20rem;
  min-width: 50%;
  /* flex-wrap: wrap; */
  height: max-content;
  padding: 2rem 0.8rem; 
  gap: 1rem;
  background-color: ${props => props.theme.Colors.cards};
  color: ${props => props.theme.Colors.textColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};

  span {
    color: #888 ;
  }

  .header-project {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .description {
    width: 100%;
    font-size: 0.8rem;
    font-weight: 300;
  }

  .footer-project {
    width: 100%;
    display: flex;
    font-size: 0.7rem;
    justify-content: flex-end;

  }
  
  .f-j {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  
  /* .last-child {
    width: 100%;
    max-width: 10rem;
    display: flex;
    align-items: center;

  } */

  .mini-item {
    width: max-content;
    height: max-content;  
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .link-title {
    font-size: 1rem;
  }
`