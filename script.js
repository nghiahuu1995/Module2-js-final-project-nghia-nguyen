const placesLngLat = [
  { location: "Airbnb House", latitude: 33.88, longitude: -115.9 },
  { location: "Grand Canyon", latitude: 36.3, longitude: -112.6 },
  { location: "Santorini", latitude: 36.39, longitude: 25.46 },
  { location: "Balboa Park", latitude: 32.73, longitude: -117.14 },
  { location: "Lake Tahoe", latitude: 39.09, longitude: -120.03 },
  { location: "Central Park", latitude: 40.78, longitude: -73.96 },
  { location: "Big Sur", latitude: 36.27, longitude: -121.8 },
  { location: "Yellowstone National Park", longitude: 81, longitude: 91 },
  { location: "Joshua Tree Park", latitude: 91, longitude: 11 },
];
const locations = [
  {
    title: "Joshua Tree Park",
    desc: "Joshua Tree National Park is a stunning national park locatedin southeastern California, United States. It's known for its unique desert landscapes, rock formations, and, of course, its iconic Joshua trees (Yucca brevifolia).",
    imgUrl:
      "https://cdn.aarp.net/content/dam/aarp/travel/national-parks/2021/09/1140-joshua-tree-hero.imgcache.rev.web.2088.1200.jpg",
  },
  {
    title: "Grand Canyon",
    desc: "The Grand Canyon is one of the most iconic natural wonders in the world. It's a massive, steep-sided canyon carved by the Colorado River. The canyon is known for its stunning and colorful landscape, with layered bands of red rock revealing millions of years of geological history. Visitors can explore the rim for breathtaking panoramic views or hike down into the canyon for a more immersive experience.",
    imgUrl:
      "https://lh3.googleusercontent.com/p/AF1QipO0D55rBXb8BP0z6M2usrZR8lV2JanLkHrqQUMm=s1360-w1360-h1020",
  },
  {
    title: "Santorini",
    desc: "Santorini is a picturesque island in the Aegean Sea known for its stunning sunsets, white-washed buildings, and crystal-clear waters. The island features beautiful cliffside villages like Oia and Fira, where visitors can explore narrow cobblestone streets, enjoy delicious Greek cuisine, and relax on volcanic beaches. Santorini is famous for its unique architecture and romantic atmosphere.",
    imgUrl:
      "https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
  },
  {
    title: "Balboa Park",
    desc: "Balboa Park is a cultural and recreational oasis in the heart of San Diego. It's home to numerous museums, gardens, theaters, and the world-renowned San Diego Zoo. The park's architecture is influenced by Spanish colonial style, and it offers a variety of activities, including art exhibitions, botanical gardens, and live performances.",
    imgUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNmDUNFqDhCnLH2b2LJ5L7szKCIS0xgrxVVWDkU=s1360-w1360-h1020",
  },
  {
    title: "Lake Tahoe",
    desc: "Lake Tahoe is a stunning alpine lake surrounded by the Sierra Nevada Mountains. Emerald Bay is a particularly scenic area on the lake's western shore, known for its crystal-clear waters and the historic Vikingsholm Castle. It's a year-round destination for outdoor activities, including skiing in winter and water sports in summer.",
    imgUrl:
      'https://cdn.aarp.net/content/dam/aarp/travel/national-parks/2021/09/1140-joshua-tree-hero.imgcache.rev.web.2088.1200.jpg"',
  },
  {
    title: "Central Park",
    desc: "Central Park is one of the most iconic and beloved urban parks in the world. It spans approximately 843 acres (341 hectares) and offers a tranquil escape from the bustling city that surrounds it. Designed by Frederick Law Olmsted and Calvert Vaux, the park features a harmonious blend of natural landscapes, recreational facilities, and cultural attractions.",
    imgUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNiVUQD9sw5gsmCFPtZP-cXYBXFZaSDaK_fWNZ5=s1360-w1360-h1020",
  },
  {
    title: "Big Sur",
    desc: "Big Sur is a rugged and stunning stretch of California's coastline along Highway 1. It's famous for its dramatic cliffs, redwood forests, and breathtaking ocean views. Visitors can explore state parks, hike in the wilderness, and enjoy some of California's most scenic drives. McWay Falls, Bixby Creek Bridge, and Pfeiffer Beach are popular highlights in the area.",
    imgUrl: "https://lp-cms-production.imgix.net/2019-06/28206231.jpg",
  },
];
const Favlocation = {
  title: "Joshua Tree Park",
  desc: "Joshua Tree National Park is a stunning national park locatedin southeastern California, United States. It's known for its unique desert landscapes, rock formations, and, of course, its iconic Joshua trees (Yucca brevifolia).",
  imgUrl:
    "https://cdn.aarp.net/content/dam/aarp/travel/national-parks/2021/09/1140-joshua-tree-hero.imgcache.rev.web.2088.1200.jpg",
};
let images = [
  "https://lh3.googleusercontent.com/p/AF1QipO0D55rBXb8BP0z6M2usrZR8lV2JanLkHrqQUMm=s1360-w1360-h1020",
  "https://lp-cms-production.imgix.net/2019-06/28206231.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipNmDUNFqDhCnLH2b2LJ5L7szKCIS0xgrxVVWDkU=s1360-w1360-h1020",
];

let houses = [
  {
    id: 0,
    type: "Airbnb House",
    dailyPrice: 249.99,
    dateAvailable: "",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipO0D55rBXb8BP0z6M2usrZR8lV2JanLkHrqQUMm=s1360-w1360-h1020",
      "https://lp-cms-production.imgix.net/2019-06/28206231.jpg",
      "https://lh3.googleusercontent.com/p/AF1QipNmDUNFqDhCnLH2b2LJ5L7szKCIS0xgrxVVWDkU=s1360-w1360-h1020",
    ],
    traits: ["🛏️ Comfy Beds", "📶 Wifi coverage", "🐶 Pet friendly"],
    desc: "Welcome to Your Dream Home Nestled in the heart of Los Angeles, home offers an ideal retreat for your next getaway. Step outside to discover your own private outdoor oasis, complete with a spacious patio or deck. Sip your morning coffee as you soak up the sunshine, or enjoy alfresco dining under the stars with friends and family.",
    area: "South California",
    geo: { latitude: 33.88, longitude: -115.9 },
  },
  {
    id: 1,
    type: "Grand Canyon",
    dailyPrice: 349.99,
    dateAvailable: "",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipO0D55rBXb8BP0z6M2usrZR8lV2JanLkHrqQUMm=s1360-w1360-h1020",
      "https://lp-cms-production.imgix.net/2019-06/28206231.jpg",
      "https://lh3.googleusercontent.com/p/AF1QipNmDUNFqDhCnLH2b2LJ5L7szKCIS0xgrxVVWDkU=s1360-w1360-h1020",
    ],
    traits: ["🛏️ Comfy Beds", "📶 Wifi coverage", "❌ No Pet allowed"],
    desc: "Welcome to Your Dream Home Nestled in the heart of Los Angeles, home offers an ideal retreat for your next getaway. Step outside to discover your own private outdoor oasis, complete with a spacious patio or deck. Sip your morning coffee as you soak up the sunshine, or enjoy alfresco dining under the stars with friends and family.",
    area: "On Earth",
    geo: { latitude: 36.3, longitude: -112.6 },
  },
];
let currentMarker;

const input = document.querySelectorAll(".days");
let tax = document.querySelector(".tax-price");
let subtotal = document.querySelector(".subtotal-price");
let totalPriceAfterTax = document.querySelector(".total-price");

let container = document.querySelector(".page-container");
let dailyPrice = document.querySelector(".dailyPrice");
let btnControl = document.querySelector(".control");

var map = L.map("map").setView([36, -119], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const getGEO = (loc) => {
  const matchingPlace = placesLngLat.find(
    (place) => place.location.toLowerCase() === loc.toLowerCase()
  );
  console.log(loc, matchingPlace);
  if (!matchingPlace) return;
  let { latitude, longitude } = matchingPlace;
  // Close the previous marker if it exists
  if (currentMarker) {
    currentMarker.closePopup();
    map.removeLayer(currentMarker);
  }

  // Create a new marker and add it to the map
  currentMarker = L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(
      `${loc} (${latitude > 0 ? latitude + "°N" : latitude + "°S"},${
        longitude > 0 ? longitude + "°E" : -longitude + "°W"
      })`
    )
    .openPopup();
  // Set the view to the new marker's coordinates
  map.setView([latitude, longitude], 10);
};
const getTraits = (traits) => {
  return traits
    .map((trait) => {
      return `<li class="trait-list-item">${trait}</li>`;
    })
    .join("");
};
const activateDot = function (slideImgs, id) {
  console.log(slideImgs);
  document
    .querySelectorAll(`.dots__dot-location-${id}`)
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot-location-${id}[data-slide="${slideImgs}"]`)
    .classList.add("dots__dot--active");
};

houses.forEach((house, i) => {
  let curSlide = 1;
  let div = document.createElement("div");
  let { id, type, dailyPrice, dateAvailable, traits, desc, area, geo } = house;
  let lng = geo.longitude;
  let lat = geo.latitude;
  console.log(lat, lng);
  div.classList.add(`location-container-${id}`);
  div.innerHTML = `<div class="background">
  <img class="location-${id}-images" src="assets/img/room.jpeg" alt="">
  
      
  <div class="dots-location-${id} dots">
          <button class="dots__dot dots__dot-location-${id}" data-slide="0"></button>
          <button class="dots__dot dots__dot-location-${id} dots__dot--active" data-slide="1"></button>
          <button class="dots__dot dots__dot-location-${id}" data-slide="2"></button>
  </div>
</div>
 <div class="location-layout">
  <h4 class="location-type">${type}</h4>
  <div class="location-area">Area: ${area}</div>
    <div class="location-desc location-detail-${id}">${desc}</div>
    <div class="btn-group-${id} location-btn">
    <button class="btn btn-primary btn-sm btn-location-detail btn-detail-${id}">Show more</button>
    <button class="btn btn-primary btn-sm btn-map-view btn-showMap-${id}">View on map</button>
    </div>
    <div class="location-trait-list"></div>
      
      ${getTraits(traits)}
    </ul>
    <div class="location-price">${dailyPrice} USD/night</div>
    <div class="available-date">${dateAvailable}</div>
    </div>
</div> 

`;

  container.appendChild(div);
  console.log(i % 2 === 0);
  document
    .querySelector(`.location-container-${id}`)
    .setAttribute(
      "style",
      `flex-direction: ${i % 2 === 0 ? "row" : "row-reverse"}`
    );
  let imgSlide = document.querySelector(`.location-${id}-images`);
  const input = document.querySelector(`.input-field-${i}`);

  const locationDesc = document.querySelector(`.btn-detail-${id}`);
  const locationDetail = document.querySelector(`.location-detail-${id}`);

  const dots = document.querySelector(`.dots-location-${id}`);
  dots.addEventListener("click", function (e) {
    let target = e.target.closest(`.dots__dot-location-${id}`);
    if (!target) return;

    let slide = +e.target.dataset.slide;
    curSlide = slide;
    console.log(imgSlide);
    imgSlide.setAttribute("src", images[curSlide]);
    activateDot(curSlide, id);
  });
  // const dot = document.querySelectorAll(`.dots__dot-location-${id}`);

  const btnGroup = document.querySelector(`.btn-group-${id}.location-btn`);
  btnGroup.addEventListener("click", function (e) {
    e.preventDefault();
    let isDetail = e.target.classList.contains(`btn-detail-${id}`);

    let isViewOnMap = e.target.classList.contains(`btn-showMap-${id}`);
    console.log(isDetail, isViewOnMap);
    if (isDetail) {
      if (locationDetail.classList.contains("location-detail-active")) {
        e.target.textContent = "Show More";
      } else {
        e.target.textContent = "Show Less";
      }
      locationDetail.classList.toggle("location-detail-active");
    }

    if (isViewOnMap) {
      document.querySelector(".map-container").classList.add("active");
    }

    getGEO(type);
  });
});

const locationName = document.querySelector(".location-type").textContent;

// Dots

document.getElementById("map").scrollIntoView({ behavior: "smooth" });
let modal = document.querySelector(".show-map");
modal.addEventListener("click", function (e) {
  document.querySelector(".map-container").classList.remove("active");
});
