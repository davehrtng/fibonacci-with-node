const React = require('react');
const Plot = require('./plot');

var App = React.createClass({
  getInitialState: function() {
    return {
      /** The current sequence number */
      sequence: 1, 
      /** The current Fibonacci number */
      value: 0,
      /** The history of sequence and Fibonaccie numbers */
      history: [{x: 1, y: 0}]
    };
  },

  handleSequenceChange: function(e) {
    this.setState({sequence: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.get(this.props.url + "/" + this.state.sequence, function(dataJsonString, status, jqXHR){
      var data = JSON.parse(dataJsonString);
      var newHistory = this.state.history.concat({x: data.sequenceNumber, y: data.fibNumber});
      this.setState({
          value: data.fibNumber,
          history: newHistory
        });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1>Fibonacci</h1>
        <h3><small>Compute some fibonacci numbers.</small></h3>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input type="number" className="form-control" min="1" max="1250"
            onChange={this.handleSequenceChange}
            value={this.state.sequence} />
          <input type="submit" className="btn btn-primary" value="Ok" />
        </form>
        <h1>{this.state.value}</h1>
        <Plot coordinates={this.state.history} />
      </div>
    );
  }
});

module.exports = App;