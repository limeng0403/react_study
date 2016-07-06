var HelloWord = React.createClass({
    render: function () {
        return (
            <div>
                <p>Hello Word!</p>
            </div>
        );
    }
});

ReactDOM.render(
    <HelloWord></HelloWord>, document.getElementById('content')
);