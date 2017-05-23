
## Run locally

```bash
yarn start
```

## Deploy

```sh
npm run deploy
```

## Dockerize

Build the production version of the code. The files will be in the `build` folder:

```sh
npm run build
```

Create a docker image of a node.js server that listens on port 8080 and serves the files from the `build` folder:

```sh
docker build -t vayyar/liveviz .
```

Run the docker image (e.g. on port 9999):

```sh
 docker run -p 9999:8080 vayyar/liveviz
```

## More info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
