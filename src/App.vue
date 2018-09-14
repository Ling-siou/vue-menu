<template>
  <div id="app">
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <h5>Orders</h5>
    <ol v-scroll:throttle="{fn: onScroll, throttle: 500 }">
      <li class="test-scroll" v-for="(msg, index) of msgs" :key="msg">{{msg}} - {{index}}</li>
    </ol>
    <div id="ob">scrollTop:{{position.scrollTop}}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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

<style lang="scss">
@import "scss/main.scss";
</style>
