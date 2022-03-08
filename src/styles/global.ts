import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --body-bg-color: #22212C;
  --text-color: #837E9F;
  --bg-cards: #302F3D;
  --bg-techs: #CB92B1;

  --border-radius: 1.25rem;
}

html {
  font-family: 'Merriweather Sans', sans-serif;
}

body {
  width: 100%;
  height: 100vh; 
}

.App {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${props => props.theme.Colors.bodyColor};
}
`


