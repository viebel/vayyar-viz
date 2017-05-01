
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


## TODO

- route per app
- get/send params to server
- display fps
- more params types
- improve styles

## Bugs

- memory leak in heatmap: https://community.plot.ly/t/bad-performance-over-time-up-to-a-crash/3999/3?

## DONE
- reset params
- group parameters



## More info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
