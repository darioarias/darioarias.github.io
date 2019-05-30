
function initialize() {
  var ISSData = makeCall("http://api.open-notify.org/iss-now.json"); // make call to get ISS Location
  ISSData.then((data)=>{
    var map = getMap('map'); // pass in the div where the Globe will live
    var latitude = data.iss_position['latitude'];
    var longitude = data.iss_position['longitude'];

    var markLocation = WE.marker([latitude, longitude]);
    markLocation.bindPopup("<h3 id='issInfo'>International Space Station</h3><p id='issInfoPara'> This is the estimated location of the International Space Station. </p>", {maxWidth: 150, closeButton: true});
    markLocation.addTo(map);
    map.panTo([latitude, longitude]);

    console.log(latitude);
    console.log(longitude);
    console.log(data);
  });
}

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

function removeMark(mark, map){
  mark.removeFrom(map);
}

function getMap(divId){
  var earth = new WE.map(divId);
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
  earth.setView([40.730610, -73.935242], 2);

  return earth;
}

var facts = [['The ISS had its inception in 1998 and is currently 17 years old'],
              ['It has been occupied for 5,187 days and has circled the Earth 92,357 times'],
              ['The first piece of the space station was put in orbit in the year 1998, but the assembly actually took place over 12 years till it was finally completed in 2011'],
              ['The smallest piece of debris, the size of a golf ball can cause immense damage to the ISS if it were to collide with it while in orbit'],
              ['The ISS is certified to stay in space only till 2020, it may be extended if the cost of sending supplies to the ISS can become less costly'],
              ['The ISS can only hold a crew of 6 at one time'],
              ['There are 21 space centres all over the world involved with the ISS'],
              ['The ISS is visible to the naked eye, if you catch it at the right time.'],
              ['The total cost of building the ISS has been as of 2010 , $150 billion'],['Sixteen nations were involved in the construction of the ISS: The United States, Russia, Canada, Japan, Belgium, Brazil, Denmark, France, Germany, Italy, the Netherlands, Norway, Spain, Sweden, Switzerland, and the United Kingdom'],
              ['Sixty-five miles per hour may be a pretty standard speed limit on highways here on Earth, but up in orbit, the ISS travels a whopping 5 miles-per-second. That means the station circles the entire planet once every 90 minutes. '],
              ["Made up of hundreds of major and minor components, the ISS is the largest manned object ever put into space. The ISS has a pressurized volume of 32,333 cubic feet, the same as a Boeing 747. It's four times larger than the Russian space station MIR and five times larger than the U.S. station Skylab"],
              ['Just because you’re in space doesn’t mean you can’t get a virus on your computer. The 52 computers onboard the ISS have been infected by viruses more than once. The first was a worm known as the W32.Gammima.AG, which started spreading by stealing passwords to online video games on Earth. It wasn’t a big deal, though—NASA responded by calling the virus a “nuisance” '],
              ['Currently, the ISS is the third brightest object in the night sky after the moon and Venus. Eagle-eyed stargazers can even spot it if they look closely enough—it looks like a fast-moving airplane. If you can’t find it, NASA has a service called Spot the Station that texts you when and where it will pass over your location. If you want the opposite view (though we’re pretty sure you won’t be able to spot yourself), there is a live video feed pointing towards Earth that runs when the crew is off-duty'],
              ['Oxygen in the ISS comes from a process called “electrolysis,” which involves using an electrical current generated from the station’s solar panels to split water molecules into hydrogen and oxygen gas'],
              ['The ISS was built to be a space environment research laboratory and observatory, where crew members could conduct experiments in many scientific fields including: biology, human biology, physics, astronomy, and meteorology'],
              []];
console.log(facts.length);
console.log(facts[9]);
var index = Math.floor(Math.random() * (facts.length));
document.querySelector('#funFact').textContent = facts[index][0];
