# react_study

真不容易，react这种编程思维真的让我觉得自己的智商瞬间变得好低。

### 曾经

搞过一本《react引领未来的用户界面开发框架》，看过一本书之后，居然一段代码都没运行成功过，于是，这本书就当成react的科普书了。

没懂就是没懂。

在给菜鸟找html入门教程的时候，看到了这个网站（[http://www.runoob.com/](http://www.runoob.com/)）上有react的入门教程，看了一下，觉得挺有意思的，于是，创建了这个项目。

### 目的

既然有书了，既然看了，怎么也得入个门啊！

### 科普

+ React 是一个用于构建用户界面的 JAVASCRIPT 库。
+ React主要用于构建UI，很人多认为 React 是 MVC 中的 V（视图）。
+ React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
+ React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

**React特点**

- [x] 1.声明式设计 −React采用声明范式，可以轻松描述应用。
- [x] 2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
- [x] 3.灵活 −React可以与已知的库或框架很好地配合。
- [x] 4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
- [x] 5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- [x] 6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

### 学习笔记

**你懂的，一切都从Hello World开始**

创建一个html页面，在body体中编写如下代码：

```
<div id="example"></div>
<script src="js/react.min.js"></script>
<script src="js/react-dom.min.js"></script>
<script src="http://cdn.bootcss.com/babel-core/5.8.23/browser.min.js"></script>
<script type="text/babel">
    ReactDOM.render(
    <h1>Hello, world!</h1>, document.getElementById('example') );
</script>
```

曾经，程序无法运行的问题在于，react好像必须要在服务器环境下运行，于是，这次，使用nodejs创建了网页运行环境。引入了expressjs框架。可以把项目下载到本地，安装nodejs之后，在项目目录下运行

```
npm install
node app.js
```

之后在浏览器中输入`localhost:3000`，就能看到页面了。如果你没有个性化hosts文件的话。


**代码说明**

大家可以看到，程序中引用了三个库：react.min.js、react-dom.min.js和browser.min.js：

+ react.min.js - React 的核心库
+ react-dom.min.js - 提供与 DOM 相关的功能
+ browser.min.js - 用于将 JSX 语法转为 JavaScript 语法

以上说明了三个库的作用。

> 注意：如果我们需要使用JSX，则`<script>`标签的type属性需要设置为text/babel。

代码文件：study1.html

运行地址：localhost:3000

**第一阶段 React JSX**

React使用JSX来替代常规的JavaScript。

JSX是一个看起来很像XML的JavaScript语法扩展。

我们不需要一定使用JSX，但它有以下优点：

+ JSX执行更快，因为它在编译为JavaScript代码后进行了优化。
+ 它是类型安全的，在编译过程中就能发现错误。
+ 使用JSX编写模板更加简单快速。

我们可以在以上代码中嵌套多个HTML标签，需要使用一个div元素包裹它，实例中的p元素添加了自定义属性data-myattribute，添加自定义属性需要使用data-前缀。

```
ReactDOM.render(
    <div>
        <h1>title</h1>
        <h2>welcome to react.</h2>
        <p data-myattribute="somevalue">this is javascript lib is nice.</p>
    </div>
    , document.getElementById('example') );
```

此段代码写在

```
<script type="text/babel"></script>
```

中。下同。

我们可以在JSX中使用JavaScript表达式。表达式写在花括号{}中。实例如下：
```
ReactDOM.render(
    <div>
        <h1>title{100+2*4}</h1>
        <h2>welcome to react.</h2>
        <p data-myattribute="somevalue">this is javascript lib is nice.</p>
    </div>
    , document.getElementById('example') );
```

在JSX中不能使用if else语句，单可以使用三元运算表达式来替代。以下实例中如果变量i等于1浏览器将输出'OK?', 如果修改i的值，则会输出'NOT BEST?'。

```
var i=1; 
ReactDOM.render(
<div>
    <h1>title{100+2*4}</h1>
    <h2>welcome to react.</h2>
    <p data-myattribute="somevalue">this is javascript lib is nice.{i = 1 ? 'OK?' : 'NOT BEST?'}</p>
</div>
, document.getElementById('example') );
```

React推荐使用内联样式。我们可以使用camelCase语法来设置内联样式。React会在指定元素数字后自动添加px。以下实例演示了为h1元素添加myStyle内联样式：

```
var i = 1; 
        
var myStyle = {
    fontSize: 48,
    color: '#FF0000'
};

ReactDOM.render(
<div>
    <h1>title{100+2*4}</h1>
    <h2 style = {myStyle}>welcome to react.</h2>
    <p data-myattribute="somevalue">this is javascript lib is nice.{i = 1 ? 'OK?' : 'NOT BEST?'}</p>
</div>
, document.getElementById('example') );
```

注释需要写在花括号中，实例如下：

```
var i = 1; 
        
var myStyle = {
    fontSize: 48,
    color: '#FF0000'
};

ReactDOM.render(
<div>
    <h1>title{100+2*4}</h1>
    {/* show detail */}
    <h2 style = {myStyle}>welcome to react.</h2>
    <p data-myattribute="somevalue">this is javascript lib is nice.{i = 1 ? 'OK?' : 'NOT BEST?'}</p>
</div>
, document.getElementById('example') );
```

JSX允许在模板中插入数组，数组会自动展开所有成员：

```
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
    <h1>title{100+2*4}</h1>
    {/* show detail */}
    <h2 style = {myStyle}>welcome to react.</h2>
    {arr}
    <p data-myattribute="somevalue">this is javascript lib is nice.{i = 1 ? 'OK?' : 'NOT BEST?'}</p>
</div>
, document.getElementById('example') );
```

代码文件：study2.html

运行地址：localhost:3000?name=study2

**第二阶段 组件**

React可以渲染HTML标签(strings)或React组件(classes)。

要渲染HTML标签，只需在JSX里使用小写字母的标签名。例如study2.html中的：

```
<div>
    <h1>title{100+2*4}</h1>
    {/* show detail */}
    <h2 style = {myStyle}>welcome to react.</h2>
    {arr}
    <p data-myattribute="somevalue">this is javascript lib is nice.{i = 1 ? 'OK?' : 'NOT BEST?'}</p>
</div>
```

要渲染React组件，只需创建一个大写字母开头的本地变量。

```
var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello World！</h1>;
    }
});

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);
```

> 注意，原生HTML元素名以小写字母开头，而自定义的React类名以大写字母开头，比如HelloMessage不能写成helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。

如果我们需要向组件传递参数，可以使用 this.props 对象,实例如下：

```
var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}!</h1>;
    }
});

ReactDOM.render(
    <HelloMessage name="Runoob" />,
    document.getElementById('example')
);
```

> 注意，在添加属性时，class属性需要写成className，for属性需要写成htmlFor，这是因为class和for是JavaScript的保留字。

代码文件：study3.html

运行地址：localhost:3000?name=study3

我们可以通过创建多个组件来合成一个组件，即把组件的不同功能点进行分离。

以下实例我们实现了输出网站名字和网址的组件：

```
var WebSite = React.createClass({
    render: function() {
        return (
        <div>
            <Name name={this.props.name} />
            <Link site={this.props.site} />
        </div>
        );
    }
});

var Name = React.createClass({
    render: function() {
        return (
        <h1>{this.props.name}</h1>
        );
    }
});

var Link = React.createClass({
    render: function() {
        return (
        <a href={this.props.site}>
            {this.props.site}
        </a>
        );
    }
});

ReactDOM.render(
    <WebSite name="study" site="http://www.runoob.com" />,
    document.getElementById('example')
);
```

实例中WebSite组件使用了Name和Link组件来输出对应的信息，也就是说WebSite拥有Name和Link的实例。

代码文件：study4.html

运行地址：localhost:3000?name=study4

