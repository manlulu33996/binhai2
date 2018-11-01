<template>
    <div class="home">
        <ul>
        	<li>待办公文<i class="iconfont icon-jiantou"></i></li>
        	<li>已办公文<i class="iconfont icon-jiantou"></i></li>
        	<li>收件箱<i class="iconfont icon-jiantou"></i></li>
        	<router-link to="NoticeList" tag="li">通知公告<i class="iconfont icon-jiantou"></i></router-link>
        	<li>公务安排<i class="iconfont icon-jiantou"></i></li>
        	<router-link to="NewsList" tag="li">街道新闻<i class="iconfont icon-jiantou"></i></router-link>
        	<router-link to="ExchangeList" tag="li">工作交流<i class="iconfont icon-jiantou"></i></router-link>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
    	
    }
  },
  methods:{
  	//登陆
    login (){
    	let _self = this;
    	let uri = 'http://219.146.85.226:9000/bhOA/sysmngajax/login!loginByTel.action'
        axios.get(uri, {
		    params: {
		      telephone:'666',
		      passWd:'1',
		    }
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
    },
  },
  mounted(){
  	this.login();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.home{
		height:100%;
		background:#f4f4f4;
		overflow-y:auto;
		li{
			height:100px;
			font-size:28px;
			text-align: left;
			padding:0 30px;
			background:#fff;
			line-height:100px;
			border-bottom:1px solid #f4f4f4; /* no */
			i{
				float:right;
				color:#aaa;
			}
		}
	}
</style>
