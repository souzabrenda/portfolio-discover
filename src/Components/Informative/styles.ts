import  styled  from "styled-components"

export const Informative = styled.div `
  width: 100%;
  max-width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Profile = styled.section `
  width: 100%;
  height: max-content;
  padding: 2rem;
  gap: 0.3rem;
  background-color: ${props => props.theme.Colors.cards};
  color: ${props => props.theme.Colors.textColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.2rem;



  div {
    width: 8rem;
    height: 8rem;
    border-radius: 62px;
    border: 8px solid ${props => props.theme.Colors.textColor};
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 7.8rem;
      height: 7.8rem;
      border-radius: 62px;
    }
  }

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`

export const Informations = styled.section `
  width: 100%;
  max-width: 20rem;
  height: max-content;
  padding: 2rem;
  background-color: ${props => props.theme.Colors.cards};
  color:${props => props.theme.Colors.textColor};
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};

  ul {
    text-decoration: none;
    list-style-type: none;
    color: var(--text-color);
    
  }
`

export const Tecnologies = styled.section `
  width: 100%;
  height: max-content;
  padding: 2rem;
  gap: 0.3rem;
  background-color: ${props => props.theme.Colors.cards};
  color: ${props => props.theme.Colors.textColor};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};

  strong {
    font-size: 1.3rem;
  }

  ul {
    width: 100%;
    padding: 0.8rem 0;
    text-decoration: none;
    list-style-type: none;
    color: ${props => props.theme.Colors.textColor};
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    
  }
`

export const DotedList = styled.section `
  width: 100%;
  height: max-content;
  padding: 2rem;
  background-color: ${props => props.theme.Colors.cards};
  color: ${props => props.theme.Colors.textColor};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};

  strong {
    font-size: 1.3rem;
  }

  ul {
    color: ${props => props.theme.Colors.textColor};
  }

 
`

