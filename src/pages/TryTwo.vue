<template>
    <div class="flex">
        <div class="try-one sidebar">
            <draggable v-model="menuItems" :options="{group:'many-Items'}" @start="drag=true" @end="drag=false">
                <div v-for="element in menuItems" :key="element.name">{{element.name}}</div>
            </draggable>
        </div>
        <div class="chossedList">
            <h2> draggable</h2>
            <p>(<a href="https://github.com/SortableJS/Vue.Draggable">about vue-draggable</a>, Link with firebase)</p>
            <ul>
                <li v-for="item in menuItems" :key="item.name" v-bind:value="item.name" :class="(item.choosechoosed == true ) ? 'clicked' : ''"  @click="clickItem(item)">{{item.name}}</li>
                <input type="button" value="renew" @click="renewList">
            </ul>
        </div>
    </div>
</template>
<script>

var fireMenuOne = firebase.database().ref('menuOne')

import menuItems from '../items/try-menu.js'
import draggable from 'vuedraggable'

    export default {
        data (){
            return{
            menuItems : null
            }
        },
        components: {
            draggable,
        },
        mounted () {
            let vm = this;
            let fireItems = {}
            fireMenuOne.on('value', function(snapshop){
                var val = snapshop.val()
                vm.menuItems = val
                // console.log(typeof val)
            })
        },
        methods:{
            clickItem (item) {
                item.choosechoosed = !item.choosechoosed;
            },
            renewList() {
                let newList = this.menuItems
                newList.forEach(function(item){
                    item.showInMenu = item.choosechoosed
                })
                fireMenuOne.set(newList)
            }
        }

    }
</script>