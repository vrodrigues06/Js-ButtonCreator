const controles = document.forms.controles;
const css = document.querySelector(".css");
const btn = document.querySelector(".btn");

const handleStyle = {
  element: btn,
  texto(valor) {
    btn.innerText = valor;
  },
  color(valor) {
    btn.style.color = valor;
  },
  backgroundColor(valor) {
    btn.style.backgroundColor = valor;
  },
  height(valor) {
    btn.style.height = valor + "px";
  },
  width(valor) {
    btn.style.width = valor + "px";
  },
  border(valor) {
    btn.style.border = valor;
  },
  borderRadius(valor) {
    btn.style.borderRadius = valor + "px";
  },
  fontSize(valor) {
    btn.style.fontSize = valor + "px";
  },
  fontFamily(valor) {
    btn.style.fontFamily = valor;
  },
  fontWeight(valor) {
    btn.style.fontWeight = valor;
  },
};
function handleChange(event) {
  const target = event.target;
  const name = target.name;
  const valor = target.value;
  handleStyle[name](valor);
  saveValues(name, valor);
  showCss();
}
controles.addEventListener("change", handleChange);

function showCss() {
  css.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";<span></span>");
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);

    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

setValues();
