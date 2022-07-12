import { getBusinesses } from "./database.js";
const businessArray = getBusinesses();

// model:    export const getBusinesses =()=>{
//     const copy = database.businesses.map(stuff => ({...stuff}))
//     return copy
//   }

export const getPurchasingAgents = ()=>{
const agentHTMLRepresentations = businessArray.map(agentArray =>("<section class=\"business\">"+"<h2 class=\"agent--name\">" + agentArray.purchasingAgent.nameFirst + " " +agentArray.purchasingAgent.nameLast + "</h2>" + "<div class=\"agent--details\">" +agentArray.companyName+ "<br>" + agentArray.phoneWork+"</div>"+"<hr>"+"</section>"))

const finalHTML = agentHTMLRepresentations.join("")

return finalHTML  
}


