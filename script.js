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
