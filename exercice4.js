// Afficher un objet contenant les prix de la commune 91425
import fetch from "node-fetch";

const url =
  "https://www.immobilier.notaires.fr/pub-services/immodecret-stat1/v1/indicateurs?typeBien=AMA&nivGeo=COMMUNE&codeInsee=91425";

const getCommunePrices = () => {
  const response = fetch(url, {
    headers: {
      Referer: "https://www.immobilier.notaires.fr/",
    },
  });
  const data = response.json();
  console.log(data);
};

getCommunePrices();
