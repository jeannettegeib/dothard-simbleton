import { BusinessList } from "./BusinessList.js"
import {NewYorkBusinesses} from "./NewYorkBusinesses.js"
import {ManufacturingBusinesses} from "./ManufacturingBusinesses.js"
import {getPurchasingAgents} from "./AgentList.js"
const businessHTML = BusinessList();
const NewYorkHTML = NewYorkBusinesses();    
const manufacturingHTML = ManufacturingBusinesses();
const agentList = getPurchasingAgents();
const contentTarget = document.querySelector("#content")

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${businessHTML}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
      ${manufacturingHTML}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      ${NewYorkHTML}
  </article>

  <article class="agents">
      <h2>Purchasing Agents</h2>
    ${agentList}
  </article>
  `
}

renderHTML()