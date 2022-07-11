import { getBusinesses } from "./database.js"
const businesses = getBusinesses();
//get businesses located in businesses.addressStateCode = NY


export const NewYorkBusinesses = ()=>{
    let html = ""
    businesses
    .filter(business => business.addressStateCode === "NY")
    .forEach(
        (businessObject)=>{
            html +=`
            <section class="business--NewYork">
               <h2 class="business--name">${businessObject.companyName}</h2>
               <div class="business--details">${businessObject.addressFullStreet}<br>${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
               <hr>
               </section>
               `
        }
    )
    return html
}