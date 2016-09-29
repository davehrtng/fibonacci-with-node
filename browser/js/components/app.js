const React = require('react'),
    Plot = require('./plot'),
    request = require('request'),
    store = require('../redux-stuff');

var App = React.createClass({
  getInitialState: function() {
    return store.getState();
  },

  handleSequenceChange: function(e) {
    const setSequenceAction = {
      type: 'SET SEQUENCE',
      sequence: e.target.value
    };
    store.dispatch(setSequenceAction);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    request.get(this.props.url + store.getState().sequence, function(error, response, body) { 
      if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const addPairAction = {
              type: 'ADD PAIR',
              pair: [data.sequenceNumber, data.fibNumber]
            }
            store.dispatch(addPairAction);
            store.dispatch({
              type: 'SET VALUE',
              value: data.fibNumber
            });
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
            value={store.getState().sequence} />
          <input type="submit" className="btn btn-primary" value="Ok" />
        </form>
        <h1>{store.getState().value}</h1>
        <Plot coordinates={store.getState().history} />
      </div>
    );
  },
  
  propTypes: {
      url: React.PropTypes.string.isRequired
  }
});

module.exports = App;