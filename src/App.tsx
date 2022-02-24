import { GlobalStyle } from "./styles/global";

import { Informative } from "./Components/Informative";
import { Feed } from "./Components/Feed";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Informative />
        <Feed />
           
    </div>
  );
}

export default App;
