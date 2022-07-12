import { getBusinesses } from "./database.js";
const businessArray = getBusinesses();


const agentHTMLRepresentations = businessArray.map(
    // Your callback function goes here
    (agentArray) => {agentArray.purchasingAgent.nameFirst + agentArray.purchasingAgent.nameLast + agentArray.companyName + agentArray.phoneWork}

)
console.log(agentHTMLRepresentations)

//const finalHTML = agentHTMLRepresentations.join("")

//return finalHTML