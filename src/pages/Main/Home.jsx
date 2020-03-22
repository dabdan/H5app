import React, { Component } from 'react'

export default class Home extends Component {
    state={
        title:'定位中'
    }
    render() {
        let {title}=this.state
        return (
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div onClick={this.jump.bind(this,'Loca')}>{title}</div>
                <div onClick={this.jump.bind(this,'Search')}>收索</div>
                <div onClick={this.jump.bind(this,'Map')}>地图</div>
                
            </div>
        )
       
    }
    jump(url){
        window.location.href='/#/'+url
    }
    componentDidMount(){
        this.showCityInfo()
    }
     showCityInfo() {
        //实例化城市查询类
        var citysearch = new window. AMap.CitySearch();
        // 存一下this
        let that=this
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    console.log('定位成功',cityinfo) ;
                    that.setState({
                        title:cityinfo
                    })
                    //地图显示当前城市
                  
                }
            } else {
                console.log('定位失败',result.info)
            }
        });
    }
}
