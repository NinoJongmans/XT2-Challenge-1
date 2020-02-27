var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
					labels: generateLabels(),
					datasets: [{
						backgroundColor: utils.transparentize(presets.red),
						borderColor: presets.red,
						data: generateData(),
						label: 'Dataset',
						fill: boundary
					}]
				},
    options: Chart.helpers.merge(options, {
					title: {
						text: 'fill: ' + boundary,
						display: true
					}
				})
			});
});