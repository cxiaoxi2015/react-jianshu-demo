import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

// 主样式文件
import { Globalstyle } from './style'
// iconfont
import { Iconfont } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
            <Provider store={store}>
            <Fragment>
                <Globalstyle />
                <Iconfont />
                <Header />
            </Fragment>
        </Provider>
    );
  }
}

export default App;
