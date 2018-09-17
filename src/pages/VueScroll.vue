<template>
    <div>
        <h5>Orders, scrollTop:{{position.scrollTop}}</h5>
        <ol v-scroll:throttle="{fn: onScroll, throttle: 500 }">
            <li class="test-scroll" v-for="(msg, index) of msgs" :key="msg">{{msg}} - {{index}}</li>
        </ol>
        <div id="ob">scrollTop:{{position.scrollTop}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msgs : ['Order1', 'Order2', 'Order5', 'Order3', 'Order4', 'Order6', 'Order7', 'Order8', 'Order9', 'Order10', 'Order11', 'Order12', 'Order13'],
                position: {scrollTop: 0, scrollLeft: 0}
            }
        },
        methods:{
            onScroll:function(e, position){
            this.position = position;
            console.log('1')
            }
        }
    }
</script>
<style>
ol{
    height: 500px;
    overflow: auto;
}
</style>
