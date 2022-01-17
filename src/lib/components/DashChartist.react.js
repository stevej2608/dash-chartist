import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChartistGraph from 'react-chartist';

/**
 * Wrapper for react-chartist library. For API and
 * examples see:
 *
 * https://github.com/fraserxu/react-chartist
 *
 * https://gionkunz.github.io/chartist-js/index.html
 */
export default class DashChartist extends Component {
  render() {
    console.log("DashChartist,render()")
    const { id, setProps, ...chartProps } = this.props;
    return (
      <ChartistGraph {...chartProps} />
    );
  }
}

DashChartist.defaultProps = {};

DashChartist.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * The chart type
   */
  type: PropTypes.oneOf(['Line', 'Bar', 'Pie']).isRequired,

  /**
   * Chart data
   */
  data: PropTypes.object.isRequired,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * The options object with options that override the default
   * options. Check the examples for a detailed list.
   */
  options: PropTypes.object,

  /**
   * Specify an array of responsive option arrays which are a
   * media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   */
  responsiveOptions: PropTypes.array,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
