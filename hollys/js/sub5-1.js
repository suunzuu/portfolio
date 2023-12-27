const lat = 37.5635493, lng = 126.9691683;

let mapContainer = document.querySelector('.info-map-img'),
  mapOption = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 2
  };
let map = new kakao.maps.Map(mapContainer, mapOption);

let imageSrc = '/portfolio/hollys/img/marker_red.png',
  imageSize = new kakao.maps.Size(64, 69),
  imageOption = { offset: new kakao.maps.Point(27, 69) };

let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(lat, lng);

let marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage
});

marker.setMap(map);

let content = '<div class="customoverlay">' +
  '  <a href="https://kko.to/CCoZa4Qz8D" target="_blank">' +
  '    <span class="title">할리스 본사</span>' +
  '  </a>' +
  '</div>';

let position = new kakao.maps.LatLng(lat, lng);

let customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  position: position,
  content: content,
  yAnchor: 1
});