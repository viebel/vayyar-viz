import {DataSet, Graph3d} from 'vis'

function findMin(data) {
    var min = Number.MAX_VALUE;
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].length; j++) {
            if (data[i][j] < min) {
                min = data[i][j];
            }
        }
    }
    return min;
}

function findMax(data) {
    var max = 0.0;
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[0].length; j++) {
            if (data[i][j] > max) {
                max = data[i][j];
            }
        }
    }
    return max;
}

function custom(x, y, axisStepX, axisStepY, values) {
    var min = findMin(values);
    var max = findMax(values);
	if (max === min) {
		return values[0][0];
    } else {
        return (2*((values[Math.floor(x/axisStepX)][Math.floor(y/axisStepY)] - min) / (max - min)));
    }
}

export const drawPlot = (container, values, view, flipped, rotated) => {
    var data = new DataSet();
    var stepsX = values.length;
    var axisMaxX = stepsX * 10;
    var axisStepX = axisMaxX / stepsX;
    var stepsY = values[0].length;
    var axisMaxY = stepsY * 10;
    var axisStepY = axisMaxY / stepsY;
    for (var x = 0; x < axisMaxX; x+=axisStepX) {
        for (var y = 0; y < axisMaxY; y+=axisStepY) {
            var value = custom(x, y, axisStepX, axisStepY, values);
            let xi, yi;
            if (flipped) {
                xi = axisMaxY - 10 - y;
                yi = axisMaxX - 10 - x;
              } else {
                xi = y;
                yi = x;
              }
            data.add({
                x: yi,
                y: xi,
                z: value,
                style: value
            });
        }
    }
      var options = (view === 'singleMap') ? {
        width: '65%',
        height: '100%',
        yCenter: '25%',
        xCenter: '60%',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: false,
        verticalRatio: 0.3,
        cameraPosition: {horizontal: `${(rotated) ? 1 + (Math.PI / 2) : 1}`},
    } : {
      width: '100%',
      height: '100%',
      yCenter: '40%',
      xCenter: '55%',
      style: 'surface',
      showPerspective: true,
      showGrid: true,
      showShadow: false,
      keepAspectRatio: false,
      verticalRatio: 0.3,
      cameraPosition: {horizontal: `${(rotated) ? 1 + (Math.PI / 2) : 1}`},
    };
    new Graph3d(container, data, options);
}
