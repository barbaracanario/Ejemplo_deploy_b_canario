<template>
    <div>
        <div class="card">
            <img :src="product.images[0]" class="card-img-top" :alt="product.title">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">Precio: {{ product.price }}</p>
                <p class="card-text">Marca: {{ product.brand }}</p>
                <p class="card-text">SKU: {{ product.sku }}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
            </div>
        </div>

    </div>
</template>

<script setup>

import { defineProps } from 'vue';

defineProps(["product"]);
//id, title, description, brand, price, sku, thumbnail, images 

</script>

<style lang="css" scoped>
.card-img-top {
    aspect-ratio: 1/1;
}
</style>