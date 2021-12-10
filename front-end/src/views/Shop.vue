<template>
  <div>
    <div class="wrapper">

    </div>
    <ProductList :products="products" />
  </div>
</template> 

<script>
import axios from 'axios';
import ProductList from "../components/ProductList.vue"

export default {
  name: 'Home',
   data() {
    return {
      searchText: '',
      items: [],
    }
  },
  components: {
    ProductList
  },
  mounted() {
    this.getItems();
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.$root.$data.products = response.data;
        return true;
      }catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
}
h3 {
  font-style: italic;
  font-size:12px;
  font-weight: 100;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
} 
</style>
