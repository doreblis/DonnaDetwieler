const img1 = require('../../img/1.jpg');
const img2 = require('../../img/2.jpg');
const img3 = require('../../img/3.jpg');
const img4 = require('../../img/4.jpg');
const img5 = require('../../img/5.jpg');



export default function Profile(state){ 
    // $('.carousel').carousel()

    return `


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>


  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${img1}" class="d-block w-100" alt="1">
    </div>
    <div class="carousel-item active">
      <img src="${img2}" class="d-block w-100" alt="2">
    </div>
    <div class="carousel-item active">
        <img src="${img3}" class="d-block w-100" alt="3">
    </div>
    <div class="carousel-item active">
        <img src="${img4}" class="d-block w-100" alt="4">
    </div>
    <div class="carousel-item active">
      <img src="${img5}" class="d-block w-100" alt="5">
    </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`;
}