var React = require('react');
var MarkdownInput = require('./MarkdownInput');
var MarkdownOutput = require('./MarkdownOutput');
var content = require('./content');

var defaultText = content.defaultText;

var App = React.createClass({
    getInitialState: function() {
        return { text: defaultText }
    },

    updateText: function(newText) {
        this.setState({
            text: newText
        });
    },

    render: function() {
        return (
            <div className='container app-container'>
                <div className="row">
                    <MarkdownInput
                        value={this.state.text}
                        onChange={this.updateText} />
                    <MarkdownOutput
                        text={this.state.text} />
                </div>
            </div>
        );
    }
});

module.exports = App;