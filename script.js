// table of wood classes
const woodclasses = {
  C14: {
    fmk: 14,
    ft0k: 8,
    fvt90k: 0.4,
    fc0k: 16,
    fc90k: 2.0,
    fvk: 3.0,
  },
  C16: {
    fmk: 16,
    ft0k: 10,
    ft90k: 0.4,
    fc0k: 17,
    fc90k: 2.2,
    fvk: 3.2,
  },
  C18: {
    fmk: 18,
    ft0k: 11,
    ft90k: 0.4,
    fc0k: 18,
    fc90k: 2.2,
    fvk: 3.4,
  },
  C20: {
    fmk: 20,
    ft0k: 12,
    ft90k: 0.4,
    fc0k: 19,
    fc90k: 2.3,
    fvk: 3.6,
  },
  C22: {
    fmk: 22,
    ft0k: 13,
    ft90k: 0.4,
    fc0k: 20,
    fc90k: 2.4,
    fvk: 3.8,
  },
  C24: {
    fmk: 24,
    ft0k: 14,
    ft90k: 0.4,
    fc0k: 21,
    fc90k: 2.5,
    fvk: 4.0,
  },
  C27: {
    fmk: 27,
    ft0k: 16,
    ft90k: 0.4,
    fc0k: 22,
    fc90k: 2.6,
    fvk: 4.0,
  },
  C30: {
    fmk: 30,
    ft0k: 18,
    ft90k: 0.4,
    fc0k: 23,
    fc90k: 2.7,
    fvk: 3.0,
  },
  C35: {
    fmk: 35,
    ft0k: 21,
    ft90k: 0.4,
    fc0k: 25,
    fc90k: 2.8,
    fvk: 4.0,
  },
  C40: {
    fmk: 40,
    ft0k: 24,
    ft90k: 0.4,
    fc0k: 26,
    fc90k: 2.9,
    fvk: 4.0,
  },
  C45: {
    fmk: 45,
    ft0k: 27,
    ft90k: 0.4,
    fc0k: 27,
    fc90k: 3.1,
    fvk: 4.0,
  },
  C50: {
    fmk: 50,
    ft0k: 30,
    ft90k: 0.4,
    fc0k: 29,
    fc90k: 3.2,
    fvk: 4.0,
  },
};

// wood classes table and vars selector
const fmk_element = document.getElementById("fmk");
const ft0k_element = document.getElementById("ft0k");
const ft90k_element = document.getElementById("ft90k");
const fc0k_element = document.getElementById("fc0k");
const fc90k_element = document.getElementById("fc90k");
const fvk_element = document.getElementById("fvk");

let fmk_value = 14;
let ft0k_value = 8;
let ft90k_value = 0.4;
let fc0k_value = 16;
let fc90k_value = 2;
let fvk_value = 1.7;

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

// table of fub 
const strengthclasses = {
  fub_46: 400,
  fub_48: 400,
  fub_56: 500,
  fub_58: 500,
  fub_66: 600,
  fub_68: 600,
  fub_88: 800,
  fub_109: 1000,
  fub_129: 1200,
};

const fub_element = document.getElementById("fub_value");
let fub_value = 400;

function fub_listQ() {
  fub_element.textContent = strengthclasses[this.value];
}
document.getElementById("strength").onchange = fub_listQ;

// table of name screw 
const nameclasses = {
    M8: 36.6,
    M10: 58.0,
    M12: 84.3,
    M16: 157,
    M20: 245,
    M22: 303,
    M24: 353,
};

const as_element = document.getElementById("as_value");
let as_value = 36.6;

function as_listQ() {
  as_element.textContent = nameclasses[this.value];
}
document.getElementById("screw_name").onchange = as_listQ;


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
  let s = Math.sin(alpha*Math.PI/180);
  let c = Math.cos(alpha*Math.PI/180);
  return fc0d/(fc0d/(kc90*fc90d)*(s)**2+(c)**2);
}
function calc_an(nd, fcAd){
  return nd / fcAd;
}
function calc_sigmacAd(nd, b, h1, alpha){
  return (nd * Math.cos(alpha*Math.PI/180)) / (b*h1);
}
function calc_sigmaCompare(sigmacAd, fcAd){
  return sigmacAd / fcAd;
}
function calc_l1v(h1, alpha){
  return h1 * Math.tan(alpha*Math.PI/180);
}
function calc_av(nd, fvd, alpha){
  return nd * Math.cos(alpha*Math.PI/180) / fvd;
}
function calc_lv(av, b){
  return av / b;
}
function calc_l2v1(lv, l1v){
  return lv-l1v;
}
function calc_tauRd(nd, av, alpha){
  let x=(alpha*Math.PI/180);
  return nd * Math.cos(x) / av;
}
function calc_tauEd(nd, b, l2v, l1v, alpha){
  let x=(alpha*Math.PI/180);
  return ((nd* (Math.cos(x)))/ (b * (l2v + l1v)));
}
function calc_tauCompare(tauEd, tauRd){
  return tauEd / tauRd;
}
function calc_asmin(nd, fub, alpha){
  let x = 60 - alpha;
  return (1.25 * nd * Math.tan(x*Math.PI/180))/(0.9 * fub);
}
function calc_ntd(nd, alpha){
  return nd * Math.cos(alpha*Math.PI/180);
}
function calc_h2(h, h1){
  return h - h1;
}
function calc_an1(h2, b){
  return h2 * ((b - 45));
}
function calc_e(h, h2){
  return (h - h2) / 2;
}
function calc_m(ntd, e){
  return ntd * e;
}
function calc_sigmat(ntd, an1){
  return ntd / an1;
}
function calc_wy(b, h2){
  return ((b-45)*h2**2)/6;
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
const calculate_button = document.getElementById("calculate");

// check if forms are filled
function areFormsFilled(){
  if (nd_element.value && alpha_element.value && b_element.value && h_element.value){
    calculate_button.disabled = false;
  }
  else {
    calculate_button.disabled = true;
  }
}

nd_element.onkeyup = areFormsFilled;
alpha_element.onkeyup = areFormsFilled;
b_element.onkeyup = areFormsFilled;
h_element.onkeyup = areFormsFilled;

let nd_value = 0;
let alpha_value = 0;
let b_value = 0;
let h_value = 0;
let h1_value = 0;
// let s_value = 40;
let kc90_value = 1;
let l2v_value = 0;

let [fmd_result, ft0d_result, fvd_result, fc90d_result, fc0d_result, fcAd_result, an_result, sigmacAd_result, sigmaCompare_result, l1v_result, av_result, lv_result, l2v1_result, tauRd_result, tauEd_result, tauCompare_result, asmin_result, ntd_result, h2_result, an1_result, e_result, m_result, sigmat_result, wy_result, sigmam_result, condition_result] = Array(26).fill(0);
let condition_literal = "";

// all hint <p>
const hint_elements = document.querySelectorAll(".hint");

calculate_button.addEventListener('click', () => {
  nd_value = parseFloat(nd_element.value);
  alpha_value = parseFloat(alpha_element.value);
  b_value = parseFloat(b_element.value);
  h_value = parseFloat(h_element.value);
  h1_value = Math.floor(parseFloat(h_element.value) / 3);
  
  fmd_result = calc_fmd(fmk_value, kmod_value);
  ft0d_result = calc_ft0d(ft0k_value, kmod_value);
  fvd_result = calc_fvd(fvk_value, kmod_value);  
  fc90d_result = calc_fc90d(fc90k_value, kmod_value);
  fc0d_result = calc_fc0d(fc0k_value, kmod_value);
  fcAd_result = calc_fcAd(fc0d_result, kc90_value, fc90d_result, alpha_value);
  an_result = calc_an(nd_value, fcAd_result);
  // s_value = an_result / b_value;
  sigmacAd_result = calc_sigmacAd(nd_value, b_value, h1_value, alpha_value);
  sigmaCompare_result = calc_sigmaCompare(sigmacAd_result, fcAd_result);
  l1v_result = calc_l1v(h1_value, alpha_value);
  av_result = calc_av(nd_value, fvd_result, alpha_value);
  lv_result = calc_lv(av_result, b_value);
  l2v1_result = calc_l2v1(lv_result, l1v_result);
  l2v_value = Math.ceil(l2v1_result/50)*50;
  tauRd_result = calc_tauRd(nd_value, av_result, alpha_value);
  tauEd_result = calc_tauEd(nd_value, b_value, l2v_value, l1v_result, alpha_value);
  tauCompare_result = calc_tauCompare(tauEd_result, tauRd_result);
  asmin_result = calc_asmin(nd_value, fub_value, alpha_value);
  ntd_result = calc_ntd(nd_value, alpha_value);
  h2_result = calc_h2(h_value, h1_value);
  an1_result = calc_an1(h2_result, b_value);
  e_result = calc_e(h_value, h2_result);
  m_result = calc_m(ntd_result, e_result);
  sigmat_result = calc_sigmat(ntd_result, an1_result);
  wy_result = calc_wy(b_value, h2_result);
  sigmam_result = calc_sigmam(m_result, wy_result);
  condition_result = calc_condition(sigmat_result, ft0d_result, sigmam_result, fmd_result);
  condition_literal = condition_result < 1 ? "Warunek spełniony!" : "Warunek nie został spełniony!"

  hint_elements.forEach(el => {el.hidden=false});
  update_latex();
})

// calculation
const latex_fmd_element = document.getElementById("latex_fmd");
const latex_ft0d_element = document.getElementById("latex_ft0d");
const latex_fvd_element = document.getElementById("latex_fvd");
const latex_fc90d_element = document.getElementById("latex_fc90d");
const latex_fc0d_element = document.getElementById("latex_fc0d");
// nośność na docisk
const latex_fcAd_element = document.getElementById("latex_fcAd");
const latex_an_element = document.getElementById("latex_an");
const latex_h1_element = document.getElementById("latex_h1");
// Warunek nośności na docisk
const latex_sigmacAd_element = document.getElementById("latex_sigmacAd");
const latex_sigmaCompare_element = document.getElementById("latex_sigmaCompare");

// Nośność na ścinanie
const latex_l1v_element = document.getElementById("latex_l1v");
const latex_av_element = document.getElementById("latex_av");
const latex_lv_element = document.getElementById("latex_lv");
const latex_l2v1_element = document.getElementById("latex_l2v1");

// Warunek nośności na ścinanie
const latex_tauRd_element = document.getElementById("latex_tauRd");
const latex_tauEd_element = document.getElementById("latex_tauEd");
const latex_tauCompare_element = document.getElementById("latex_tauCompare");
// Minimalna wymagana powierzchnia śruby
const latex_asmin_element = document.getElementById("latex_asmin");
const latex_ntd_element = document.getElementById("latex_ntd");
const latex_h2_element = document.getElementById("latex_h2");
const latex_an1_element = document.getElementById("latex_an1");
const latex_e_element = document.getElementById("latex_e");
const latex_m_element = document.getElementById("latex_m");
const latex_sigmat_element = document.getElementById("latex_sigmat");
const latex_wy_element = document.getElementById("latex_wy");
const latex_sigmam_element = document.getElementById("latex_sigmam");
// Warunek nośności
const latex_condition_element = document.getElementById("latex_condition");
const latex_condition_literal_element = document.getElementById("latex_condition_literal");

function update_latex() {
  // calculation
  latex_fmd_element.innerHTML = "$$ f_{m,d}=\\frac{f_{m,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fmk_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fmd_result.toFixed(2) + "}  $$";

  latex_ft0d_element.innerHTML = "$$ f_{t,0,d}=\\frac{f_{t,0,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + ft0k_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + ft0d_result.toFixed(2) + "} $$";
 
  latex_fvd_element.innerHTML = "$$ f_{v,d}=\\frac{f_{v,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fvk_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fvd_result.toFixed(2) + "} $$";
 
  latex_fc90d_element.innerHTML = "$$ f_{c,90,d}=\\frac{f_{c,90,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fc90k_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fc90d_result.toFixed(2) + "} $$";
 
  latex_fc0d_element.innerHTML = "$$ f_{c,0,d}=\\frac{f_{c,0,k}*k_{mod}}{\\displaystyle{1.3}} = \\frac{" + fc0k_value + " * " + kmod_value +"}{\\displaystyle{" + 1.3 + "} } = {" + fc0d_result.toFixed(2) + "} $$";

  // nośność na docisk
  latex_fcAd_element.innerHTML = "$$ f_{c,\\alpha,d}=\\frac{f_{c,0,d}}{\\displaystyle\\frac{f_{c,0,d}}{k_{c,90}*f_{c,90,d}}*(\\sin(\\alpha))^2+(\\cos(\\alpha))^2} = \\frac{"+fc0d_result.toFixed(2)+"}{\\displaystyle({"+fc0d_result.toFixed(2)+"}/({"+kc90_value+"}*{"+fc90d_result.toFixed(2)+"}))*(\\sin("+alpha_value+"))^2+(\\cos("+alpha_value+"))^2}= {" + fcAd_result.toFixed(2) + "} $$";

  latex_an_element.innerHTML = "$$ A_{n}=\\frac{N_{d}} {\\displaystyle f_{c,\\alpha,d}} = \\frac{" + nd_value +"} {\\displaystyle {" + fcAd_result.toFixed(2) + "}} = {" + an_result.toFixed(2) + "} $$";

  latex_h1_element.innerHTML = "$$ h_1 ≤ ⌊h/3⌋ ⟹ h_1 = {" + h1_value + "} $$";

  // Warunek nośności na docisk
  latex_sigmacAd_element.innerHTML = "$$ \\sigma_{c,\\alpha,d}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {b*s}} =\\frac{" + nd_value + "*cos(" + alpha_value + ")} {\\displaystyle {" + b_value + "* " + h1_value + "}} = {" + sigmacAd_result.toFixed(2) + "}$$";

  latex_sigmaCompare_element.innerHTML = "$$ \\frac{\\sigma_{c,\\alpha,d}} {\\displaystyle {f_{c,\\alpha,d}}} = \\frac{" + sigmacAd_result.toFixed(2) + "} {\\displaystyle {" + fcAd_result.toFixed(2) + "}} ={" + sigmaCompare_result.toFixed(2) + "}$$";

// Nośność na ścinanie
  latex_l1v_element.innerHTML = "$$ l_{1,v}={h_1*tg(\\alpha)} = {" + h1_value + "*tg(" + alpha_value + ")} = {"+ l1v_result.toFixed(2) + "} $$";

  latex_av_element.innerHTML = "$$ A_{v}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {f_{v,d}}} = \\frac{"+ nd_value + "*cos("+ alpha_value+")} {\\displaystyle {"+fvd_result.toFixed(2)+"}} = {"+ av_result.toFixed(2) + "} $$";

  latex_lv_element.innerHTML = "$$ l_{v}=\\frac{A_{v}} {\\displaystyle {b}} = \\frac{"+av_result.toFixed(2)+"} {\\displaystyle {"+b_value+"}} = {"+ lv_result.toFixed(2) + "} $$";

  latex_l2v1_element.innerHTML = "$$ l_{2,v'}={l_{v}-l_{1,v}} = {"+lv_result.toFixed(2)+"-"+l1v_result.toFixed(2)+"} = {"+ l2v1_result.toFixed(2) + "} ⟹ l_{2,v} = {" + l2v_value + "} $$";

// Warunek nośności na ścinanie
  latex_tauRd_element.innerHTML = "$$ \\tau_{Rd}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {A_{v}}} = \\frac{"+nd_value+"*cos("+alpha_value+")} {\\displaystyle {"+av_result.toFixed(2)+"}} = {"+ tauRd_result.toFixed(2) + "}  $$";

  latex_tauEd_element.innerHTML = "$$ \\tau_{Ed}= \\frac{N_{d}*cos(\\alpha)} {\\displaystyle{b*(l_{2,v}+l_{1,v})}} = \\frac{"+nd_value+"*cos("+alpha_value+")} {\\displaystyle{"+b_value+"*("+l2v_value+"+"+l1v_result.toFixed(2)+")}} = {"+ tauEd_result.toFixed(2) + "}  $$";

  latex_tauCompare_element.innerHTML = "$$ \\frac{\\tau_{Ed}} {\\displaystyle {\\tau_{Rd}}} = \\frac{"+tauEd_result.toFixed(2)+"} {\\displaystyle {"+tauRd_result.toFixed(2)+"}} = {"+ tauCompare_result.toFixed(2) + "}  $$";

// Minimalna wymagana powierzchnia śruby

  latex_asmin_element.innerHTML = "$$ A_{s,min}=\\frac{1.25*N_{d}*tg(60^{\\circ} -\\alpha)} {\\displaystyle {0.9*f_{ub}}} = \\frac{1.25*"+nd_value+"*tg(60^{\\circ} - "+alpha_value+")} {\\displaystyle {0.9*"+fub_value+"}} ={" + asmin_result.toFixed(2) + "} $$";

  latex_ntd_element.innerHTML ="$$ N_{t,d}= {N_{d}*cos(\\alpha)} = {"+nd_value+"*cos("+alpha_value+")} = {"+ ntd_result.toFixed(2) + "}  $$";

  latex_h2_element.innerHTML ="$$ h_{2}= {h-s} = {"+h_value+"-"+h1_value+"} = {"+ h2_result.toFixed(2) + "}  $$";

  latex_an1_element.innerHTML ="$$ A_{n'}= {h_{2}*(b-45mm)} = {"+h2_result.toFixed(2)+"*("+b_value+"-45)} = {"+ an1_result.toFixed(2) + "}  $$";

  latex_e_element.innerHTML = "$$ e'=\\frac{h-h_{2}} {\\displaystyle {2}} =\\frac{"+ h_value + "-"+ h2_result.toFixed(2) + "} {\\displaystyle {2}} = {"+ e_result.toFixed(2) + "}  $$";

  latex_m_element.innerHTML = "$$ M={N_{t,d}*e'}  = {"+ntd_result.toFixed(2)+"*"+e_result.toFixed(2)+"}= {"+ m_result.toFixed(2) + "}  $$";

  latex_sigmat_element.innerHTML = "$$ \\sigma_{t}=\\frac{N_{t,d}} {\\displaystyle A_{n'}} = \\frac{"+ntd_result.toFixed(2)+"} {\\displaystyle {"+an1_result.toFixed(2)+"}} = {"+ sigmat_result.toFixed(2) + "}  $$";

  latex_wy_element.innerHTML = "$$ Wy=\\frac{(b-45mm)*h_{2}^2} {\\displaystyle 6} = \\frac{("+ b_value + "-45)*"+ h2_result.toFixed(2) + "^2} {\\displaystyle 6}= {"+ wy_result.toFixed(2) + "}  $$";

  latex_sigmam_element.innerHTML = "$$ \\sigma_{m}=\\frac{M} {\\displaystyle W_{y}} = \\frac{"+m_result.toFixed(2)+"} {\\displaystyle {"+wy_result.toFixed(2)+"}} = {"+ sigmam_result.toFixed(2) + "}  $$";

// Warunek nośności
  latex_condition_element.innerHTML = "$$ \\frac{\\sigma_{t}} {\\displaystyle f_{t,0,d}} + \\frac{\\sigma_{m}} {\\displaystyle f_{m,d}} = \\frac{"+sigmat_result.toFixed(2)+"} {\\displaystyle "+ft0d_result.toFixed(2)+"} + \\frac{"+sigmam_result.toFixed(2)+"} {\\displaystyle "+fmd_result.toFixed(2)+"} = {"+ condition_result.toFixed(2) + "} < 1 $$ ";
  
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