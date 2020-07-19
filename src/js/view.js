const overlay = document.getElementById("overlay");
const popupPaentDiv = document.getElementById("popupPaentDiv");
const fakeBody = document.getElementsByTagName("body");
const body = fakeBody[0];

function addStyleToDiv(divName) {
    divName.classList.add("eachCountryDivElement");
    divName.style.width = "19%";
    divName.style.boxShadow = "0 0 2px black";
    divName.style.borderRadius = "3px";
    divName.style.margin = "0 10px 10px 0";
    divName.style.padding = "20px";
    divName.style.textAlign = "center";
    divName.style.backgroundColor = "white";
    divName.style.cursor = "pointer";
}

function createAllCountriesElements(EachCountry) {
    const {
        name
    } = EachCountry; 
    const each_countryElement = document.createElement("div");
    addStyleToDiv(each_countryElement);
        const pTag = document.createElement("p");
        pTag.innerText = EachCountry["name"];
        each_countryElement.appendChild(pTag);

    return each_countryElement;
}

class View {
    constructor() {
        this.app = document.getElementById("app");
        this.app.style.display = "flex";
        this.app.style.padding = "10px";
        this.app.style.flexWrap = "wrap";
        this.app.style.justifyContent = "center";
    }
    
    displayDetails = data => {
        this.needCountries = data;
        return this.needCountries;
    }
    displayAllcountries = allcountries => {
        allcountries.forEach(each_country => {
            const each_countryElement = createAllCountriesElements(each_country);
            each_countryElement.addEventListener("click", () => {
                    this.onClickDetails(each_country);
                    const details = this.needCountries.details;
                    

                    overlay.style.display = "block";
                    // Popup Div
                    const popup = document.createElement("div");
                    changePopupStyle(popup);

                    //Content Div
                    const content = document.createElement("div");
                    changeContentStyle(content)

                    //Content p tag 
                    for (let key in details) {
                        const keyWord = key;
                        switch (key) {
                            case "capital":
                                key = "Capital";
                                break;
                            case "altSpellings":
                                key = "Spellings";
                                break;
                            case "area":
                                key = "Area";
                                break;
                            case "borders":
                                key = "Borders";
                                break;
                            case "currencies":
                                key = "Currencies";
                                break;
                            case "nativeName":
                                key = "Native Name";
                                
                                break;
                            case "population":
                                key = "Population";
                                
                                break;
                            case "region":
                                key = "Region";
                                
                                break;
                        
                            default:
                                key = "Timezones"
                                break;
                        }
                        const divTagInContent = document.createElement("div");
                        divTagInContent.style.display = "flex";
                        divTagInContent.style.padding = "8px";
                        divTagInContent.style.marginBottom = "19px";
                        divTagInContent.style.wordBreak = "break-all";


                        const thisDataInPKey = document.createElement("p");
                        thisDataInPKey.style.width = "30%";
                        thisDataInPKey.style.color = "white";


                        const thisDataInPValue = document.createElement("p");
                        thisDataInPValue.style.width = "70%";
                        thisDataInPValue.style.color = "white";
                        thisDataInPKey.innerHTML = key;
                        thisDataInPValue.innerHTML = details[keyWord];
                        divTagInContent.appendChild(thisDataInPKey);
                        divTagInContent.appendChild(thisDataInPValue);
                        content.appendChild(divTagInContent);
                    }
                    

                    //Header Div
                    const header = document.createElement("div");
                    changeHeaderStyle(header)

                    //header p tag 
                    const countryName = document.createElement("span");  
                    changeCountryNamePTag(countryName)
                    

                    // Close Button Div
                    const closeButton = document.createElement("span");
                    closeButtonStyle(closeButton);

                    header.appendChild(closeButton);
                    header.appendChild(countryName);
                    popup.appendChild(header);
                    popup.appendChild(content);
                    popupPaentDiv.appendChild(popup);
                    
                    const popupDiv = closeButton.parentNode.parentNode;

                    closeButton.addEventListener("click", () => {
                        overlay.style.display = "none";
                        popupPaentDiv.innerHTML = "";
                    })
                    
                })


                function closeButtonStyle(buttonStyle) {
                    buttonStyle.innerHTML = "X";
                    buttonStyle.style.display = "flex";
                    buttonStyle.style.alignItems = "center";
                    buttonStyle.style.justifyContent = "center";
                    buttonStyle.style.height = "20px";
                    buttonStyle.style.width = "20px"
                    buttonStyle.style.borderRadius = "3px";
                    buttonStyle.style.backgroundColor = "red";
                    buttonStyle.style.color = "white";
                    buttonStyle.style.fontSize = "14px";
                    buttonStyle.style.position = "absolute";
                    buttonStyle.style.right = "9px";
                    buttonStyle.style.top = "5px";
                    buttonStyle.style.verticalAlign = "baseline";
                    buttonStyle.style.cursor = "pointer";
                }
                function changeCountryNamePTag(countryNameStyle) {
                    countryNameStyle.innerHTML = each_country.name;
                    countryNameStyle.style.fontWeight = "bold";
                    countryNameStyle.style.color = "white";
                    // countryNameStyle.style.textAlign = "center";
                    countryNameStyle.style.fontSize = "25px";
                    countryNameStyle.style.borderBottom = "1px solid white";
                }

                function changePopupStyle(popupStyle) {
                    popupStyle.style.width = "80%";
                    popupStyle.style.height = "500px";
                    popupStyle.style.backgroundColor = "#1e3c46";
                    popupStyle.style.boxShadow = "0 0 15px black";
                    popupStyle.style.opacity = "0.9";
                    popupStyle.style.position = "fixed";
                    popupStyle.style.left = "0";
                    popupStyle.style.right = "0";
                    popupStyle.style.top = "0";
                    popupStyle.style.bottom = "0";
                    popupStyle.style.margin = "auto";
                    popupStyle.style.overflow = "auto";
                    popupStyle.style.scrollbar = "auto";
                }


                function changeContentStyle(contentStyle) {
                    contentStyle.style.height = "calc(100% - 30px)";
                    contentStyle.style.textAlign = "center";


                }

                function changeHeaderStyle(headerStyle) {
                    headerStyle.style.position = "relative";
                    headerStyle.style.marginBottom = "10px";
                    headerStyle.style.padding = "5px";
                    headerStyle.style.textAlign = "center";
                }


            this.app.appendChild(each_countryElement);
        });
    };

 
    bindOnClickDetails(cb) {
        this.onClickDetails = cb;
    }
}
