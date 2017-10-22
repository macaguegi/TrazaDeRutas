var traza = [];
var youtubeNorteAmerica1 = [
  {lat: 37.4060, lng: -122.0785},
  {lat: 37.7749, lng: -122.4194},
  {lat: 40.7199, lng: -74.0050},
  {lat: 40.7199, lng: -74.0050},
  {lat: 37.4060, lng: -122.0785},
  {lat: 37.4060, lng: -122.0785},
  {lat: 37.4060, lng: -122.0785}
  ];

var baiduNorteAmerica1 = [
  {lat:37.7749 , lng:-122.4194},
  {lat:40.7199 , lng:-74.0050},
  {lat:37.7749 , lng:-122.4194},
  {lat:37.3394 , lng:-121.8950},
  {lat:37.3394 , lng:-121.8950},
  {lat:41.8558 , lng:123.9233},
  {lat:39.9075 , lng:116.3972},
  {lat:39.9075 , lng:116.3972},
  {lat:34.7725 , lng:113.7266},
  {lat:23.1167 , lng:113.2500}
  ];
          
var googleNorteAmerica1 = [
  {lat: 33.451400756836, lng: -84.186996459961},
  {lat: 37.735298156738, lng: -122.37319946289},
  {lat: 40.7214012146, lng: -74.00520324707},
  {lat: 40.7214012146, lng: -74.00520324707},
  {lat: 34.099498748779, lng: -118.41429901123},
  {lat: 34.099498748779, lng: -118.41429901123},
  {lat: 34.099498748779, lng: -118.41429901123},
  {lat: 33.451400756836, lng: -84.186996459961}
  ];

var wikipediaNorteAmerica1 = [
  {lat: 37.7749, lng: -122.4194},
  {lat: 40.7199, lng: -74.0050},
  {lat: 40.7199, lng: -74.0050}
  ];


var facebookNorteAmerica1 = [
  {lat:37.7749 , lng:-122.4194},
  {lat:40.7199 , lng:-74.0050},
  {lat:37.4419 , lng:-122.1430},
  {lat:37.4419 , lng:-122.1430},
  {lat:37.3394 , lng:-121.8950},
  {lat:37.3394 , lng:-121.8950},
  {lat:37.3394 , lng:-121.8950}
  ];

var googleEuropa = [
  {lat:4.8094 , lng:-74.0980},
  {lat:57.7072 , lng:11.9668},
  {lat:59.4032 , lng:17.9448},
  {lat:59.4032 , lng:17.9448},
  {lat:59.4032 , lng:17.9448},
  {lat:37.4060 , lng:-122.0785},
  {lat:37.4060 , lng:-122.0785},
  {lat:37.4060 , lng:-122.0785},
  {lat:37.4060 , lng:-122.0785}       
        ];

var youtubeEuropa = [
  {lat:4.8094 , lng:-74.0980},
  {lat:57.7072 , lng:11.9668},
  {lat:59.4032 , lng:17.9448},
  {lat:59.4032 , lng:17.9448},
  {lat:59.4032 , lng:17.9448},
  {lat:59.4032 , lng:17.9448},
  {lat:37.4060 , lng:-122.0785},
  {lat:37.7510 , lng:-97.8220},
  {lat:37.4192 , lng:-122.0574}      
        ];

var facebookEuropa = [
    {lat:4.6492  , lng:-74.0628},
    {lat:59.3326 , lng:18.0649},
    {lat:59.3247 , lng:18.0560},
    {lat:59.3326 , lng:18.0649},
    {lat:59.3326 , lng:18.0649},
    {lat:59.3326 , lng:18.0649},
    {lat:59.3326 , lng:18.0649},
    {lat:59.3326 , lng:18.0649},
    {lat:59.3326 , lng:18.0649},
    {lat:59.4032 , lng:17.9448},
    {lat:52.3500 , lng:4.9167},
    {lat:37.4590 , lng:-122.1781},
    {lat:37.4590 , lng:-122.1781},
    {lat:37.5670 , lng:-121.9829},
    {lat:53.3472 , lng:-6.2439}
];

var wikipediaEuropa = [
      {lat:4.6492 , lng:-74.0628},
      {lat:59.3326 , lng:18.0649},
      {lat:59.3247 , lng:18.0560},
      {lat:59.3247 , lng:18.0560},
      {lat:59.3247 , lng:18.0560},
      {lat:59.4032 , lng:17.9448},
      {lat:59.4032 , lng:17.9448},
      {lat:59.3247 , lng:18.0560},
      {lat:59.3247 , lng:18.0560}
    
];

var baiduEuropa = [
      {lat:4.6492 , lng:-74.0628},
      {lat:59.3326 , lng:18.0649},
      {lat:59.3247 , lng:18.0560},
      {lat:59.3247 , lng:18.0560},
      {lat:59.3247 , lng:18.0560},
      {lat:51.4964 , lng:-0.1224},
      {lat:37.7510 , lng:-97.8220},
      {lat:37.7510 , lng:-97.8220},
      {lat:37.7510 , lng:-97.8220},
      {lat:37.7510 , lng:-97.8220},
      {lat:37.7510 , lng:-97.8220},
      {lat:37.7510 , lng:-97.8220}
          
];
var continente;
var pagina;
var color;
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
color= "rgb("+r+" ,"+g+","+ b+")";

function initMap() {
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 3,
    center: {lat: 0, lng: -180},
    mapTypeId: 'terrain'
    });
}

function cargarMapa() {
  $("#boton").click(function(){
  continente = $("#continente").val();
  console.log(continente);
  pagina = $("#pagina").val();
  console.log(pagina);

  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 3,
    center: {lat: 0, lng: -180},
    mapTypeId: 'terrain'
    });

  if (continente == "NorteAmerica" && pagina=="Baidu") {
    traza = baiduNorteAmerica1;
  }

  if (continente == "NorteAmerica" && pagina=="Google") {
    traza = googleNorteAmerica1;
  }

  if (continente == "NorteAmerica" && pagina=="Facebook") {
    traza = facebookNorteAmerica1;
  }

  if (continente == "NorteAmerica" && pagina=="Youtube") {
    traza = youtubeNorteAmerica1;
  }

  if (continente == "NorteAmerica" && pagina=="Wikipedia") {
    traza = wikipediaNorteAmerica1;
  }

  if (continente == "Europa" && pagina=="Google") {
    traza = googleEuropa;
  }

  if (continente == "Europa" && pagina=="Facebook") {
    traza = facebookEuropa;
  }

  if (continente == "Europa" && pagina=="Youtube") {
    traza = youtubeEuropa;
  }

  if (continente == "Europa" && pagina=="Wikipedia") {
    traza = wikipediaEuropa;
  }

  if (continente == "Europa" && pagina=="Baidu") {
    traza = baiduEuropa;
  }
 var flightPath = new google.maps.Polyline({
    path:traza,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 2
    });



  flightPath.setMap(map);


}


