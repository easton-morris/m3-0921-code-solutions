import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const details = [
  {
    id: 1,
    breed: 'German Shepherd Dog',
    dogHist: 'The German Shepherd Dog (Deutshe Schäferhund) descends from the family of German herding dogs that, until the late 19th century, varied in type from district to district. In the waning years of the 1800s, a German cavalry officer, Captain Max…'
  },
  {
    id: 2,
    breed: 'Belgian Malinois',
    dogHist: 'The Belgian Malinois (MAL-in-wah), first bred around the city of Malines in the northwestern region of Belgium, are one of four closely related breeds of Belgian herding dogs. In some countries, the Malinois is classified together with the Tervuren, Laekenois,…'
  },
  {
    id: 3,
    breed: 'Belgian Sheepdog',
    dogHist: 'Belgium’s climate and terrain are highly favorable for livestock and dairy farming, and the small but industrious country has always been self-sufficient in these commodities. Belgium has long been the world’s leading exporter of milk chocolate, a key component to…'
  }
];

ReactDOM.render(
  <Accordion details={details} />,
  document.getElementById('root')
);
