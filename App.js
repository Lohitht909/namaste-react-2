import React from "react";
import ReactDom from "react-dom/client"

// const heading =( <h1 className="head" tabIndex="5">namste react using jsx</h1>)

const HeadingComponent = () => {
    return <div id="container">
        <h1 className="heading">namaste react functional component</h1>
    </div>
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)