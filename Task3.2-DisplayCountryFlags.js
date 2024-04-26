 const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function() {
  if (xhr.status === 200) {
    const countries = JSON.parse(xhr.responseText);
    countries.forEach(country => {
      imageURL =  country.flags.svg;
      var showImage = document.createElement('img');
      showImage.src = imageURL;
      document.body.appendChild(showImage);
    });
  } else {
    console.error('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();