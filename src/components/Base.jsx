var React = require('react');
var Link = require('react-router').Link;

var Base = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Example</h1>
       {this.props.children}
      </div>
    );
  }
});

module.exports = Base;
