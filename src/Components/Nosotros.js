import React, { Component } from "react";
export default class Nosotros extends Component {
    render() {
        return <div> <p>React-router-dom has been added to the dependencies in npm and so has react-router and react.
            Project has been created using the create-react-app myapp cmd line. This is runned on a localhost,
            node server. I have an api and app folder inside my project folder. I have tried various things.
            Updated manually my package.json inside the app folder, reinstalled react-router-dom, delete the
            package-lock.json in the app folder and reinitialize it. My api folder holds nothing but node_modules,
            my api file, route.js, config.js, index.js and also a package.json and package-lock.json.
            I have tried the npm build command in my app folder. It just creates a 'build' folder which
            holds the same files as my public folder inside my app folder. I also tried running yarn add
            react-router-dom.</p></div>
    }
}