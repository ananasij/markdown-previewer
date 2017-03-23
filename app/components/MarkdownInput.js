var React = require('react');

var MarkdownInput = React.createClass({
    handleChange: function (e) {
        var text = e.target.value;
        this.props.onChange(text);
    },

    render: function() {
        return (
            <div className='col-md-6 col-sm-6'>
                <textarea
                    value={this.props.value}
                    className='form-control text-area-input'
                    onChange={this.handleChange} >
                </textarea>
            </div>
        );
    }
});

module.exports = MarkdownInput;
