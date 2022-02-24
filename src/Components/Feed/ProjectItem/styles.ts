import styled from "styled-components";

export const ProjectItem = styled.div `
  width: 100%;
  max-width: 30rem;
  height: max-content;
  padding: 2rem 1rem;
  gap: 1.5rem;
  background-color: var(--bg-cards);
  color: var(--text-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: var(--border-radius);

  .header-project {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .description {
    width: 100%;
    font-size: 0.8rem;
    font-weight: 400;
  }

  .footer-project {
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  
  .f-j {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  
  .last-child {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.4rem;
  }

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