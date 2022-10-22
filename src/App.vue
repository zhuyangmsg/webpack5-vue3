<template>
    <div class="tree">
        <img src="../static/tree.png" />
        <div>树木图片-{{prive}}</div>
    </div>
</template>

<script>
import { ref } from 'vue';
import server from '../config/server.ts';

export default {
    setup(){
        let prive = ref(123);
        server({
            url:"/zhuyangmsg/add",
            method: "post",
            data: {a:1,b:2}
        })
        return {
            prive
        }
    }
}
</script>

<style>
    .tree{
        width:800px;
        margin: 0 auto;
    }
    .tree>img{
        width: 100%;
        height:500px;
    }
</style>
