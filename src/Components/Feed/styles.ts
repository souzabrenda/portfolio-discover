import styled from "styled-components";

export const Feed = styled.div `
  width: 100%;
  max-width: 60rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--text-color);

  .header-feed {
    width: 100%;
    padding: 2rem;
    background-color: var(--bg-cards);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 0.8rem;
  }

  a:hover {
    color: #ffe;
  }

`

export const Container = styled.section `
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: var(--text-color);
`



