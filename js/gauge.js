 var gauge2 = Gauge(
  document.getElementById("gauge2"), {
    min: 1,
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: 0,
    value: 80,
     color: function(value) {
        if(value < 45) {
          return "#5ee432";
        }else if(value < 50) {
          return "#fffa50";
        }else if(value < 75) {
          return "#f7aa38";
        }else {
          return "#ef4655";
        }
      }
  }
);

var gauge1 = Gauge(
  document.getElementById("gauge1"), {
    max: 100,
    dialStartAngle: -90,
    dialEndAngle: -90.001,
    value: 0,
    label: function(value) {
      return Math.round(value);
    }
  }
);

    (function loop() {
  var value = Math.random() * 100;
  var valueFixed = '79';

  // setValueAnimated(value, durationInSecs);
  gauge1.setValueAnimated(valueFixed, 3);
  gauge2.setValueAnimated(100 - value, 2);
  window.setTimeout(loop, 3000);
})();


