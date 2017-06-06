

function resetCanvas(canvas) {
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function rainbowColor(n) {
  const s = "100";
  const l = "50";
  /*if (n === 0) {
    return "black";
  }*/
  var h = 240 - n * 240 / 255;
  return "hsl(" + h + "," + s + "%," + l + "%)";
}

function scale(x, a, b, aa, bb) {
  return aa + (bb - aa) * (x - a) / (b - a);
}

export const drawHeatMap = (canvas, data, {min, max}) => {
  resetCanvas(canvas);
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const m = data.length;
  const n = data[0].length;
  const scaleX = width/m;
  const scaleY = height/n;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      const val = scale(data[i][j], min, max, 0, 255);
      ctx.fillStyle = rainbowColor(val);
      ctx.fillRect(i * scaleX, height - (j+1) * scaleY, scaleX, scaleY);
    }
  }
}
