import { Component } from '@angular/core';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'country',
  optionTextField: 'region'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerPinTest';
  customerSection: boolean= true;
  pinSection: boolean = false;
  gridSection: boolean = false;
  customerData: any;
  custList: any=[];
  coutryArr: string[] = [];
  newArr: any=[];
  temparr: any[] = [];
  regionList: any[] = []

  /*Customer Object*/ 
  customerObj={
    username: '',
    email: '',
    region: '',
    country: ''
  }
  /*Pin Object*/ 
  pinObj = {
    title: '',
    imageurl: '',
    collaborators: '',
    privacy: ''
  }
  /* Region JSON List */
  items=[
    {
      "status": "OK",
      "status-code": 200,
      "version": "1.0",
      "access": "public",
      "data": {
        "DZ": {
          "country": "Algeria",
          "region": "Africa"
        },
        "AO": {
          "country": "Angola",
          "region": "Africa"
        },
        "BJ": {
          "country": "Benin",
          "region": "Africa"
        },
        "BW": {
          "country": "Botswana",
          "region": "Africa"
        },
        "BF": {
          "country": "Burkina Faso",
          "region": "Africa"
        },
        "BI": {
          "country": "Burundi",
          "region": "Africa"
        },
        "CV": {
          "country": "Cabo Verde",
          "region": "Africa"
        },
        "CM": {
          "country": "Cameroon",
          "region": "Africa"
        },
        "CF": {
          "country": "Central African Republic (the)",
          "region": "Africa"
        },
        "TD": {
          "country": "Chad",
          "region": "Africa"
        },
        "KM": {
          "country": "Comoros (the)",
          "region": "Africa"
        },
        "CD": {
          "country": "Congo (the Democratic Republic of the)",
          "region": "Africa"
        },
        "CG": {
          "country": "Congo (the)",
          "region": "Africa"
        },
        "CI": {
          "country": "Côte d'Ivoire",
          "region": "Africa"
        },
        "DJ": {
          "country": "Djibouti",
          "region": "Africa"
        },
        "EG": {
          "country": "Egypt",
          "region": "Africa"
        },
        "GQ": {
          "country": "Equatorial Guinea",
          "region": "Africa"
        },
        "ER": {
          "country": "Eritrea",
          "region": "Africa"
        },
        "SZ": {
          "country": "Eswatini",
          "region": "Africa"
        },
        "ET": {
          "country": "Ethiopia",
          "region": "Africa"
        },
        "GA": {
          "country": "Gabon",
          "region": "Africa"
        },
        "GM": {
          "country": "Gambia (the)",
          "region": "Africa"
        },
        "GH": {
          "country": "Ghana",
          "region": "Africa"
        },
        "GN": {
          "country": "Guinea",
          "region": "Africa"
        },
        "GW": {
          "country": "Guinea-Bissau",
          "region": "Africa"
        },
        "KE": {
          "country": "Kenya",
          "region": "Africa"
        },
        "LS": {
          "country": "Lesotho",
          "region": "Africa"
        },
        "LR": {
          "country": "Liberia",
          "region": "Africa"
        },
        "LY": {
          "country": "Libya",
          "region": "Africa"
        },
        "MG": {
          "country": "Madagascar",
          "region": "Africa"
        },
        "MW": {
          "country": "Malawi",
          "region": "Africa"
        },
        "ML": {
          "country": "Mali",
          "region": "Africa"
        },
        "MR": {
          "country": "Mauritania",
          "region": "Africa"
        },
        "MU": {
          "country": "Mauritius",
          "region": "Africa"
        },
        "YT": {
          "country": "Mayotte",
          "region": "Africa"
        },
        "MA": {
          "country": "Morocco",
          "region": "Africa"
        },
        "MZ": {
          "country": "Mozambique",
          "region": "Africa"
        },
        "NA": {
          "country": "Namibia",
          "region": "Africa"
        },
        "NE": {
          "country": "Niger (the)",
          "region": "Africa"
        },
        "NG": {
          "country": "Nigeria",
          "region": "Africa"
        },
        "RE": {
          "country": "Réunion",
          "region": "Africa"
        },
        "RW": {
          "country": "Rwanda",
          "region": "Africa"
        },
        "SH": {
          "country": "Saint Helena, Ascension and Tristan da Cunha",
          "region": "Africa"
        },
        "ST": {
          "country": "Sao Tome and Principe",
          "region": "Africa"
        },
        "SN": {
          "country": "Senegal",
          "region": "Africa"
        },
        "SC": {
          "country": "Seychelles",
          "region": "Africa"
        },
        "SL": {
          "country": "Sierra Leone",
          "region": "Africa"
        },
        "SO": {
          "country": "Somalia",
          "region": "Africa"
        },
        "ZA": {
          "country": "South Africa",
          "region": "Africa"
        },
        "SS": {
          "country": "South Sudan",
          "region": "Africa"
        },
        "SD": {
          "country": "Sudan (the)",
          "region": "Africa"
        },
        "TZ": {
          "country": "Tanzania, the United Republic of",
          "region": "Africa"
        },
        "TG": {
          "country": "Togo",
          "region": "Africa"
        },
        "TN": {
          "country": "Tunisia",
          "region": "Africa"
        },
        "UG": {
          "country": "Uganda",
          "region": "Africa"
        },
        "EH": {
          "country": "Western Sahara*",
          "region": "Africa"
        },
        "ZM": {
          "country": "Zambia",
          "region": "Africa"
        },
        "ZW": {
          "country": "Zimbabwe",
          "region": "Africa"
        },
        "AQ": {
          "country": "Antarctica",
          "region": "Antarctic"
        },
        "BV": {
          "country": "Bouvet Island",
          "region": "Antarctic"
        },
        "TF": {
          "country": "French Southern Territories (the)",
          "region": "Antarctic"
        },
        "HM": {
          "country": "Heard Island and McDonald Islands",
          "region": "Antarctic"
        },
        "GS": {
          "country": "South Georgia and the South Sandwich Islands",
          "region": "Antarctic"
        },
        "AF": {
          "country": "Afghanistan",
          "region": "Asia"
        },
        "AM": {
          "country": "Armenia",
          "region": "Asia"
        },
        "AZ": {
          "country": "Azerbaijan",
          "region": "Asia"
        },
        "BD": {
          "country": "Bangladesh",
          "region": "Asia"
        },
        "BT": {
          "country": "Bhutan",
          "region": "Asia"
        },
        "IO": {
          "country": "British Indian Ocean Territory (the)",
          "region": "Asia"
        },
        "BN": {
          "country": "Brunei Darussalam",
          "region": "Asia"
        },
        "KH": {
          "country": "Cambodia",
          "region": "Asia"
        },
        "CN": {
          "country": "China",
          "region": "Asia"
        },
        "GE": {
          "country": "Georgia",
          "region": "Asia"
        },
        "HK": {
          "country": "Hong Kong",
          "region": "Asia"
        },
        "IN": {
          "country": "India",
          "region": "Asia"
        },
        "ID": {
          "country": "Indonesia",
          "region": "Asia"
        },
        "JP": {
          "country": "Japan",
          "region": "Asia"
        },
        "KZ": {
          "country": "Kazakhstan",
          "region": "Asia"
        },
        "KP": {
          "country": "Korea (the Democratic People's Republic of)",
          "region": "Asia"
        },
        "KR": {
          "country": "Korea (the Republic of)",
          "region": "Asia"
        },
        "KG": {
          "country": "Kyrgyzstan",
          "region": "Asia"
        },
        "LA": {
          "country": "Lao People's Democratic Republic (the)",
          "region": "Asia"
        },
        "MO": {
          "country": "Macao",
          "region": "Asia"
        },
        "MY": {
          "country": "Malaysia",
          "region": "Asia"
        },
        "MV": {
          "country": "Maldives",
          "region": "Asia"
        },
        "MN": {
          "country": "Mongolia",
          "region": "Asia"
        },
        "MM": {
          "country": "Myanmar",
          "region": "Asia"
        },
        "NP": {
          "country": "Nepal",
          "region": "Asia"
        },
        "PK": {
          "country": "Pakistan",
          "region": "Asia"
        },
        "PH": {
          "country": "Philippines (the)",
          "region": "Asia"
        },
        "SG": {
          "country": "Singapore",
          "region": "Asia"
        },
        "LK": {
          "country": "Sri Lanka",
          "region": "Asia"
        },
        "TW": {
          "country": "Taiwan (Province of China)",
          "region": "Asia"
        },
        "TJ": {
          "country": "Tajikistan",
          "region": "Asia"
        },
        "TH": {
          "country": "Thailand",
          "region": "Asia"
        },
        "TL": {
          "country": "Timor-Leste",
          "region": "Asia"
        },
        "TM": {
          "country": "Turkmenistan",
          "region": "Asia"
        },
        "UZ": {
          "country": "Uzbekistan",
          "region": "Asia"
        },
        "VN": {
          "country": "Viet Nam",
          "region": "Asia"
        },
        "BZ": {
          "country": "Belize",
          "region": "Central America"
        }
      }
    }
  ]
  
  ngOnInit() {
    this.newArr=Object.entries(this.items[0].data);
    for(let m of this.newArr){
      this.temparr.push(m[1])
    }
    const ids = this.temparr.map(({ region }) => region);
    this.regionList = this.temparr.filter(({ region }, index) =>
        !ids.includes(region, index + 1));
  }

  /* method for add customer */
  addCustomer() {
    this.pinSection=true;
    this.customerSection=false;
    localStorage.setItem("CustomerDetails", JSON.stringify(this.customerObj));
    this.customerData = JSON.parse(localStorage.getItem('CustomerDetails') || '{}');
    this.custList.push(this.customerData['username']);
  }
  
  /* change method for region dropdown*/
  selectionChanged(event: any) {
    this.customerObj.region=event[0].data.region;
    this.coutryArr = this.temparr.filter((item:any)=>item.region.toLowerCase() === event[0].data.region.toLowerCase());
  }

  /* change method for Country dropdown*/
  selectionCountryChanged(event: any) {
    this.customerObj.country=event[0].data.country;
  }
  
  /* method for add Pin */
  addpin() {
    this.pinSection=false;
    this.gridSection= true;
  }

  /* redirecting from grid */
  redirectHome() {
    this.customerSection= true;
    this.pinSection= false;
    this.gridSection= false;
    this.customerObj={
      username: '',
      email: '',
      region: '',
      country: ''
  
    }
    this.pinObj = {
      title: '',
      imageurl: '',
      collaborators: '',
      privacy: ''
    }
  }

  /* redirecting from Pin */
  redirectCust() {
    this.customerSection= true;
    this.pinSection= false;
    this.gridSection= false;
    this.customerObj={
      username: '',
      email: '',
      region: '',
      country: ''
  
    }
    this.pinObj = {
      title: '',
      imageurl: '',
      collaborators: '',
      privacy: ''
    }
  }
  
}
