import React from 'react'; //保证可以使用jsx语法
import ReactDOM from 'react-dom';// 保证组件可以加载到页面上
// import 组件 from js文件
import App from './App';//引入要使用的组件


//把组件App加载到页面中id为“root”的这个元素下  
// <App /> 为jsx语法
// 自定义组件必须大写首字母
// 原始html标签是小写首字母
ReactDOM.render(<App />, document.getElementById('root'));//this root from index.html






















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
