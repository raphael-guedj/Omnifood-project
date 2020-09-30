/* Maps */
const map = new GMaps({
  div: ".map",
  lat: 38.7436266,
  lng: -9.05,
  zoom: 12,
});

map.addMarker({
  lat: 51.3114178,
  lng: -0.45,
  title: "Woking",
  infoWindow: {
    content: "<p>Our Woking locale</p>",
  },
});

map.addMarker({
  lat: 38.7436266,
  lng: -9.1602037,
  title: "Lisbon",
  infoWindow: {
    content: "<p>Our Lisbon HQ</p>",
  },
});
