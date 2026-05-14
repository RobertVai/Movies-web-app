import type { Movie } from "../types/movie";
export const movies: Movie[] = [
  {
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: new URL(
          "../assets/thumbnails/beyond-earth/trending/small.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          new URL(
            "../assets/thumbnails/beyond-earth/regular/large.jpg",
            import.meta.url,
          ).href,
          import.meta.url,
        ).href,
      },
      regular: {
        small: new URL(
          "../assets/thumbnails/beyond-earth/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/beyond-earth/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/beyond-earth/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: new URL(
          "../assets/thumbnails/bottom-gear/trending/small.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/bottom-gear/trending/large.jpg",
          import.meta.url,
        ).href,
      },
      regular: {
        small: new URL(
          "../assets/thumbnails/bottom-gear/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/bottom-gear/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/bottom-gear/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: new URL(
          "../assets/thumbnails/undiscovered-cities/trending/small.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/undiscovered-cities/trending/large.jpg",
          import.meta.url,
        ).href,
      },
      regular: {
        small: new URL(
          "../assets/thumbnails/undiscovered-cities/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/undiscovered-cities/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/undiscovered-cities/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "1998",
    thumbnail: {
      trending: {
        small: new URL(
          "../assets/thumbnails/1998/trending/small.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/1998/trending/large.jpg",
          import.meta.url,
        ).href,
      },
      regular: {
        small: new URL(
          "../assets/thumbnails/1998/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/1998/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/1998/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: new URL(
          "../assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
          import.meta.url,
        ).href,
      },
      regular: {
        small: new URL(
          "../assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/the-great-lands/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/the-great-lands/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/the-great-lands/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Diary",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/the-diary/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/the-diary/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/the-diary/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/earths-untouched/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/earths-untouched/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/earths-untouched/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/no-land-beyond/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/no-land-beyond/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/no-land-beyond/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/during-the-hunt/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/during-the-hunt/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/during-the-hunt/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/autosport-the-series/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/autosport-the-series/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/autosport-the-series/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/same-answer-2/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/same-answer-2/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/same-answer-2/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/below-echo/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/below-echo/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/below-echo/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/the-rockies/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/the-rockies/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/the-rockies/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Relentless",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/relentless/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/relentless/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/relentless/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/community-of-ours/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/community-of-ours/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/community-of-ours/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Van Life",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/van-life/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/van-life/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/van-life/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/the-heiress/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/the-heiress/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/the-heiress/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/off-the-track/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/off-the-track/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/off-the-track/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/whispering-hill/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/whispering-hill/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/whispering-hill/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "112",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/112/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/112/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/112/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/lone-heart/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/lone-heart/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/lone-heart/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Production Line",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/production-line/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/production-line/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/production-line/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Dogs",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/dogs/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/dogs/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/dogs/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/asia-in-24-days/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/asia-in-24-days/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/asia-in-24-days/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/the-tasty-tour/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/the-tasty-tour/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/the-tasty-tour/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Darker",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/darker/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/darker/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/darker/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/unresolved-cases/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/unresolved-cases/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/unresolved-cases/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: new URL(
          "../assets/thumbnails/mission-saturn/regular/small.jpg",
          import.meta.url,
        ).href,
        medium: new URL(
          "../assets/thumbnails/mission-saturn/regular/medium.jpg",
          import.meta.url,
        ).href,
        large: new URL(
          "../assets/thumbnails/mission-saturn/regular/large.jpg",
          import.meta.url,
        ).href,
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
];
