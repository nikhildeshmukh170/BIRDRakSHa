import UnderConstruction from './page/UnderConstruction';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <UnderConstruction />
      <Analytics/>
    </div>
    
  );
}

export default App;
