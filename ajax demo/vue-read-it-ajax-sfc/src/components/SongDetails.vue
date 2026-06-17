<script>
export default {
  name: "SongDetails",
  props: {
    item: Object,
  },
}
</script>

<template>
  <div>
    <img :src="item.thumbnail" :alt="item.displayTitle" class="img-fluid mb-3">
    <p><strong>Artist:</strong> {{ item.creator }}</p>
    <p><strong>Song:</strong> {{ item.displayTitle }}</p>
    <p><strong>Album:</strong> {{ item.collectionName }}</p>
    <p><strong>Genre:</strong> {{ item.primaryGenreName }}</p>
    <a v-if="item.previewUrl" :href="item.previewUrl" target="_blank">Preview</a>
  </div>
</template>