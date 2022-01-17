## dash-chartist

 Dash wrapper for [react-chartist](https://github.com/fraserxu/react-chartist) library

## Usage

    pip install dash-chartist

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
### Debugging the python demo `usage.py`

In VSCODE select `2. Debug usage.py` from the launch options and press `F5` to launch the
Flask/Dash development server.

Open [http://localhost:8050](http://localhost:8050)

Set breakpoints as required.

### Debugging the component react.js source

To debug/single-step the JS component code in conjunction with a dash application:

In a terminal window start the dash application:

    python usage.py

Select debugger launch *1: JS Browser* and press F5. The chrome browser
will open and display your application. Enter breakpoints in the source
code eg *./src/lib/components/DashChartist.react.js* as required.

### Build the project

    npm run clean
    npm run build

To create a tarball, first change the release version in package.json, then:

    rm -rf dist/*
    python setup.py sdist bdist_wheel

The tarball is in *dist/dash_chartist-<version>.tar.gz*

To install the tarball in a dash project:

    pip install dash_chartist-<version>.tar.gz

### Publish

See [Create a production build and publish]

    twine upload -r pypicloud dist/*




