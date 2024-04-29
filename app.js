medicare_states = ["AZ",
    "CA",
    "CO",
    "CT",
    "FL",
    "GA",
    "IA",
    "IN",
    "KY",
    "ME",
    "MO",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "TN",
    "TX",
    "VA",
    "WA",
    "WI"]

aca_states = ["AZ",
    "DE",
    "FL",
    "GA",
    "IA",
    "IN",
    "IL",
    "KS",
    "LA",
    "MI",
    "MO",
    "MS",
    "MT",
    "NE",
    "NC",
    "ND",
    "NH",
    "OH",
    "OK",
    "SC",
    "TN",
    "TX",
    "UT",
    "WI",
    "WV"]
resultElement = document.getElementById('result')


function check(){
    inputtedState = document.getElementById('state').value.trim().toUpperCase()

    resultElement.textContent = "Loading..."
    resultElement.style.color = "black"

    if (!(medicare_states.includes(inputtedState) || aca_states.includes(inputtedState))) {
        resultElement.textContent = inputtedState + " STATE IS NOT ACCEPTED FOR MEDICARE AND ACA"
        resultElement.style.color = "red"
        return
    }

    resultElement.style.color = "green"
    
    if (medicare_states.includes(inputtedState) && aca_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR MEDICARE AND ACA"
        return
    }

    if (medicare_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR MEDICARE"
        return
    }

    if (aca_states.includes(inputtedState)) {
        resultElement.textContent = inputtedState + " STATE IS ACCEPTED FOR ACA"
        return
    }
    
}