// table of wood classes
const woodclasses = {
  C14: {
    fmk: 14,
    ft0k: 8,
    fvt90k: 0.4,
    fc0k: 16,
    fc90k: 2.0,
    fvk: 1.7,
  },
  C16: {
    fmk: 16,
    ft0k: 10,
    fvt90k: 0.4,
    fc0k: 17,
    fc90k: 2.2,
    fvk: 1.8,
  },
  C18: {
    fmk: 18,
    ft0k: 11,
    ft90k: 0.5,
    fc0k: 18,
    fc90k: 2.2,
    fvk: 2.0,
  },
  C20: {
    fmk: 20,
    ft0k: 12,
    ft90k: 0.5,
    fc0k: 19,
    fc90k: 2.3,
    fvk: 2.2,
  },
  C22: {
    fmk: 22,
    ft0k: 13,
    ft90k: 0.5,
    fc0k: 20,
    fc90k: 2.4,
    fvk: 2.4,
  },
  C24: {
    fmk: 24,
    ft0k: 14,
    ft90k: 0.5,
    fc0k: 21,
    fc90k: 2.5,
    fvk: 4,
  },
  C27: {
    fmk: 27,
    ft0k: 16,
    ft90k: 0.6,
    fc0k: 22,
    fc90k: 2.6,
    fvk: 2.8,
  },
  C30: {
    fmk: 30,
    ft0k: 18,
    ft90k: 0.6,
    fc0k: 23,
    fc90k: 2.7,
    fvk: 3.0,
  },
  C35: {
    fmk: 35,
    ft0k: 21,
    ft90k: 0.6,
    fc0k: 25,
    fc90k: 2.8,
    fvk: 3.4,
  },
  C40: {
    fmk: 40,
    ft0k: 24,
    ft90k: 0.6,
    fc0k: 26,
    fc90k: 2.9,
    fvk: 3.8,
  },
  C45: {
    fmk: 45,
    ft0k: 27,
    ft90k: 0.6,
    fc0k: 27,
    fc90k: 3.1,
    fvk: 3.8,
  },
  C50: {
    fmk: 50,
    ft0k: 30,
    ft90k: 0.6,
    fc0k: 29,
    fc90k: 3.2,
    fvk: 3.8,
  },
};

// wood classes table and vars selector
const fmk_element = document.getElementById("fmk");
const ft0k_element = document.getElementById("ft0k");
const ft90k_element = document.getElementById("ft90k");
const fc0k_element = document.getElementById("fc0k");
const fc90k_element = document.getElementById("fc90k");
const fvk_element = document.getElementById("fvk");

let fmk_value = 14
let ft0k_value = 8
let ft90k_value = 0.4
let fc0k_value = 16
let fc90k_value = 2
let fvk_value = 1.7

function listQ() {
  fmk_element.textContent = woodclasses[this.value].fmk;
  ft0k_element.textContent = woodclasses[this.value].ft0k;
  ft90k_element.textContent = woodclasses[this.value].ft90k;
  fc0k_element.textContent = woodclasses[this.value].fc0k;
  fc90k_element.textContent = woodclasses[this.value].fc90k;
  fvk_element.textContent = woodclasses[this.value].fvk;

  fmk_value = woodclasses[this.value].fmk;
  ft0k_value = woodclasses[this.value].ft0k;
  ft90k_value = woodclasses[this.value].ft90k;
  fc0k_value = woodclasses[this.value].fc0k;
  fc90k_value = woodclasses[this.value].fc90k;
  fvk_value = woodclasses[this.value].fvk;
}
document.getElementById("wood").onchange = listQ;

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
function calc_fmd(fmk, kmod){
  return fmk * kmod / 1.3;
}
function calc_ft0d(ft0k, kmod){
  return ft0k * kmod / 1.3;
}
function calc_fvd(fvk, kmod){
  return fvk * kmod / 1.3;
}
function calc_fc90d(fc90k, kmod){
  return fc90k * kmod / 1.3;
}
function calc_fc0d(fc0k, kmod){
  return fc0k * kmod / 1.3;
}
function calc_fcAd(fc0d, kc90, fc90d, alpha){
  s = Math.sin(alpha*Math.PI/180);
  c = Math.cos(alpha*Math.PI/180);
  return fc0d/(fc0d/(kc90*fc90d)*(s)**2+(c)**2);
}
function calc_an(nd, fcAd){
  return nd / fcAd;
}
function calc_sigmacAd(nd, b, s){
  return nd * Math.cos(alpha*Math.PI/180) / b*s;
}
function calc_sigmaCompare(sigma, fcAd){
  return sigma / fcAd;
}
function calc_l1v(s){
  return s * Math.tan(alpha*Math.PI/180);
}
function calc_av(nd, fvd){
  return nd * Math.cos(alpha*Math.PI/180) / fvd;
}
function calc_lv(av, b){
  return av / b;
}
function calc_l2v1(lv, l1v){
  return lv-l1v;
}
function calc_tauRd(nd, av){
  return nd * Math.cos(alpha*Math.PI/180) / av;
}
function calc_tauEd(nd, b, l2v, l1v){
  return nd * Math.cos(alpha*Math.PI/180) / b * (l2v + l1v);
}
function calc_tauCompare(tauEd, tauRd){
  return tauEd / tauRd;
}
function calc_asmin(nd, fub){
  x = 60 - alpha;
  return (1.25 * nd * Math.tan(x*Math.PI/180))/(0.9 * fub);
}
function calc_ntd(nd){
  return nd * Math.cos(alpha*Math.PI/180);
}
function calc_h2(h, s){
  return h - s;
}
function calc_an1(h2, b){
  return h2 * ((b - 45));
}
function calc_e(h, h2){
  return h - h2 / 2;
}
function calc_m(ntd, e){
  return ntd * e;
}
function calc_sigmat(ntd, an1){
  return ntd / an1;
}
function calc_wy(b, h2){
  return ((b-45)*h2^2)/6;
}
function calc_sigmam(m, wy){
  return m / wy;
}
function calc_condition(sigmat, ft0d, sigmam, fmd){
  return sigmat / ft0d + sigmam / fmd;
}

// input forms
const nd_element = document.getElementById("nd");
const alpha_element = document.getElementById("alpha");
const b_element = document.getElementById("b");
const h_element = document.getElementById("h");
const s_element = document.getElementById("s");
const fub_element = document.getElementById("fub");
const as_element = document.getElementById("as");
const kc90_element = document.getElementById("kc90");
const calculate_button = document.getElementById("calculate");

let nd_value = 0;
let alpha_value = 0;
let b_value = 0;
let h_value = 0;
let s_value = 0;
let fub_value = 0;
let as_value = 0;
let kc90_value = 0;

let fmd_result = 0;
let ft0d_result = 0;
let fvd_result = 0;
let fc90d_result = 0;
let fc0d_result = 0;
let an_result = 0;
let sigmacAd_result = 0;
let sigmacCompare_result = 0;
let l1v_result = 0;
let av_result = 0;
let lv_result = 0;
let l2v1_result = 0;
let tauRd_result = 0;
let tauEd_result = 0;
let tauCompare_result = 0;
let calc_asmin_result = 0;
let calc_ntd_result = 0;
let calc_h2_result = 0;
let calc_an1_result = 0;
let calc_e_result = 0;
let calc_m_result = 0;
let calc_sigmat_result = 0;
let calc_wy_result = 0;
let calc_sigmam_result = 0;
let calc_condition_result = 0;
let l2v_value = 150;

calculate_button.addEventListener('click', () => {
  nd_value = parseFloat(nd_element.value);
  alpha_value = parseFloat(alpha_element.value);
  b_value = parseFloat(b_element.value);
  h_value = parseFloat(h_element.value);
  s_value = parseFloat(s_element.value);
  fub_value = parseFloat(fub_element.value);
  as_value = parseFloat(as_element.value);
  kc90_value = parseFloat(kc90_element.value);

  fmd_result = calc_fmd(fmk_value, kmod_value);
  ft0d_result = calc_ft0d(ft0k_value, kmod_value);
  fvd_result = calc_fvd(fvk_value, kmod_value);  
  fc90d_result = calc_fc90d(fc90k_value, kmod_value);
  fc0d_result = calc_fc0d(fc0k_value, kmod_value);
  fcAd_result = calc_fcAd(fc0d_result, kc90_value, fc90d_result, alpha_value);




  update_latex();
})




// latex part

// var math = MathJax.tex2chtml("\\frac{1}{" + k + "}");
// var math = MathJax.tex2chtml(
//   "\\frac{\\tau_{Ed}} {\\displaystyle {\\tau_{Rd}}}= "
// );

// var math = MathJax.tex2chtml(
//   "\\frac{\\tau_{Ed}}{\\displaystyle{\\tau_{Rd}}} = \\frac{" + tau + "}{\\displaystyle{" + tej + "}}"
// );

// var div = document.createElement("div");
// div.appendChild(math);
// document.body.appendChild(div);


// fmd
const latex_fmd_element = document.getElementById("latex_fmd");
const latex_ft0d_element = document.getElementById("latex_ft0d");
const latex_fvd_element = document.getElementById("latex_fvd");
const latex_fc90d_element = document.getElementById("latex_fc90d");
const latex_fc0d_element = document.getElementById("latex_fc0d");
const latex_fcAd_element = document.getElementById("latex_fcAd");



function update_latex() {
  //fmd
  latex_fmd_element.innerHTML = "$$ f_{m,d}=\\frac{f_{m,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fmk_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fmd_result + "}  $$";
  //ft0d
  latex_ft0d_element.innerHTML = "$$ f_{t,0,d}=\\frac{f_{t,0,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + ft0k_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + ft0d_result + "} $$";
  //fvd
  latex_fvd_element.innerHTML = "$$ f_{v,d}=\\frac{f_{v,d}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fvk_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fvd_result + "} $$";
  //fc90d
  latex_fc90d_element.innerHTML = "$$ f_{c,90,d}=\\frac{f_{c,90,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fc90k_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fc90d_result + "} $$";
  //fc0d
  latex_fc0d_element.innerHTML = "$$ f_{c,0,d}=\\frac{f_{c,0,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fc0k_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fc0d_result + "} $$";
  //fcAd
  latex_fcAd_element.innerHTML = "$$ f_{c,\\alpha,d}=\\frac{f_{c,0,d}}{\\displaystyle\\frac{f_{c,0,d}}{k_{c,90}*f_{c,90,d}}*(\\sin(\\alpha))^2+(\\cos(\\alpha))^2} = \\frac{"+fc0d_result+"}{\\displaystyle({"+fc0d_result+"}/({"+kc90_value+"}*{"+fc90d_result+"}))*(\\sin("+alpha_value+"))^2+(\\cos("+alpha_value+"))^2}= {" + fcAd_result + "} $$";

  
  MathJax.typeset();
}


// // fcAd
// var fcAd_equation = MathJax.tex2chtml(
//   "f_{c,\\alpha,d}=\\frac{f_{c,0,d}}{\\displaystyle\\frac{f_{c,0,d}}{k_{c,90}*f_{c,90,d}}*(\\sin(\\alpha))^2+(\\cos(\\alpha))^2} = "
//   );

// var div = document.createElement("div");
// div.appendChild(fcAd_equation);
// document.body.appendChild(div);

// // An
// var An_equation = MathJax.tex2chtml(
//   "A_{n}=\\frac{N_{d}} {\\displaystyle f_{c,\\alpha,d}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(An_equation);
// document.body.appendChild(div);

// // Sigma
// var sigma_equation = MathJax.tex2chtml(
//   "\\sigma_{c,\\alpha,d}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {b*s}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(sigma_equation);
// document.body.appendChild(div);

// // Sigma_porownanie
// var sigmaComper_equation = MathJax.tex2chtml(
//   "\\frac{\\sigma_{c,\\alpha,d}} {\\displaystyle {f_{c,\\alpha,d}}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(sigmaComper_equation);
// document.body.appendChild(div);

// //l1v
// var l1v_equation = MathJax.tex2chtml(
//   "l_{1,v}={s*tg(\\alpha)} = "
//   );

// var div = document.createElement("div");
// div.appendChild(l1v_equation);
// document.body.appendChild(div);

// // Av
// var Av_equation = MathJax.tex2chtml(
//   "A_{v}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {f_{v,d}}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(Av_equation);
// document.body.appendChild(div);

// // lv
// var lv_equation = MathJax.tex2chtml(
//   "l_{v}=\\frac{A_{v}} {\\displaystyle {b}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(lv_equation);
// document.body.appendChild(div);

// //l2v'
// var l2v_equation = MathJax.tex2chtml(
//   "l_{2,v'}={l_{v}-l_{1,v}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(l2v_equation);
// document.body.appendChild(div);

// //tauRd
// var tauRd_equation = MathJax.tex2chtml(
//   "\\tau_{Rd}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {A_{v}}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(tauRd_equation);
// document.body.appendChild(div);

// //tauEd
// var tauEd_equation = MathJax.tex2chtml(
//   "\\tau_{Ed}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle{b*(l_{2,v}+l_{1,v})}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(tauEd_equation);
// document.body.appendChild(div);

// //tauEd/tauRd
// var tauCompare_equation = MathJax.tex2chtml(
//   "\\frac{\\tau_{Ed}} {\\displaystyle {\\tau_{Rd}}} = "
//   );

// var div = document.createElement("div");
// div.appendChild(tauCompare_equation);
// document.body.appendChild(div);








