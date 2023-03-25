//assume another function will pull data from a database but using this as placeholder
const json = "{\"Texas\":[59710,68240,76770,85300,92124,98948,105772,112596],\"RhodeIsland\":[69510,79440,89370,99300,107244,115188,123132,131076],\"Massachusetts\":[84280,96320,108360,120400,130032,139664,149296,158928]}";

function getEligibility(state, householdSize, annualIncome) {
    //typically this would do parameter checking in the beginning, put required setting on html side for simplification
    const data = JSON.parse(json);
    const isEligible = annualIncome <= data[state][householdSize - 1];
    const eligibilityString = isEligible ? "Eligible" : "Ineligible";

    document.getElementById("output").innerHTML = eligibilityString

    return eligibilityString;
}