import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";



function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            {/* using arrow function we can pass a function in to that */}
            <dl className="dictionary">{emojipedia.map(emojiTerm => (
                <Entry key={emojiTerm.id} emoji={emojiTerm.emoji} name={emojiTerm.name} description={emojiTerm.meaning} />))}
            </dl>
        </div>
    );
}

export default App;
