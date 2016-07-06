'use strict';

var HelloWord = React.createClass({
    displayName: 'HelloWord',

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hello Word!'
            )
        );
    }
});

ReactDOM.render(React.createElement(HelloWord, null), document.getElementById('content'));
