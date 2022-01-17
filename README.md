## dash-chartist

 Dash wrapper for chartist library

## Usage


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
code eg *./src/lib/components/DashDatatables.react.js* as required.

