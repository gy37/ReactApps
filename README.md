###背景介绍

这几天试着改了几个小功能，虽然做完了，但是是复制的其他页面的代码，其中一些内容不是很理解。一部分是`antd`的内容，看过官方文档，也算是记住了之后知道怎么用就行；还有一部分是`react`相关框架的，这一部分只有在学习一下才行。正好这几天没有新的任务，就又回头看了看之前的没看完的redux教程，并且把相关示例做了注释，放在github上，[这是链接]()。


###项目结构

主要是两个项目，第一个是`advanced-react-app`，里面有`react-redux`和`redux-thunk`两个示例，两个示例都是官方网站的示例[示例一](https://www.redux.org.cn/docs/basics/ExampleTodoList.html)和[示例二](https://www.redux.org.cn/docs/advanced/ExampleRedditAPI.html)，只是稍微修改，并添加了一些注释，记录自己的学习过程。`示例二`因为不能访问`reddit`，所以改为[gank.io](https://gank.io/)的api接口。   
第二个是`react-router`，也是[官方的教程](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)，也添加了一些注释，本来想和另外两个示例放在一起的，最后发现这个教程中的`rect`和`react-router`的版本都太低了，不兼容，所以还是分成了两个项目。