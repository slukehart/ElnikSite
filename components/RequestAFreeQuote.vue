<script setup lang="ts">
import { useRoute } from "vue-router";

const route = ref(useRoute().path);
const selectedCity = ref();
const selectedState = ref();
const debinterModels = ref([
  { name: "MIM 3001L T-50", code: "3001L" },
  { name: "MIM 3015 T-50", code: "3015" },
  { name: "MIM 3025 T-50", code: "3025" },
  { name: "MIM 3045 T-50", code: "3045" },
  { name: "MIM 3675 T-115", code: "3675" },
  { name: "MIM 3009 T-115", code: "3009" },
  { name: "MIM 3012 T-115", code: "3012" },
]);

const states = ref([
  { name: "Alabama", code: "AL" },
  { name: "Alaska", code: "AK" },
  { name: "Arizona", code: "AZ" },
  { name: "Arkansas", code: "AR" },
  { name: "California", code: "CA" },
  { name: "Colorado", code: "CO" },
  { name: "Connecticut", code: "CT" },
  { name: "Delaware", code: "DE" },
  { name: "Florida", code: "FL" },
  { name: "Georgia", code: "GA" },
  { name: "Hawaii", code: "HI" },
  { name: "Idaho", code: "ID" },
  { name: "Illinois", code: "IL" },
  { name: "Indiana", code: "IN" },
  { name: "Iowa", code: "IA" },
  { name: "Kansas", code: "KS" },
  { name: "Kentucky", code: "KY" },
  { name: "Louisiana", code: "LA" },
  { name: "Maine", code: "ME" },
  { name: "Maryland", code: "MD" },
  { name: "Massachusetts", code: "MA" },
  { name: "Michigan", code: "MI" },
  { name: "Minnesota", code: "MN" },
  { name: "Mississippi", code: "MS" },
  { name: "Missouri", code: "MO" },
  { name: "Montana", code: "MT" },
  { name: "Nebraska", code: "NE" },
  { name: "Nevada", code: "NV" },
  { name: "New Hampshire", code: "NH" },
  { name: "New Jersey", code: "NJ" },
  { name: "New Mexico", code: "NM" },
  { name: "New York", code: "NY" },
  { name: "North Carolina", code: "NC" },
  { name: "North Dakota", code: "ND" },
  { name: "Ohio", code: "OH" },
  { name: "Oklahoma", code: "OK" },
  { name: "Oregon", code: "OR" },
  { name: "Pennsylvania", code: "PA" },
  { name: "Rhode Island", code: "RI" },
  { name: "South Carolina", code: "SC" },
  { name: "South Dakota", code: "SD" },
  { name: "Tennessee", code: "TN" },
  { name: "Texas", code: "TX" },
  { name: "Utah", code: "UT" },
  { name: "Vermont", code: "VT" },
  { name: "Virginia", code: "VA" },
  { name: "Washington", code: "WA" },
  { name: "West Virginia", code: "WV" },
  { name: "Wisconsin", code: "WI" },
  { name: "Wyoming", code: "WY" },
]);
const countries = ref([
  { name: "United States of America", code: "US" },
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo (Congo-Brazzaville)", code: "CG" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia (Czech Republic)", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: 'Eswatini (fmr. "Swaziland")', code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Grenada", code: "GD" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar (formerly Burma)", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "North Korea", code: "KP" },
  { name: "North Macedonia", code: "MK" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestine State", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States of America", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
]);
</script>

the provided form section to match the style of the second template you've
shown, here's the revised code: vue Copy code
<template>
  <div class="mt-6">
    <div class="flex flex-col w-full">
      <div class="space-y-4">
        <h6
          :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
          class="font-bold text-md uppercase"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          Model/Type
        </h6>
        <form class="w-full">
          <select
            name="binter"
            id="binter"
            :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
            class="h-[38px] block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
          >
            <option
              v-for="binter in debinterModels"
              :key="binter.code"
              class="p-2"
            >
              {{ binter.name }}
            </option>
          </select>
        </form>
      </div>

      <div class="space-y-4">
        <h6
          :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
          class="font-bold text-md uppercase mt-6"
          style="font-family: ITCFranklinGothicStd-Demi"
        >
          Options (choose all that apply)
        </h6>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <input
              id="checkbox1"
              type="checkbox"
              class="form-checkbox text-indigo-600 border-gray-400 focus:ring-indigo-600"
            />
            <label
              for="checkbox1"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              >Hi-vacuum (diffusion pump)</label
            >
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="checkbox2"
              type="checkbox"
              class="form-checkbox text-indigo-600 border-gray-400 focus:ring-indigo-600"
            />
            <label
              for="checkbox2"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              >Set of 12 flexible survey thermocouples</label
            >
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="checkbox3"
              type="checkbox"
              class="form-checkbox text-indigo-600 border-gray-400 focus:ring-indigo-600"
            />
            <label
              for="checkbox3"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              >Gas-fired after burner</label
            >
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="checkbox4"
              type="checkbox"
              class="form-checkbox text-indigo-600 border-gray-400 focus:ring-indigo-600"
            />
            <label
              for="checkbox4"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              >Additional TZM shelves</label
            >
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="space-y-2">
          <h6
            :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
            class="text-md font-medium leading-6 uppercase mt-6"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            company
          </h6>
          <input
            type="text"
            name="subject"
            id="subject"
            autocomplete="subject"
            class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
          />
        </div>

        <div class="space-y-2">
          <h6
            :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
            class="text-md font-medium leading-6 uppercase"
            style="font-family: ITCFranklinGothicStd-Demi"
          >
            Address
          </h6>
          <input
            type="text"
            name="subject"
            id="subject"
            autocomplete="subject"
            class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
          />
        </div>

        <div class="flex space-x-6">
          <div class="w-1/3 space-y-2">
            <h6
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              class="text-md font-medium leading-6 uppercase"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              City
            </h6>
            <input
              type="text"
              name="subject"
              id="subject"
              autocomplete="subject"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
            />
          </div>

          <div class="w-2/3 space-y-2">
            <h6
              class="text-md font-medium leading-6 uppercase"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              State
            </h6>
            <form class="w-full">
              <select
                name="state"
                id="state"
                :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
                class="h-[38px] block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
              >
                <option v-for="state in states" :key="state.code">
                  {{ state.name }}
                </option>
              </select>
            </form>
          </div>
        </div>
        <div class="flex space-x-6">
          <div class="w-1/3 space-y-2">
            <h6
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              class="text-md font-medium leading-6 uppercase"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              Zip Code
            </h6>
            <input
              type="text"
              name="subject"
              id="subject"
              autocomplete="subject"
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              class="block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
            />
          </div>

          <div class="w-2/3 space-y-2">
            <h6
              :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
              class="text-md font-medium leading-6 uppercase"
              style="font-family: ITCFranklinGothicStd-Demi"
            >
              Country
            </h6>
            <form class="w-full">
              <select
                name="country"
                id="country"
                :class="route === '/' ? 'text-slate-50' : 'text-gray-800'"
                class="h-[38px] block w-full border-0 border-b-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-b-gray-300 shadow-md focus:outline-none"
              >
                <option v-for="country in countries" :key="country.code">
                  {{ country.name }}
                </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-dropdown-panel
  .p-component
  .p-dropdown-items-wrapper
  .p-select-list-container
  .p-ripple-disabled {
  max-height: 150px;
  overflow-y: auto;
  background: #f2f2f2;
}

ul {
  background: #f2f2f2;
}
</style>
