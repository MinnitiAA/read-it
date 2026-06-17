<script>
export default {
  name: 'ItunesMediaDetails',
  props: {
    item: Object
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="text-center col-preview col-sm-4">
        <img :src="item.thumbnail" :alt="item.displayTitle" class="img-fluid w-100">

        <a v-if="item.previewUrl"
           :href="item.previewUrl"
           rel="noopener"
           target="_blank"
           class="btn m-2 btn-primary">
          Preview
        </a>
      </div>

      <div class="text-left col-details col-sm-8">
        <dl>
          <template v-if="item.creator">
            <dt>Artist</dt>
            <dd>{{ item.creator }}</dd>
          </template>

          <template v-if="item.kind || item.wrapperType">
            <dt>Media Type</dt>
            <dd>{{ item.kind || item.wrapperType }}</dd>
          </template>

          <template v-if="item.primaryGenreName">
            <dt>Genre</dt>
            <dd>{{ item.primaryGenreName }}</dd>
          </template>

          <template v-if="item.releaseDate">
            <dt>Release Date</dt>
            <dd>{{ item.releaseDate }}</dd>
          </template>

          <template v-if="item.trackPrice || item.collectionPrice">
            <dt>Price</dt>
            <dd>{{ item.trackPrice || item.collectionPrice }} {{ item.currency }}</dd>
          </template>

          <template v-if="item.displayDescription">
            <dt>Description</dt>
            <dd>{{ item.displayDescription }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>