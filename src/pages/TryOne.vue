<template>
    <div class="flex">
        <div class="try-one sidebar">
            <ul>
                <li v-for="item in menuItems" :key="item.name" v-bind:value="item.name" v-if="item.showInMenu == true">{{item.name}}</li>
            </ul>
        </div>
        <div class="chossedList">
            <h2>Only add and remove items</h2>
            <p>(Link with firebase)</p>
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

    export default {
        data (){
            return{
            menuItems : {}
            }
        },
        mounted () {
            let vm = this;
            let fireItems = {}
            fireMenuOne.on('value', function(snapshop){
                var val = snapshop.val()
                vm.menuItems = val
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