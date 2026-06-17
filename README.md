# 📚 Read It

A media search app powered by the iTunes Search API, built with Vue 3 and Axios.

---

## Overview

Read It lets you search the iTunes catalog and browse results across 6 different media types — songs, podcasts, audiobooks, TV shows, music videos, and more. Each media type is handled by its own model class and detail component, giving the UI a tailored display for each type of result.

Built during a JavaScript 2 course at Waukesha County Technical College, focused on working with external APIs, async/await, and object-oriented JavaScript patterns.

---

## Features

- **iTunes API search** — live search with optional media type filter (music, podcast, audioBook, tvShow, etc.)
- **7 media type models** — each type (Song, Podcast, TvShow, Audiobook, MusicVideo, Magazine, Book) has its own class with computed display properties
- **Factory pattern** — `PublicationCollectionFactory` dynamically maps API results to the correct model class based on `kind` or `wrapperType`
- **Bookmarks & Favorites** — save items to personal lists, persisted in localStorage
- **Google Books API support** — architecture also supports switching to Google Books search
- **Responsive layout** — Bootstrap 5 navbar with collapsible search form

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Options API) |
| Build Tool | Vite |
| HTTP Client | Axios |
| Styling | Bootstrap 5 + SCSS |
| API | iTunes Search API |
| Language | JavaScript (ES6+) |

---

## Project Structure

```
src/
├── components/
│   ├── SearchForm.vue
│   ├── ReadList.vue
│   ├── ReadItem.vue
│   ├── BsModal.vue
│   ├── BookDetails.vue
│   ├── AudiobookDetails.vue
│   ├── PodcastDetails.vue
│   ├── SongDetails.vue
│   ├── MusicVideoDetails.vue
│   ├── TvShowDetails.vue
│   └── MagazineDetails.vue
├── models/
│   ├── ItunesMedia.js           # Base class
│   ├── PublicationCollection.js
│   ├── PublicationCollectionFactory.js  # Factory pattern
│   ├── Song.js
│   ├── Podcast.js
│   ├── Audiobook.js
│   ├── TvShow.js
│   ├── MusicVideo.js
│   ├── Book.js
│   └── Magazine.js
└── App.vue
```

---

## Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
git clone https://github.com/MinnitiAA/read-it.git
cd read-it/vue-read-it-ajax-sfc

npm install
npm run dev
```

No API key needed — the iTunes Search API is free and open.

---

## What I Learned

- Making async API calls with Axios and handling errors gracefully
- Using the Factory design pattern to map API data to typed model objects
- Building reusable Vue components that adapt their display based on data type
- Persisting user data with localStorage and Vue watchers

---

## Author

**Andres Minniti** — [LinkedIn](https://www.linkedin.com/in/andres-minniti-paez-01675b376) 
