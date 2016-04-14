var title = "Study";
// var title = 123;
var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});
ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('example')
);

