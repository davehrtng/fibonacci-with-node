var Fibonacci = React.createClass({
  getInitialState: function() {
    return {sequence: 1, value: 0};
  },

  handleSequenceChange: function(e) {
    this.setState({sequence: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.get(this.props.url + "/" + this.state.sequence, function(dataJsonString, status, jqXHR){
      var data = JSON.parse(dataJsonString);
      this.setState({value: data.fibNumber})
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
      </div>
    );
  }
});

ReactDOM.render(
  <Fibonacci url="fib" />,
  document.getElementById('react-node')
);
