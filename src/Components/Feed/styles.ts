import styled from "styled-components";

export const Feed = styled.div `
  width: 100%;
  /* max-width: 60rem; */
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
  color: ${props => props.theme.Colors.textColor};

  .header-feed {
    width: 100%;
    padding: 2rem;
    background-color: ${props => props.theme.Colors.cards};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.Colors.textColor};
    font-size: 0.8rem;
  }

  a:hover {
    color: #ffe;
  }

`

export const Container = styled.section `
  width: 100%;
  max-width: 55.5rem;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  gap: 1rem;
  color: ${props => props.theme.Colors.textColor};
`



