var i = 1;

var myStyle = {
    fontSize: 48,
    color: '#FF0000'
};

var arr = [
    <h1>this is first of array</h1>,
    <h2>this is second of array</h2>,
];

ReactDOM.render(
    <div>
        <h1>title{100 + 2 * 4}</h1>
        {/* show detail */}
        <h2 style = {myStyle}>welcome to react.</h2>
        {arr}
        <p data-myattribute="somevalue">this is javascript lib is nice.{i = 1 ? 'OK?' : 'NOT BEST?'}</p>
    </div>
    , document.getElementById('example')
);