<template>
  <div>
    <header>
      <h1 class="text-center">Nuestros productos</h1>
    </header>

    <main class="container">

      <section>
        <h2>Todos los productos disponibles...</h2>
        <h3>Porfavor termina rapido clase c:</h3>

        <div class="row  g-2 justify-content-evenly row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4" v-if="products.length">
          <div class="col" v-for="product in products" :key="product.id">
            <CardProduct :product />
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import CardProduct from '@/components/CardProduct.vue';
import useFetch from '@/composables/fetch.js'

import { ref, onMounted } from 'vue';

const products = ref([]);


onMounted(async () => {
  let url = "https://dummyjson.com/products";
  let { data, error } = await useFetch(url);

  if (error.value) return alert("Error al intentar conectarse a la api...");

  //DESDE AQUÍ MANIPULAMOS LOS DATOS
  let listProducts = data.value.products;

  products.value = listProducts.map(p => {
    let { id, title, description, brand, price, sku, thumbnail, images } = p;
    let objProduct = { id, title, description, brand, price, sku, thumbnail, images };
    return objProduct;
  });

  console.log(products.value);

});

</script>

<style lang="css" scoped></style>
