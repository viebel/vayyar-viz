
var fps = {startTime : 0,
	   frameNumber : 0,
	   getFPS : function(){
	       this.frameNumber++;
	       var d = new Date().getTime(),
		   currentTime = ( d - this.startTime ) / 1000,
		   result = Math.floor( ( this.frameNumber / currentTime ) );
	       if( currentTime > 1 ){
		   this.startTime = new Date().getTime();
		   this.frameNumber = 0;
	       }
	       return result;
	   }
	  };
function range(n) {
    x = new Array(n);
    for(var i = 0; i<n; i++)
	x[i] = i;
    return x;
}

function draw(data) {
    if(window.drawn) {
	Plotly.restyle('myDiv', {z: [data.Data]});
    } else {
	var axisTemplate = {
  	    range: [data.X0, data.X1],
	    autorange: false,
  	    showgrid: true,
  	    zeroline: false,
  	    linecolor: 'black',
  	    showticklabels: true,
  	    ticks: ''
	};

	var layout = {
  	    title: 'Heatmap test',
  	    xaxis: axisTemplate,
  	    yaxis: axisTemplate,
  	    showlegend: false,
	};

	var d = [
	    {
		colorscale: 'Jet',
		x: range(50),
		y: range(50),
		z: data.Data,
		zmin: 0,
		zmax: 4000,
		type: 'heatmapgl'
	    }
	];
	Plotly.newPlot('myDiv', d, layout);
	window.drawn = true;
    }
}

function updateGraph(data)
{
    console.time('draw');
    draw(data);
    console.timeEnd('draw');
    document.getElementById('fps').innerHTML = fps.getFPS();
}

window.shouldDraw = true;

var url='http://209.9.36.2:1234/demoData2';
function loadDataAndDraw(url) {
    Plotly.d3.json(url, function(error, data) {
	if (error) return console.warn(error);
	updateGraph(data);
	loadDataAndDraw(url);
    });
}

loadDataAndDraw(url);
