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
    fvt90k: 0.5,
    fc0k: 18,
    fc90k: 2.2,
    fvk: 2.0,
  },
  C20: {
    fmk: 20,
    ft0k: 12,
    fvt90k: 0.5,
    fc0k: 19,
    fc90k: 2.3,
    fvk: 2.2,
  },
  C22: {
    fmk: 22,
    ft0k: 13,
    fvt90k: 0.5,
    fc0k: 20,
    fc90k: 2.4,
    fvk: 2.4,
  },
  C24: {
    fmk: 24,
    ft0k: 14,
    fvt90k: 0.5,
    fc0k: 21,
    fc90k: 2.5,
    fvk: 2.5,
  },
  C27: {
    fmk: 27,
    ft0k: 16,
    fvt90k: 0.6,
    fc0k: 22,
    fc90k: 2.6,
    fvk: 2.8,
  },
  C30: {
    fmk: 30,
    ft0k: 18,
    fvt90k: 0.6,
    fc0k: 23,
    fc90k: 2.7,
    fvk: 3.0,
  },
  C35: {
    fmk: 35,
    ft0k: 21,
    fvt90k: 0.6,
    fc0k: 25,
    fc90k: 2.8,
    fvk: 3.4,
  },
  C40: {
    fmk: 40,
    ft0k: 24,
    fvt90k: 0.6,
    fc0k: 26,
    fc90k: 2.9,
    fvk: 3.8,
  },
  C45: {
    fmk: 45,
    ft0k: 27,
    fvt90k: 0.6,
    fc0k: 27,
    fc90k: 3.1,
    fvk: 3.8,
  },
  C50: {
    fmk: 50,
    ft0k: 30,
    fvt90k: 0.6,
    fc0k: 29,
    fc90k: 3.2,
    fvk: 3.8,
  },
};

const fmk_value = document.getElementById("fmk");
const ft0k_value = document.getElementById("ft0k");
const fvt90k_value = document.getElementById("fvt90k");
const fc0k_value = document.getElementById("fc0k");
const fc90k_value = document.getElementById("fc90k");
const fvk_value = document.getElementById("fvk");

function listQ() {
  fmk_value.textContent = woodclasses[this.value].fmk;
  ft0k_value.textContent = woodclasses[this.value].ft0k;
  fvt90k_value.textContent = woodclasses[this.value].fvt90k;
  fc0k_value.textContent = woodclasses[this.value].fc0k;
  fc90k_value.textContent = woodclasses[this.value].fc90k;
  fvk_value.textContent = woodclasses[this.value].fvk;
}
document.getElementById("wood").onchange = listQ;

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

const kmod_value = document.getElementById("kmod_value");
const element_usability = document.getElementById("usability");
const element_durability = document.getElementById("durability");

function kmod_listQ() {
  let usability = element_usability.value;
  let durability = element_durability.value;
  kmod_value.textContent = kmodclass[usability][durability];
}
element_usability.onchange = kmod_listQ;
element_durability.onchange = kmod_listQ;


const element_fmd = document.getElementById("fmd");



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
var a = MathJax.tex2chtml(
  "f_{m,d}=\\frac{f_{m,k}*k_{mod}}{\\displaystyle{1.3}} = "
);

var div = document.createElement("div");
div.appendChild(a);
document.body.appendChild(div);

// ft0d
var b = MathJax.tex2chtml(
  "f_{t,0,d}=\\frac{f_{t,0,k}*k_{mod}}{\\displaystyle{1.3}} = "
);

var div = document.createElement("div");
div.appendChild(b);
document.body.appendChild(div);

// fvd
var c = MathJax.tex2chtml(
  "f_{v,d}=\\frac{f_{v,k}*k_{mod}}{\\displaystyle{1.3}} = "
);

var div = document.createElement("div");
div.appendChild(c);
document.body.appendChild(div);

// fc90d
var d = MathJax.tex2chtml(
  "f_{c,90,d}=\\frac{f_{c,90,k}*k_{mod}}{\\displaystyle{1.3}} = "
);

var div = document.createElement("div");
div.appendChild(d);
document.body.appendChild(div);

// fc0d
var e = MathJax.tex2chtml(
  "f_{c,0,d}=\\frac{f_{c,0,k}*k_{mod}}{\\displaystyle{1.3}} = "
);

var div = document.createElement("div");
div.appendChild(e);
document.body.appendChild(div);

// fcAd
var f = MathJax.tex2chtml(
  "f_{c,\\alpha,d}=\\frac{f_{c,0,d}}{\\displaystyle\\frac{f_{c,0,d}}{k_{c,90}*f_{c,90,d}}*(\\sin(\\alpha))^2+(\\cos(\\alpha))^2} = "
  );

var div = document.createElement("div");
div.appendChild(f);
document.body.appendChild(div);

// An
var g = MathJax.tex2chtml(
  "A_{n}=\\frac{N_{d}} {\\displaystyle f_{c,\\alpha,d}} = "
  );

var div = document.createElement("div");
div.appendChild(g);
document.body.appendChild(div);

// Sigma
var h = MathJax.tex2chtml(
  "\\sigma_{c,\\alpha,d}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {b*s}} = "
  );

var div = document.createElement("div");
div.appendChild(h);
document.body.appendChild(div);

// Sigma_porownanie
var i = MathJax.tex2chtml(
  "\\frac{\\sigma_{c,\\alpha,d}} {\\displaystyle {f_{c,\\alpha,d}}} = "
  );

var div = document.createElement("div");
div.appendChild(i);
document.body.appendChild(div);

//l1v
var j = MathJax.tex2chtml(
  "l_{1,v}={s*tg(\\alpha)} = "
  );

var div = document.createElement("div");
div.appendChild(j);
document.body.appendChild(div);

// Av
var k = MathJax.tex2chtml(
  "A_{v}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {f_{v,d}}} = "
  );

var div = document.createElement("div");
div.appendChild(k);
document.body.appendChild(div);

// lv
var l = MathJax.tex2chtml(
  "l_{v}=\\frac{A_{v}} {\\displaystyle {b}} = "
  );

var div = document.createElement("div");
div.appendChild(l);
document.body.appendChild(div);

//l2v'
var m = MathJax.tex2chtml(
  "l_{2,v'}={l_{v}-l_{1,v}} = "
  );

var div = document.createElement("div");
div.appendChild(m);
document.body.appendChild(div);

//tauRd
var n = MathJax.tex2chtml(
  "\\tau_{Rd}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle {A_{v}}} = "
  );

var div = document.createElement("div");
div.appendChild(n);
document.body.appendChild(div);

//tauEd
var o = MathJax.tex2chtml(
  "\\tau_{Ed}=\\frac{N_{d}*cos(\\alpha)} {\\displaystyle{b*(l_{2,v}+l_{1,v})}} = "
  );

var div = document.createElement("div");
div.appendChild(o);
document.body.appendChild(div);

//tauEd/tauRd
var o = MathJax.tex2chtml(
  "\\frac{\\tau_{Ed}} {\\displaystyle {\\tau_{Rd}}} = "
  );

var div = document.createElement("div");
div.appendChild(o);
document.body.appendChild(div);








