
new Vue({
	el:'#app',
	data:{
		todos:[
			{id:1,content:"今天安阳下雪了",isFinished:false},
			{id:2,content:'我没有看到安阳的雪景',isFinished:true}
		],
		showType:'all',
		types:[
			{type:'all',content:'A'},
			{type:'finish',content:'B'},
			{type:'unfinish',content:'U'}
		]	
	}
})