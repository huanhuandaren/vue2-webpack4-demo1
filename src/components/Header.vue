<template>
	<div class='tit' >{{title}}</div>
</template>

<script>

export default {
	data() {
		return {
			title:"JTodo",
		}
	},
}
</script>

<style >
	.tit{
		margin-top: 10%;
		color:rgb(145, 199, 224);
		font-size:40px;
		text-align: center;
    transition: transform 2s;
		text-shadow:5px 5px 5px rgba(170, 32, 62, 0.507); 
	}
	.tit:hover{
		transform: rotateX(360deg);
	}
</style>