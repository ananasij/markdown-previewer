var React = require('react');

var MarkdownOutput = React.createClass({
    render: function() {
        var text = this.props.text;
        return (
            <div className='col-md-6 col-sm-6'> {text} </div>
        );
    }
});

module.exports = MarkdownOutput;
