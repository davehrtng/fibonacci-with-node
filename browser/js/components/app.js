const React = require('react'),
    Plot = require('./plot'),
    request = require('request'),
    store = require('../redux-stuff');

var App = React.createClass({
  getInitialState: function() {
    return {
      /** The current sequence number */
      sequence: 1, 
      /** The current Fibonacci number */
      value: 0,
      /** The history of sequence and Fibonaccie numbers */
      history: store.getState()
    };
  },

  handleSequenceChange: function(e) {
    this.setState({sequence: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    request.get(this.props.url + this.state.sequence, function(error, response, body) { 
      if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // var newHistory = this.state.history.concat({
            //   x: data.sequenceNumber,
            //   y: data.fibNumber
            // });
            // this.setState({
            //       value: data.fibNumber,
            //       history: newHistory
            // });
            const addPairAction = {
              type: 'ADD PAIR',
              pair: [data.sequenceNumber, data.fibNumber]
            }
            store.dispatch(addPairAction);
      }
      else {
        alert("Something went wrong on our end. Sorry about that! Please try again later.");
      }
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
        <Plot coordinates={store.getState()} />
      </div>
    );
  },
  
  propTypes: {
      url: React.PropTypes.string.isRequired
  }
});

module.exports = App;