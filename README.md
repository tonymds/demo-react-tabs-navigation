# React Dynamic Tabs Demo
Simple example of dynamic tabs opening written in ES6.
Uses [Docker](https://github.com/docker/docker), [Node](https://github.com/nodejs/node), [Webpack](https://github.com/webpack/webpack), [React](https://github.com/facebook/react), [Material-UI](https://github.com/callemall/material-ui), [Babel](https://github.com/babel/babel), [ESLint](https://github.com/eslint/eslint)

**Still in development.**

## TODO
- [ ] Add button to close the tab;
- [ ] Focus tab when added ([**initialSelectedIndex**](https://github.com/callemall/material-ui/pull/389/files) already exists in Material-UI Tabs, could use a **selectedIndex** also);
- [ ] Lazy load the tab content (using [require.ensure](http://blog.netgusto.com/asynchronous-reactjs-component-loading-with-webpack/));
- [ ] Tests;

## Usage

### Setup
If you want an isolated enviroment, install Docker, navigate to the base folder and run the start-dev.sh script.
This pulls an image with Node and starts an interactive container, from there you have a full Node enviroment.
Instead you can install Node on your machine.

### Workflow
Run
```
npm install
npm start
```

This will download all dependencies (may take a while) and trigger a script (defined inside package.json scripts tag) that runs Webpack with the workflow:

1. Transpile ES6 and React (using Babel)
2. Module Management and Bundle
3. Linting (using ESLint)
4. Watch for changes, when detected go to Step 1
5. Start web server (http://localhost:8080 or http://192.168.99.100:8080/ when using Docker)

The web app is sitting in port localhost:8080, if you are using docker

## Contributing

Feel free to fork and improve, feedback is appreciated :)
