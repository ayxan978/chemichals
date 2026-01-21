const countryContent = {
    KZ: {
        title: "Казахстан",
        text: "<p>Поставка оборудования</p><p>Автоматизация производств</p>"
    },
    UZ: {
        title: "Узбекистан",
        text: "<p>Модернизация заводов</p>"
    },
    KG: {
        title: "Кыргызстан",
        text: "<p>Сервис и поставки</p>"
    },
    TJ: {
        title: "Таджикистан",
        text: "<p>Техническая поддержка</p>"
    },
    TM: {
        title: "Туркменистан",
        text: "<p>Промышленные решения</p>"
    }
};
function openCountry(code) {
    const data = countryContent[code];
    console.log(data)
    if (!data) return;

    const panel = document.getElementById("country-panel");
    document.getElementById("country-title").innerText = data.title;
    document.getElementById("country-text").innerHTML = data.text;

    panel.classList.add("active");
}

var simplemaps_worldmap_mapdata = {
    main_settings: {
        width: "responsive",
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#ffffff",

        state_color: "#88A4BC",
        state_url: "",
        state_hover_color: "#3B729F",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "no",
        state_click: function (id) {
            console.log("CLICK:", id);
            openCountry(id);
        },
        popups: "off",

        zoom: "yes",
        initial_zoom: "KZ",
        initial_zoom_solo: "yes",
        back_image: "no",
        initial_back: "no",
        zoom_percentage: 0.35,

        div: "map",
        auto_load: "yes"
    },

    state_specific: {
        "0": {},
        AF: {
            name: "Afghanistan",
            hide: "yes"
        },
        AO: {
            name: "Angola",
            hide: "yes"
        },
        AL: {
            name: "Albania",
            hide: "yes"
        },
        AE: {
            name: "United Arab Emirates",
            hide: "yes"
        },
        AR: {
            name: "Argentina",
            hide: "yes"
        },
        AM: {
            name: "Armenia",
            hide: "yes"
        },
        AU: {
            name: "Australia",
            hide: "yes"
        },
        AT: {
            name: "Austria",
            hide: "yes"
        },
        AZ: {
            name: "Azerbaijan",
            hide: "yes"
        },
        BI: {
            name: "Burundi",
            hide: "yes"
        },
        BE: {
            name: "Belgium",
            hide: "yes"
        },
        BJ: {
            name: "Benin",
            hide: "yes"
        },
        BF: {
            name: "Burkina Faso",
            hide: "yes"
        },
        BD: {
            name: "Bangladesh",
            hide: "yes"
        },
        BG: {
            name: "Bulgaria",
            hide: "yes"
        },
        BH: {
            name: "Bahrain",
            hide: "yes"
        },
        BA: {
            name: "Bosnia and Herzegovina",
            hide: "yes"
        },
        BY: {
            name: "Belarus",
            hide: "yes"
        },
        BZ: {
            name: "Belize",
            hide: "yes"
        },
        BO: {
            name: "Bolivia",
            hide: "yes"
        },
        BR: {
            name: "Brazil",
            hide: "yes"
        },
        BN: {
            name: "Brunei Darussalam",
            hide: "yes"
        },
        BT: {
            name: "Bhutan",
            hide: "yes"
        },
        BW: {
            name: "Botswana",
            hide: "yes"
        },
        CF: {
            name: "Central African Republic",
            hide: "yes"
        },
        CA: {
            name: "Canada",
            hide: "yes"
        },
        CH: {
            name: "Switzerland",
            hide: "yes"
        },
        CL: {
            name: "Chile",
            hide: "yes"
        },
        CN: {
            name: "China"
        },
        CI: {
            name: "Côte d'Ivoire",
            hide: "yes"
        },
        CM: {
            name: "Cameroon",
            hide: "yes"
        },
        CD: {
            name: "Democratic Republic of the Congo",
            hide: "yes"
        },
        CG: {
            name: "Republic of Congo",
            hide: "yes"
        },
        CO: {
            name: "Colombia",
            hide: "yes"
        },
        CR: {
            name: "Costa Rica",
            hide: "yes"
        },
        CU: {
            name: "Cuba",
            hide: "yes"
        },
        CZ: {
            name: "Czech Republic",
            hide: "yes"
        },
        DE: {
            name: "Germany",
            hide: "yes"
        },
        DJ: {
            name: "Djibouti",
            hide: "yes"
        },
        DK: {
            name: "Denmark",
            hide: "yes"
        },
        DO: {
            name: "Dominican Republic",
            hide: "yes"
        },
        DZ: {
            name: "Algeria",
            hide: "yes"
        },
        EC: {
            name: "Ecuador",
            hide: "yes"
        },
        EG: {
            name: "Egypt",
            hide: "yes"
        },
        ER: {
            name: "Eritrea",
            hide: "yes"
        },
        EE: {
            name: "Estonia",
            hide: "yes"
        },
        ET: {
            name: "Ethiopia",
            hide: "yes"
        },
        FI: {
            name: "Finland",
            hide: "yes"
        },
        FJ: {
            name: "Fiji",
            hide: "yes"
        },
        GA: {
            name: "Gabon",
            hide: "yes"
        },
        GB: {
            name: "United Kingdom",
            hide: "yes"
        },
        GE: {
            name: "Georgia",
            hide: "yes"
        },
        GH: {
            name: "Ghana",
            hide: "yes"
        },
        GN: {
            name: "Guinea",
            hide: "yes"
        },
        GM: {
            name: "The Gambia",
            hide: "yes"
        },
        GW: {
            name: "Guinea-Bissau",
            hide: "yes"
        },
        GQ: {
            name: "Equatorial Guinea",
            hide: "yes"
        },
        GR: {
            name: "Greece",
            hide: "yes"
        },
        GL: {
            name: "Greenland",
            hide: "yes"
        },
        GT: {
            name: "Guatemala",
            hide: "yes"
        },
        GY: {
            name: "Guyana",
            hide: "yes"
        },
        HN: {
            name: "Honduras",
            hide: "yes"
        },
        HR: {
            name: "Croatia",
            hide: "yes"
        },
        HT: {
            name: "Haiti",
            hide: "yes"
        },
        HU: {
            name: "Hungary",
            hide: "yes"
        },
        ID: {
            name: "Indonesia",
            hide: "yes"
        },
        IN: {
            name: "India",
            hide: "yes"
        },
        IE: {
            name: "Ireland",
            hide: "yes"
        },
        IR: {
            name: "Iran",
            hide: "yes"
        },
        IQ: {
            name: "Iraq",
            hide: "yes"
        },
        IS: {
            name: "Iceland",
            hide: "yes"
        },
        IL: {
            name: "Israel",
            hide: "yes"
        },
        IT: {
            name: "Italy",
            hide: "yes"
        },
        JM: {
            name: "Jamaica",
            hide: "yes"
        },
        JO: {
            name: "Jordan",
            hide: "yes"
        },
        JP: {
            name: "Japan",
            hide: "yes"
        },
        KZ: {
            name: "Kazakhstan",
            click: function () {
                openCountry("KZ");
            }
        },
        UZ: {
            name: "Uzbekistan",
            click: function () {
                openCountry("UZ");
            }
        },
        KG: {
            name: "Kyrgyzstan",
            click: function () {
                openCountry("KG");
            }
        },
        TJ: {
            name: "Tajikistan",
            click: function () {
                openCountry("TJ");
            }
        },
        TM: {
            name: "Turkmenistan",
            click: function () {
                openCountry("TM");
            }
        },

        KE: {
            name: "Kenya",
            hide: "yes"
        },

        KH: {
            name: "Cambodia",
            hide: "yes"
        },
        KR: {
            name: "Republic of Korea",
            hide: "yes"
        },
        XK: {
            name: "Kosovo",
            hide: "yes"
        },
        KW: {
            name: "Kuwait",
            hide: "yes"
        },
        LA: {
            name: "Lao PDR",
            hide: "yes"
        },
        LB: {
            name: "Lebanon",
            hide: "yes"
        },
        LR: {
            name: "Liberia",
            hide: "yes"
        },
        LY: {
            name: "Libya",
            hide: "yes"
        },
        LK: {
            name: "Sri Lanka",
            hide: "yes"
        },
        LS: {
            name: "Lesotho",
            hide: "yes"
        },
        LT: {
            name: "Lithuania",
            hide: "yes"
        },
        LU: {
            name: "Luxembourg",
            hide: "yes"
        },
        LV: {
            name: "Latvia",
            hide: "yes"
        },
        MA: {
            name: "Morocco",
            hide: "yes"
        },
        MD: {
            name: "Moldova",
            hide: "yes"
        },
        MG: {
            name: "Madagascar",
            hide: "yes"
        },
        MX: {
            name: "Mexico",
            hide: "yes"
        },
        MK: {
            name: "Macedonia",
            hide: "yes"
        },
        ML: {
            name: "Mali",
            hide: "yes"
        },
        MM: {
            name: "Myanmar",
            hide: "yes"
        },
        ME: {
            name: "Montenegro",
            hide: "yes"
        },
        MN: {
            name: "Mongolia"
        },
        MZ: {
            name: "Mozambique",
            hide: "yes"
        },
        MR: {
            name: "Mauritania",
            hide: "yes"
        },
        MW: {
            name: "Malawi",
            hide: "yes"
        },
        MY: {
            name: "Malaysia",
            hide: "yes"
        },
        NA: {
            name: "Namibia",
            hide: "yes"
        },
        NE: {
            name: "Niger",
            hide: "yes"
        },
        NG: {
            name: "Nigeria",
            hide: "yes"
        },
        NI: {
            name: "Nicaragua",
            hide: "yes"
        },
        NL: {
            name: "Netherlands",
            hide: "yes"
        },
        NO: {
            name: "Norway",
            hide: "yes"
        },
        NP: {
            name: "Nepal",
            hide: "yes"
        },
        NZ: {
            name: "New Zealand",
            hide: "yes"
        },
        OM: {
            name: "Oman",
            hide: "yes"
        },
        PK: {
            name: "Pakistan",
            hide: "yes"
        },
        PA: {
            name: "Panama",
            hide: "yes"
        },
        PE: {
            name: "Peru",
            hide: "yes"
        },
        PH: {
            name: "Philippines",
            hide: "yes"
        },
        PG: {
            name: "Papua New Guinea",
            hide: "yes"
        },
        PL: {
            name: "Poland",
            hide: "yes"
        },
        KP: {
            name: "Dem. Rep. Korea",
            hide: "yes"
        },
        PT: {
            name: "Portugal",
            hide: "yes"
        },
        PY: {
            name: "Paraguay",
            hide: "yes"
        },
        PS: {
            name: "Palestine",
            hide: "yes"
        },
        QA: {
            name: "Qatar",
            hide: "yes"
        },
        RO: {
            name: "Romania",
            hide: "yes"
        },
        RU: {
            name: "Russia"
        },
        RW: {
            name: "Rwanda",
            hide: "yes"
        },
        EH: {
            name: "Western Sahara",
            hide: "yes"
        },
        SA: {
            name: "Saudi Arabia",
            hide: "yes"
        },
        SD: {
            name: "Sudan",
            hide: "yes"
        },
        SS: {
            name: "South Sudan",
            hide: "yes"
        },
        SN: {
            name: "Senegal",
            hide: "yes"
        },
        SL: {
            name: "Sierra Leone",
            hide: "yes"
        },
        SV: {
            name: "El Salvador",
            hide: "yes"
        },
        RS: {
            name: "Serbia",
            hide: "yes"
        },
        SR: {
            name: "Suriname",
            hide: "yes"
        },
        SK: {
            name: "Slovakia",
            hide: "yes"
        },
        SI: {
            name: "Slovenia",
            hide: "yes"
        },
        SE: {
            name: "Sweden",
            hide: "yes"
        },
        SZ: {
            name: "Swaziland",
            hide: "yes"
        },
        SY: {
            name: "Syria",
            hide: "yes"
        },
        TD: {
            name: "Chad",
            hide: "yes"
        },
        TG: {
            name: "Togo",
            hide: "yes"
        },
        TH: {
            name: "Thailand",
            hide: "yes"
        },


        TL: {
            name: "Timor-Leste",
            hide: "yes"
        },
        TN: {
            name: "Tunisia",
            hide: "yes"
        },
        TR: {
            name: "Turkey",
            hide: "yes"
        },
        TW: {
            name: "Taiwan",
            hide: "yes"
        },
        TZ: {
            name: "Tanzania",
            hide: "yes"
        },
        UG: {
            name: "Uganda",
            hide: "yes"
        },
        UA: {
            name: "Ukraine",
            hide: "yes"
        },
        UY: {
            name: "Uruguay",
            hide: "yes"
        },
        US: {
            name: "United States",
            hide: "yes"
        },

        VE: {
            name: "Venezuela",
            hide: "yes"
        },
        VN: {
            name: "Vietnam",
            hide: "yes"
        },
        VU: {
            name: "Vanuatu",
            hide: "yes"
        },
        YE: {
            name: "Yemen",
            hide: "yes"
        },
        ZA: {
            name: "South Africa",
            hide: "yes"
        },
        ZM: {
            name: "Zambia",
            hide: "yes"
        },
        ZW: {
            name: "Zimbabwe",
            hide: "yes"
        },
        SO: {
            name: "Somalia",
            hide: "yes"
        },
        GF: {
            name: "France",
            hide: "yes"
        },
        FR: {
            name: "France",
            hide: "yes"
        },
        ES: {
            name: "Spain",
            hide: "yes"
        },
        AW: {
            name: "Aruba",
            hide: "yes"
        },
        AI: {
            name: "Anguilla",
            hide: "yes"
        },
        AD: {
            name: "Andorra",
            hide: "yes"
        },
        AG: {
            name: "Antigua and Barbuda",
            hide: "yes"
        },
        BS: {
            name: "Bahamas",
            hide: "yes"
        },
        BM: {
            name: "Bermuda",
            hide: "yes"
        },
        BB: {
            name: "Barbados",
            hide: "yes"
        },
        KM: {
            name: "Comoros",
            hide: "yes"
        },
        CV: {
            name: "Cape Verde",
            hide: "yes"
        },
        KY: {
            name: "Cayman Islands",
            hide: "yes"
        },
        DM: {
            name: "Dominica",
            hide: "yes"
        },
        FK: {
            name: "Falkland Islands",
            hide: "yes"
        },
        FO: {
            name: "Faeroe Islands",
            hide: "yes"
        },
        GD: {
            name: "Grenada",
            hide: "yes"
        },
        HK: {
            name: "Hong Kong",
            hide: "yes"
        },
        KN: {
            name: "Saint Kitts and Nevis",
            hide: "yes"
        },
        LC: {
            name: "Saint Lucia",
            hide: "yes"
        },
        LI: {
            name: "Liechtenstein",
            hide: "yes"
        },
        MF: {
            name: "Saint Martin (French)",
            hide: "yes"
        },
        MV: {
            name: "Maldives",
            hide: "yes"
        },
        MT: {
            name: "Malta",
            hide: "yes"
        },
        MS: {
            name: "Montserrat",
            hide: "yes"
        },
        MU: {
            name: "Mauritius",
            hide: "yes"
        },
        NC: {
            name: "New Caledonia",
            hide: "yes"
        },
        NR: {
            name: "Nauru",
            hide: "yes"
        },
        PN: {
            name: "Pitcairn Islands",
            hide: "yes"
        },
        PR: {
            name: "Puerto Rico",
            hide: "yes"
        },
        PF: {
            name: "French Polynesia",
            hide: "yes"
        },
        SG: {
            name: "Singapore",
            hide: "yes"
        },
        SB: {
            name: "Solomon Islands",
            hide: "yes"
        },
        ST: {
            name: "São Tomé and Principe",
            hide: "yes"
        },
        SX: {
            name: "Saint Martin (Dutch)",
            hide: "yes"
        },
        SC: {
            name: "Seychelles",
            hide: "yes"
        },
        TC: {
            name: "Turks and Caicos Islands",
            hide: "yes"
        },
        TO: {
            name: "Tonga",
            hide: "yes"
        },
        TT: {
            name: "Trinidad and Tobago",
            hide: "yes"
        },
        VC: {
            name: "Saint Vincent and the Grenadines",
            hide: "yes"
        },
        VG: {
            name: "British Virgin Islands",
            hide: "yes"
        },
        VI: {
            name: "United States Virgin Islands",
            hide: "yes"
        },
        CY: {
            name: "Cyprus",
            hide: "yes"
        },
        RE: {
            name: "Reunion (France)",
            hide: "yes"
        },
        YT: {
            name: "Mayotte (France)",
            hide: "yes"
        },
        MQ: {
            name: "Martinique (France)",
            hide: "yes"
        },
        GP: {
            name: "Guadeloupe (France)",
            hide: "yes"
        },
        CW: {
            name: "Curaco (Netherlands)",
            hide: "yes"
        },
        IC: {
            name: "Canary Islands (Spain)",
            hide: "yes"
        }
    },

    labels: {},
    legend: {
        entries: []
    },
    regions: {}
}; 