
var PARAMS = "Future+rapper";//"Oleg+Kononenko"; //"valley+forge+national+park";
var API_DUCKDUCKGO = "https://api.duckduckgo.com/?q="+PARAMS+"&format=json&pretty=1";

var astro = [];

/*
function makeCall(url){
  return new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => resolve(request.response);
    request.onerror = () => reject(request.statusText);
    request.send();
  });
}
*/

function makeCall(url){
  var promise = new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.onload = () => resolve(request.response);
    request.onerror = () => reject(request.statusText);
    request.send();
  });
  //console.log(promise);
  return promise;
}

var firstCall = makeCall("http://api.open-notify.org/astros.json");
// console.log(promise1);

firstCall.then((data)=>{
  var index = 1;
  // console.log(data);
  for(var i =0; i < data.people.length; i++){
    astro.push(data.people[i].name);

    var params = data.people[i].name;
    if(params =="Alexey Ovchinin"){
      params = "Aleksey Ovchinin";
    }
    var secondCall = makeCall("https://api.duckduckgo.com/?q="+params+"&format=json&pretty=1");
    secondCall.then((response)=>{
      if(response.AbstractText != ''){

        createSection(response);
        index++;
      } else{
        console.log(params);
      }
    });

  };


function createSection(response){
    var container = document.createElement('div');
    container.setAttribute('class', 'row');

  //creates the contrainer that goes below "content-section-a(b)"
    var subContainer = document.createElement('div');
    subContainer.setAttribute('class', "col-md-4");


    //creates the actual images to be place on the previous div
    // var divImg = new Image(200, 200);
      var divImg = new Image(200);
      divImg.setAttribute('class', 'img-fluid rounded mb-3 mb-md-0 img-responsive');
      divImg.setAttribute('width', '300px');
      divImg.setAttribute('src', response.Image);
      subContainer.appendChild(divImg);

      //append div with img to parent div
      container.appendChild(subContainer);


  //Creates the div that goes beside the picture
    var sideDiv = document.createElement('div');
    sideDiv.setAttribute('class', 'col-md-5');



  //creates the div that contrains the image of the post.
    var h3 = document.createElement('h3');
    h3.textContent = response.Heading;
    sideDiv.appendChild(h3);


  //creates the div that will contain the information describing the image
    var infoPara = document.createElement('p');
    infoPara.textContent = response.AbstractText;
    sideDiv.appendChild(infoPara);

    container.appendChild(sideDiv);



    var hr = document.createElement('hr');

    document.querySelector("#bodContainer").appendChild(hr);
    document.querySelector("#bodContainer").appendChild(container);
}
//
//
//
//
//
//
//
// function createSection(response, index){
//   var container = document.createElement('div');
//   var attribute = '';
//
//   if(index % 2 == 0){
//     attribute = 'content-section-a';
//   } else{
//     attribute = 'content-section-b';
//   }
//
//   container.setAttribute('class', attribute);
// //creates the contrainer that goes below "content-section-a(b)"
//   var subContainer = document.createElement('div');
//   subContainer.setAttribute('class', "container");
//   container.appendChild(subContainer);
//
// //Creates the div that goes below the previous contrainer
//   var subRow = document.createElement('div');
//   subRow.setAttribute('class', 'row');
//   subContainer.appendChild(subRow);
//
// //creates the div that contrains the image of the post.
//   var divRowImg = document.createElement('div');
//   divRowImg.setAttribute('class', 'col-lg-5 col-lg-offset-2 col-sm-6');
//
// //creates the actual images to be place on the previous div
// // var divImg = new Image(200, 200);
//   var divImg = new Image(200);
//   divImg.setAttribute('class', 'img-responsive');
//   divImg.setAttribute('src', response.Image);
//   divRowImg.appendChild(divImg);
//
//
// //creates the div that will contain the information describing the image
//   var infoDiv = document.createElement('div');
//   infoDiv.setAttribute('class', 'col-lg-5 col-sm-6');
// //creates hr
//   var hr = document.createElement('hr');
//   hr.setAttribute('class', 'section-heading-spacer');
//   infoDiv.appendChild(hr);
//
// //creates div below hr
//   var lowerDiv = document.createElement('div');
//   lowerDiv.setAttribute('class', 'clearfix');
//   infoDiv.appendChild(lowerDiv);
//
// //creates h2 below div
//   var h2 = document.createElement('h2');
//   h2.setAttribute('class', 'section-heading');
//   h2.textContent = response.Heading;
//   infoDiv.appendChild(h2);
//
// //creates p with information about the person
//   var p = document.createElement('p');
//   p.setAttribute('class', 'lead');
//   p.textContent=response.AbstractText;
//   infoDiv.appendChild(p);
//
// //add every element to subrow
//   subRow.appendChild(infoDiv);
//   subRow.appendChild(divRowImg);
//   document.body.appendChild(container);
// }


/*
var div = document.createElement('div');
var paragraph = document.createElement('p');
paragraph.innerText="Welcome!";
div.appendChild(paragraph);
div.innerHTML = "my <b>new</b> skill - <large>DOM maniuplation!</large>";
// set style

div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
document.body.appendChild(div);

*/



/*
  var secondCall = makeCall("https://api.duckduckgo.com/?q="+astro[0]+"&format=json&pretty=1");
  secondCall.then((response)=>{
    console.log("enter second Call");
    console.log(response);


  });
*/

});












/*
var peopleInspace;

var requestURL = "http://api.open-notify.org/astros.json";
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function(data) {
  var superHeroes = request.response;
  var totalPeople = superHeroes['people'];
  var fullNames = [];
  var ready = [];
  var joined = [];
  var Params = '';

  for (var i = 0; i<totalPeople.length; i++){
    fullNames.push(totalPeople[i].name);
    ready.push(fullNames[i].split(" "));
    joined.push(ready[i].join("+"));
    params = joined[i];

    console.log(params);
  }
  //console.log(superHeroes['people'][0]);
}
*/




/*
how every post should look like.......

<!-- Page Content -->
<div class="content-section-a">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading" id="person0">Death to the Stock Photo:<br>Special Thanks</h2>
                <p class="lead" id="information">Visit their website to become a member.</p>
            </div>
            <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <img class="img-responsive" src="img/ipad.png" alt="" id="atroImg">
            </div>
        </div>
    </div>
    <!-- /.container -->
</div>
<!-- /.content-section-a -->
*/








/*

<!-- Page Content -->
<div class="content-section-a">
  <div class="container">
    <h1>People in Space include the following</h1>
  </div>


    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading" id="person0">Death to the Stock Photo:<br>Special Thanks</h2>
                <p class="lead" id="information">Visit their website to become a member.</p>
            </div>
            <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <img class="img-responsive" src="img/ipad.png" alt="" id="atroImg">
            </div>
        </div>
    </div>
    <!-- /.container -->
</div>
<!-- /.content-section-a -->


<!-- Page Content -->
<div class="content-section-b">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading" id="person0">Death to the Stock Photo:<br>Special Thanks</h2>
                <p class="lead" id="information">Visit their website to become a member.</p>
            </div>
            <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <img class="img-responsive" src="img/ipad.png" alt="" id="atroImg">
            </div>
        </div>
    </div>
    <!-- /.container -->
</div>
<!-- /.content-section-a -->


<!-- Page Content -->
<div class="content-section-a">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading" id="person0">Death to the Stock Photo:<br>Special Thanks</h2>
                <p class="lead" id="information">Visit their website to become a member.</p>
            </div>
            <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <img class="img-responsive" src="img/ipad.png" alt="" id="atroImg">
            </div>
        </div>
    </div>
    <!-- /.container -->
</div>
<!-- /.content-section-a -->



*/

/*


<!-- Page Content -->
<div class="content-section-a">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">Christina Koch</h2>
                <p class="lead" id="information">Christina Hammock Koch is an engineer and NASA astronaut of the class of 2013. She graduated from North Carolina State University with a Bachelor of Science in Electrical Engineering and Physics and a Master of Science in Electrical Engineering. She was previously the NOAA Station Chief for American Samoa.</p>
            </div>
            <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <img class="img-responsive" width="200px" src="https://www.nasa.gov/sites/default/files/thumbnails/image/12774511004_db7f2b96fc_o_0.jpg" alt="">
            </div>
        </div>
    </div>
    <!-- /.container -->
</div>
<!-- /.content-section-a -->
*/


/*

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>


*/
