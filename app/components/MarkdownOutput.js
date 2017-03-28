var React = require('react');
var Marked = require('marked');

Marked.setOptions({
    renderer: new Marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

var MarkdownOutput = React.createClass({
    render: function() {
        var text = this.props.text;
        return (
            <div className='col-md-6 col-sm-6'
                 dangerouslySetInnerHTML={{__html: Marked(text)}}></div>
        );
    }
});

module.exports = MarkdownOutput;
