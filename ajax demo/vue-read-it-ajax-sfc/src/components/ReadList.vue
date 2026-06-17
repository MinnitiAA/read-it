<script>
import ReadItem from "@/components/ReadItem.vue";
import PublicationCollection from "@/models/PublicationCollection.js";

export default {
  name: "ReadList",
  components: {ReadItem},
  props: {
    collection: {type: PublicationCollection},
    favorites: {type: PublicationCollection},
    bookmarks: {type: PublicationCollection},
  },
}
</script>

<template>
  <div class="row">
    <read-item v-for="item in collection.items" :key="item.id"
               :item="item"
               :favorites="favorites"
               :bookmarks="bookmarks"></read-item>

    <!-- extra "shelf space" -->
    <div v-if="(collection.count % 2) > 0" class="col book shelf d-block d-sm-none"></div>
    <div v-if="(collection.count % 3) > 0" class="col book shelf d-none d-sm-block d-md-none"></div>
    <div v-if="(collection.count % 4) > 0" class="col book shelf d-none d-md-block d-lg-none"></div>
    <div v-if="(collection.count % 6) > 0" class="col book shelf d-none d-lg-block"></div>
  </div>
</template>

<style scoped>

</style>
