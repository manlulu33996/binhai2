<template>
    <div class="new-list">
        <ul class="new-list-box">
        	<li class="single_new">
        		<div class="top"> 
	        		<i class="iconfont icon-dongtai"></i>
	        		<div class="title"><span>这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题</span></div>
	        		<div class="time">时间：2018-01-22</div>
        		</div>
        		<div class="bottom">
        			<button>查看</button>
        		</div>
        	</li>
        	<li class="single_new">
        		<div class="top"> 
	        		<i class="iconfont icon-dongtai"></i>
	        		<div class="title"><span>这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题</span></div>
	        		<div class="time">时间：2018-01-22</div>
        		</div>
        		<div class="bottom">
        			<button>查看</button>
        		</div>
        	</li>
        	<li class="single_new">
        		<div class="top"> 
	        		<i class="iconfont icon-dongtai"></i>
	        		<div class="title"><span>这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题这里是通知标题</span></div>
	        		<div class="time">时间：2018-01-22</div>
        		</div>
        		<div class="bottom">
        			<button>查看</button>
        		</div>
        	</li>
        	
        </ul> 
    </div>
</template>

<script>
export default {
  name: 'NewsList',
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
	.new-list{
		height:100%;
		overflow-y:auto;
		background:#f4f4f4;
		padding-bottom:80px;
		padding:20px 20px;
		li.single_new{
			width:100%;
			margin-bottom:20px;
			border-radius:16px;
			box-sizing: border-box;
			min-height:127px;
			background: #fff;
			border:1px solid #f4f4f4; /* no */
			/*padding-left:120px;*/
			padding-top:30px;
			/*padding-bottom:30px;*/
			text-align: left;
			box-shadow: 0 0 10px #eee;
			i{
				position:absolute;
				height:100%;
				width:70px;
				height:70px;
				text-align: left;
				top:14px;left:20px;
				line-height:70px;
				text-align: center;
				background:#CC3333;
				color:#fff;
				font-size:40px;
				border-radius: 50%;
				box-shadow: 0 0 10px #ddd;
			}
			div.title{
				min-height:60px;
				line-height:50px;
				padding: 10px 0;
				font-size:32px; /* px */
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
			div.bottom{
				height:90px;
				border-top:1px dashed #ddd;
				margin:15px 30px 0;
				button{
					display:block;
					padding:0 30px;
					height:50px;
					background:#fff;
					float:right;
					border-radius:30px;
					color:#CC3333;
					border:1px solid #CC3333; /* no */
					margin:20px 30px;
				}
			}
			div.top{
				padding-left:120px;
				padding-right:20px;
				position:relative;
			}
		}
	}
</style>
