import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h2 className="text-3xl">
                But this is it; the deed is done. Silence drowns the sound.
                Before I Leaped, I should have seen the view from halfway down.
            </h2>
        </div>
    );
}

export default App;
