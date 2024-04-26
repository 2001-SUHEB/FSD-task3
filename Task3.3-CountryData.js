const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function() {
  if (xhr.status === 200) {
    const countries = JSON.parse(xhr.responseText);
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log('------------------------');

      var paragraph = document.createElement('p');
       paragraph.innerText = `${country.name.common} ${country.region} ${country.subregion} ${country.population}`
      document.body.appendChild(paragraph);
    });
  } else {
    console.error('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();