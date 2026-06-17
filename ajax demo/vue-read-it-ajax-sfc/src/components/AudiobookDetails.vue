<script>
export default {
  name: "AudiobookDetails",
  props: {
    item: Object,
  },
}
</script>

<template>
  <div>
    <img :src="item.thumbnail" :alt="item.displayTitle" class="img-fluid mb-3">
    <p><strong>Title:</strong> {{ item.displayTitle }}</p>
    <p><strong>Author:</strong> {{ item.creator }}</p>
    <p><strong>Genre:</strong> {{ item.primaryGenreName }}</p>
    <p><strong>Description:</strong> {{ item.displayDescription }}</p>
  </div>
</template>