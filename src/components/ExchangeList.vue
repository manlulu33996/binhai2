<template>
    <div class="exchange-list">
        <ul>
        	<li class="single_exchange">
        		<i class="iconfont icon-tianchongxing-"></i>
        		<div class="title"><span>工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流</span></div>
        		<div class="time">时间：2018-01-22</div>
        	</li>
        	<li class="single_exchange">
        		<i class="iconfont icon-tianchongxing-"></i>
        		<div class="title"><span>工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流</span></div>
        		<div class="time">时间：2018-01-22</div>
        	</li>
        	<li class="single_exchange">
        		<i class="iconfont icon-tianchongxing-"></i>
        		<div class="title"><span>工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流工作交流</span></div>
        		<div class="time">时间：2018-01-22</div>
        	</li>
        </ul> 
    </div>
</template>

<script>
export default {
  name: 'ExchangeList',
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
  	// this.login();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.exchange-list{
		height:100%;
		overflow-y:auto;
		background:#f4f4f4;
		padding-bottom:80px;
		li.single_exchange{
			width:100%;
			box-sizing: border-box;
			min-height:127px;
			background: #fff;
			border:1px solid #f4f4f4; /* no */
			padding-right:120px;
			padding-top:30px;
			padding-left:30px;
			padding-bottom:30px;
			position:relative;
			text-align: left;
			overflow:hidden;
			i{
				position:absolute;
				height:100%;
				/*width:70px;
				height:70px;*/
				text-align: left;
				top:-14px;right:20px;
				line-height:70px;
				text-align: center;
				color:#0099CC;
				font-size:48px; /* px */
				/*transform: scaleY(1.2);*/
				/*border-radius: 50%;*/
				/*box-shadow: 0 0 10px #ddd;*/
			}
			div.title{
				min-height:60px;
				line-height:40px;
				padding: 10px 0;
				font-size:28px; /* px */
				color:#333;
				font-weight:600;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			div.title:before{
				content:'*';
				color:#f00;
				margin-right:20px;
			}
			div.time{
				min-height:60px;
				line-height:60px;
				font-size:28px; /* px */
				color:#666;
			}
		}
	}
</style>
