<template>
  <div id="head" class="d-flex">
    <div class="logo">LOGO</div>
    <div id="nav" class="d-flex">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <div id="banner">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  #head
    border: 1px solid #000
    height: 120px
    padding: 10px
    .logo
      height: 100px
      width: 100px
      background: #ccc
    #nav
      border: 1px solid #000
      align-items: center
      a
        background: #cba
        border-radius: 5px
        padding: 10px
        margin: 10px
        &:hover
          opacity: .5
  #banner
    background: #eee
    height: 250px
</style>
