<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.title}}</h1>
        <h2>{{product.price}}</h2>
	<h3>{{product.description}}</h3>
      </div>
      <div class="image">
        <img :src="product.path">
      </div>
      <div class="price">
        <button v-on:click="addToCart(product)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  
  },
  methods: {
    addToCart(product) {
        console.log(product);
      this.$root.$data.cart.push(product);
    },
  }

}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 30px;
  margin-top: 50px;
  width: 350px;
  
}

.product img {
  width: 350px;
  object-fit: cover;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  border-radius: 25px;
}

.info {
  background: #ebe0d4 ;
  color: #000;
  padding: 10px 30px;
  height: 140px;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
  font-family: 'Montserrat', sans-serif !important;
    font-variant: small-caps !important;
}

.info h1 {
  font-size: 25px;
  
}

.info h2 {
  font-size: 16px;
  
}

.info h3 {
  font-size:14px;
}

.info p {
  margin: 0px;
  font-size: 16px;
  
}


.price {
  display: flex;
   font-family: 'Montserrat', sans-serif !important;
    font-variant: small-caps !important;
}

button {
  height: 50px;
  font-size: 20px;
  width:200px;
  background: rgb(59, 59, 59);
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif !important;
  font-variant: small-caps !important;
}

.auto {
  margin-left: auto;
}
</style>