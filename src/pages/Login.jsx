import React, { Component } from 'react'
import '../assets/style/Login.scss'
import { Flex,WhiteSpace,InputItem,WingBlank,Button } from 'antd-mobile';

export default class Login extends Component {
    render() {
        return (
            <div>
            {/* 上留白 */}
                 <WhiteSpace size="xl" />
            {/* 图片居中 */}
                <Flex justify="center">
                    <img className='login' src={require('../assets/imgs/login.jpg')}alt=""/>
               </Flex>
            {/* 输入框 */}
                <WhiteSpace size="xl" />
                <WingBlank  size="lg">
                <InputItem
                        placeholder="请输入账号" 
                        clear
                    >
                    <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem> 
                    <WhiteSpace size="sm" />
                    <InputItem
                    
                        placeholder="请输入密码"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
            {/* 登录按钮 */}
                    <WhiteSpace size="sm" />
                    <Button type="primary">登录</Button><WhiteSpace />
            {/* 最下面的小字 */}
                    <Flex justify="between">
                    <div className="sub-title">手机快速注册</div>
                    <div className="sub-title">忘记密码？</div>
                    </Flex>
                    <WhiteSpace size="lg" />
                </WingBlank >
           
            </div>
        )
    }
}
