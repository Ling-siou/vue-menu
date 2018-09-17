<template>
    <div>
        <div class="try-one sidebar">
            <ul>
                <li v-for="item in menuItems" :key="item.name" v-bind:value="item.name">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>

import menuItems from '../items/try-menu.js'
    export default {
        data(){
            return{
            menuItems : menuItems
            }
        }

    }
</script>