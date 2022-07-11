import { getBusinesses } from "./database.js";
const businessArray = getBusinesses();


export const ManufacturingBusinesses =()=>{
    let html ="";
    businessArray
    .filter(business => business.companyIndustry === "Manufacturing")
    .forEach(
        businessObject =>{
        html += `
        <section class="business--manufacturing">
               <h2 class="business--name">${businessObject.companyName}</h2>
               <div class="business--details">${businessObject.addressFullStreet}<br>${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
               <hr>
               </section>
               
        `
        }
    )
    return html
}
