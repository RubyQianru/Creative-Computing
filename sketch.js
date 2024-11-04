let button;
let button2;
let bgRed = false;
let picker;
let slider;
let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();

  button = createButton("Set red");
  button.position(200, 0);
  button.mousePressed(changeBg);

  button2 = createButton("Start mic");
  button2.position(300, 0);
  button2.mousePressed(startMic);

  picker = createColorPicker();
  picker.position(0, 0);

  slider = createSlider();
  slider.position(50, 0);
}

function draw() {
  background(picker.value());
  console.log(slider.value());
  let sliderVal = slider.value();
  constrain(sliderVal, 0, 255);
  fill(color(10, sliderVal / 2, 0));
  circle(width / 2, height / 2, mic.getLevel() * 10000);

  if (bgRed) background(button.value());
}

function changeBg() {
  bgRed = !bgRed;
  if (bgRed) {
    button.value(color(255, 0, 0));
  }
}

function startMic() {
  mic.start();
}
