/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Pronoun = ["the", "our"];
let Adj = ["great", "big"];
let Noun = ["jogger", "racoon"];
let Exten = [".com", ".es"];

window.onload = function() {
  let l_AllDomains = GetAllDomains(Pronoun, Adj, Noun, Exten);

  for (let domain of l_AllDomains) {
    console.log(domain);
  }
};

function GetAllDomains(_Pronoun, _Adj, _Noun, _Exten) {
  let l_allDomains = [];
  for (let pronoun of _Pronoun) {
    for (let adj of _Adj) {
      for (let noun of _Noun) {
        for (let exten of _Exten) {
          let domain = `${pronoun}${adj}${noun}${exten}`;
          l_allDomains.push(domain);
        }
      }
    }
  }
  return l_allDomains;
}
