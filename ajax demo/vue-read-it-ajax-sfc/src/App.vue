<script>
import {defineComponent} from "vue";
import ReadList from "@/components/ReadList.vue";
import PublicationCollection from "@/models/PublicationCollection.js";
import axios from "axios";
import PublicationCollectionFactory from "@/models/PublicationCollectionFactory.js";
import SearchForm from "@/components/SearchForm.vue";

export default defineComponent({
  components: {ReadList, SearchForm},
  data() {
    return {
      searching: true,
      searchTerm: '🐝',
      mediaType: 'all',
      searchResults: new PublicationCollection(),
      currentCollection: new PublicationCollection(),
      bookmarks: new PublicationCollection(),
      favorites: new PublicationCollection(),
      bookshelf: 'store',
      localBookmarks: 'read-it-bookmarks',
      localFavorites: 'read-it-favorites',
    };
  },

  // methods: usually "events" triggered by v-on:
  methods: {
    // change "page" by setting books array
    display(bookshelf){
      this.bookshelf = bookshelf;

      switch(this.bookshelf){
        case 'store':
          this.currentCollection = this.searchResults;
          break;
        case 'bookmarks':
          this.currentCollection = this.bookmarks;
          break;
        case 'favorites':
          this.currentCollection = this.favorites;
          break;
      }
    },

    // LOAD BOOKS
    searchBooks() {
      // prepare and perform search
      if(this.searchTerm){
        // clear results
        this.searchResults = new PublicationCollection();

        // display message
        this.searching = true;

        // build request arguments
        let url = 'https://www.googleapis.com/books/v1/volumes';
        let config = {
          params: {
            q: this.searchTerm, // defined in data
            maxResults: 36,
            filter: 'partial',
            key: '',
          },
          headers: {}
        };
        alert('add your API key to App.vue!')

        // execute ajax request using promises
        axios.get(url, config)
          .then(response => {
            console.log(response);

            // (if you are not using models)
            this.searchResults = response.data.items;

            //this.searchResults = new PublicationCollection(response.data.items);
            this.searchResults = PublicationCollectionFactory.createFromGoogleBooks(response.data.items);
            console.log(this.searchResults);
          })
          .catch(error => {
            // TODO: let your user know
            console.error(error);
          })
          .finally(() => {
            this.searching = false; // remove searching image
            this.display('store'); // change "page"
          })

        // remove the loading screen
        this.searching = false;

        // redirect to the store page
        this.display('store');
      }
    },

    async searchItunes() {
      if (this.searchTerm) {

        // clear results
        this.searchResults = new PublicationCollection();

        // show loading
        this.searching = true;

        let params = {
          term: this.searchTerm,
          limit: 20,
        };

        if (this.mediaType !== 'all') {
          params.media = this.mediaType;
        }

        try {
          const response = await axios.get('https://itunes.apple.com/search', {
            params
          });

          console.log('itunes response', response.data);

          // TEMP: just store raw results (we will fix this in next step)
          this.searchResults = PublicationCollectionFactory.createFromItunes(response.data.results);

        } catch (error) {
          console.error(error);
        } finally {
          this.searching = false;
          this.display('store');
        }
      }
    },
  },

  //mounted:  called after the instance has been mounted,
  mounted: function() {
    // if we have a list in local storage, replace the sample data
    if (localStorage.getItem(this.localBookmarks)){
      this.bookmarks = PublicationCollectionFactory.createFromLocalStorage(JSON.parse(localStorage.getItem(this.localBookmarks)));
    }

    if (localStorage.getItem(this.localFavorites)){
      this.favorites = PublicationCollectionFactory.createFromLocalStorage(JSON.parse(localStorage.getItem(this.localFavorites)));
    }

    // perform default search
    this.searchItunes();
  },

  // watch: calls the function if the value changes
  // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
  watch: {
    bookmarks: {
      handler: function(newCollection) {
        // store in local storage for later
        localStorage.setItem(this.localBookmarks, JSON.stringify(newCollection.items));
      },
      deep: true,
    },
    favorites: {
      handler: function(newCollection) {
        // store in local storage for later
        localStorage.setItem(this.localFavorites, JSON.stringify(newCollection.items));
      },
      deep: true,
    }
  }
})
</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-secondary fixed-top navbar-expand-md">
      <div class="navbar-brand"><i class="fas fa-book-reader"></i>&nbsp;&nbsp;&nbsp;Read It</div>

      <button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed" aria-expanded="false"
              aria-controls="nav_collapse" style="overflow-anchor: none;"><span class="navbar-toggler-icon"></span>
      </button>

      <div id="nav_collapse" class="navbar-collapse collapse" style="display: none;">
        <ul class="navbar-nav">
          <li class="nav-item"><a href="#" @click="display('store')" :class="{active: bookshelf == 'store'}"
                                  class="nav-link">Store</a></li>
          <li class="nav-item"><a href="#" @click="display('bookmarks')"
                                  :class="{active: bookshelf == 'bookmarks'}" class="nav-link">Bookmarks</a></li>
          <li class="nav-item"><a href="#" @click="display('favorites')"
                                  :class="{active: bookshelf == 'favorites'}" class="nav-link">Favorites</a></li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="form-inline">
            <search-form
                :search-term="searchTerm"
                :media-type="mediaType"
                @update:searchTerm="searchTerm = $event"
                @update:mediaType="mediaType = $event"
                @search="searchItunes()">
            </search-form>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <div class="container-fluid bookshelf">
      <div v-if="searching" class="row justify-content-sm-center my-4">
        <div class="col col-sm-6">
          <div class="alert alert-warning">Searching...</div>
        </div>
      </div>

      <read-list v-else-if="currentCollection.count > 0"
                 :collection="currentCollection"
                 :favorites="favorites"
                 :bookmarks="bookmarks"
      ></read-list>

      <div v-else class="row justify-content-sm-center my-4">
        <div class="col col-sm-6">
          <div>
            <div class="alert alert-danger">No items found.</div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <!-- Original Mar 9, 2020 -->
    <!-- Updated Nov 4, 2024 -->
    <div>&copy; 2020, 2024 — <strong>READ IT</strong></div>
  </footer>
</template>

<style scoped>
</style>
