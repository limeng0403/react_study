var LikeButton = React.createClass({
    getInitialState: function() {
        return { liked: false };
    },
    handleClick: function(event) {
        this.setState({ liked: !this.state.liked });
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'not like';
        return (
            <p onClick={this.handleClick}>
                you <b>{text}</b> me.be change click me。
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
);