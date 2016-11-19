 const States = [
        {
        abreviation: "AL" ,
        name: "Alabama",
        },
        {
        abreviation: "AK" ,
        name: "Alaska",
        },
        {
        abreviation: "AS" ,
        name: "American Samoa",
        },
        {
        abreviation: "AZ" ,
        name: "Arizona",
        },
        {
        abreviation: "AR" ,
        name: "Arkansas",
        },
        {
        abreviation: "CA" ,
        name: "California",
        },
        {
        abreviation: "CO" ,
        name: "Colorado",
        },
        {
        abreviation: "CT" ,
        name: "Connecticut",
        },
        {
        abreviation: "DE" ,
        name: "Delaware",
        },
        {
        abreviation: "DC" ,
        name: "District Of Columbia",
        },
        {
        abreviation: "FM" ,
        name: "Federated States Of Micronesia",
        },
        {
        abreviation: "FL" ,
        name: "Florida",
        },
        {
        abreviation: "GA" ,
        name: "Georgia",
        },
        {
        abreviation: "GU" ,
        name: "Guam",
        },
        {
        abreviation: "HI" ,
        name: "Hawaii",
        },
        {
        abreviation: "ID" ,
        name: "Idaho",
        },
        {
        abreviation: "IL" ,
        name: "Illinois",
        },
        {
        abreviation: "IN" ,
        name: "Indiana",
        },
        {
        abreviation: "IA" ,
        name: "Iowa",
        },
        {
        abreviation: "KS" ,
        name: "Kansas",
        },
        {
        abreviation: "KY" ,
        name: "Kentucky",
        },
        {
        abreviation: "LA" ,
        name: "Louisiana",
        },
        {
        abreviation: "ME" ,
        name: "Maine",
        },
        {
        abreviation: "MH" ,
        name: "Marshall Islands",
        },
        {
        abreviation: "MD" ,
        name: "Maryland",
        },
        {
        abreviation: "MA" ,
        name: "Massachusetts",
        },
        {
        abreviation: "MI" ,
        name: "Michigan",
        },
        {
        abreviation: "MN" ,
        name: "Minnesota",
        },
        {
        abreviation: "MS" ,
        name: "Mississippi",
        },
        {
        abreviation: "MO" ,
        name: "Missouri",
        },
        {
        abreviation: "MT" ,
        name: "Montana",
        },
        {
        abreviation: "NE" ,
        name: "Nebraska",
        },
        {
        abreviation: "NV" ,
        name: "Nevada",
        },
        {
        abreviation: "NH" ,
        name: "New Hampshire",
        },
        {
        abreviation: "NJ" ,
        name: "New Jersey",
        },
        {
        abreviation: "NM" ,
        name: "New Mexico",
        },
        {
        abreviation: "NY" ,
        name: "New York",
        },
        {
        abreviation: "NC" ,
        name: "North Carolina",
        },
        {
        abreviation: "ND" ,
        name: "North Dakota",
        },
        {
        abreviation: "MP" ,
        name: "Northern Mariana Islands",
        },
        {
        abreviation: "OH" ,
        name: "Ohio",
        },
        {
        abreviation: "OK" ,
        name: "Oklahoma",
        },
        {
        abreviation: "OR" ,
        name: "Oregon",
        },
        {
        abreviation: "PW" ,
        name: "Palau",
        },
        {
        abreviation: "PA" ,
        name: "Pennsylvania",
        },
        {
        abreviation: "PR" ,
        name: "Puerto Rico",
        },
        {
        abreviation: "RI" ,
        name: "Rhode Island",
        },
        {
        abreviation: "SC" ,
        name: "South Carolina",
        },
        {
        abreviation: "SD" ,
        name: "South Dakota",
        },
        {
        abreviation: "TN" ,
        name: "Tennessee",
        },
        {
        abreviation: "TX" ,
        name: "Texas",
        },
        {
        abreviation: "UT" ,
        name: "Utah",
        },
        {
        abreviation: "VT" ,
        name: "Vermont",
        },
        {
        abreviation: "VI" ,
        name: "Virgin Islands",
        },
        {
        abreviation: "VA" ,
        name: "Virginia",
        },
        {
        abreviation: "WA" ,
        name: "Washington",
        },
        {
        abreviation: "WV" ,
        name: "West Virginia",
        },
        {
        abreviation: "WI" ,
        name: "Wisconsin",
        },
        {
        abreviation: "WY",
        name: "Wyoming",
        }
 ]

 const newStates = States.map((obj)=>{
  let country = "United States"
   return {...obj, country: country}
  })

const justStates = States.map((obj)=>{
    return obj.name
})

export default justStates
