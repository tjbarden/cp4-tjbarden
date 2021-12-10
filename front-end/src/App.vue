<template>
<div id="app">
  <div class="header">
    <router-link id="racquet" to="/">
      <div class="logo">
        <img src="/racquet_icon.png">
      </div>
    </router-link>
      <div class="title">
        <h1>Barden Tennis Inc.</h1>
      </div>
    <div id="menu">
        <router-link id="about" to="/about">
          <p>About</p>
        </router-link>
        <router-link id="shop" to="/shop">
          <p>Shop</p>
        </router-link>
        <router-link id="cart" to="/cart">
          <p>Cart ({{cartSize}})</p>
        </router-link>  
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
    <p>TJ Barden  - <a target="blank" class="github-link" href="https://github.com/tjbarden/cp4-tjbarden">Github Repository</a></p>
    <p></p>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    totalItems() {
      var totalItems = 0;
      console.log(totalItems);
      return totalItems;
    },
    cartSize() {
      return this.$root.$data.cart.length;
    }
  }
}
</script>



<style>

.logo img {
  width: 80%;
  color: #fff;
  filter: grayscale(100%);
  margin: 15px;
}
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  color: #fff;
  background-color: #1C454F;
}

#racquet {
  width: 10%;
}

#menu {
  margin-left: 45%;
  width: 100px;
  display: flex !important;
  justify-content: right;
  flex-direction: row;
  color: #fff !important;
}

.menu-item {
  flex-direction: column;
  color: #fff !important;
}

a {
  color: #fff;
}

#cart {
  width: 100px;
  margin-left: clamp(15px, 5vw, 50px);
}

#shop {
  width: 100px;
  margin-left: clamp(15px, 5vw, 50px);
}

#cart p {
  text-align: center;
}

#side {
  grid-area: side;
  display: flex;
  align-items: right;
  margin-right: 20px;
  margin-top: 10px;
}
#side img {
  width: 30px;
}

.title {
  margin-top: 5px;
  margin-left: 20px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
