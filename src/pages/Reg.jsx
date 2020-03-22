import React, { Component } from 'react'
import { Flex,WhiteSpace,InputItem,WingBlank,Button,Checkbox } from 'antd-mobile'
import  '../assets/style/Reg.scss'

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    render() {
        return (
            <div className='Reg'>  
           
            {/* 两侧留白 */}
                <WingBlank size="sm">
                <InputItem
                    placeholder="请输入手机号码"
                    clear
                    />
                <InputItem
                    placeholder="请输入密码"
                    />
                <InputItem
                    placeholder="请输入验证码"
                    >
                </InputItem>
            {/* 协议 */}
                <Flex>
                    <Flex.Item>
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        <span className='deal'>我已同意</span> <a className='rule' onClick={(e) => { e.preventDefault(); }}>《用户服务协议》及《隐私权政策》</a>
                    </AgreeItem>
                    </Flex.Item>
                </Flex>
             {/* 登录按钮 */}
                    <WhiteSpace size="sm" />
                        <Button type="primary">注册</Button><WhiteSpace />
             {/* 最下面的小字 */}
                    <Flex justify="between">
                        <div className="sub-title">已有账号</div>
                    </Flex>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        )
    }
}
