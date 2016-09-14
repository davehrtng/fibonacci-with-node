const React = require('react'); // Used when jsx transpiled to use React.createEl

const Coordinate = (props) => <p>({props.x}, {props.y})</p>;

Coordinate.propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
};

module.exports = Coordinate;