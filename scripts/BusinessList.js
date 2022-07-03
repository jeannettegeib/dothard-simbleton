import { getBusinesses } from "./database.js"

export const BusinessList=()=>{
    const businessesArray=getBusinesses();
    let businessesListHTML = "<h1>Active Businesses</h1>";
    
    businessesArray.forEach(
        (businessObject)=>{
            businessesListHTML +=`
            <section class="business">
               <h2 class="business--name">${businessObject.companyName}</h2}
               <div class="business--details">${businessObject.addressFullStreet}<br>${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
               <hr>
               </section>
               `
        }
    )
    return businessesListHTML
} 