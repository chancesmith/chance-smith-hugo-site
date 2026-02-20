---
title: ReactJS - Search and Filter Data Results
date: "2019-03-21T11Z"
tags: CITQ, S3, AWS
---

At [Sodium Halogen](https://sodiumhalogen.com?ref=csio), we've made several search fields, but thought it would be good to document an output. Here we go with just the Javascript part...

## data + search + filtering data = awesome

```javascript
const movies = [
  { title: "101 Dalmations", genre: "Disney, Dog", rating: "G" },
  { title: "102 Dalmations", genre: "Dog", rating: "G" },
  { title: "5 Children and It", genre: "SciFi", rating: "G" },
  { title: "Aladdin", genre: "Disney, Adventure", rating: "G" },
  { title: "All Dogs Go to Heaven", genre: "Dog", rating: "G" },
  { title: "Anastasia", genre: "Princess", rating: "G" },
  { title: "Aristocats", genre: "Disney, Animal", rating: "G" },
  {
    title: "Aussie and Teds Great Adventure",
    genre: "Adventure, Dog",
    rating: "G",
  },
  { title: "Babe", genre: "Drama, Animal", rating: "G" },
];

// Fuzzy Search >> source: https://stackoverflow.com/a/15252131/3979495
String.prototype.fuzzy = function (s) {
  var hay = this.toLowerCase(),
    i = 0,
    n = -1,
    l;
  s = s.toLowerCase();
  for (; (l = s[i++]); ) if (!~(n = hay.indexOf(l, n + 1))) return false;
  return true;
};

// state variable
const search = "Dsy";

const moviesFound = movies.filter((movie) =>
  Object.keys(movie)
    .map((key) => movie[key].fuzzy(search))
    .reduce((acc, bool) => (bool ? acc + 1 : acc))
);

console.log(moviesFound);
```

pen: https://codepen.io/chancesmith/pen/RdEeva?editors=1111
