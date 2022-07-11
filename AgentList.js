import { getBusinesses } from "./database.js";
const businessArray = getBusinesses();


const agentHTMLRepresentations = businessArray.purchasingAgent.map(
    // Your callback function goes here
    agentArray => agentArray.nameFirst +' ' + agentArray.nameLast
)
console.log(agentHTMLRepresentations)

//const finalHTML = agentHTMLRepresentations.join("")

//return finalHTML