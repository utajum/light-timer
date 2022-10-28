const { Discovery } = require("magic-home");

let discovery = new Discovery();
discovery.scan(500).then((devices) => {
  console.log(devices);
  // do something with the result
});
