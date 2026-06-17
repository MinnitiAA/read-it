<script>
export default {
  name: "MusicVideoDetails",
  props: {
    item: Object,
  },
}
</script>

<template>
  <div>
    <img :src="item.thumbnail" :alt="item.displayTitle" class="img-fluid mb-3">
    <p><strong>Artist:</strong> {{ item.creator }}</p>
    <p><strong>Video:</strong> {{ item.displayTitle }}</p>
    <p><strong>Genre:</strong> {{ item.primaryGenreName }}</p>
    <p><strong>Release Date:</strong> {{ item.releaseDate }}</p>
    <a v-if="item.previewUrl" :href="item.previewUrl" target="_blank">Preview</a>
  </div>
</template>