import styled from "styled-components";

export const RecentPost = styled.div `
  width: 100%;
  height: max-content;
  background-color: ${props => props.theme.Colors.cards};
  color: ${props => props.theme.Colors.textColor};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  gap: 1.5rem;


  section {
    width: 8rem;
    height: 8rem;
    border-radius: 62px;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 7rem;
      height: 7rem;
      border-radius: 62px;
    }
  }

  .post-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

  }

  .header-posts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 0.8rem;
    }
  }

  .footer-posts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }

    .hashtag {
      display: flex;
      gap: 1rem;

    }
  }


`