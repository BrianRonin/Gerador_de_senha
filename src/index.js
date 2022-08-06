import "./assets/css/style.css";
import GeraSenha from "./modules/GeraSenha";
const output = document.getElementById("output-senha");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const quantidade = document.getElementById("n-char");
  const number = document.getElementById("add-number");
  const Lma = document.getElementById("add-Lma");
  const Lmi = document.getElementById("add-Lmi");
  const symbol = document.getElementById("add-Symbol");

  const senha = new GeraSenha(
    quantidade.value,
    number.checked,
    Lma.checked,
    Lmi.checked,
    symbol.checked
  );
  console.log(senha.start);
  output.value = senha.start;
});
