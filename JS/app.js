// function hex (r,g,b){ //converts rgb to hex color
//   return '#' + ((1 << 24)+(r << 16)+(g<<8)+b).toString(16).slice(1);
// }

// function rgb(r,g,b){ //return the rgb format 
//   return `rgb(${r},${g},${g})`;
// }

// function makeColor(r,g,b){ //we are building an object, integrăm celelalte două funcții de mai sus aici
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const {r,g,b} = this //le ia din variabila cu care este apelată funcția
//     return `rgb(${r},${g},${g})`;
//   }
//   color.hex = function (){
//     const {r,g,b} = this //le ia din variabila cu care este apelată funcția
//     return '#' + ((1 << 24)+(r << 16)+(g<<8)+b).toString(16).slice(1);
//   }
//   return color;
// }

// const firstColor = makeColor(35,255,150);
// firstColor.hex();
// firstColor.rgb(); //test it out


// //but hey, don't forget about console.dir() :)

// function Color(r, g, b) { //capital letter to show this is a constructor
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () { //use normal functions because arrow functions cause "this" to behave differently
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this //le ia din variabila cu care este apelată funcția
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a=1.0){ //gives alpha default value of 1
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;

// }

// const color1 = new Color(90,60,90); //very important: use "new" keyword
// const color2 = new Color(1,0,27);


// color1.hex() //converts to hex
// color1.rgba(0.5) //50% translucency


// // Creates a blank, plain JavaScript object.
// // Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// // Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

// // Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// // Returns this if the function doesn't return an object.


class Color { //declarăm fără prototype, class obligatoriu
  constructor(r,g,b,name){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() { //o folosim ca să mai economisim puțin scris mai tz
    const {r,g,b} = this; //deconstruct with this
    return `${r}, ${g}, ${b}`;
  }
  rgb(){
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a=1.0){
    return `rgba(${this.innerRGB()}, ${a}})`;
  }
  hex(){
    const{r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255,67,89, 'tomato');
const white = new Color(255,255,255, 'white');