function colorHSL(h = 0, s = 60, l = 60, a = 80){
  push();
  colorMode(HSL, 100);
  let colour = color(h, s, l);
  colour.setAlpha(a);
  pop();
  return colour;
  
}