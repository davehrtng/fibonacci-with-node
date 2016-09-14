const React = require('react');
const Coordinate  = require('./coordinate');

/**
 * Simply render all the coordinates contained in the state as <Coordinates />
 */
const Plot = (props) => {
  return ( 
    <div> 
      <h4>History</h4>
      {
        props.coordinates
          .sort( (c1, c2) => c1.x - c2.x )
          .map(coordinate => <Coordinate x={coordinate.x} y={coordinate.y} key={coordinate.x} />)
      }
    </div>
  );
};

Plot.propTypes = {
  coordinates: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

module.exports = Plot;