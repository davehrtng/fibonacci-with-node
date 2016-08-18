var Fibonacci = React.createClass({
  getInitialState: function() {
    return {sequence: null, value: null};
  },

  render: function() {
    return <h1>{this.state.value}</h1>
  }
});

ReactDOM.render(
  <Fibonacci />,
  document.getElementById('react-node')
);


// jquery to do some basic stuff
$(document).ready(function() {
  $('#form-fib').submit(function () {
    var inputSequenceNumber = $('#input-sequence-number');
    var sequenceNumber = inputSequenceNumber.val();
    if(sequenceNumber != '') {
      var fibServiceUrl = "fib/" + sequenceNumber;

      $.get(fibServiceUrl, function(dataJsonString, status, jqXHR){
        var data = JSON.parse(dataJsonString);

        $('#h1-output').text(data.fibNumber);
        inputSequenceNumber.select();
      });
    }
    return false;
  });
});
