# dash-chartist

Minimal [Dash](https://dash.plot.ly/) wrapper for [react-chartist](https://github.com/fraserxu/react-chartist) library.

![](https://raw.githubusercontent.com/stevej2608/dash-chartist/master/docs/img/showcase.png)

**Code Snippet**
```
from dash_chartist import DashChartist
import dash
from dash import  html

external_stylesheets = [
    "https://cdnjs.cloudflare.com/ajax/libs/chartist/0.3.1/chartist.min.css",
    ]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)


data = {
    "labels": ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    "series": [ [1, 2, 4, 8, 6, -2, -1, -4, -6, -2] ]
}

options = {
    "high": 10,
    "low": -10,
}

chartType = 'Bar'

app.layout = html.Div([
    DashChartist(type=chartType, options=options, data=data)
])


if __name__ == '__main__':
    app.run_server(debug=False, host="0.0.0.0", port=5000)
```

## Installation

You can install *dash-chartist* with `pip`:

```
pip install dash-chartist
```

## Documentation

Head over to the [*README*][docs-homepage] for more details.

## Contributing

The source code for *dash-chartist* is available
[on GitHub][dash-chartist-repo]. If you find a bug or something is unclear, we encourage
you to raise an issue. We also welcome contributions, to contribute, fork the
repository and open a [pull request][dash-chartist-pulls].


[dash-homepage]: https://dash.plot.ly/
[dash-chartist-repo]: https://github.com/stevej2608/dash-chartist
[docs-homepage]: https://github.com/stevej2608/dash-chartist/blob/master/README.md
[dash-chartist-pulls]: https://github.com/stevej2608/dash-chartist/pulls
