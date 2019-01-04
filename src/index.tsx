import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import RouterMap from './router/Routes'
import store from './store'
ReactDOM.render((
    <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
            <RouterMap/>
        </Provider>
    </LocaleProvider>

), document.getElementById('root')as HTMLElement);
