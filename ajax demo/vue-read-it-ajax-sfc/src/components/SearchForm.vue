<script>
import {defineComponent} from "vue";

export default defineComponent ({
  name: "SearchForm",
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    }
  },
  emits: ['update:searchTerm', 'update:mediaType', 'search'],
});
</script>

<template>
  <form @submit.prevent="$emit('search')" class="form-inline">
    <input
        type="text"
        placeholder="Search"
        class="mr-sm-2 form-control form-control-sm"
        :value="searchTerm"
        @input="$emit('update:searchTerm', $event.target.value)"
    >

    <select
        class="mr-sm-2 form-control form-control-sm"
        :value="mediaType"
        @change="$emit('update:mediaType', $event.target.value)"
    >
      <option value="all">All</option>
      <option value="music">Music</option>
      <option value="musicVideo">Music Video</option>
      <option value="tvShow">TV Show</option>
      <option value="audiobook">Audiobook</option>
      <option value="podcast">Podcast</option>
    </select>

    <button type="submit" class="btn my-2 my-sm-0 btn-secondary btn-sm">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>
<style scoped>
</style>