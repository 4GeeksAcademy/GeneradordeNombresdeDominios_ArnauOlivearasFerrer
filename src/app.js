/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let Pronoun = ["the", "our"];
  let Adj = ["great", "big"];
  let Noun = ["jogger", "racoon"];
  let Exten = [".com", ".es"];
  let allDomains = [];

  for (let pronoun of Pronoun) {
    for (let adj of Adj) {
      for (let noun of Noun) {
        for (let exten of Exten) {
          let domain = `${pronoun}${adj}${noun}${exten}`;
          allDomains.push(domain);
        }
      }
    }
  }
  for (let domain of allDomains) {
    console.log(domain);
  }
};
