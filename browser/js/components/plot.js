const React = require('react'),
  Coordinate  = require('./coordinate');

/**
 * Simply render all the coordinates contained in the state as <Coordinates />
 */
const Plot = (props) => {
  return ( 
    <div> 
      <h4>History</h4>
      {
        props.coordinates
          .sort( (c1, c2) => c1[0] - c2[0] )
          .map(coordinate => <Coordinate x={coordinate[0]} y={coordinate[1]} key={coordinate[0]} />)
      }
    </div>
  );
};

Plot.propTypes = {
  coordinates: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)).isRequired
};

module.exports = Plot;