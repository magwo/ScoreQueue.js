
function getRandomColor() {
  return "#" + Math.floor(Math.random()*10) + "" + Math.floor(Math.random()*10) + "" + Math.floor(Math.random()*10);
}

var myViewModel = {
  things: ko.observableArray()
};

for(var i=0; i<6; i++) {
  myViewModel.things.push({color: getRandomColor(), counter: ko.observable(0), age: ko.observable(0) })
}

ko.applyBindings(myViewModel);



// BASICALLY:

// k1 * log(v1) + k2 * v2 + k3 * v3^2 + k4 * 2^v4 + k5 * v5!


setInterval(function() {
  for(var i=1; i<myViewModel.things().length; i++) {
    myViewModel.things()[i].age(myViewModel.things()[i].age()+1);
  }

  var index = Math.round(Math.random() * (myViewModel.things().length-1));
  console.log(index);
  myViewModel.things()[index].counter(myViewModel.things()[index].counter()+Math.floor(Math.random()*6));
  myViewModel.things.sort(function(i1, i2) {
    return Math.pow(1.3, i1.age()) + i1.counter() < Math.pow(1.3, i2.age()) + i2.counter();
  });
  myViewModel.things()[0].age(0);
  myViewModel.things()[0].counter(myViewModel.things()[0].counter()-1);
}, 200);
