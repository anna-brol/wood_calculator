// kmod classes vars selector
const kmodclass = {
  use_1i2: {
    dur_1: 0.6,
    dur_2: 0.7,
    dur_3: 0.8,
    dur_4: 0.9,
    dur_5: 1.1,
  },
  use_3: {
    dur_1: 0.5,
    dur_2: 0.55,
    dur_3: 0.65,
    dur_4: 0.7,
    dur_5: 0.9,
  },
};

const kmod_element = document.getElementById("kmod_value");
const usability_element = document.getElementById("usability");
const durability_element = document.getElementById("durability");

let kmod_value = 0.6;

function kmod_listQ() {
  let usability = usability_element.value;
  let durability = durability_element.value;
  kmod_element.textContent = kmodclass[usability][durability];

  kmod_value = kmodclass[usability][durability];
}
usability_element.onchange = kmod_listQ;
durability_element.onchange = kmod_listQ;

// functions
function calc_aeff(a_dimension, t){
  return 2 * a_dimension * t * 0.75;
}
function calc_rk(aeff, r_material, ym){
  return aeff * r_material / ym;
}
function calc_condition1(nd, rk){
  return nd / rk;
}
function calc_r1d(r1_screw, kmod, ym){
  return quantity2_value * r1_screw * kmod / ym;
}
function calc_condition2(nd, r1d){
  return nd / r1d;
}
function calc_a3c(diameter){
  return quantity2_value * diameter;
}
function calc_a3t(diameter){
  return ((quantity2_value + quantity_value * Math.cos(alpha_value*Math.PI/180)) * diameter);
}
function calc_a4c(diameter){
  return quantity_value * diameter;
}
function calc_a4t(diameter){
  return ((quantity_value + quantity_value * Math.sin(alpha_value*Math.PI/180)) * diameter);
}
function calc_a1(diameter){
  return 0.7 * ((quantity_value + 7 * Math.cos(alpha_value*Math.PI/180)) * diameter);
}
function calc_a2(diameter){
  return 0.7 * quantity_value * diameter;
}

// input forms
const nd_element = document.getElementById("nd");
const r_element = document.getElementById("r_material");
const a_element = document.getElementById("a_dimension");
const b_element = document.getElementById("b_dimension");
const t_element = document.getElementById("t_dimension");
const r1_element = document.getElementById("r1_screw");
const d_element = document.getElementById("diameter");
const alpha_element = document.getElementById("alpha");
const quantity_element = document.getElementById("quantity");
const calculate_button = document.getElementById("calculate");

// check if forms are filled
// function areFormsFilled(){
//   if (nd_element.value && alpha_element.value && b_element.value && h_element.value){
//     calculate_button.disabled = false;
//   }
//   else {
//     calculate_button.disabled = true;
//   }
// }

// nd_element.onkeyup = areFormsFilled;
// r_element.onkeyup = areFormsFilled;
// a_element.onkeyup = areFormsFilled;
// b_element.onkeyup = areFormsFilled;
// t_element.onkeyup = areFormsFilled;
// r1_element.onkeyup = areFormsFilled;
// d_element.onkeyup = areFormsFilled;
// alpha_element.onkeyup = areFormsFilled;

let nd_value = 0;
let r_value = 0;
let a_value = 0;
let b_value = 0;
let t_value = 0;
let r1_value = 0;
let d_value = 0;
let alpha_value = 0;
let quantity_value = 0;
let quantity2_value = 0;
let ym_value = 1.3;

let [aeff_result, rk_result, condition1_result, r1d_result, condition2_result, a3c_result, a3t_result, a4c_result, a4t_result, a1_result, a2_result] = Array(11).fill(0);
let condition_literal = "";
let condition_literal1 = "";


const hint_elements = document.querySelectorAll(".hint");

calculate_button.addEventListener('click', () => {
  nd_value = parseFloat(nd_element.value);
  r_value = parseFloat(r_element.value);
  a_value = parseFloat(a_element.value);
  b_value = parseFloat(b_element.value);
  t_value = parseFloat(t_element.value);
  r1_value = parseFloat(r1_element.value);
  d_value = parseFloat(d_element.value);
  alpha_value = parseFloat(alpha_element.value);
  quantity_value = parseFloat(quantity.value);
  quantity2_value = parseFloat(quantity.value * 2);
  
  aeff_result = calc_aeff(a_value, t_value);
  rk_result = calc_rk(aeff_result, r_value, ym_value);
  condition1_result = calc_condition1(nd_value, rk_result);  
  condition_literal = condition1_result < 1 ? "Warunek spełniony!" : "Warunek nie został spełniony!"
  r1d_result = calc_r1d(r1_value, kmod_value, ym_value);
  condition2_result = calc_condition2(nd_value, r1d_result);
  condition_literal1 = condition2_result < 1 ? "Warunek spełniony!" : "Warunek nie został spełniony!"

  a3c_result = calc_a3c(d_value);
  a3t_result = calc_a3t(d_value);
  a4c_result = calc_a4c(d_value);
  a4t_result = calc_a4t(d_value);
  a1_result = calc_a1(d_value);
  a2_result = calc_a2(d_value);


  hint_elements.forEach(el => {el.hidden=false});
  update_latex();
})


const latex_aeff_element = document.getElementById("latex_aeff");
const latex_rk_element = document.getElementById("latex_rk");
const latex_condition1_element = document.getElementById("latex_condition_1");
const latex_r1d_element = document.getElementById("latex_r1d");
const latex_condition2_element = document.getElementById("latex_condition_2");

const latex_a3c_element = document.getElementById("latex_a3c");
const latex_a3t_element = document.getElementById("latex_a3t");
const latex_a4c_element = document.getElementById("latex_a4c");
const latex_a4t_element = document.getElementById("latex_a4t");

const latex_a1_element = document.getElementById("latex_a1");
const latex_a2_element = document.getElementById("latex_a2");

const latex_condition_literal_element = document.getElementById("latex_condition_literal");
const latex_condition_literal1_element = document.getElementById("latex_condition_literal1");

function update_latex() {
  // calculation
  latex_aeff_element.innerHTML = "$$ A_{eff}={2}*A*t*0.75 = { 2 * {" + a_value + " * " + t_value +"} * 0.75 } = {" + aeff_result.toFixed(2) + "}  $$";

  latex_rk_element.innerHTML = "$$ R_{k}=\\frac{A_{eff}*R}{\\displaystyle{Y_{m}}} = \\frac{" + aeff_result + " * " + r_value +"}{\\displaystyle{" + 1.3 + "} } = {" + rk_result.toFixed(2) + "} $$";
 
  latex_condition1_element.innerHTML = "$$ \\frac{N_{d}}{\\displaystyle{R_{k}}} = \\frac{" + nd_value + " }{\\displaystyle{" + rk_result + "} } = {" + condition1_result.toFixed(2) + "} $$";
 
  latex_r1d_element.innerHTML = "$$ R_{1,d}=\\frac{ 2 * {" + quantity_value +"} * R_{1} * k_{mod}}{\\displaystyle{Y_{m}}} = \\frac{ 2 * {" + quantity_value +"} * " + r1_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + r1d_result.toFixed(2) + "} $$";
 
  latex_condition2_element.innerHTML = "$$ \\frac{N_{d}}{\\displaystyle{R_{1,d}}} = \\frac{" + nd_value + " }{\\displaystyle{" + r1d_result + "} } = {" + condition2_result.toFixed(2) + "} $$";

  latex_a3c_element.innerHTML = "$$ a_{3,c}={{" + quantity2_value +"} * d} = { {" + quantity2_value +"} * " + d_value + " } = {" + a3c_result.toFixed(2) + "} $$";

  latex_a3t_element.innerHTML = "$$ a_{3,t}={ {" + quantity2_value +"} + {" + quantity_value +"} * \\cos({" + alpha_value +"}) * d} = { {" + quantity2_value +"} + {" + quantity_value +"} * \\cos({" + alpha_value +"}) * {" + d_value +"}} = {" + a3t_result.toFixed(2) + "} $$";

  latex_a4c_element.innerHTML = "$$ a_{4,c}={{" + quantity_value +"} * d} = { {" + quantity_value +"} * " + d_value + " } = {" + a4c_result.toFixed(2) + "} $$";

  latex_a4t_element.innerHTML = "$$ a_{4,t}={ {" + quantity_value +"} + {" + quantity_value +"} * \\sin({" + alpha_value +"}) * d} = { {" + quantity2_value +"} + {" + quantity_value +"} * \\sin({" + alpha_value +"}) * {" + d_value +"}} = {" + a4t_result.toFixed(2) + "} $$";

  latex_a1_element.innerHTML = "$$ a_{1}={ 0.7 * (( {" + quantity_value +"} + 7 * \\cos({" + alpha_value +"})) * d} = { 0.7 * (( {" + quantity_value +"} + 7 * \\cos({" + alpha_value +"}) * {" + d_value +"}} = {" + a1_result.toFixed(2) + "} $$";

  latex_a2_element.innerHTML = "$$ a_{2}={0.7 * {" + quantity_value +"} * d} = { 0.7 * {" + quantity_value +"} * " + d_value + " } = {" + a2_result.toFixed(2) + "} $$";
  
  latex_condition_literal_element.innerHTML = condition_literal;

  MathJax.typeset();
}

// export to PDF
const pdf_button = document.getElementById('download-button');
const container = document.getElementById('container');
const return_button = document.getElementById('return');


function generatePDF() {
  calculate_button.style.display = "none";
  pdf_button.style.display = "none";
  return_button.style.display = "none";
  window.print();
  calculate_button.style.display = "";
  pdf_button.style.display = "";
  return_button.style.display = "";
}

pdf_button.addEventListener('click', generatePDF);