function getAllCountries(url) {
  return (
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "91e9e9aca4msh2d94b8f48c5cd54p1e5a8cjsn71925e54abb6"
      }
    })
    .then(res => res.json())
    .then(allcountries => allcountries)
  );
}

class Model {
  constructor() {
    this.allcountries = [];
  }

  init() {
    getAllCountries("https://restcountries-v1.p.rapidapi.com/all").then(
      allcountries => this.ModeltoView(allcountries)
    );
  }

  // private only for model
  ModeltoView(allcountries) {
    //  changing countries
    this.allcountries = allcountries;
    this.onModeltoView(this.allcountries);
  }

  
  showDetails({capital,altSpellings,area,borders,currencies,nativeName,population,region,timezones }) {
    const details = {
      capital,
      altSpellings,
      area,
      borders,
      currencies,
      nativeName,
      population,
      region,
      timezones,
     };
    this.onShowDetails({
      name,
      capital, 
      details
    });
  }
  
  bindOnModeltoView(cb) {
    this.onModeltoView = cb;
  }

  bindOnShowDetails(cb) {
    this.onShowDetails = cb; 
  }
}
