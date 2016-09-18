# Boilerplate for a React application

* [Storybook][storybook] for isolated component development
* [redux-cli][redux-cli] for component scaffolding
* Bootstrapped with [Create React App][create-react-app]

## Usage

To start application development server:
```bash
npm start
```

To start storybook:
```bash
npm run storybook
```

## Scaffolding

Generating components requires [redux-cli][redux-cli]. 

```bash
redux g dumb ComponentName
```

Running this command would create a component named `ComponentName` in 
`./src/components` folder together with an `scss` file and *stories*.

[storybook]: https://getstorybook.io
[redux-cli]: https://github.com/SpencerCDixon/redux-cli
[create-react-app]:https://github.com/facebookincubator/create-react-app
