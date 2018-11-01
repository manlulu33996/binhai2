
import axios from 'axios'
const verify = {
    data() {
        return {
            agentId: '',
            corpId: '',
            timeStamp: '',
            nonceStr: '',
            signature: '',
            appPic: '', //是否开启过渡页，0 关闭 1 开启
            verifyStatus:'', //缓存中是否已经有登录信息
        }
    },
    methods: {
        $_dingTalkPcLogin() {
            let _self = this;
            // console.error("2、进入_dingTalkPcLogin方法")
            
            dd.ready(function() {
                //获取授权信息
                dd.runtime.permission.requestAuthCode({
                    corpId: _self.corpId,
                    onSuccess: function(info) {
                        dd.config({
			                agentId: _self.agentId,
			                corpId: _self.corpId,
			                timeStamp: _self.timeStamp,
			                nonceStr: _self.nonceStr,
			                signature: _self.signature,
			                betaURL: 1,
			                jsApiList: ['device.notification.confirm', 'device.notification.alert', 'device.notification.prompt', 'runtime.permission.requestAuthCode', 'biz.util.openLink', 'biz.util.open', 'biz.util.uploadImageFromCamera', 'biz.ding.create', 'biz.util.uploadImage', ]
			            });
                    },
                    onFail: function(error) {
                        
                    }
                });
            });
            dd.error(function(error) {
                console.log('error: ' + JSON.stringify(error));
                let msg = error.errorMessage;
                //后台记录错误日志 xiangzi 2018-7-13
                let url = 'user/home/v1/Log';
                let postData = {
                    company_id: _self.corpId,
                    request_url: window.location.href,
                    code: error.errorCode,
                    message: JSON.stringify(error)
                };
                _self.$_post(url, postData).then(function(res) {});
                window.location.reload();
            });
        },
    }
}
export default verify