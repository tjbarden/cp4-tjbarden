<template>
  <div>
    <ProductList :products="cart" />
    <div class="empty" v-if="cart.length === 0">
      Your cart is empty!
    </div>
    <div class="not-empty" v-else>
      <h1>Your Cart contains {{ cart.length }} items </h1>
    </div>
    <div class="wrapper">
      <div class="products">
        <li v-for="product in cart" :key="product.id">
          <div class="info">
            <div class="item">
              <div class="item" id="button_spacing">
                <h1>{{ product.title }}</h1>
                <button v-on:click="removeFromCart(product)">
                  Remove Item
                </button>
              </div>
            </div>
            <div class="item">
              <router-link :to="'/product/' + product.id">
                <img :src="product.path" />
              </router-link>
            </div>
            <div class="item">
              <h2>{{ product.price }}</h2>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log("MOUNTED!!!")
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
  },
  methods: {
    removeFromCart(product) {
      const index = this.$root.$data.cart.indexOf(product);
      this.$root.$data.cart.splice(index, 1);
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .info {
    width: 80% !important;
    height: 450px !important;
  }

  .info img {
  margin-left: 0px !important;
}

.cartHeader {
    text-align: center;
}

.item h2 {
  margin:0px !important;
  padding:10px !important;
}

.not-empty h1{
  text-align: center !important;
  padding: 0px !important;
}
.not-empty {
  padding: 0px !important;
  text-align: center !important;
}

body {
  margin: 0px !important;
}
}

.wrapper {
  display: flex;
  align-items: left;
  justify-content: left;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.item {
  width: 300px;
}

h1 {
  padding: 10px;
  margin: 0px;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  font-variant: small-caps !important;
}

.item h2 {
  padding-top: 30px;
  padding-left: 100px;
}



.info img {
  height: 200px;
  margin-left: 80px;
}

.info .image {
  justify-content: center;
}

.info {
  color: #000;
  height: 230px;
  width: 950px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* border:2px solid gray; */
  margin-left: 75px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgb(165, 165, 165);
  margin: 10px;
  margin-top: 50px;
  margin-left: 50px;
}

li {
  list-style-type: none;
}

.info h1 {
  font-size: 25px;
  background: #ebe0d4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.not-empty h1 {
  text-align: left;
  font-family: "Montserrat", sans-serif !important;
  font-variant: small-caps !important;
}

.info h2 {
  font-size: 30px;
  color: gray;
  font-family: "Montserrat", sans-serif !important;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: rgb(59, 59, 59);
  color: white;
  border: none;
  width: 300px;
  font-family: "Montserrat", sans-serif !important;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.empty {
  font-size: 24px;
  color: gray;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  font-variant: small-caps !important;
}

.not-empty {
  font-size: 24px;
  color: gray;
  padding-left: 100px;
  font-family: "Montserrat", sans-serif !important;
}
.auto {
  margin-left: auto;
}
</style>