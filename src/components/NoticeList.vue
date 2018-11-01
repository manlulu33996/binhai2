<template>
    <div class="notice-list">
        <ul>
        	<li class="single_notice">
        		<i class="iconfont icon-notice"></i>
        		<div class="title"><span>这里是通知标题</span></div>
        		<div class="time">时间：2018-01-22</div>
        	</li>
        	<li class="single_notice">
        		<i class="iconfont icon-notice"></i>
        		<div class="title"><span>这里是通知标题</span></div>
        		<div class="time">时间：2018-01-22</div>
        	</li>
			
        </ul> 
    </div>
</template>

<script>
export default {
  name: 'NoticeList',
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
	.notice-list{
		height:100%;
		overflow-y:auto;
		background:#f4f4f4;
		padding-bottom:80px;
		li.single_notice{
			width:100%;
			box-sizing: border-box;
			min-height:127px;
			background: #fff;
			border:1px solid #f4f4f4; /* no */
			padding-left:120px;
			padding-top:30px;
			padding-right:20px;
			padding-bottom:30px;
			position:relative;
			text-align: left;
			i{
				position:absolute;
				height:100%;
				width:70px;
				height:70px;
				text-align: left;
				top:50px;left:20px;
				line-height:70px;
				text-align: center;
				background:#e9c639;
				color:#fff;
				font-size:40px;
				border-radius: 50%;
				box-shadow: 0 0 10px #ddd;
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
			div.time{
				min-height:60px;
				line-height:60px;
				font-size:28px; /* px */
				color:#666;
			}
		}
	}
</style>
