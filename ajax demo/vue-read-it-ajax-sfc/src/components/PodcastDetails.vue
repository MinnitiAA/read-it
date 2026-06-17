<script>
export default {
  name: "PodcastDetails",
  props: {
    item: Object,
  },
}
</script>

<template>
  <div>
    <img :src="item.thumbnail" :alt="item.displayTitle" class="img-fluid mb-3">
    <p><strong>Podcast:</strong> {{ item.displayTitle }}</p>
    <p><strong>Creator:</strong> {{ item.creator }}</p>
    <p><strong>Genre:</strong> {{ item.primaryGenreName }}</p>
    <p><strong>Description:</strong> {{ item.displayDescription }}</p>
  </div>
</template>