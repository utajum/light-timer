const { Control } = require("magic-home");

let light = new Control("192.168.2.117");
light.setPower(false).then((success) => {
  console.log(success);
  // do something with the result
});
