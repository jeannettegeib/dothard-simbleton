import { getBusinesses } from "./database.js"
const businessesArray=getBusinesses();

export const BusinessList=()=>{
    
    let businessesListHTML = "<h1>Active Businesses</h1>";
    
    businessesArray.forEach(
        (businessObject)=>{
            businessesListHTML +=`
            <section class="business">
               <h2 class="business--name">${businessObject.companyName}</h2>
               <div class="business--details">${businessObject.addressFullStreet}<br>${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
               <hr>
               </section>
               `
        }
    )
    return businessesListHTML
} 

document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.
                        Use the `.includes()` string method to
                        see if a smaller string is part of a larger string.
                    */
                    
                    const foundBusiness = businessesArray.find(
                        // Your callback function goes here
                       match => {return match.companyName.includes(keyPressEvent.target.value) }
                    )

                    companySearchResultArticle.innerHTML = `  <section class="business">
                    <h2 class="business--name">${foundBusiness.companyName}</h2>
                    <div class="business--details">${foundBusiness.addressFullStreet}<br>${foundBusiness.addressCity} ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</div>
                    <hr>
                    </section><br><br>`
                }
            
        });