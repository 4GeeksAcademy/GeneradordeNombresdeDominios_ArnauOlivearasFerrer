/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extensions = [".com", ".es"];

window.onload = function() {
  const allDomains = generateDomains(pronouns, adjectives, nouns, extensions);
  displayDomains(allDomains);
  allDomains.forEach(domain => console.log(domain));
};

function generateDomains(pronouns, adjectives, nouns, extensions) {
  const domains = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          domains.push(`${pronoun}${adjective}${noun}${extension}`);
        }
      }
    }
  }
  return domains;
}

function displayDomains(domains) {
  const ul = document.getElementById("domain-list");
  domains.forEach(domain => {
    const li = document.createElement("li");
    li.textContent = domain;
    ul.appendChild(li);
  });
}
