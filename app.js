const WEEK_KEY = "FOURTHHAVEN_REMOTE_WEEK_2026_09_28_V3";
const DAY_META = {
  "0928": {label:"Monday", date:"9/28/2026"},
  "0929": {label:"Tuesday", date:"9/29/2026"},
  "1001": {label:"Thursday", date:"10/1/2026"}
};

const openingTasks = [
  ["clock","Clock in at your assigned start time."],
  ["discord","Join the FourthHaven Discord/work channel."],
  ["clockmsg","Send a clock-in message confirming the time you started."],
  ["access","Confirm you can access Shopify and your assigned social media account."],
  ["updates","Check Discord for manager announcements, priority tasks, or changes."]
];

const storeTasks = [
  ["preview","Open the actual FourthHaven storefront using Shopify Preview."],
  ["home","Check the homepage and make sure all banners, text, images, and featured products load correctly."],
  ["nav","Click every main menu/navigation button and make sure it opens the correct page."],
  ["products","Open every product currently being sold."],
  ["names","Confirm every product name is correct."],
  ["prices","Confirm every displayed price and sale/presale price is correct."],
  ["photos","Confirm product photos load clearly and match the correct color/variant."],
  ["variants","Click every color/variant and confirm the correct photos/information appear."],
  ["sizes","Check every size option and confirm available/sold-out sizes are shown correctly."],
  ["descriptions","Read product descriptions for spelling, grammar, outdated, or incorrect information."],
  ["shipping","Confirm presale, shipping, delivery, and fulfillment information is accurate."],
  ["buy","Click Purchase/Buy and confirm it works."],
  ["cart","Add a product to the cart and verify item, size, color, quantity, and price."],
  ["quantity","Change cart quantity and make sure totals update correctly."],
  ["checkout","Proceed to Checkout and confirm it loads. DO NOT place an order."],
  ["account","Test the account/profile icon."],
  ["carticon","Test the cart icon."],
  ["subscribe","Test the email Subscribe form/button."],
  ["footer","Check footer links, policies, contact information, and social links."],
  ["errors","Look for broken links, missing images, duplicate sections, weird spacing, cut-off text, or unfinished areas."],
  ["mobile","Check the phone/mobile storefront for overlapping, stretched, blurry, or cut-off content."],
  ["promo","If a promotion is advertised, confirm the displayed information is accurate."],
  ["report","Screenshot every issue found and report it in Discord with a short explanation."],
  ["approval","Do not make major pricing, inventory, policy, product, design, or store changes without manager approval."]
];

const socialTasks = [
  ["login","Log into your assigned FourthHaven social media platform."],
  ["notifications","Check notifications, comments, and DMs."],
  ["leads","Identify unanswered customer questions or people showing clear purchase interest."],
  ["content","Check the most recent content for wrong information, broken links, or upload problems."],
  ["complaints","Report complaints, payment/order problems, or messages requiring manager approval."],
  ["policy","Do not promise refunds/discounts or make policy decisions without approval."]
];

const submitTasks = [
  ["storecomplete","Confirm Store Health Check is complete."],
  ["metrics","Send Orders, Conversion Rate, Sessions, and Total Sales."],
  ["followers","Send starting follower count for your assigned platform."],
  ["issues","Send screenshots/details of any store or customer issues found."],
  ["ready","Confirm you reviewed today's manager instructions and are ready to begin assigned work."]
];

function makeTasks(day, prefix, tasks){
  return tasks.map(([id,text]) => `
    <div class="task">
      <input type="checkbox" id="${day}_${prefix}_${id}" data-save>
      <label for="${day}_${prefix}_${id}">${text}</label>
    </div>`).join("");
}

function underConstruction(title, number){
  return `
  <div class="card span12 under-construction">
    <div class="uc-box">
      <div class="icon">🚧</div>
      <h3>${title}</h3>
      <p>This shift section is under construction. We’ll build the tasks, goals, proof-of-work, and tracking here next.</p>
    </div>
  </div>`;
}


function midShift1Panel(day){
 const tasks=[
  ["platform","Open your assigned FourthHaven social account and confirm you are on the correct profile."],
  ["inbox","Reply to appropriate comments and DMs; flag anything involving refunds, complaints, payment/order problems, or policy decisions for the manager."],
  ["engage","Complete a focused engagement block: interact with real people in our target audience — no spam, bots, or copy-paste flooding."],
  ["followers","Work toward today’s individual goal of +10 genuine followers."],
  ["content","Create or prepare at least one useful piece of content for your assigned platform (post, Reel/TikTok concept, Story set, caption, hook, or edited clip)."],
  ["quality","Check every photo/video before submission: clear focus, readable text, clean framing, good lighting, no accidental personal/private information, and nothing visibly blurry."],
  ["accuracy","Verify prices, presale dates, shipping information, sizes, colors, links, and product claims before anything is posted."],
  ["approval","Send new camera content or major promotional content to the manager for review before the end of shift."],
  ["team","Check what the other employee is working on so both employees are not duplicating the exact same outreach/content task."],
  ["proof","Save screenshots or links showing the work completed during this block."]
 ];
 return `<div class="grid">
  <div class="card span12"><div class="statusline"><div><h2>Mid Shift 1 · Social Media & Growth</h2><p class="sub">Build attention, improve the brand’s presentation, and move real people toward the FourthHaven storefront. Quality matters more than spam.</p></div><span class="pill">Social Block</span></div></div>
  <div class="card span8"><h3>Required Social Tasks</h3>${makeTasks(day,"mid1",tasks)}</div>
  <div class="card span4"><h3>Growth Tracker</h3><div class="field"><label>Starting Followers <span class="req">*</span></label><input type="number" min="0" id="${day}_mid1StartFollowers" data-save data-required></div><div class="field"><label>Ending Followers <span class="req">*</span></label><input type="number" min="0" id="${day}_mid1EndFollowers" data-save data-required></div><div class="field"><label>Content / Post Link or Description <span class="req">*</span></label><textarea id="${day}_mid1Content" data-save data-required placeholder="What did you create, post, edit, or prepare?"></textarea></div></div>
  <div class="card span12"><h3>Social Proof & Notes</h3><div class="field"><label>Proof of Work / Links / Screenshot Notes <span class="req">*</span></label><textarea id="${day}_mid1Proof" data-save data-required placeholder="List links, screenshots sent, DMs handled, comments answered, content submitted, and any issues needing manager attention."></textarea></div></div>
 </div>`;
}

function midShift2Panel(day){
 const tasks=[
  ["leads","Build a real lead list from people who have shown interest, engaged with content, asked questions, or fit the target customer."],
  ["followups","Follow up with warm leads and previous interested customers without repeatedly spamming them."],
  ["outreach","Complete direct sales outreach using natural, personalized messages/calls — explain the product, current price, presale timing, and how to buy."],
  ["questions","Answer product questions accurately: fit, colors, sizes, price, presale/shipping timeline, and website ordering."],
  ["traffic","Actively direct interested people to the FourthHaven website and correct product page."],
  ["goal","Work toward the individual target of 2 completed sales today; record results honestly even if the target is not reached."],
  ["commission","Record any sale you directly generated so commission can be verified later."],
  ["nospam","Do not pressure, mislead, fake scarcity, promise unauthorized discounts, or repeatedly contact someone who is not interested."],
  ["team","Share useful objections/questions with the team so the next employee can improve the pitch."],
  ["proof","Keep proof of meaningful outreach and any generated sale/order information."]
 ];
 return `<div class="grid">
  <div class="card span12"><div class="statusline"><div><h2>Mid Shift 2 · Sales & Customer Outreach</h2><p class="sub">Turn attention into qualified conversations, website visits, and sales. The target is 2 sales per employee, but every result must be reported truthfully.</p></div><span class="pill">Sales Block</span></div></div>
  <div class="card span8"><h3>Required Sales Tasks</h3>${makeTasks(day,"mid2",tasks)}</div>
  <div class="card span4"><h3>Sales Tracker</h3><div class="field"><label>People Contacted <span class="req">*</span></label><input type="number" min="0" id="${day}_mid2Contacted" data-save data-required></div><div class="field"><label>Qualified / Interested Leads <span class="req">*</span></label><input type="number" min="0" id="${day}_mid2Leads" data-save data-required></div><div class="field"><label>Sales Generated <span class="req">*</span></label><input type="number" min="0" id="${day}_mid2Sales" data-save data-required></div><div class="field"><label>Website Visits / Clicks You Can Verify</label><input type="number" min="0" id="${day}_mid2Clicks" data-save></div></div>
  <div class="card span6"><h3>Lead / Sale Notes</h3><div class="field"><label>Who needs follow-up?</label><textarea id="${day}_mid2Followup" data-save placeholder="Names/handles or a non-sensitive description of leads and what they asked about."></textarea></div></div>
  <div class="card span6"><h3>Objections & Feedback</h3><div class="field"><label>What stopped people from buying? <span class="req">*</span></label><textarea id="${day}_mid2Objections" data-save data-required placeholder="Price, waiting for payday, color/size, shipping, not interested, no response, etc."></textarea></div></div>
 </div>`;
}

function midShift3Panel(day){
 const tasks=[
  ["platform","Work only from your designated FourthHaven platform/account during this block unless management assigns something different."],
  ["profile","Check the account profile before outreach: profile photo, bio, FourthHaven/store link, spelling, and branding should look complete and professional."],
  ["followers","Generate at least 5 new followers today. Push past 5 when possible — 5 is the minimum goal, not the stopping point."],
  ["subscribers","Generate at least 5 new store/email subscribers today. Only count people who actually complete the subscription."],
  ["sale","Generate at least 1 completed sale today. Keep pushing for additional sales after the first one."],
  ["outreach","Start real conversations with potential customers. Personalize outreach and avoid copy/paste spam."],
  ["followup","Follow up with interested leads from earlier in the day and answer product, size, price, shipping, or ordering questions accurately."],
  ["store","Direct interested people to the correct FourthHaven store/product page and help remove reasonable purchase confusion."],
  ["log","Record every meaningful customer/lead conversation in the Contact Log tab. If they buy, complete the purchase details for that contact."],
  ["proof","Keep screenshots or other proof for follower growth, subscribers, sales, and meaningful outreach for the closing report."]
 ];
 const mondaySetup = day==="0928" ? `
  <div class="card span12 account-setup">
    <div class="statusline"><div><h3>Monday Assignment · Create Your Designated Platform Account</h3><p class="sub">Create the new FourthHaven account on the platform assigned to you by management. Use the credentials below exactly. If sign-in fails, verification cannot be completed, or the platform gives an account error, contact the manager.</p></div><span class="pill warn">Monday Only</span></div>
    <div class="mini-grid" style="margin-top:12px">
      <div><label>Account Email</label><div class="credential">fourthhaven1vv@gmail.com</div></div>
      <div><label>Account Password</label><div class="credential">FourthHavenIV333</div></div>
    </div>
    <div class="mini-grid" style="margin-top:12px">
      <div class="field"><label>Designated Platform <span class="req">*</span></label><input id="${day}_mid3Platform" data-save data-required placeholder="TikTok / Instagram / etc."></div>
      <div class="field"><label>New Account Username / Handle <span class="req">*</span></label><input id="${day}_mid3Handle" data-save data-required placeholder="@username"></div>
    </div>
    <div class="task"><input type="checkbox" id="${day}_mid3_accountCreated" data-save><label for="${day}_mid3_accountCreated">Account created successfully and login confirmed.</label></div>
    <div class="field"><label>Account Setup Notes</label><textarea id="${day}_mid3AccountNotes" data-save placeholder="Verification issue, username unavailable, login issue, or anything the manager needs to know."></textarea></div>
  </div>` : "";
 return `<div class="grid">
  <div class="card span12"><div class="statusline"><div><h2>Mid Shift 3 · Growth, Outreach & Sales</h2><p class="sub">Finish the required task list, hit today’s minimum goals, then record customer conversations separately in the Contact Log.</p></div><span class="pill">Growth Block</span></div>
   <div class="day-subtabs" style="margin-top:14px">
    <button type="button" class="subtab active" data-mid3tab="tasks" onclick="showMid3Tab('${day}','tasks',this)">Tasks & Goals</button>
    <button type="button" class="subtab" data-mid3tab="contacts" onclick="showMid3Tab('${day}','contacts',this)">Contact Log</button>
    ${day==="0928"?`<button type="button" class="subtab" data-mid3tab="account" onclick="showMid3Tab('${day}','account',this)">Monday Account Setup</button>`:""}
   </div>
  </div>
  <div id="${day}_mid3_tasks" class="span12">
   <div class="grid">
    <div class="card span12"><h3>Today’s Goals</h3><div class="mini-grid"><div class="goal"><strong>+5</strong><span>Followers minimum</span></div><div class="goal"><strong>+5</strong><span>Store subscribers minimum</span></div></div><div class="goal" style="margin-top:10px"><strong>1+</strong><span>Completed sale — push for more if possible</span></div></div>
    <div class="card span8"><h3>Required Mid Shift 3 Tasks</h3>${makeTasks(day,"mid3",tasks)}</div>
    <div class="card span4"><h3>Goal Tracker</h3><div class="field"><label>New Followers <span class="req">*</span></label><input type="number" min="0" id="${day}_mid3Followers" data-save data-required></div><div class="field"><label>New Store Subscribers <span class="req">*</span></label><input type="number" min="0" id="${day}_mid3Subscribers" data-save data-required></div><div class="field"><label>Completed Sales <span class="req">*</span></label><input type="number" min="0" id="${day}_mid3Sales" data-save data-required></div><div class="field"><label>Extra Progress / Notes</label><textarea id="${day}_mid3GoalNotes" data-save placeholder="Anything above goal, strong leads, or progress worth noting."></textarea></div></div>
   </div>
  </div>
  <div id="${day}_mid3_contacts" class="span12 hidden">
   <div class="card span12">
    <div class="statusline"><div><h3>Customer / Lead Contact Log</h3><p class="sub">One square = one person. Record their name/handle, notes, and result. Choosing <b>Bought</b> opens that customer's order details.</p></div><button type="button" class="plus-btn" onclick="addContactCard('${day}')">＋ Add Contact</button></div>
    <textarea id="${day}_mid3ContactsData" data-save class="hidden"></textarea>
    <div id="${day}_mid3Contacts" class="contact-log" style="margin-top:14px"></div>
   </div>
  </div>
  ${day==="0928"?`<div id="${day}_mid3_account" class="span12 hidden"><div class="grid">${mondaySetup}</div></div>`:""}
 </div>`;
}

function showMid3Tab(day,tab,btn){
 ["tasks","contacts","account"].forEach(name=>{const el=document.getElementById(day+"_mid3_"+name);if(el)el.classList.toggle("hidden",name!==tab);});
 const root=btn?.closest('.card'); if(root) root.querySelectorAll('[data-mid3tab]').forEach(b=>b.classList.toggle('active',b.dataset.mid3tab===tab));
 if(tab==="contacts") renderContactCards(day);
}

function contactDefault(){return {name:"",notes:"",status:"contacted",orderName:"",orderNumber:"",total:"",items:[{item:"",qty:"1",size:""}]};}
function getContactData(day){
 const el=document.getElementById(day+"_mid3ContactsData");
 if(!el) return [];
 try{const v=JSON.parse(el.value||"[]");return Array.isArray(v)?v:[];}catch(e){return [];}
}
function setContactData(day,data){
 const el=document.getElementById(day+"_mid3ContactsData"); if(!el)return;
 el.value=JSON.stringify(data); el.dispatchEvent(new Event("input",{bubbles:true})); renderContactCards(day);
}
function addContactCard(day){const d=getContactData(day);d.push(contactDefault());setContactData(day,d);}
function removeContactCard(day,i){const d=getContactData(day);d.splice(i,1);setContactData(day,d);}
function addPurchaseItem(day,i){const d=getContactData(day);if(!d[i])return;d[i].items=d[i].items||[];d[i].items.push({item:"",qty:"1",size:""});setContactData(day,d);}
function removePurchaseItem(day,i,j){const d=getContactData(day);if(!d[i])return;d[i].items.splice(j,1);if(!d[i].items.length)d[i].items.push({item:"",qty:"1",size:""});setContactData(day,d);}
function updateContactField(day,i,key,value){const d=getContactData(day);if(!d[i])return;d[i][key]=value;const el=document.getElementById(day+"_mid3ContactsData");el.value=JSON.stringify(d);el.dispatchEvent(new Event("input",{bubbles:true}));if(key==="status")renderContactCards(day);}
function updatePurchaseItem(day,i,j,key,value){const d=getContactData(day);if(!d[i]||!d[i].items?.[j])return;d[i].items[j][key]=value;const el=document.getElementById(day+"_mid3ContactsData");el.value=JSON.stringify(d);el.dispatchEvent(new Event("input",{bubbles:true}));}
function esc(v){return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function renderContactCards(day){
 const wrap=document.getElementById(day+"_mid3Contacts"); if(!wrap)return;
 let d=getContactData(day); if(!d.length){d=[contactDefault()];const hidden=document.getElementById(day+"_mid3ContactsData");hidden.value=JSON.stringify(d);}
 wrap.innerHTML=d.map((c,i)=>`<div class="contact-card">
   <div class="contact-head"><h4>Contact ${i+1}</h4>${d.length>1?`<button type="button" class="small-btn danger-btn" onclick="removeContactCard('${day}',${i})">Remove</button>`:""}</div>
   <div class="mini-grid">
    <div class="field"><label>Name / Handle</label><input value="${esc(c.name)}" oninput="updateContactField('${day}',${i},'name',this.value)" placeholder="Who did you contact?"></div>
    <div class="field"><label>Result</label><select class="status-select" onchange="updateContactField('${day}',${i},'status',this.value)"><option value="contacted" ${c.status==='contacted'?'selected':''}>Contacted / No decision yet</option><option value="interested" ${c.status==='interested'?'selected':''}>Interested / Follow up</option><option value="bought" ${c.status==='bought'?'selected':''}>Bought</option><option value="declined" ${c.status==='declined'?'selected':''}>Did not buy / Declined</option><option value="noresponse" ${c.status==='noresponse'?'selected':''}>No response</option></select></div>
   </div>
   <div class="field"><label>Conversation Notes</label><textarea oninput="updateContactField('${day}',${i},'notes',this.value)" placeholder="What did they say? Questions, objections, follow-up needed, etc.">${esc(c.notes)}</textarea></div>
   ${c.status==='bought'?`<div class="purchase-box"><h4 style="margin-top:0">Purchase Details</h4><div class="mini-grid"><div class="field"><label>Customer Name</label><input value="${esc(c.orderName)}" oninput="updateContactField('${day}',${i},'orderName',this.value)" placeholder="Name on order"></div><div class="field"><label>Order Number</label><input value="${esc(c.orderNumber)}" oninput="updateContactField('${day}',${i},'orderNumber',this.value)" placeholder="#1001"></div></div><div class="field"><label>Total Money Spent ($)</label><input type="number" min="0" step=".01" value="${esc(c.total)}" oninput="updateContactField('${day}',${i},'total',this.value)" placeholder="0.00"></div><h4>Items Purchased</h4>${(c.items||[]).map((it,j)=>`<div class="product-row"><div class="field"><label>Item / Color</label><input value="${esc(it.item)}" oninput="updatePurchaseItem('${day}',${i},${j},'item',this.value)" placeholder="Brown Nocturne Tee"></div><div class="field"><label>Qty</label><input type="number" min="1" value="${esc(it.qty||1)}" oninput="updatePurchaseItem('${day}',${i},${j},'qty',this.value)"></div><div class="field"><label>Size</label><input value="${esc(it.size)}" oninput="updatePurchaseItem('${day}',${i},${j},'size',this.value)" placeholder="S / M / L / XL"></div>${(c.items||[]).length>1?`<button type="button" class="small-btn danger-btn" onclick="removePurchaseItem('${day}',${i},${j})">−</button>`:"<span></span>"}</div>`).join("")}<button type="button" class="plus-btn" onclick="addPurchaseItem('${day}',${i})">＋ Add Another Item</button></div>`:""}
  </div>`).join("");
}
function renderAllContactCards(){Object.keys(DAY_META).forEach(renderContactCards);}

function closingShiftPanel(day){
 const tasks=[
  ["finish","Finish or clearly document any incomplete task from the earlier shift blocks."],
  ["numbers","Record final sales, leads, follower growth, and major website/social results."],
  ["proof","Make sure required proof/screenshots/content were sent to the manager."],
  ["issues","Report store problems, customer issues, complaints, or anything requiring manager action."],
  ["handoff","Write a useful handoff so the manager/next shift knows what happened and what still needs attention."],
  ["report","Complete the end-of-shift report below with specific details — not one-word answers."],
  ["clockout","After the report is complete, clock out using the timecard at the top of the day page."]
 ];
 return `<div class="grid">
  <div class="card span12"><div class="statusline"><div><h2>Closing Shift · Report & Handoff</h2><p class="sub">Close the loop. Your report should make it possible for the manager to understand the entire shift without having to chase you for details.</p></div><span class="pill">Closing</span></div></div>
  <div class="card span12"><h3>Closing Checklist</h3>${makeTasks(day,"close",tasks)}</div>
  <div class="card span6"><h3>Final Numbers</h3><div class="field"><label>Total Sales Generated <span class="req">*</span></label><input type="number" min="0" id="${day}_closeSales" data-save data-required></div><div class="field"><label>Total Leads / Interested Customers <span class="req">*</span></label><input type="number" min="0" id="${day}_closeLeads" data-save data-required></div><div class="field"><label>Follower Change <span class="req">*</span></label><input type="number" id="${day}_closeFollowerChange" data-save data-required placeholder="Example: 10"></div></div>
  <div class="card span6"><h3>Performance Check</h3><div class="field"><label>Biggest Win Today <span class="req">*</span></label><textarea id="${day}_closeWin" data-save data-required></textarea></div><div class="field"><label>Biggest Problem / Blocker <span class="req">*</span></label><textarea id="${day}_closeProblem" data-save data-required placeholder="If none, write: None."></textarea></div></div>
  <div class="card span12"><h3>End-of-Shift Report</h3><div class="field"><label>Full Shift Summary <span class="req">*</span></label><textarea id="${day}_closeSummary" data-save data-required placeholder="Summarize what you worked on, content created, customer conversations, sales activity, results, and anything the manager needs to know."></textarea></div><div class="field"><label>Unfinished Work / Tomorrow's Follow-Up <span class="req">*</span></label><textarea id="${day}_closeNext" data-save data-required placeholder="What still needs to happen next? If everything is complete, write: Nothing outstanding."></textarea></div><div class="field handoff-highlight"><label>Shift Handoff — What does the next employee / manager need to know? <span class="req">*</span></label><textarea id="${day}_closeHandoff" data-save data-required placeholder="Leave a useful handoff: customer follow-ups, content waiting for approval, store issues, priorities, or anything the next person should continue."></textarea></div><div class="field"><label>Proof Submitted / Links <span class="req">*</span></label><textarea id="${day}_closeProof" data-save data-required placeholder="List screenshots, content, order proof, links, or where they were sent."></textarea></div></div>
 </div>`;
}

function beginningPanel(day){
  return `
  <div class="grid">
    <div class="card span12">
      <div class="statusline">
        <div>
          <h2>Beginning of Shift · 1st Hour</h2>
          <p class="sub">Work through each section from top to bottom. Complete this shift's required items to unlock the next shift. Each lock checks only the shift directly before it.</p>
        </div>
        <span class="pill" id="${day}_saveState">Autosave ready</span>
      </div>
      <div class="progress"><div id="${day}_bar"></div></div>
      <div class="statusline" style="margin-top:8px">
        <span class="pill" id="${day}_pct">0% complete</span>
        <span class="pill warn" id="${day}_req">Required fields incomplete</span>
      </div>
    </div>

    <div class="card span12">
      <h3>Quick Order — Follow This Exactly</h3>
      <div class="quickline"><div class="quicknum">1</div><div>Clock in and check Discord.</div></div>
      <div class="quickline"><div class="quicknum">2</div><div>Open the storefront and make sure everything works.</div></div>
      <div class="quickline"><div class="quicknum">3</div><div>Open Shopify Analytics and write down the current numbers.</div></div>
      <div class="quickline"><div class="quicknum">4</div><div>Check assigned social media account, DMs, comments, and follower count.</div></div>
      <div class="quickline"><div class="quicknum">5</div><div>Submit the beginning-of-shift check-in and move into regular work.</div></div>
    </div>

    <div class="card span12 gate-section" id="${day}_stage_connect" data-stage="connect">
      <div class="section-title"><h3><span class="step-badge">1</span>Clock In & Get Connected</h3></div>
      ${makeTasks(day,"open",openingTasks)}
    </div>

    <div class="card span12 gate-section" id="${day}_stage_store" data-stage="store">
      <div class="section-title"><h3><span class="step-badge">2</span>Shopify Store Health Check</h3></div>
      <div class="howto"><strong>How to get there:</strong> Shopify → Online Store → click the eye/Preview icon → check the website like you are a customer.</div>
      ${makeTasks(day,"store",storeTasks)}
      <div class="divider"></div>
      <div class="field">
        <label>Store Issues Found / Notes</label>
        <textarea id="${day}_storeIssues" data-save placeholder="If nothing is wrong, write: No issues found."></textarea>
      </div>
    </div>

    <div class="card span12 gate-section" id="${day}_stage_analytics" data-stage="analytics">
      <div class="section-title"><h3><span class="step-badge">3</span>Shopify Business Numbers</h3></div>
      <div class="notice"><strong>Do not copy the dashboard and leave.</strong> Actually open/click each metric and enter the most recent/current information shown.</div>
      <div class="metric-grid" style="margin-top:12px">
        <div class="metric"><label>Orders <span class="req">*</span></label><input type="number" min="0" id="${day}_orders" data-save data-required placeholder="0"></div>
        <div class="metric"><label>Conversion Rate % <span class="req">*</span></label><input type="number" min="0" step=".01" id="${day}_conversion" data-save data-required placeholder="0.00"></div>
        <div class="metric"><label>Sessions <span class="req">*</span></label><input type="number" min="0" id="${day}_sessions" data-save data-required placeholder="0"></div>
        <div class="metric"><label>Total Sales $ <span class="req">*</span></label><input type="number" min="0" step=".01" id="${day}_sales" data-save data-required placeholder="0.00"></div>
      </div>
      <div class="field-grid" style="margin-top:12px">
        <div class="field"><label>Most Recent Order #</label><input type="text" id="${day}_orderNumber" data-save placeholder="#1001"></div>
        <div class="field"><label>Most Recent Order Date/Time</label><input type="text" id="${day}_orderTime" data-save placeholder="Example: 9/28 9:42 AM"></div>
        <div class="field"><label>Most Recent Order Total $</label><input type="number" min="0" step=".01" id="${day}_orderTotal" data-save placeholder="0.00"></div>
        <div class="field"><label>Analytics Notes</label><input type="text" id="${day}_analyticsNotes" data-save placeholder="Anything unusual?"></div>
      </div>
    </div>

    <div class="card span12 gate-section" id="${day}_stage_social" data-stage="social">
      <div class="section-title"><h3><span class="step-badge">4</span>Assigned Social Media Check</h3></div>
      <div class="howto"><strong>Keep this quick:</strong> check the assigned account, review DMs/comments/notifications, note buying interest, and report anything that needs management.</div>
      <div class="field-grid" style="margin-bottom:12px">
        <div class="field">
          <label>Assigned Platform <span class="req">*</span></label>
          <input type="text" id="${day}_platform" placeholder="Instagram / TikTok / etc." data-save data-required>
        </div>
        <div class="field">
          <label>Starting Followers <span class="req">*</span></label>
          <input type="number" min="0" id="${day}_followers" placeholder="0" data-save data-required>
        </div>
      </div>
      ${makeTasks(day,"social",socialTasks)}
      <div class="divider"></div>
      <div class="field">
        <label>Important DMs / Comments / Leads</label>
        <textarea id="${day}_socialNotes" data-save placeholder="Write anything that needs attention."></textarea>
      </div>
    </div>

    <div class="card span8 gate-section" id="${day}_stage_submit" data-stage="submit">
      <div class="section-title"><h3><span class="step-badge">5</span>Submit Beginning-of-Shift Check-In</h3></div>
      ${makeTasks(day,"submit",submitTasks)}
    </div>

    <div class="card span4 gate-section" id="${day}_stage_finish" data-stage="finish">
      <h3>Ready to Start Regular Work?</h3>
      <div class="field">
        <label>First Assigned Task <span class="req">*</span></label>
        <textarea id="${day}_firstTask" data-save data-required placeholder="Write the first task you are starting next."></textarea>
      </div>
      <button class="primary" id="${day}_finishBtn" data-finish-day="${day}" style="width:100%;margin-top:10px">Mark 1st Hour Complete</button>
      <div id="${day}_complete" class="success hidden" style="margin-top:10px">Beginning-of-shift / 1st-hour checklist complete.</div>
    </div>

    <div class="card span12">
      <h3>Additional Notes</h3>
      <textarea id="${day}_notes" data-save placeholder="Anything else management should know?"></textarea>
    </div>
  </div>`;
}

function dayPage(day){
  const d=DAY_META[day];
  return `
    <div class="card span12" style="margin-bottom:14px">
      <div class="statusline">
        <div>
          <h2>${d.label} · ${d.date}</h2>
          <p class="sub" style="margin-bottom:0">Employee time clock</p>
        </div>
        <span class="pill" id="${day}_clockStatus"><span class="status-dot" id="${day}_clockDot"></span>Not clocked in</span>
      </div>

      <div class="timecard" style="margin-top:14px">
        <div class="time-box">
          <div class="time-label">Current Device Time</div>
          <div class="time-value" id="${day}_liveClock">--:--:--</div>
          <div class="time-sub" id="${day}_liveDate">--</div>
        </div>

        <div class="time-box">
          <div class="time-label">Clocked In</div>
          <div class="time-value" id="${day}_clockInDisplay">—</div>
          <div class="time-sub" id="${day}_clockInDate">Not recorded</div>
        </div>

        <div class="time-box">
          <div class="time-label">Clocked Out</div>
          <div class="time-value" id="${day}_clockOutDisplay">—</div>
          <div class="time-sub" id="${day}_durationDisplay">Shift duration: —</div>
        </div>
      </div>


      <div class="payroll-card">
        <div class="payroll-top">
          <div>
            <div class="time-label">Live Shift Earnings</div>
            <div class="payroll-money" id="${day}_payAmount">$0.00</div>
          </div>
          <div style="text-align:right">
            <div class="payroll-meta" id="${day}_payTime">0h 00m 00s paid</div>
            <div class="payroll-meta">$7.75/hr · 4-hour paid cap</div>
          </div>
        </div>
        <div class="payroll-track"><div class="payroll-fill" id="${day}_payBar"></div></div>
        <div class="payroll-cap" id="${day}_payCap">Progress to scheduled 4-hour base pay: $31.00</div>
        <div class="payroll-breakdown"><span>Base: <strong id="${day}_basePay">$0.00</strong></span><span>Reported commission: <strong id="${day}_commissionPay">$0.00</strong></span><span>Projected total: <strong id="${day}_projectedPay">$0.00</strong></span></div>
        <div class="tool-note" style="margin-top:7px">The scheduled earnings bar stops at 4 hours. Your timecard still records actual clock-out time; all time worked must be reported.</div>
      </div>


      <div class="pacing-strip">
        <div><strong>Task Pacing</strong><div class="tool-note">Each task requires at least 8 seconds of active time before it can be marked complete.</div></div>
        <div class="warning-counter" id="${day}_skipWarnings">Warnings 0/3</div>
      </div>
      <div class="time-urgency" id="${day}_timeUrgency">
        <div class="urgency-title" id="${day}_urgencyTitle">Shift pacing ready</div>
        <div class="urgency-copy" id="${day}_urgencyCopy">Clock in to start the 4-hour shift countdown.</div>
      </div>

      <div class="clock-actions">
        <button type="button" class="clock-btn in" id="${day}_clockInBtn" onclick="clockIn('${day}')">Clock In Now</button>
        <button type="button" class="clock-btn out" id="${day}_clockOutBtn" onclick="clockOut('${day}')" disabled>Clock Out Now</button>
        <button type="button" class="clock-btn" onclick="copyTimecard('${day}')">Copy Timecard</button>
      </div>
      <div id="${day}_clockConfirmation" class="success hidden" style="margin-top:12px"></div>
      <div class="timecard-note">
        Tap Clock In Now or Clock Out Now once. The exact timestamp will immediately appear above and remain attached to the selected employee on this device/browser when storage is available.
      </div>
    </div>

    <div class="card span12" style="margin-bottom:14px">
      <h2>${d.label} · ${d.date}</h2>
      <p class="sub">Choose the shift section you are working on.</p>
      <div class="day-subtabs" data-daytabs="${day}">
        <button class="subtab active" data-subtab="beginning">Beginning of Shift · 1st Hr</button>
        <button class="subtab" data-subtab="mid1">Mid Shift 1</button>
        <button class="subtab" data-subtab="mid2">Mid Shift 2</button>
        <button class="subtab" data-subtab="mid3">Mid Shift 3</button>
        <button class="subtab" data-subtab="closing">Closing Shift</button>
      </div>
    </div>

    <div class="subpanel active" data-subpanel="${day}:beginning">${beginningPanel(day)}</div>
    <div class="subpanel" data-subpanel="${day}:mid1">${midShift1Panel(day)}</div>
    <div class="subpanel" data-subpanel="${day}:mid2">${midShift2Panel(day)}</div>
    <div class="subpanel" data-subpanel="${day}:mid3">${midShift3Panel(day)}</div>
    <div class="subpanel" data-subpanel="${day}:closing">${closingShiftPanel(day)}</div>
  `;
}

Object.keys(DAY_META).forEach(day=>{
  document.getElementById("content-"+day).innerHTML = dayPage(day);
});
setTimeout(()=>renderAllContactCards(),0);



const MEMORY_STORE = {};
function safeGet(key){
  try{
    return window.localStorage ? localStorage.getItem(key) : (MEMORY_STORE[key] || null);
  }catch(e){
    return MEMORY_STORE[key] || null;
  }
}
function safeSet(key,value){
  MEMORY_STORE[key]=value;
  try{
    if(window.localStorage) localStorage.setItem(key,value);
  }catch(e){
    // Some file/preview environments block localStorage.
    // The portal still works for the current open session via MEMORY_STORE.
  }
}



const REGISTRY_KEY = "FOURTHHAVEN_EMPLOYEE_REGISTRY_V1";
const MANAGER_ID = "__manager__";
const NEW_EMPLOYEE_ID = "__new__";
const BUILTIN_EMPLOYEES = [
  {id:"Sam", displayName:"Sam"},
  {id:"Angel", displayName:"Angel"}
];

let AUTHENTICATED_EMPLOYEE = null;
let AUTHENTICATED_DISPLAY_NAME = null;
let AUTH_ROLE = null;
let PENDING_EMPLOYEE = null;
let PENDING_MODE = null;
let PENDING_PHOTO_DATA = null;
let MANAGER_SELECTED_EMPLOYEE = null;

function authKey(employeeId){ return WEEK_KEY+"::AUTH::"+employeeId; }
function managerAuthKey(){ return WEEK_KEY+"::MANAGER_AUTH"; }

function getRegistry(){
  const raw=safeGet(REGISTRY_KEY);
  if(!raw) return [];
  try{
    const arr=JSON.parse(raw);
    return Array.isArray(arr)?arr:[];
  }catch(e){ return []; }
}
function saveRegistry(arr){ safeSet(REGISTRY_KEY,JSON.stringify(arr)); }

function allEmployees(){
  const custom=getRegistry();
  const removed=readJsonKey ? readJsonKey(WEEK_KEY+"::REMOVED_BUILTINS",[]) : [];
  const seen=new Set();
  const combined=[];
  [...BUILTIN_EMPLOYEES.filter(e=>!removed.includes(e.id)),...custom].forEach(emp=>{
    if(!emp || !emp.id || seen.has(emp.id)) return;
    seen.add(emp.id);
    combined.push(emp);
  });
  return combined;
}
function employeeById(id){
  return allEmployees().find(e=>e.id===id) || null;
}
function makeEmployeeId(name){
  const slug=name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,24) || "employee";
  return "emp_"+slug+"_"+Date.now();
}
function initials(name){
  return (name||"?").trim().split(/\s+/).slice(0,2).map(x=>x[0]?.toUpperCase()||"").join("") || "?";
}
function renderEmployeeOptions(selected=null){
  const select=document.getElementById("employeeSelect");
  const current=selected ?? select.value;
  select.innerHTML="";

  const placeholder=document.createElement("option");
  placeholder.value="";
  placeholder.textContent="Select employee";
  select.appendChild(placeholder);

  allEmployees().forEach(emp=>{
    const opt=document.createElement("option");
    opt.value=emp.id;
    opt.textContent=emp.displayName;
    select.appendChild(opt);
  });

  const add=document.createElement("option");
  add.value=NEW_EMPLOYEE_ID;
  add.textContent="Other / New Employee";
  select.appendChild(add);

  const manager=document.createElement("option");
  manager.value=MANAGER_ID;
  manager.textContent="Manager Override";
  select.appendChild(manager);

  if([...select.options].some(o=>o.value===current)) select.value=current;
}

async function hashPassword(text){
  try{
    if(window.crypto && crypto.subtle){
      const bytes=new TextEncoder().encode(text);
      const digest=await crypto.subtle.digest("SHA-256",bytes);
      return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");
    }
  }catch(e){}
  let h=2166136261;
  for(let i=0;i<text.length;i++){ h^=text.charCodeAt(i); h=Math.imul(h,16777619); }
  return "fallback-"+(h>>>0).toString(16);
}
function getAuthRecord(employeeId){
  const key=employeeId===MANAGER_ID ? managerAuthKey() : authKey(employeeId);
  const raw=safeGet(key);
  if(!raw) return null;
  try{return JSON.parse(raw);}catch(e){return null;}
}
function saveAuthRecord(employeeId,record){
  const key=employeeId===MANAGER_ID ? managerAuthKey() : authKey(employeeId);
  safeSet(key,JSON.stringify(record));
}

function resetAuthForm(){
  ["authDisplayName","authUsername","authPassword","authPasswordConfirm"].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value="";
  });
  document.getElementById("authPhotoInput").value="";
  document.getElementById("authPhotoPreview").src="";
  document.getElementById("authPhotoPreview").classList.add("hidden");
  document.getElementById("authError").textContent="";
  PENDING_PHOTO_DATA=null;
}
function showAuth(employeeId){
  clearTransientTaskUI();
  PENDING_EMPLOYEE=employeeId;
  resetAuthForm();

  const overlay=document.getElementById("authOverlay");
  const title=document.getElementById("authTitle");
  const subtitle=document.getElementById("authSubtitle");
  const displayWrap=document.getElementById("authDisplayNameWrap");
  const confirmWrap=document.getElementById("confirmPasswordWrap");
  const photoWrap=document.getElementById("authPhotoWrap");
  const submit=document.getElementById("authSubmit");
  const forgotManager=document.getElementById("forgotManagerPassword");
  forgotManager.classList.add("hidden");

  const isManager=employeeId===MANAGER_ID;
  const isNew=employeeId===NEW_EMPLOYEE_ID;
  const existing=isManager ? getAuthRecord(MANAGER_ID) : (isNew ? null : getAuthRecord(employeeId));

  if(isManager){
    displayWrap.classList.add("hidden");
    photoWrap.classList.add("hidden");
    if(existing){
      PENDING_MODE="manager-login";
      title.textContent="Manager Override Login";
      subtitle.textContent="Enter the manager credentials to access all employee reports.";
      confirmWrap.classList.add("hidden");
      submit.textContent="Open Manager Dashboard";
      forgotManager.classList.remove("hidden");
    }else{
      PENDING_MODE="manager-create";
      title.textContent="Create Manager Override Account";
      subtitle.textContent="First-time manager setup. This account can view all employee records stored in this portal.";
      confirmWrap.classList.remove("hidden");
      submit.textContent="Create Manager Account";
    }
  }else if(isNew){
    PENDING_MODE="new-employee";
    title.textContent="Create New Employee Account";
    subtitle.textContent="Create the employee's permanent account. After setup, their name will appear in the employee list from now on.";
    displayWrap.classList.remove("hidden");
    confirmWrap.classList.remove("hidden");
    photoWrap.classList.remove("hidden");
    submit.textContent="Create Employee Account";
  }else if(existing){
    PENDING_MODE="employee-login";
    title.textContent=(existing.displayName || employeeById(employeeId)?.displayName || employeeId)+" Login";
    subtitle.textContent="Enter your username and password to access your employee account.";
    displayWrap.classList.add("hidden");
    confirmWrap.classList.add("hidden");
    photoWrap.classList.add("hidden");
    submit.textContent="Log In";
  }else{
    PENDING_MODE="employee-create";
    const emp=employeeById(employeeId);
    title.textContent="Create "+(emp?.displayName || employeeId)+"'s Account";
    subtitle.textContent="First-time setup. Create login information and add a clear professional profile photo.";
    displayWrap.classList.add("hidden");
    confirmWrap.classList.remove("hidden");
    photoWrap.classList.remove("hidden");
    submit.textContent="Create Account";
  }

  overlay.classList.remove("hidden");
  setTimeout(()=>document.getElementById(isNew?"authDisplayName":"authUsername").focus(),50);
}

function resetManagerCredentials(){
  const record=getAuthRecord(MANAGER_ID);
  if(!record){
    document.getElementById("authError").textContent="No Manager Override account exists yet.";
    return;
  }

  const ok=confirm(
    "Reset Manager Override login?\n\n" +
    "This will ONLY remove the manager username/password. " +
    "Employee accounts, profile photos, clock-ins, reports, snapshots, and saved work will stay intact.\n\n" +
    "After reset, select Manager Override again to create new credentials."
  );
  if(!ok) return;

  // Remove only the manager auth record. safeSet has no delete helper, so mark it empty.
  try{
    localStorage.removeItem(managerAuthKey());
  }catch(e){}
  MEMORY_STORE[managerAuthKey()]=null;

  document.getElementById("authOverlay").classList.add("hidden");
  PENDING_EMPLOYEE=null;
  PENDING_MODE=null;
  PENDING_PHOTO_DATA=null;
  document.getElementById("employeeSelect").value="";
  alert("Manager login reset. Your employee data was not deleted. Select Manager Override again and create a new username and password.");
}

function closeAuth(resetSelection=true){
  document.getElementById("authOverlay").classList.add("hidden");
  PENDING_EMPLOYEE=null;
  PENDING_MODE=null;
  PENDING_PHOTO_DATA=null;
  if(resetSelection){
    document.getElementById("employeeSelect").value=AUTHENTICATED_EMPLOYEE || "";
  }
}

function fileToProfileData(file){
  return new Promise((resolve,reject)=>{
    if(!file || !file.type.startsWith("image/")) return reject(new Error("Choose an image file."));
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error("Could not read image."));
    reader.onload=()=>{
      const img=new Image();
      img.onerror=()=>reject(new Error("Could not process image."));
      img.onload=()=>{
        const size=Math.min(img.width,img.height);
        const sx=(img.width-size)/2, sy=(img.height-size)/2;
        const canvas=document.createElement("canvas");
        canvas.width=420; canvas.height=420;
        const ctx=canvas.getContext("2d");
        ctx.drawImage(img,sx,sy,size,size,0,0,420,420);
        resolve(canvas.toDataURL("image/jpeg",0.82));
      };
      img.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function handleAuthPhoto(file){
  const error=document.getElementById("authError");
  try{
    PENDING_PHOTO_DATA=await fileToProfileData(file);
    const preview=document.getElementById("authPhotoPreview");
    preview.src=PENDING_PHOTO_DATA;
    preview.classList.remove("hidden");
    error.textContent="";
  }catch(e){
    PENDING_PHOTO_DATA=null;
    error.textContent=e.message || "Could not use that photo.";
  }
}

async function submitAuth(){
  const employeeId=PENDING_EMPLOYEE;
  if(!employeeId) return;

  const username=document.getElementById("authUsername").value.trim();
  const password=document.getElementById("authPassword").value;
  const confirmPassword=document.getElementById("authPasswordConfirm").value;
  const displayName=document.getElementById("authDisplayName").value.trim();
  const error=document.getElementById("authError");

  if(username.length<3){error.textContent="Username must be at least 3 characters.";return;}
  if(password.length<6){error.textContent="Password must be at least 6 characters.";return;}

  const passwordHash=await hashPassword(password);

  if(PENDING_MODE==="manager-create"){
    if(password!==confirmPassword){error.textContent="Passwords do not match.";return;}
    saveAuthRecord(MANAGER_ID,{role:"manager",username,passwordHash,createdAt:new Date().toISOString()});
    AUTHENTICATED_EMPLOYEE=MANAGER_ID;
    AUTHENTICATED_DISPLAY_NAME="Manager";
    AUTH_ROLE="manager";
    finishManagerLogin();
    showSaved("Manager account saved");
    return;
  }

  if(PENDING_MODE==="manager-login"){
    const record=getAuthRecord(MANAGER_ID);
    if(!record || record.username!==username || record.passwordHash!==passwordHash){
      error.textContent="Incorrect manager username or password.";return;
    }
    AUTHENTICATED_EMPLOYEE=MANAGER_ID;
    AUTHENTICATED_DISPLAY_NAME="Manager";
    AUTH_ROLE="manager";
    finishManagerLogin();
    return;
  }

  if(PENDING_MODE==="new-employee"){
    if(displayName.length<2){error.textContent="Enter the employee's name.";return;}
    const duplicate=allEmployees().some(e=>e.displayName.toLowerCase()===displayName.toLowerCase());
    if(duplicate){error.textContent="That employee name already exists in the list.";return;}
    if(password!==confirmPassword){error.textContent="Passwords do not match.";return;}
    if(!PENDING_PHOTO_DATA){error.textContent="Add a professional profile photo before continuing.";return;}

    const newId=makeEmployeeId(displayName);
    const registry=getRegistry();
    registry.push({id:newId,displayName,createdAt:new Date().toISOString()});
    saveRegistry(registry);
    saveAuthRecord(newId,{
      role:"employee",displayName,username,passwordHash,
      profilePhoto:PENDING_PHOTO_DATA,createdAt:new Date().toISOString()
    });
    renderEmployeeOptions(newId);
    AUTHENTICATED_EMPLOYEE=newId;
    AUTHENTICATED_DISPLAY_NAME=displayName;
    AUTH_ROLE="employee";
    finishEmployeeLogin();
    showSaved("Employee account saved");
    return;
  }

  if(PENDING_MODE==="employee-create"){
    if(password!==confirmPassword){error.textContent="Passwords do not match.";return;}
    if(!PENDING_PHOTO_DATA){error.textContent="Add a professional profile photo before continuing.";return;}
    const emp=employeeById(employeeId);
    const name=emp?.displayName || employeeId;
    saveAuthRecord(employeeId,{
      role:"employee",displayName:name,username,passwordHash,
      profilePhoto:PENDING_PHOTO_DATA,createdAt:new Date().toISOString()
    });
    AUTHENTICATED_EMPLOYEE=employeeId;
    AUTHENTICATED_DISPLAY_NAME=name;
    AUTH_ROLE="employee";
    finishEmployeeLogin();
    showSaved("Employee account saved");
    return;
  }

  if(PENDING_MODE==="employee-login"){
    const record=getAuthRecord(employeeId);
    if(!record || record.username!==username || record.passwordHash!==passwordHash){
      error.textContent="Incorrect username or password.";return;
    }
    if(!record.profilePhoto){
      error.textContent="A professional profile photo is required for this employee account. Ask management to update the account or complete the required photo setup.";
      return;
    }
    AUTHENTICATED_EMPLOYEE=employeeId;
    AUTHENTICATED_DISPLAY_NAME=record.displayName || employeeById(employeeId)?.displayName || employeeId;
    AUTH_ROLE="employee";
    finishEmployeeLogin();
  }
}


const CEO_MESSAGE_KEY=WEEK_KEY+"::CEO_MESSAGE";
function getCEOMessage(){
  try{return JSON.parse(safeGet(CEO_MESSAGE_KEY)||"null");}catch(e){return null;}
}
function refreshCEOEditor(){
  const msg=getCEOMessage();
  const ed=document.getElementById("ceoMessageEditor");
  const st=document.getElementById("ceoMessageStatus");
  if(ed) ed.value=msg?.text||"";
  if(st) st.textContent=msg?.updatedAt ? "Published "+new Date(msg.updatedAt).toLocaleString() : "No message published on this device.";
}
function publishCEOMessage(){
  if(AUTH_ROLE!=="manager") return;
  const ed=document.getElementById("ceoMessageEditor");
  const text=(ed?.value||"").trim();
  if(!text){alert("Write a CEO message first.");return;}
  safeSet(CEO_MESSAGE_KEY,JSON.stringify({text,updatedAt:new Date().toISOString()}));
  refreshCEOEditor();
  allEmployees().filter(e=>getAuthRecord(e.id)).forEach(e=>addNotification(e.id,"New CEO message",text,"#overview","ceo"));
  showSaved("CEO message published");
}
function clearCEOMessage(){
  if(AUTH_ROLE!=="manager") return;
  safeSet(CEO_MESSAGE_KEY,JSON.stringify({text:"",updatedAt:new Date().toISOString()}));
  refreshCEOEditor();
  showSaved("CEO message cleared");
}
function showCEOMessageOnLogin(){
  const msg=getCEOMessage();
  if(!msg?.text) return;
  const overlay=document.getElementById("ceoMessageOverlay");
  document.getElementById("ceoLoginMessage").textContent=msg.text;
  document.getElementById("ceoLoginTimestamp").textContent="Posted "+new Date(msg.updatedAt).toLocaleString();
  overlay.classList.remove("hidden");
}
function acknowledgeCEOMessage(){
  document.getElementById("ceoMessageOverlay").classList.add("hidden");
}

function finishEmployeeLogin(){
  clearTransientTaskUI();
  stopManagerLive();
  document.getElementById("authOverlay").classList.add("hidden");
  PENDING_EMPLOYEE=null; PENDING_MODE=null; PENDING_PHOTO_DATA=null;
  document.body.classList.remove("manager-mode");
  document.getElementById("saveBtn").style.display="";
  document.getElementById("employeeSelect").value=AUTHENTICATED_EMPLOYEE;
  document.getElementById("accountName").textContent=AUTHENTICATED_DISPLAY_NAME;
  document.getElementById("accountChip").style.display="flex";
  updateHeaderAvatar();
  updateEmployeeProfileCard();
  load();
  location.hash="#overview";
  Object.keys(DAY_META).forEach(renderWarningCounter);
  setTimeout(()=>{showCEOMessageOnLogin();refreshTaskPacing(document);renderCommandCenter();renderScheduleCenter();renderPayCenter();renderProfileDashboard();updateNotificationBadge();syncV19Chrome();Object.keys(DAY_META).forEach(renderV19ShiftStates);},80);
}
function finishManagerLogin(){
  clearTransientTaskUI();
  document.getElementById("authOverlay").classList.add("hidden");
  PENDING_EMPLOYEE=null; PENDING_MODE=null; PENDING_PHOTO_DATA=null;
  document.body.classList.add("manager-mode");
  document.getElementById("employeeSelect").value=MANAGER_ID;
  document.getElementById("accountName").textContent="Manager";
  document.getElementById("accountChip").style.display="flex";
  document.getElementById("accountAvatar").classList.add("hidden");
  document.getElementById("employeeProfileCard").classList.add("hidden");
  document.getElementById("saveBtn").style.display="none";
  MANAGER_VIEW_SNAPSHOT=null;
  MANAGER_VIEWING_HISTORY=false;
  renderManagerDashboard();
  renderManagerPacingAlerts();
  renderManagerCommissions();
  renderProductionChart();
  renderManagerTeamStatus();
  renderManagerActionCenter();
  renderManagerSnapshots();
  renderManagerAudit();
  updateAllGates();
  refreshCEOEditor();
  startManagerLive();
  syncV19Chrome();renderManagerTeamStatus();
  location.hash="#manager";
}
function logout(){
  stopManagerLive();
  ACTIVE_MESSAGE_PEER=null;
  clearTransientTaskUI();
  document.getElementById("goodJobOverlay")?.classList.remove("show");
  AUTHENTICATED_EMPLOYEE=null;
  AUTHENTICATED_DISPLAY_NAME=null;
  AUTH_ROLE=null;
  MANAGER_SELECTED_EMPLOYEE=null;
  MANAGER_VIEW_SNAPSHOT=null;
  TIME_CARDS={};
  document.body.classList.remove("manager-mode");
  document.getElementById("saveBtn").style.display="";
  renderEmployeeOptions("");
  document.getElementById("employeeSelect").value="";
  document.getElementById("accountChip").style.display="none";
  document.getElementById("employeeProfileCard").classList.add("hidden");
  clearForm();
  Object.keys(DAY_META).forEach(renderClock);
  updateProgress();
  updateAllGates();
  syncV19Chrome();
  location.hash="#overview";
}

function updateHeaderAvatar(){
  const img=document.getElementById("accountAvatar");
  if(AUTH_ROLE!=="employee"){ img.classList.add("hidden"); return; }
  const record=getAuthRecord(AUTHENTICATED_EMPLOYEE);
  if(record?.profilePhoto){
    img.src=record.profilePhoto; img.classList.remove("hidden");
  }else{
    img.classList.add("hidden");
  }
}
function updateEmployeeProfileCard(){
  const card=document.getElementById("employeeProfileCard");
  if(AUTH_ROLE!=="employee"){card.classList.add("hidden");return;}
  const record=getAuthRecord(AUTHENTICATED_EMPLOYEE) || {};
  const photo=document.getElementById("employeeProfilePhoto");
  const name=document.getElementById("employeeProfileName");
  const username=document.getElementById("employeeProfileUsername");
  photo.src=record.profilePhoto || "";
  name.textContent=AUTHENTICATED_DISPLAY_NAME || record.displayName || "Employee";
  username.textContent=record.username ? "@"+record.username : "";
  card.classList.remove("hidden");
}
function openProfileModal(required=false){
  if(AUTH_ROLE!=="employee") return;
  const record=getAuthRecord(AUTHENTICATED_EMPLOYEE) || {};
  document.getElementById("profileSubtitle").textContent=required
    ? "A professional profile photo is required before continuing."
    : "Update the professional photo management sees for your account.";
  const preview=document.getElementById("profilePhotoPreview");
  preview.src=record.profilePhoto || "";
  document.getElementById("profilePhotoInput").value="";
  document.getElementById("profileError").textContent="";
  document.getElementById("profileCancel").disabled=required;
  document.getElementById("profileOverlay").classList.remove("hidden");
}
async function saveProfilePhoto(){
  const input=document.getElementById("profilePhotoInput");
  const error=document.getElementById("profileError");
  const record=getAuthRecord(AUTHENTICATED_EMPLOYEE);
  if(!record){error.textContent="Employee account not found.";return;}
  if(!input.files?.[0]){error.textContent="Choose a photo first.";return;}
  try{
    const data=await fileToProfileData(input.files[0]);
    record.profilePhoto=data;
    record.updatedAt=new Date().toISOString();
    saveAuthRecord(AUTHENTICATED_EMPLOYEE,record);
    document.getElementById("profileOverlay").classList.add("hidden");
    updateHeaderAvatar();
    updateEmployeeProfileCard();
    showSaved("Profile photo saved");
  }catch(e){error.textContent=e.message || "Could not save photo.";}
}




let MANAGER_LIVE_TIMER=null;
let MANAGER_LAST_SIGNATURE="";
let MANAGER_LAST_SNAPSHOT_AT=0;
let MANAGER_VIEWING_HISTORY=false;

function liveManagerSignature(){
  const payload=allEmployees().map(emp=>({
    id:emp.id,
    auth:getAuthRecord(emp.id),
    data:getEmployeeData(emp.id)
  }));
  try{return JSON.stringify(payload);}catch(e){return String(Date.now());}
}
function setManagerLiveText(text){
  const el=document.getElementById("managerLiveText");
  if(el) el.textContent=text;
}
function flashManagerChange(){
  const card=document.getElementById("managerReportCard");
  if(!card)return;
  card.classList.remove("live-change");
  void card.offsetWidth;
  card.classList.add("live-change");
}
function startManagerLive(){
  stopManagerLive();
  MANAGER_VIEWING_HISTORY=false;
  MANAGER_LAST_SIGNATURE=liveManagerSignature();
  setManagerLiveText("LIVE · "+new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}));

  MANAGER_LIVE_TIMER=setInterval(()=>{
    if(AUTH_ROLE!=="manager") return;
    if(MANAGER_VIEWING_HISTORY){
      setManagerLiveText("HISTORY VIEW · Live paused");
      return;
    }

    const signature=liveManagerSignature();
    const changed=signature!==MANAGER_LAST_SIGNATURE;
    MANAGER_LAST_SIGNATURE=signature;

    // Live view always reads current storage, never a stale snapshot.
    MANAGER_VIEW_SNAPSHOT=null;

    if(changed){
      const selected=MANAGER_SELECTED_EMPLOYEE;
      renderManagerDashboard();
      renderManagerTeamStatus();
      if(selected) renderManagerEmployeeReport(selected);
      flashManagerChange();

      // Preserve meaningful versions, but avoid creating dozens of snapshots
      // if several fields change within a few seconds.
      const now=Date.now();
      if(now-MANAGER_LAST_SNAPSHOT_AT>5000){
        const snaps=readJsonKey(MANAGER_SNAPSHOTS_KEY,[]);
        const snap=buildManagerSnapshot();
        snaps.unshift(snap);
        writeJsonKey(MANAGER_SNAPSHOTS_KEY,snaps.slice(0,20));
        MANAGER_LAST_SNAPSHOT_AT=now;
        renderManagerSnapshots();
      }
    }

    setManagerLiveText("LIVE · "+new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}));
  },1000);
}
function stopManagerLive(){
  if(MANAGER_LIVE_TIMER){
    clearInterval(MANAGER_LIVE_TIMER);
    MANAGER_LIVE_TIMER=null;
  }
}
function returnToLiveManager(){
  MANAGER_VIEWING_HISTORY=false;
  MANAGER_VIEW_SNAPSHOT=null;
  MANAGER_LAST_SIGNATURE=liveManagerSignature();
  renderManagerDashboard();
  if(MANAGER_SELECTED_EMPLOYEE) renderManagerEmployeeReport(MANAGER_SELECTED_EMPLOYEE);
  setManagerLiveText("LIVE · "+new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}));
}

const MANAGER_SNAPSHOTS_KEY=WEEK_KEY+"::MANAGER_SNAPSHOTS";
const MANAGER_AUDIT_KEY=WEEK_KEY+"::MANAGER_AUDIT";
let MANAGER_VIEW_SNAPSHOT=null;
let MANAGER_EDIT_CONTEXT=null;

function readJsonKey(key,fallback){
  const raw=safeGet(key); if(!raw) return fallback;
  try{return JSON.parse(raw);}catch(e){return fallback;}
}
function writeJsonKey(key,value){safeSet(key,JSON.stringify(value));}
function managerAudit(action,details){
  const items=readJsonKey(MANAGER_AUDIT_KEY,[]);
  items.unshift({at:new Date().toISOString(),action,details});
  writeJsonKey(MANAGER_AUDIT_KEY,items.slice(0,100));
  renderManagerAudit();
  autoSaveManager("Manager action saved");
  autoSaveManager("Latest employee data loaded");
}
function buildManagerSnapshot(){
  const employees=allEmployees().map(emp=>({
    emp,
    auth:getAuthRecord(emp.id),
    data:getEmployeeData(emp.id)
  }));
  return {id:"snap_"+Date.now(),createdAt:new Date().toISOString(),employees};
}
function saveManagerSnapshot(){
  const snaps=readJsonKey(MANAGER_SNAPSHOTS_KEY,[]);
  const snap=buildManagerSnapshot();
  snaps.unshift(snap);
  writeJsonKey(MANAGER_SNAPSHOTS_KEY,snaps.slice(0,20));
  MANAGER_VIEW_SNAPSHOT=snap;
  return snap;
}
function snapshotEmployee(employeeId){
  if(!MANAGER_VIEW_SNAPSHOT) return null;
  return MANAGER_VIEW_SNAPSHOT.employees.find(x=>x.emp.id===employeeId)||null;
}
function renderManagerSnapshots(){
  const el=document.getElementById("managerSnapshots"); if(!el) return;
  const snaps=readJsonKey(MANAGER_SNAPSHOTS_KEY,[]);
  if(!snaps.length){el.innerHTML='<div class="manager-empty">No snapshots yet. Click Refresh Latest.</div>';return;}
  el.innerHTML=snaps.map(s=>`
    <div class="snapshot-item ${MANAGER_VIEWING_HISTORY && MANAGER_VIEW_SNAPSHOT?.id===s.id?"active":""}" data-snapshot-id="${escapeHtml(s.id)}">
      <strong>${escapeHtml(new Date(s.createdAt).toLocaleString())}</strong>
      <small>${s.employees.length} employee record(s)</small>
    </div>`).join("");
}
function renderManagerAudit(){
  const el=document.getElementById("managerAudit"); if(!el) return;
  const items=readJsonKey(MANAGER_AUDIT_KEY,[]);
  el.innerHTML=items.length?items.slice(0,12).map(x=>`
    <div class="audit-item"><strong>${escapeHtml(x.action)}</strong>
      <small>${escapeHtml(new Date(x.at).toLocaleString())} · ${escapeHtml(x.details)}</small>
    </div>`).join(""):'<div class="manager-empty">No manager edits yet.</div>';
}
function refreshManagerLatest(){
  MANAGER_VIEWING_HISTORY=false;
  MANAGER_VIEW_SNAPSHOT=null;
  MANAGER_LAST_SIGNATURE=liveManagerSignature();
  renderManagerDashboard();
  if(MANAGER_SELECTED_EMPLOYEE) renderManagerEmployeeReport(MANAGER_SELECTED_EMPLOYEE);
  renderManagerPacingAlerts();
  renderManagerSnapshots();
  renderManagerAudit();
  setManagerLiveText("LIVE · "+new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}));
  autoSaveManager("Live data refreshed");
}
function useSnapshot(id){
  const snaps=readJsonKey(MANAGER_SNAPSHOTS_KEY,[]);
  const snap=snaps.find(s=>s.id===id); if(!snap)return;
  MANAGER_VIEW_SNAPSHOT=snap;
  MANAGER_VIEWING_HISTORY=true;
  MANAGER_SELECTED_EMPLOYEE=null;
  setManagerLiveText("HISTORY VIEW · "+new Date(snap.createdAt).toLocaleString());
  renderManagerDashboard();
  renderManagerSnapshots();
}
function managerSourceEmployees(){
  if(MANAGER_VIEWING_HISTORY && MANAGER_VIEW_SNAPSHOT) return MANAGER_VIEW_SNAPSHOT.employees;
  return buildManagerSnapshot().employees;
}
function openManagerEdit(type,employeeId=null,day=null){
  MANAGER_EDIT_CONTEXT={type,employeeId,day};
  const title=document.getElementById("managerEditTitle");
  const body=document.getElementById("managerEditBody");
  const error=document.getElementById("managerEditError"); error.textContent="";
  if(type==="time"){
    const emp=employeeById(employeeId), data=getEmployeeData(employeeId), card=(data.timecards||{})[day]||{};
    title.textContent="Edit Timecard · "+emp.displayName;
    const toLocal=ts=>{
      if(!ts)return "";
      const d=new Date(ts), pad=n=>String(n).padStart(2,"0");
      return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };
    body.innerHTML=`
      <div class="edit-grid">
        <div class="field"><label>Clock In</label><input id="mgrClockIn" type="datetime-local" value="${toLocal(card.in)}"></div>
        <div class="field"><label>Clock Out</label><input id="mgrClockOut" type="datetime-local" value="${toLocal(card.out)}"></div>
      </div>
      <div class="field" style="margin-top:10px"><label>Reason for adjustment</label><textarea id="mgrReason" placeholder="Example: employee accidentally clocked out late"></textarea></div>
      <div class="manager-warning">Leave a time blank to remove that timestamp. Manager adjustments are added to the change log.</div>`;
  }else if(type==="employee"){
    const emp=employeeById(employeeId), auth=getAuthRecord(employeeId)||{};
    title.textContent="Edit Employee · "+emp.displayName;
    body.innerHTML=`
      <div class="edit-grid">
        <div class="field"><label>Display Name</label><input id="mgrEmpName" value="${escapeHtml(emp.displayName)}"></div>
        <div class="field"><label>Username</label><input id="mgrEmpUsername" value="${escapeHtml(auth.username||"")}"></div>
      </div>
      <div class="field" style="margin-top:10px"><label>Manager Note / Reason</label><textarea id="mgrReason" placeholder="Reason for account edit"></textarea></div>
      <div class="admin-actions"><button type="button" class="danger" id="mgrRemoveEmployeeBtn">Remove Employee</button></div>
      <div class="manager-warning">Removing an employee removes them from the active roster. Their historical manager snapshots remain available.</div>`;
    setTimeout(()=>document.getElementById("mgrRemoveEmployeeBtn")?.addEventListener("click",()=>removeEmployee(employeeId)),0);
  }else if(type==="add"){
    title.textContent="Manually Add Employee";
    body.innerHTML=`
      <div class="field"><label>Employee Name</label><input id="mgrNewName" placeholder="First and last name"></div>
      <div class="manager-warning">This adds them to the roster. The employee will create their username, password, and required profile photo the first time they select their name.</div>`;
  }
  document.getElementById("managerEditOverlay").classList.remove("hidden");
}
function closeManagerEdit(){
  document.getElementById("managerEditOverlay").classList.add("hidden");
  MANAGER_EDIT_CONTEXT=null;
}
function saveManagerEdit(){
  const c=MANAGER_EDIT_CONTEXT; if(!c)return;
  const error=document.getElementById("managerEditError");
  if(c.type==="time"){
    const data=getEmployeeData(c.employeeId);
    data.timecards=data.timecards||{};
    const inVal=document.getElementById("mgrClockIn").value;
    const outVal=document.getElementById("mgrClockOut").value;
    const reason=document.getElementById("mgrReason").value.trim();
    const inTs=inVal?new Date(inVal).getTime():null, outTs=outVal?new Date(outVal).getTime():null;
    if(inTs&&outTs&&outTs<inTs){error.textContent="Clock-out cannot be before clock-in.";return;}
    data.timecards[c.day]={in:inTs,out:outTs};
    data.savedAt=new Date().toISOString();
    safeSet(WEEK_KEY+"::"+c.employeeId,JSON.stringify(data));
    managerAudit("Timecard adjusted",`${employeeById(c.employeeId)?.displayName} · ${DAY_META[c.day]?.date}${reason?" · "+reason:""}`);
  }else if(c.type==="employee"){
    const name=document.getElementById("mgrEmpName").value.trim();
    const username=document.getElementById("mgrEmpUsername").value.trim();
    const reason=document.getElementById("mgrReason").value.trim();
    if(name.length<2){error.textContent="Enter a valid employee name.";return;}
    const registry=getRegistry();
    const custom=registry.find(x=>x.id===c.employeeId);
    if(custom){custom.displayName=name;saveRegistry(registry);}
    const auth=getAuthRecord(c.employeeId);
    if(auth){auth.displayName=name; if(username)auth.username=username; saveAuthRecord(c.employeeId,auth);}
    managerAudit("Employee account edited",`${name}${reason?" · "+reason:""}`);
    renderEmployeeOptions(MANAGER_ID);
  }else if(c.type==="add"){
    const name=document.getElementById("mgrNewName").value.trim();
    if(name.length<2){error.textContent="Enter a valid employee name.";return;}
    if(allEmployees().some(e=>e.displayName.toLowerCase()===name.toLowerCase())){error.textContent="That employee already exists.";return;}
    const id=makeEmployeeId(name), registry=getRegistry();
    registry.push({id,displayName:name,createdAt:new Date().toISOString(),addedByManager:true});
    saveRegistry(registry);
    managerAudit("Employee manually added",name);
    renderEmployeeOptions(MANAGER_ID);
  }
  closeManagerEdit();
  refreshManagerLatest();
  autoSaveManager("Manager edit saved");
}
function removeEmployee(employeeId){
  const emp=employeeById(employeeId); if(!emp)return;
  if(!confirm(`Remove ${emp.displayName} from the active employee roster?`))return;
  let registry=getRegistry();
  const isBuiltin=BUILTIN_EMPLOYEES.some(x=>x.id===employeeId);
  if(isBuiltin){
    const removed=readJsonKey(WEEK_KEY+"::REMOVED_BUILTINS",[]);
    if(!removed.includes(employeeId))removed.push(employeeId);
    writeJsonKey(WEEK_KEY+"::REMOVED_BUILTINS",removed);
  }else{
    registry=registry.filter(x=>x.id!==employeeId);saveRegistry(registry);
  }
  managerAudit("Employee removed from roster",emp.displayName);
  closeManagerEdit(); MANAGER_SELECTED_EMPLOYEE=null; refreshManagerLatest(); renderEmployeeOptions(MANAGER_ID);
}

function getEmployeeData(employeeId){
  const raw=safeGet(WEEK_KEY+"::"+employeeId);
  if(!raw) return {};
  try{return JSON.parse(raw)||{};}catch(e){return {};}
}
function countPrefix(data,prefix,expected){
  let done=0;
  for(let i=0;i<expected;i++){
    // handled by task ids from actual DOM labels rather than numeric suffixes
  }
  Object.entries(data).forEach(([k,v])=>{
    if(k.startsWith(prefix) && v===true) done++;
  });
  return done;
}
function minutesBetween(a,b){
  if(!a || !b) return 0;
  return Math.max(0,Math.round((b-a)/60000));
}
function humanDurationMins(mins){
  const h=Math.floor(mins/60),m=mins%60;
  return h?`${h}h ${m}m`:`${m}m`;
}
function taskCount(data,day,prefix,total){
  let done=0;
  Object.keys(data).forEach(k=>{
    if(k.startsWith(`${day}_${prefix}_`) && data[k]===true) done++;
  });
  return `${done}/${total}`;
}
function reportValue(v,fallback="—"){
  if(v===undefined || v===null || v==="") return fallback;
  return String(v);
}
function escapeHtml(s){
  return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}
function employeeStatusText(employeeId){
  const data=getEmployeeData(employeeId);
  const cards=data.timecards||{};
  const dayOrder=["1001","0929","0928"];
  for(const day of dayOrder){
    const c=cards[day];
    if(c?.in && !c?.out) return `Clocked in · ${DAY_META[day].date}`;
    if(c?.out) return `Last shift · ${DAY_META[day].date}`;
  }
  return "No shifts recorded";
}
function renderManagerDashboard(){
  if(AUTH_ROLE!=="manager") return;
  const source=managerSourceEmployees();
  const employees=source.map(x=>x.emp);
  const stats=document.getElementById("managerStats");
  const roster=document.getElementById("managerRoster");

  let registered=0, shifts=0, minutes=0, openings=0;
  source.forEach(item=>{
    const emp=item.emp;
    if(item.auth) registered++;
    const data=item.data||{};
    Object.values(data.timecards||{}).forEach(c=>{
      if(c?.in){shifts++; if(c.out) minutes+=minutesBetween(c.in,c.out);}
    });
    Object.values(data.completed||{}).forEach(v=>{if(v) openings++;});
  });

  stats.innerHTML=`
    <div class="manager-stat"><div class="num">${employees.length}</div><div class="lbl">Employees Listed</div></div>
    <div class="manager-stat"><div class="num">${registered}</div><div class="lbl">Accounts Created</div></div>
    <div class="manager-stat"><div class="num">${shifts}</div><div class="lbl">Clock-Ins Recorded</div></div>
    <div class="manager-stat"><div class="num">${humanDurationMins(minutes)}</div><div class="lbl">Completed Shift Time</div></div>
  `;

  roster.innerHTML=source.map(item=>{
    const emp=item.emp;
    const auth=item.auth;
    const photo=auth?.profilePhoto;
    const avatar=photo
      ? `<img class="avatar" src="${photo}" alt="">`
      : `<div class="avatar-fallback">${escapeHtml(initials(emp.displayName))}</div>`;
    return `
      <div class="employee-card ${MANAGER_SELECTED_EMPLOYEE===emp.id?"active":""}" data-manager-employee="${escapeHtml(emp.id)}">
        ${avatar}
        <div class="meta">
          <strong>${escapeHtml(emp.displayName)}</strong>
          <small>${auth?escapeHtml("@"+auth.username):"Account not created"}</small>
          <small>${escapeHtml((()=>{
            const cards=(item.data||{}).timecards||{};
            for(const d of ["1001","0929","0928"]){const c=cards[d];if(c?.in&&!c?.out)return "Clocked in · "+DAY_META[d].date;if(c?.out)return "Last shift · "+DAY_META[d].date;}
            return "No shifts recorded";
          })())}</small>
        </div>
      </div>`;
  }).join("") || `<div class="manager-empty">No employees found.</div>`;

  if(MANAGER_SELECTED_EMPLOYEE) renderManagerEmployeeReport(MANAGER_SELECTED_EMPLOYEE);
  renderManagerSnapshots();
  renderManagerAudit();
  renderProductionChart();
  renderManagerActionCenter();
  updateNotificationBadge();
}
function renderManagerEmployeeReport(employeeId){
  MANAGER_SELECTED_EMPLOYEE=employeeId;
  const emp=employeeById(employeeId);
  if(!emp) return;
  const snapItem=MANAGER_VIEWING_HISTORY ? snapshotEmployee(employeeId) : null;
  const auth=(snapItem?.auth)||getAuthRecord(employeeId)||{};
  const data=(snapItem?.data)||getEmployeeData(employeeId);
  const report=document.getElementById("managerReport");
  const photo=auth.profilePhoto
    ? `<img class="avatar lg" src="${auth.profilePhoto}" alt="">`
    : `<div class="avatar-fallback" style="width:76px;height:76px;font-size:22px">${escapeHtml(initials(emp.displayName))}</div>`;

  const days=Object.entries(DAY_META).map(([day,meta])=>{
    const card=(data.timecards||{})[day]||{};
    const clockIn=card.in?formatDateTime(card.in):"—";
    const clockOut=card.out?formatDateTime(card.out):"—";
    const duration=(card.in&&card.out)?humanDurationMins(minutesBetween(card.in,card.out)):"—";
    const complete=!!(data.completed||{})[day];
    const connect=taskCount(data,day,"open",openingTasks.length);
    const store=taskCount(data,day,"store",storeTasks.length);
    const social=taskCount(data,day,"social",socialTasks.length);
    const submit=taskCount(data,day,"submit",submitTasks.length);

    return `
      <div class="report-day">
        <h3>${escapeHtml(meta.label)} · ${escapeHtml(meta.date)}</h3>
        <div class="report-kv"><div class="k">Clock In</div><div class="v">${escapeHtml(clockIn)}</div></div>
        <div class="report-kv"><div class="k">Clock Out</div><div class="v">${escapeHtml(clockOut)}</div></div>
        <div class="report-kv"><div class="k">Duration</div><div class="v">${escapeHtml(duration)}</div></div>
        <div class="report-kv"><div class="k">1st Hour Status</div><div class="v">${complete?"Complete":"Incomplete"}</div></div>
        <div class="report-kv"><div class="k">Checklist Progress</div><div class="v">Connect ${connect} · Store ${store} · Social ${social} · Submit ${submit}</div></div>
        <div class="report-kv"><div class="k">Orders</div><div class="v">${escapeHtml(reportValue(data[day+"_orders"]))}</div></div>
        <div class="report-kv"><div class="k">Conversion Rate</div><div class="v">${escapeHtml(reportValue(data[day+"_conversion"]))}${data[day+"_conversion"]!==undefined&&data[day+"_conversion"]!==""?"%":""}</div></div>
        <div class="report-kv"><div class="k">Sessions</div><div class="v">${escapeHtml(reportValue(data[day+"_sessions"]))}</div></div>
        <div class="report-kv"><div class="k">Total Sales</div><div class="v">${data[day+"_sales"]!==undefined&&data[day+"_sales"]!==""?"$"+escapeHtml(data[day+"_sales"]):"—"}</div></div>
        <div class="report-kv"><div class="k">Recent Order</div><div class="v">${escapeHtml(reportValue(data[day+"_orderNumber"]))} · ${escapeHtml(reportValue(data[day+"_orderTime"]))} · ${data[day+"_orderTotal"]?"$"+escapeHtml(data[day+"_orderTotal"]):"—"}</div></div>
        <div class="report-kv"><div class="k">Store Issues</div><div class="v">${escapeHtml(reportValue(data[day+"_storeIssues"],"No entry"))}</div></div>
        <div class="report-kv"><div class="k">Assigned Social</div><div class="v">${escapeHtml(reportValue(data[day+"_platform"]))}</div></div>
        <div class="report-kv"><div class="k">Starting Followers</div><div class="v">${escapeHtml(reportValue(data[day+"_followers"]))}</div></div>
        <div class="report-kv"><div class="k">DMs / Leads</div><div class="v">${escapeHtml(reportValue(data[day+"_socialNotes"],"No entry"))}</div></div>
        <div class="report-kv"><div class="k">First Assigned Task</div><div class="v">${escapeHtml(reportValue(data[day+"_firstTask"],"No entry"))}</div></div>
        <div class="report-kv"><div class="k">Additional Notes</div><div class="v">${escapeHtml(reportValue(data[day+"_notes"],"No entry"))}</div></div>
      </div>`;
  }).join("");

  report.innerHTML=`
    <div class="profile-row" style="margin-bottom:16px">
      ${photo}
      <div class="profile-meta">
        <h2>${escapeHtml(emp.displayName)}</h2>
        <p>${auth.username?escapeHtml("@"+auth.username):"Account not created yet"}</p>
        <div class="profile-note">Account created: ${auth.createdAt?escapeHtml(new Date(auth.createdAt).toLocaleString()):"—"} · Last saved work: ${data.savedAt?escapeHtml(new Date(data.savedAt).toLocaleString()):"—"}</div>
        <div class="admin-actions">
          <button type="button" onclick="openManagerEdit('employee','${employeeId}')">Edit Employee</button>
        </div>
      </div>
    </div>
    <div class="report-days">${days}</div>
    <div class="admin-actions" style="margin-top:14px">
      ${Object.entries(DAY_META).map(([d,m])=>`<button type="button" onclick="openManagerEdit('time','${employeeId}','${d}')">Edit ${m.label} Timecard</button>`).join("")}
    </div>
  `;
  renderManagerDashboardRosterOnly();
}
function renderManagerDashboardRosterOnly(){
  const roster=document.getElementById("managerRoster");
  if(!roster) return;
  roster.querySelectorAll("[data-manager-employee]").forEach(card=>{
    card.classList.toggle("active",card.dataset.managerEmployee===MANAGER_SELECTED_EMPLOYEE);
  });
}


let SAVE_TOAST_TIMER=null;
function showSaved(message="Saved automatically"){
  const box=document.getElementById("saveIndicator");
  const text=document.getElementById("saveIndicatorText");
  if(!box||!text)return;
  text.textContent=message+" · "+new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"});
  box.classList.add("show");
  clearTimeout(SAVE_TOAST_TIMER);
  SAVE_TOAST_TIMER=setTimeout(()=>box.classList.remove("show"),1600);
}
function autoSaveEmployee(message="Saved automatically"){
  if(AUTH_ROLE!=="employee" || !AUTHENTICATED_EMPLOYEE)return;
  save(false);
  showSaved(message);
}
function autoSaveManager(message="Manager change saved"){
  if(AUTH_ROLE!=="manager")return;
  showSaved(message);
}


const DEVICE_PREF_KEY="FOURTHHAVEN_DEVICE_LAYOUT_V1";
let CURRENT_DEVICE=null;

function recommendedDevice(){
  const w=window.innerWidth;
  const coarse=window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if(w<=700) return "cell";
  if(w<=1100 || coarse) return "tablet";
  return "pc";
}
function deviceLabel(d){
  return d==="cell"?"Cell Phone":d==="tablet"?"Tablet":"PC / Laptop";
}
function applyDeviceLayout(device,savePref=true){
  if(!["cell","tablet","pc"].includes(device)) device=recommendedDevice();
  CURRENT_DEVICE=device;
  document.body.classList.remove("device-cell","device-tablet","device-pc");
  document.body.classList.add("device-"+device);
  document.documentElement.setAttribute("data-device",device);
  if(savePref) safeSet(DEVICE_PREF_KEY,device);
  const chooser=document.getElementById("deviceChooser");
  if(chooser) chooser.classList.add("hidden");
  setTimeout(()=>window.dispatchEvent(new Event("resize")),50);
}
function showDeviceChooser(){
  const chooser=document.getElementById("deviceChooser");
  const rec=recommendedDevice();
  document.getElementById("deviceRecommendation").textContent="Recommended for this screen: "+deviceLabel(rec);
  chooser.classList.remove("hidden");
}
function initializeDeviceChoice(){
  const rec=recommendedDevice();
  document.getElementById("deviceRecommendation").textContent="Recommended for this screen: "+deviceLabel(rec);
  // Ask on first use of this hub. After that, remember their choice.
  const saved=safeGet(DEVICE_PREF_KEY);
  if(saved && ["cell","tablet","pc"].includes(saved)){
    applyDeviceLayout(saved,false);
  }else{
    showDeviceChooser();
  }
}

let TIME_CARDS = {};

function formatTime(ts){
  if(!ts) return "—";
  const d = new Date(ts);
  return d.toLocaleTimeString([], {hour:"numeric", minute:"2-digit", second:"2-digit"});
}
function formatDateTime(ts){
  if(!ts) return "Not recorded";
  const d = new Date(ts);
  return d.toLocaleDateString([], {month:"short", day:"numeric", year:"numeric"}) + " · " +
         d.toLocaleTimeString([], {hour:"numeric", minute:"2-digit"});
}
function durationText(start, end){
  if(!start) return "Shift duration: —";
  const stop = end || Date.now();
  let ms = Math.max(0, stop - start);
  const totalMins = Math.floor(ms / 60000);
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  return `Shift duration: ${hrs}h ${mins}m`;
}
function renderClock(day){
  const card = TIME_CARDS[day] || {};
  const inDisplay = document.getElementById(day+"_clockInDisplay");
  const inDate = document.getElementById(day+"_clockInDate");
  const outDisplay = document.getElementById(day+"_clockOutDisplay");
  const duration = document.getElementById(day+"_durationDisplay");
  const status = document.getElementById(day+"_clockStatus");
  const dot = document.getElementById(day+"_clockDot");
  const inBtn = document.getElementById(day+"_clockInBtn");
  const outBtn = document.getElementById(day+"_clockOutBtn");

  if(!inDisplay) return;

  inDisplay.textContent = formatTime(card.in);
  inDate.textContent = card.in ? formatDateTime(card.in) : "Not recorded";
  outDisplay.textContent = formatTime(card.out);
  duration.textContent = durationText(card.in, card.out);

  if(card.in && !card.out){
    status.innerHTML = `<span class="status-dot live"></span>Clocked in`;
    inBtn.disabled = true;
    outBtn.disabled = false;
  } else if(card.in && card.out){
    status.innerHTML = `<span class="status-dot done"></span>Shift completed`;
    inBtn.disabled = true;
    outBtn.disabled = true;
  } else {
    status.innerHTML = `<span class="status-dot"></span>Not clocked in`;
    inBtn.disabled = false;
    outBtn.disabled = true;
  }
  if(typeof updateGateState==="function") updateGateState(day);
}
function saveTimecards(){
  if(AUTH_ROLE!=="employee" || !AUTHENTICATED_EMPLOYEE) return;
  const raw=safeGet(storageKey());
  let data={};
  try{ data=raw ? JSON.parse(raw) : {}; }catch(e){ data={}; }
  data.employee=selectedEmployee();
  data.timecards=TIME_CARDS;
  data.savedAt=new Date().toISOString();
  safeSet(storageKey(),JSON.stringify(data));
  showSaved("Timecard saved");
}
function clockIn(day){
  if(AUTH_ROLE!=="employee" || !AUTHENTICATED_EMPLOYEE){
    alert("Log in to an employee account first.");
    return;
  }
  if(TIME_CARDS[day] && TIME_CARDS[day].in){
    showClockConfirmation(day, "You are already clocked in at " + formatTime(TIME_CARDS[day].in) + ".");
    return;
  }

  const ts=Date.now();
  TIME_CARDS[day]={in:ts,out:null};
  saveTimecards();
  renderClock(day);
  updateGateState(day);
  renderCommandCenter();renderPayCenter();
  showClockConfirmation(
    day,
    "CLOCK IN CONFIRMED — " + selectedEmployee() + " clocked in at " +
    formatTime(ts) + " on " + new Date(ts).toLocaleDateString() + "."
  );
}
function clockOut(day){
  if(AUTH_ROLE!=="employee" || !AUTHENTICATED_EMPLOYEE){
    alert("Log in to an employee account first.");
    return;
  }
  if(!TIME_CARDS[day] || !TIME_CARDS[day].in){
    showClockConfirmation(day, "You must clock in before you can clock out.");
    return;
  }
  if(TIME_CARDS[day].out){
    showClockConfirmation(day, "You already clocked out at " + formatTime(TIME_CARDS[day].out) + ".");
    return;
  }

  const ts=Date.now();
  TIME_CARDS[day].out=ts;
  saveTimecards();
  renderClock(day);
  renderCommandCenter();renderPayCenter();
  showClockConfirmation(
    day,
    "CLOCK OUT CONFIRMED — " + selectedEmployee() + " clocked out at " +
    formatTime(ts) + ". " + durationText(TIME_CARDS[day].in, ts)
  );
}

function showClockConfirmation(day,message){
  const box=document.getElementById(day+"_clockConfirmation");
  if(!box) return;
  box.textContent=message;
  box.classList.remove("hidden");
}

async function copyTimecard(day){
  if(AUTH_ROLE!=="employee" || !AUTHENTICATED_EMPLOYEE){
    alert("Log in to an employee account first.");
    return;
  }
  const card = TIME_CARDS[day] || {};
  const meta = DAY_META[day];
  const text =
`FOURTHHAVEN TIME CARD
Employee: ${selectedEmployee()}
Date: ${meta.label}, ${meta.date}
Clock In: ${card.in ? formatDateTime(card.in) : "Not recorded"}
Clock Out: ${card.out ? formatDateTime(card.out) : "Not recorded"}
${durationText(card.in, card.out).replace("Shift duration: ","Duration: ")}`;
  try{
    await navigator.clipboard.writeText(text);
    alert("Timecard copied.");
  }catch(e){
    prompt("Copy this timecard:", text);
  }
}


const TASK_MIN_MS=8000;
const SHIFT_SCHEDULE_MS=4*60*60*1000;
const COMMISSION_RATE=.10;
function paceKey(emp){return WEEK_KEY+"::PACING::"+emp;}
function getPaceData(emp=AUTHENTICATED_EMPLOYEE){return readJsonKey(paceKey(emp),{warnings:{},reports:[],phaseFlags:{}});}
function savePaceData(data,emp=AUTHENTICATED_EMPLOYEE){writeJsonKey(paceKey(emp),data);}
function renderWarningCounter(day){
  const el=document.getElementById(day+"_skipWarnings"); if(!el)return;
  const n=(getPaceData().warnings||{})[day]||0;
  el.textContent=`Warnings ${Math.min(n,3)}/3`;
  el.className="warning-counter "+(n>=3?"danger":n?"warn":"");
}
let PACE_LOCK_INTERVAL=null;
function showPaceWarningScreen(n,reason){
  const o=document.getElementById("paceWarningOverlay");
  document.getElementById("paceWarningCount").textContent=`WARNING ${n}/3`;
  document.getElementById("paceWarningTitle").textContent=n>=2?"Do not skip the work.":"Slow down.";
  document.getElementById("paceWarningText").textContent=reason+" Tasks cannot be marked complete until their work timer is ready.";
  o.classList.add("show");
}
function dismissPaceWarning(){document.getElementById("paceWarningOverlay").classList.remove("show");}
function startPaceLock(day){
  dismissPaceWarning();
  const overlay=document.getElementById("paceLockOverlay"),count=document.getElementById("paceLockCountdown");
  let left=15;
  count.textContent=left;
  overlay.classList.add("show");
  document.documentElement.style.overflow="hidden";
  clearInterval(PACE_LOCK_INTERVAL);
  PACE_LOCK_INTERVAL=setInterval(()=>{
    left--;
    count.textContent=Math.max(0,left);
    if(left<=0){
      clearInterval(PACE_LOCK_INTERVAL);
      overlay.classList.remove("show");
      document.documentElement.style.overflow="";
      const d=getPaceData();
      d.warnings=d.warnings||{};
      d.warnings[day]=0;
      savePaceData(d);
      renderWarningCounter(day);
      refreshTaskPacing(document);
    }
  },1000);
}
function registerSkipWarning(day,box,reason){
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE)return;
  const d=getPaceData(); d.warnings=d.warnings||{}; d.reports=d.reports||[];
  const before=d.warnings[day]||0;
  const after=Math.min(3,before+1);
  d.warnings[day]=after;
  if(after===3){
    d.reports.unshift({
      type:"skip",at:new Date().toISOString(),day,taskId:box?.id||"unknown",
      reason,message:"3/3 pacing warnings reached — 15 second account lock triggered"
    });
  }
  savePaceData(d);
  renderWarningCounter(day);
  if(after>=3) startPaceLock(day);
  else showPaceWarningScreen(after,reason);
}
function taskCard(box){return box?.closest(".card")||box?.closest(".account-setup")||box?.closest("[data-subpanel]");}
const RAPID_CHECK_WINDOW_MS=2000;
const RAPID_CHECK_COUNT=3;
let RAPID_CHECK_TIMES=[];

function clearTransientTaskUI(){
  RAPID_CHECK_TIMES=[];
  dismissPaceWarning();
  document.getElementById("paceLockOverlay")?.classList.remove("show");
  clearInterval(PACE_LOCK_INTERVAL);
  PACE_LOCK_INTERVAL=null;
  document.documentElement.style.overflow="";
}

function refreshTaskPacing(panel=document){
  if(AUTH_ROLE==="manager")return;
  const cards=[...panel.querySelectorAll?.('.card,.account-setup')||[]];
  cards.forEach(card=>{
    const sub=card.closest('.subpanel');
    if(sub && !sub.classList.contains('active')) return;
    if(card.closest('.hidden')) return;
    const boxes=[...card.querySelectorAll('.task input[type="checkbox"][data-save]')].filter(x=>!x.disabled);
    if(!boxes.length)return;

    boxes.forEach(box=>{
      const row=box.closest('.task'); if(!row)return;
      let timer=row.querySelector('.task-timer');
      if(!timer){
        timer=document.createElement('span');
        timer.className='task-timer';
        timer.textContent='⏱ 8s';
        row.appendChild(timer);
      }

      row.classList.remove('task-waiting');
      row.classList.toggle('task-current',!box.checked);

      if(box.checked){
        timer.textContent='DONE ✓';
        timer.classList.remove('timer-ready');
        delete box.dataset.readyAt;
      }else{
        // Every task gets a real 8-second minimum once its section becomes available.
        if(!box.dataset.readyAt) box.dataset.readyAt=String(Date.now()+TASK_MIN_MS);
      }
    });
  });
}

function updateTaskCountdowns(){
  if(AUTH_ROLE!=="employee")return;
  document.querySelectorAll('.task input[type="checkbox"][data-save]').forEach(box=>{
    const row=box.closest('.task'),timer=row?.querySelector('.task-timer');
    if(!timer||box.checked)return;
    const ready=Number(box.dataset.readyAt||0);
    if(!ready){
      timer.textContent='⏱ 8s';
      timer.classList.remove('timer-ready');
      return;
    }
    const left=Math.max(0,ready-Date.now());
    if(left>0){
      timer.textContent=`⏱ ${Math.ceil(left/1000)}s`;
      timer.classList.remove('timer-ready');
    }else{
      timer.textContent='READY ✓';
      timer.classList.add('timer-ready');
    }
  });
}
setInterval(updateTaskCountdowns,250);

function recordRapidTaskCompletion(box){
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE)return;
  const panel=box.closest('[data-subpanel]');
  if(!panel)return;
  const [day]=panel.dataset.subpanel.split(':');
  const now=Date.now();

  RAPID_CHECK_TIMES=RAPID_CHECK_TIMES.filter(ts=>now-ts<=RAPID_CHECK_WINDOW_MS);
  RAPID_CHECK_TIMES.push(now);

  if(RAPID_CHECK_TIMES.length>=RAPID_CHECK_COUNT){
    RAPID_CHECK_TIMES=[];
    registerSkipWarning(
      day,
      box,
      "Three task checkmarks were completed within about two seconds. Slow down and make sure the work is actually being completed."
    );
  }
}

document.addEventListener('click',e=>{
  const box=e.target.closest?.('.task input[type="checkbox"][data-save]');
  if(!box || AUTH_ROLE!=="employee" || box.checked)return;

  // Do not let auth/logout controls inherit a stale task warning state.
  if(e.target.closest('#authOverlay,#logoutBtn')) return;

  const panel=box.closest('[data-subpanel]');
  if(!panel)return;

  if(!box.dataset.readyAt) box.dataset.readyAt=String(Date.now()+TASK_MIN_MS);
  const left=Number(box.dataset.readyAt)-Date.now();

  // The 8-second requirement is strict, but an early click alone is not a warning.
  if(left>0){
    e.preventDefault();
    e.stopImmediatePropagation();
    showSaved(`Task timer: ${Math.ceil(left/1000)}s remaining`);
    const row=box.closest('.task');
    row?.classList.remove('just-checked');
    void row?.offsetWidth;
    row?.classList.add('timer-denied');
    setTimeout(()=>row?.classList.remove('timer-denied'),300);
    return;
  }
},true);

function currentShiftPhase(day){
  for(const tab of ["beginning","mid1","mid2","mid3","closing"]) if(!shiftIsComplete(day,tab)) return tab;
  return "done";
}
function incompleteTaskCount(day){const panel=shiftPanel(day,currentShiftPhase(day));return panel?[...panel.querySelectorAll('.task input[type="checkbox"][data-save]')].filter(x=>!x.checked).length:0;}
function phaseLabel(p){return ({beginning:'Beginning Shift',mid1:'Mid Shift 1',mid2:'Mid Shift 2',mid3:'Mid Shift 3',closing:'Closing Shift',done:'All shift work'})[p]||p;}
function registerPaceFlag(day,phase,lateMins){
  if(AUTH_ROLE!=="employee")return; const d=getPaceData(); d.phaseFlags=d.phaseFlags||{}; d.reports=d.reports||[];
  const key=day+":"+phase; if(d.phaseFlags[key])return; d.phaseFlags[key]=new Date().toISOString();
  d.reports.unshift({type:'pace',at:new Date().toISOString(),day,phase,reason:`${phaseLabel(phase)} running ${lateMins} min behind target`,message:'Shift pacing delay'}); savePaceData(d);
}
function updateTimeManagement(day){
  const el=document.getElementById(day+'_timeUrgency'),title=document.getElementById(day+'_urgencyTitle'),copy=document.getElementById(day+'_urgencyCopy'); if(!el||!title||!copy)return;
  if(AUTH_ROLE==='manager'){el.className='time-urgency';title.textContent='Manager Override';copy.textContent='Time-management warnings are bypassed for Manager Override.';return;}
  const card=TIME_CARDS[day]||{}; if(!card.in){el.className='time-urgency';title.textContent='Shift pacing ready';copy.textContent='Clock in to start the 4-hour shift countdown.';return;}
  const now=card.out||Date.now(),elapsed=Math.max(0,now-card.in),remaining=Math.max(0,SHIFT_SCHEDULE_MS-elapsed),phase=currentShiftPhase(day),tasks=incompleteTaskCount(day);
  const targets={beginning:60,mid1:120,mid2:180,mid3:220,closing:240,done:240}; const elapsedMin=Math.floor(elapsed/60000),remainingMin=Math.ceil(remaining/60000),late=Math.max(0,elapsedMin-(targets[phase]||240));
  if(phase==='done'){el.className='time-urgency';title.textContent='Shift work complete';copy.textContent=`${remainingMin} min remain in the scheduled 4-hour window. Complete any final handoff and clock out when work ends.`;return;}
  const urgent=remaining<=30*60000 || late>=10 || elapsed>=SHIFT_SCHEDULE_MS; const caution=!urgent && (remaining<=60*60000 || late>0);
  el.className='time-urgency '+(urgent?'urgent':caution?'caution':'');
  if(elapsed>=SHIFT_SCHEDULE_MS){title.textContent='SCHEDULED 4-HOUR WINDOW REACHED';copy.textContent=`${phaseLabel(phase)} is still incomplete with ${tasks} task(s) remaining. Stop and contact the manager before continuing. Record all time actually worked.`;registerPaceFlag(day,phase,late);return;}
  title.textContent=urgent?'HURRY — SHIFT IS FALLING BEHIND':caution?'Watch the clock':'On pace';
  copy.textContent=`${remainingMin} min left · Current: ${phaseLabel(phase)} · ${tasks} checklist task(s) remaining.`+(late?` This phase is about ${late} min behind target.`:'')+(urgent?' Move through the remaining work efficiently and contact the manager if the workload cannot be completed in the scheduled window.':'');
  if(late>=15)registerPaceFlag(day,phase,late);
}

function commissionKey(emp){return WEEK_KEY+'::COMMISSIONS::'+emp;}
function getCommissions(emp=AUTHENTICATED_EMPLOYEE){return readJsonKey(commissionKey(emp),[]);}
function saveCommissions(items,emp=AUTHENTICATED_EMPLOYEE){writeJsonKey(commissionKey(emp),items);}
function commissionTotal(emp=AUTHENTICATED_EMPLOYEE,day=null){return getCommissions(emp).filter(r=>!day||r.day===day).reduce((s,r)=>s+Number(r.commission||0),0);}
let COMMISSION_DRAFT_ITEMS=[{product:'',color:'',size:'',qty:1}];
function addCommissionDraftItem(){COMMISSION_DRAFT_ITEMS.push({product:'',color:'',size:'',qty:1});renderCommissionItems();updateV19Receipt();}
function removeCommissionDraftItem(i){if(COMMISSION_DRAFT_ITEMS.length>1)COMMISSION_DRAFT_ITEMS.splice(i,1);renderCommissionItems();updateV19Receipt();}
function setCommissionItem(i,k,v){if(COMMISSION_DRAFT_ITEMS[i])COMMISSION_DRAFT_ITEMS[i][k]=v;updateCommissionPreview();}
function renderCommissionItems(){const el=document.getElementById('commissionItems');if(!el)return;el.innerHTML=COMMISSION_DRAFT_ITEMS.map((it,i)=>`<div class="commission-item-row"><div class="field"><label>Product</label><input value="${escapeHtml(it.product)}" oninput="setCommissionItem(${i},'product',this.value)" placeholder="Nocturne Tee"></div><div class="field"><label>Color</label><input value="${escapeHtml(it.color)}" oninput="setCommissionItem(${i},'color',this.value)" placeholder="Brown"></div><div class="field"><label>Size</label><input value="${escapeHtml(it.size)}" oninput="setCommissionItem(${i},'size',this.value)" placeholder="M"></div><div class="field"><label>Qty</label><input type="number" min="1" value="${escapeHtml(it.qty)}" oninput="setCommissionItem(${i},'qty',this.value)"></div>${COMMISSION_DRAFT_ITEMS.length>1?`<button type="button" onclick="removeCommissionDraftItem(${i})">−</button>`:'<span></span>'}</div>`).join('');}
function updateCommissionPreview(){const spent=Number(document.getElementById('commissionSpent')?.value||0);const el=document.getElementById('commissionPreview');if(el)el.textContent='$'+(spent*COMMISSION_RATE).toFixed(2);updateV19Receipt();}
function dayFromDateValue(v){if(!v)return null;const d=new Date(v);const md=String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');return ({'0928':'0928','0929':'0929','1001':'1001'})[md]||null;}
function showGoodJob(){const o=document.getElementById('goodJobOverlay');o.classList.add('show');document.documentElement.style.overflow='hidden';}
function dismissGoodJob(){document.getElementById('goodJobOverlay').classList.remove('show');document.documentElement.style.overflow='';}
function submitCommissionReport(){
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE){alert('Employee accounts submit commission reports. Manager Override can review them.');return;}
  const customer=document.getElementById('commissionCustomer').value.trim(),dt=document.getElementById('commissionDateTime').value,spent=Number(document.getElementById('commissionSpent').value||0);
  const items=COMMISSION_DRAFT_ITEMS.map(x=>({...x,qty:Number(x.qty||1)})).filter(x=>x.product.trim()&&x.color.trim()&&x.size.trim()&&x.qty>0);
  if(!customer||!dt||spent<=0||!items.length){alert('Complete customer name, sale date/time, amount spent, and at least one full product/color/size line.');return;}
  const list=getCommissions();list.unshift({id:'com_'+Date.now(),employeeId:AUTHENTICATED_EMPLOYEE,employeeName:AUTHENTICATED_DISPLAY_NAME,customer,at:new Date(dt).toISOString(),reportedAt:new Date().toISOString(),spent,commission:spent*COMMISSION_RATE,items,status:'pending',day:dayFromDateValue(dt)});saveCommissions(list);
  document.getElementById('commissionCustomer').value='';document.getElementById('commissionSpent').value='';COMMISSION_DRAFT_ITEMS=[{product:'',color:'',size:'',qty:1}];renderCommissionItems();updateCommissionPreview();renderCommissionCenter();Object.keys(DAY_META).forEach(updatePayroll);
  addNotification(MANAGER_ID,"Commission report · "+currentUserName(),`${customer} · $${spent.toFixed(2)} spend · $${(spent*COMMISSION_RATE).toFixed(2)} commission`,"#commission","commission");
  setTimeout(showGoodJob,350);showSaved('Commission report submitted');
}
function renderCommissionCenter(){
  const empForm=document.getElementById('commissionEmployeeForm'),mgr=document.getElementById('commissionManagerView');if(!empForm||!mgr)return;
  const dt=document.getElementById('commissionDateTime');if(dt&&!dt.value){const d=new Date(),pad=n=>String(n).padStart(2,'0');dt.value=`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;}
  if(AUTH_ROLE==='manager'){empForm.classList.add('hidden');mgr.classList.remove('hidden');renderManagerCommissions();}
  else{empForm.classList.remove('hidden');mgr.classList.add('hidden');renderEmployeeCommissions();renderCommissionItems();}
}
function commissionItemsText(r){return (r.items||[]).map(x=>`${x.qty}× ${x.color} ${x.product} (${x.size})`).join(' · ');}
function renderEmployeeCommissions(){const el=document.getElementById('employeeCommissionList');if(!el)return;const list=getCommissions();el.innerHTML=list.length?list.map(r=>`<div class="commission-record"><div class="top"><strong>${escapeHtml(r.customer)}</strong><strong>$${Number(r.commission).toFixed(2)}</strong></div><small>${escapeHtml(new Date(r.at).toLocaleString())} · $${Number(r.spent).toFixed(2)} spent · <span class="${r.status==='verified'?'status-verified':'status-pending'}">${r.status==='verified'?'Verified':'Pending verification'}</span></small><div class="tool-note" style="margin-top:5px">${escapeHtml(commissionItemsText(r))}</div></div>`).join(''):'<div class="manager-empty">No commissions reported yet.</div>';}
function allCommissionRecords(){return allEmployees().flatMap(emp=>getCommissions(emp.id).map(r=>({...r,employeeName:r.employeeName||emp.displayName}))).sort((a,b)=>new Date(b.reportedAt)-new Date(a.reportedAt));}
function renderManagerCommissions(){const el=document.getElementById('managerCommissionList');if(!el)return;const list=allCommissionRecords();el.innerHTML=list.length?list.map(r=>`<div class="commission-record"><div class="top"><strong>${escapeHtml(r.employeeName)} · ${escapeHtml(r.customer)}</strong><strong>$${Number(r.commission).toFixed(2)}</strong></div><small>${escapeHtml(new Date(r.at).toLocaleString())} · Customer spent $${Number(r.spent).toFixed(2)} · <span class="${r.status==='verified'?'status-verified':'status-pending'}">${r.status==='verified'?'Verified':'Pending verification'}</span></small><div class="tool-note" style="margin-top:5px">${escapeHtml(commissionItemsText(r))}</div>${r.status!=='verified'?`<button type="button" style="margin-top:8px" onclick="verifyCommission('${escapeHtml(r.employeeId)}','${escapeHtml(r.id)}')">Mark Verified</button>`:''}</div>`).join(''):'<div class="manager-empty">No employee commissions reported on this device yet.</div>';}
function verifyCommission(emp,id){if(AUTH_ROLE!=='manager')return;const list=getCommissions(emp),r=list.find(x=>x.id===id);if(!r)return;r.status='verified';r.verifiedAt=new Date().toISOString();saveCommissions(list,emp);renderManagerCommissions();addNotification(emp,"Commission verified",`${r.customer} · $${Number(r.commission).toFixed(2)} commission verified by management.`,"#pay","commission");managerAudit('Commission verified',`${employeeById(emp)?.displayName||emp} · ${r.customer} · $${Number(r.commission).toFixed(2)}`);renderManagerActionCenter();}

const GALLERY_DB='FOURTHHAVEN_MEDIA_DB_V1',GALLERY_STORE='photos';
function galleryDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open(GALLERY_DB,1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains(GALLERY_STORE))req.result.createObjectStore(GALLERY_STORE,{keyPath:'id'});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function galleryAll(){try{const db=await galleryDb();return await new Promise((resolve,reject)=>{const r=db.transaction(GALLERY_STORE).objectStore(GALLERY_STORE).getAll();r.onsuccess=()=>resolve(r.result.sort((a,b)=>b.uploadedAt-a.uploadedAt));r.onerror=()=>reject(r.error);});}catch(e){return [];}}
async function galleryPut(obj){const db=await galleryDb();return new Promise((resolve,reject)=>{const r=db.transaction(GALLERY_STORE,'readwrite').objectStore(GALLERY_STORE).put(obj);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error);});}
async function galleryDelete(id){const db=await galleryDb();return new Promise((resolve,reject)=>{const r=db.transaction(GALLERY_STORE,'readwrite').objectStore(GALLERY_STORE).delete(id);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error);});}
function galleryFileData(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=()=>reject(reader.error);reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error('Invalid image'));img.onload=()=>{const max=1400,scale=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.86));};img.src=reader.result;};reader.readAsDataURL(file);});}
async function uploadGalleryFiles(files){if(AUTH_ROLE!=='manager')return;for(const file of [...files]){if(!file.type.startsWith('image/'))continue;const dataUrl=await galleryFileData(file);await galleryPut({id:'photo_'+Date.now()+'_'+Math.random().toString(36).slice(2),name:file.name,dataUrl,uploadedAt:Date.now(),category:document.getElementById('galleryCategorySelect')?.value||'Nocturne'});}await renderGallery();showSaved('Photo collection updated');}
async function renderGallery(){const grid=document.getElementById('galleryGrid');if(!grid)return;document.getElementById('galleryManagerTools')?.classList.toggle('hidden',AUTH_ROLE!=='manager');document.getElementById('galleryEmployeeTools')?.classList.toggle('hidden',AUTH_ROLE==='manager');const all=await galleryAll(),photos=V19_GALLERY_FILTER==='All'?all:all.filter(p=>(p.category||'Nocturne')===V19_GALLERY_FILTER);grid.innerHTML=photos.length?photos.map(p=>`<div class="gallery-item"><label class="gallery-select"><input type="checkbox" data-gallery-select="${escapeHtml(p.id)}"> Select</label><img src="${p.dataUrl}" alt="${escapeHtml(p.name)}"><div class="gallery-meta"><div class="ceo-kicker">${escapeHtml(p.category||'Nocturne')}</div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(new Date(p.uploadedAt).toLocaleDateString())}</small><div class="gallery-actions"><button type="button" onclick="downloadGalleryPhoto('${escapeHtml(p.id)}')">Use Photo</button>${AUTH_ROLE==='manager'?`<button type="button" onclick="removeGalleryPhoto('${escapeHtml(p.id)}')">Remove</button>`:''}</div></div></div>`).join(''):`<div class="gallery-empty" style="column-span:all"><strong>Nothing here yet.</strong><br><small>${V19_GALLERY_FILTER==='All'?"Manager hasn't added approved content to this collection yet.":'No approved '+escapeHtml(V19_GALLERY_FILTER.toLowerCase())+' photos yet.'}</small></div>`;}
async function downloadGalleryPhoto(id){const p=(await galleryAll()).find(x=>x.id===id);if(!p)return;const a=document.createElement('a');a.href=p.dataUrl;a.download=p.name||'FourthHaven-photo.jpg';a.click();}
async function downloadSelectedGallery(){const ids=[...document.querySelectorAll('[data-gallery-select]:checked')].map(x=>x.dataset.gallerySelect);if(!ids.length){alert('Select at least one photo first.');return;}for(const id of ids){await downloadGalleryPhoto(id);await new Promise(r=>setTimeout(r,180));}}
async function removeGalleryPhoto(id){if(AUTH_ROLE!=='manager')return;if(!confirm('Remove this photo from the collection?'))return;await galleryDelete(id);renderGallery();}


let PRODUCTION_SELECTED_EMPLOYEE=null;
function performanceStats(employeeId){
  const data=getEmployeeData(employeeId)||{};
  let totalTasks=0,doneTasks=0,shiftCount=0,totalMinutes=0;
  Object.keys(DAY_META).forEach(day=>{
    const ids=[...document.querySelectorAll(`[data-subpanel^="${day}:"] input[type="checkbox"][data-save]`)].map(x=>x.id);
    totalTasks+=ids.length;
    doneTasks+=ids.filter(id=>data[id]===true).length;
    const c=(data.timecards||{})[day];
    if(c?.in){shiftCount++; if(c.out) totalMinutes+=minutesBetween(c.in,c.out);}
  });
  const commissions=getCommissions(employeeId);
  const customerSpend=commissions.reduce((s,r)=>s+Number(r.spent||0),0);
  const commissionEarned=commissions.reduce((s,r)=>s+Number(r.commission||0),0);
  const pace=getPaceData(employeeId);
  const warnings=(pace.reports||[]).filter(r=>r.type==="skip").length;
  const delays=(pace.reports||[]).filter(r=>r.type==="pace").length;
  const completion=totalTasks?Math.round(doneTasks/totalTasks*100):0;
  return {totalTasks,doneTasks,completion,shiftCount,totalMinutes,sales:commissions.length,customerSpend,commissionEarned,warnings,delays};
}
function renderProductionChart(){
  const chart=document.getElementById("productionChart");
  if(!chart||AUTH_ROLE!=="manager")return;
  const employees=allEmployees();
  chart.innerHTML=employees.length?employees.map(emp=>{
    const s=performanceStats(emp.id);
    return `<div class="production-row">
      <button type="button" class="production-name" onclick="showProductionDetail('${escapeHtml(emp.id)}');openEmployeeDrawer('${escapeHtml(emp.id)}')">${escapeHtml(emp.displayName)}</button>
      <div class="production-track"><div class="production-fill" style="width:${s.completion}%"></div></div>
      <div class="production-pct">${s.completion}%</div>
    </div>`;
  }).join(""):`<div class="manager-empty">No employees available.</div>`;
  if(PRODUCTION_SELECTED_EMPLOYEE)showProductionDetail(PRODUCTION_SELECTED_EMPLOYEE);
}
function showProductionDetail(employeeId){
  PRODUCTION_SELECTED_EMPLOYEE=employeeId;
  const emp=employeeById(employeeId),s=performanceStats(employeeId),el=document.getElementById("productionDetail");
  if(!emp||!el)return;
  el.innerHTML=`<div class="ceo-kicker">Production Statistics</div>
    <h3 style="margin:5px 0">${escapeHtml(emp.displayName)}</h3>
    <div class="production-mini-grid">
      <div class="production-mini"><strong>${s.completion}%</strong><small>Task completion</small></div>
      <div class="production-mini"><strong>${s.doneTasks}/${s.totalTasks}</strong><small>Tasks completed</small></div>
      <div class="production-mini"><strong>${s.shiftCount}</strong><small>Clock-ins</small></div>
      <div class="production-mini"><strong>${humanDurationMins(s.totalMinutes)}</strong><small>Completed shift time</small></div>
      <div class="production-mini"><strong>${s.sales}</strong><small>Commission sales reported</small></div>
      <div class="production-mini"><strong>$${s.customerSpend.toFixed(2)}</strong><small>Customer spend reported</small></div>
      <div class="production-mini"><strong>$${s.commissionEarned.toFixed(2)}</strong><small>Commission reported</small></div>
      <div class="production-mini"><strong>${s.warnings} / ${s.delays}</strong><small>Skip alerts / pacing delays</small></div>
    </div>
    <button type="button" style="width:100%;margin-top:12px" onclick="renderManagerEmployeeReport('${escapeHtml(employeeId)}')">Open Full Employee Report</button>`;
}

function renderManagerPacingAlerts(){const el=document.getElementById('managerPacingAlerts'),count=document.getElementById('managerAlertCount');if(!el)return;const alerts=allEmployees().flatMap(emp=>(getPaceData(emp.id).reports||[]).map(r=>({...r,employeeName:emp.displayName}))).sort((a,b)=>new Date(b.at)-new Date(a.at));if(count)count.textContent=`${alerts.length} alert${alerts.length===1?'':'s'}`;el.innerHTML=alerts.length?alerts.slice(0,30).map(a=>`<div class="manager-alert"><strong>${escapeHtml(a.employeeName)} · ${a.type==='skip'?'Task Skip Warning':'Shift Pacing Delay'}</strong><small>${escapeHtml(new Date(a.at).toLocaleString())} · ${escapeHtml(DAY_META[a.day]?.label||a.day)} · ${escapeHtml(a.reason||a.message||'')}</small></div>`).join(''):'<div class="manager-empty">No pacing alerts recorded on this device.</div>';}

const HOURLY_RATE=7.75;
const PAY_CAP_MS=4*60*60*1000;
function updatePayroll(day){
  const card=TIME_CARDS[day]||{};
  const amountEl=document.getElementById(day+"_payAmount"),barEl=document.getElementById(day+"_payBar"),timeEl=document.getElementById(day+"_payTime"),capEl=document.getElementById(day+"_payCap");
  if(!amountEl||!barEl||!timeEl)return;
  const end=card.out||Date.now(),elapsed=card.in?Math.max(0,Math.min(end-card.in,PAY_CAP_MS)):0,base=(elapsed/3600000)*HOURLY_RATE,pct=Math.min(100,(elapsed/PAY_CAP_MS)*100),comm=AUTH_ROLE==='employee'?commissionTotal(AUTHENTICATED_EMPLOYEE,day):0,total=base+comm;
  const totalSec=Math.floor(elapsed/1000),h=Math.floor(totalSec/3600),m=Math.floor((totalSec%3600)/60),s=totalSec%60;
  amountEl.textContent="$"+total.toFixed(2);barEl.style.width=pct.toFixed(2)+"%";timeEl.textContent=`${h}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s scheduled base time`;
  const b=document.getElementById(day+'_basePay'),c=document.getElementById(day+'_commissionPay'),p=document.getElementById(day+'_projectedPay');if(b)b.textContent='$'+base.toFixed(2);if(c)c.textContent='$'+comm.toFixed(2);if(p)p.textContent='$'+total.toFixed(2);
  if(capEl)capEl.textContent=elapsed>=PAY_CAP_MS?"Scheduled 4-hour base-pay tracker reached $31.00":"Progress to scheduled 4-hour base pay: $31.00 · "+Math.floor(pct)+"%";
}

function tickLiveClock(){
  const now = new Date();
  Object.keys(DAY_META).forEach(day=>{
    const clock = document.getElementById(day+"_liveClock");
    const date = document.getElementById(day+"_liveDate");
    if(clock) clock.textContent = now.toLocaleTimeString([], {hour:"numeric",minute:"2-digit",second:"2-digit"});
    if(date) date.textContent = now.toLocaleDateString([], {weekday:"short",month:"short",day:"numeric",year:"numeric"});
    if(TIME_CARDS[day]?.in && !TIME_CARDS[day]?.out){
      const duration = document.getElementById(day+"_durationDisplay");
      if(duration) duration.textContent = durationText(TIME_CARDS[day].in, null);
    }
    updatePayroll(day);
    if(AUTH_ROLE==="employee"){renderCommandCenter();}
    updateTimeManagement(day);
  });
}
setInterval(tickLiveClock,1000);



function miniConfetti(source){
  if(!source) return;
  const r=source.getBoundingClientRect();
  const colors=["#6f55ff","#8b7cff","#a993ff","#c8bcff","#ffffff","#6fdcff"];
  for(let i=0;i<18;i++){
    const p=document.createElement("i");
    p.className="confetti-piece";
    p.style.left=(r.left+r.width/2)+"px";
    p.style.top=(r.top+r.height/2)+"px";
    p.style.background=colors[i%colors.length];
    p.style.color=colors[i%colors.length];
    p.style.setProperty("--dx",((Math.random()-.5)*150)+"px");
    p.style.setProperty("--dy",(45+Math.random()*105)+"px");
    p.style.setProperty("--rot",((Math.random()-.5)*720)+"deg");
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),950);
  }
}
document.addEventListener("change",e=>{
  if(e.target.matches('.task input[type="checkbox"][data-save]') && e.target.checked){
    const row=e.target.closest(".task");
    row?.classList.remove("just-checked");
    void row?.offsetWidth;
    row?.classList.add("just-checked");
    miniConfetti(e.target);
    recordRapidTaskCompletion(e.target);
    setTimeout(()=>refreshTaskPacing(e.target.closest("[data-subpanel]")||document),0);
  }
  const panel=e.target.closest("[data-subpanel]");
  if(panel){
    const [day]=panel.dataset.subpanel.split(":");
    setTimeout(()=>updateGateState(day),0);
  }
});

function checkedAll(selector){
  const items=[...document.querySelectorAll(selector)];
  return items.length>0 && items.every(el=>el.checked);
}
function hasValue(id){
  const el=document.getElementById(id);
  return !!el && String(el.value).trim()!=="";
}
function setSectionLocked(day,stage,locked){
  const el=document.getElementById(`${day}_stage_${stage}`);
  if(!el) return;
  el.classList.toggle("locked-section",locked);
  el.querySelectorAll("input, textarea, select, button").forEach(ctrl=>{
    if(ctrl.type!=="checkbox") ctrl.disabled=locked;
  });
}
function applyTaskSequence(day,prefix,stageUnlocked){
  const boxes=[...document.querySelectorAll(`[id^="${day}_${prefix}_"][type="checkbox"]`)];
  boxes.forEach(box=>{
    box.disabled=!stageUnlocked;
    const row=box.closest(".task");
    if(row) row.classList.toggle("next-locked",!stageUnlocked);
  });
}
function stageComplete(day,stage){
  if(stage==="connect") return checkedAll(`[id^="${day}_open_"][type="checkbox"]`);
  if(stage==="store") return checkedAll(`[id^="${day}_store_"][type="checkbox"]`);
  if(stage==="analytics"){
    return hasValue(`${day}_orders`) &&
           hasValue(`${day}_conversion`) &&
           hasValue(`${day}_sessions`) &&
           hasValue(`${day}_sales`);
  }
  if(stage==="social"){
    return hasValue(`${day}_platform`) &&
           hasValue(`${day}_followers`) &&
           checkedAll(`[id^="${day}_social_"][type="checkbox"]`);
  }
  if(stage==="submit") return checkedAll(`[id^="${day}_submit_"][type="checkbox"]`);
  return false;
}
function shiftPanel(day,tab){
  return document.querySelector(`[data-subpanel="${day}:${tab}"]`);
}
function shiftIsComplete(day,tab){
  if(AUTH_ROLE==="manager") return true;
  const panel=shiftPanel(day,tab);
  if(!panel) return false;

  // Only evaluate controls INSIDE this exact shift panel.
  const checks=[...panel.querySelectorAll('input[type="checkbox"][data-save]')];
  const required=[...panel.querySelectorAll('[data-required]')];

  const checksDone=checks.every(el=>el.checked);
  const fieldsDone=required.every(el=>String(el.value ?? "").trim()!=="");

  // Beginning has an explicit completion action; all other shifts unlock automatically
  // when their own required controls are complete.
  if(tab==="beginning"){
    const completeEl=document.getElementById(day+"_complete");
    return checksDone && fieldsDone && !!completeEl && !completeEl.classList.contains("hidden");
  }
  return checksDone && fieldsDone;
}
function updateGateState(day){
  // Section gates inside Beginning still follow Beginning's own stages only.
  const manager=AUTH_ROLE==="manager";
  const clockedIn=!!TIME_CARDS[day]?.in;

  const connectUnlocked=manager || clockedIn;
  const storeUnlocked=manager || (connectUnlocked && stageComplete(day,"connect"));
  const analyticsUnlocked=manager || (storeUnlocked && stageComplete(day,"store"));
  const socialUnlocked=manager || (analyticsUnlocked && stageComplete(day,"analytics"));
  const submitUnlocked=manager || (socialUnlocked && stageComplete(day,"social"));
  const finishUnlocked=manager || (submitUnlocked && stageComplete(day,"submit"));

  setSectionLocked(day,"connect",!connectUnlocked);
  setSectionLocked(day,"store",!storeUnlocked);
  setSectionLocked(day,"analytics",!analyticsUnlocked);
  setSectionLocked(day,"social",!socialUnlocked);
  setSectionLocked(day,"submit",!submitUnlocked);
  setSectionLocked(day,"finish",!finishUnlocked);
  applyTaskSequence(day,"open",connectUnlocked);
  applyTaskSequence(day,"store",storeUnlocked);
  applyTaskSequence(day,"social",socialUnlocked);
  applyTaskSequence(day,"submit",submitUnlocked);

  const firstTask=document.getElementById(`${day}_firstTask`);
  const finishBtn=document.getElementById(`${day}_finishBtn`);
  if(firstTask) firstTask.disabled=!connectUnlocked;
  if(finishBtn) finishBtn.disabled=!finishUnlocked;

  const order=["beginning","mid1","mid2","mid3","closing"];
  const unlocked={
    beginning: manager || clockedIn,
    mid1: manager || shiftIsComplete(day,"beginning"),
    mid2: manager || shiftIsComplete(day,"mid1"),
    mid3: manager || shiftIsComplete(day,"mid2"),
    closing: manager || shiftIsComplete(day,"mid3")
  };
  document.querySelectorAll(`[data-daytabs="${day}"] .subtab`).forEach(btn=>{
    const allowed=!!unlocked[btn.dataset.subtab];
    btn.disabled=!allowed;
    btn.classList.toggle("phase-locked",!allowed);
    btn.title=allowed ? "" : "Complete the previous shift section first.";
  });
  const activePanel=document.querySelector(`[data-subpanel^="${day}:"] .grid`)?.closest("[data-subpanel]") || document.querySelector(`[data-subpanel^="${day}:"]`);
  if(activePanel) setTimeout(()=>refreshTaskPacing(activePanel),0);
  renderWarningCounter(day);
  renderV19ShiftStates(day);
  setTimeout(()=>v19MaybeShiftComplete(day),20);
}
function updateAllGates(){
  Object.keys(DAY_META).forEach(updateGateState);
}

function selectedEmployee(){
  return (AUTH_ROLE==="employee" && AUTHENTICATED_EMPLOYEE) ? AUTHENTICATED_EMPLOYEE : "UNSELECTED";
}
function storageKey(){ return WEEK_KEY+"::"+selectedEmployee(); }
function allSaveEls(){ return [...document.querySelectorAll("[data-save]")]; }

function collect(){
  const previousRaw = safeGet(storageKey());
  let previous = {};
  try { previous = previousRaw ? JSON.parse(previousRaw) : {}; } catch(e) { previous = {}; }

  const obj={ employee:selectedEmployee(), completed:{}, subtabs:{}, timecards: previous.timecards || {} };
  allSaveEls().forEach(el=>obj[el.id]=el.type==="checkbox"?el.checked:el.value);
  Object.keys(DAY_META).forEach(day=>{
    obj.completed[day]=!document.getElementById(day+"_complete").classList.contains("hidden");
    const active=document.querySelector(`[data-daytabs="${day}"] .subtab.active`);
    obj.subtabs[day]=active?active.dataset.subtab:"beginning";
  });
  obj.savedAt=new Date().toISOString();
  return obj;
}

function save(show=true){
  if(AUTH_ROLE!=="employee" || !AUTHENTICATED_EMPLOYEE){
    if(show && AUTH_ROLE!=="manager") alert("Log in to an employee account first.");
    return;
  }
  safeSet(storageKey(), JSON.stringify(collect()));
  Object.keys(DAY_META).forEach(day=>{
    const s=document.getElementById(day+"_saveState");
    if(s){ s.textContent=show?"Saved":"Autosaved"; s.className="pill good"; }
  });
  updateProgress();
}

function clearForm(){
  allSaveEls().forEach(el=>{
    if(el.type==="checkbox") el.checked=false;
    else el.value="";
  });
  Object.keys(DAY_META).forEach(day=>{
    const c=document.getElementById(day+"_complete");
    if(c) c.classList.add("hidden");
    switchSubtab(day,"beginning",false);
  });
}

function load(){
  clearForm();
  TIME_CARDS = {};
  const emp=(AUTH_ROLE==="employee") ? AUTHENTICATED_EMPLOYEE : null;
  if(!emp){
    Object.keys(DAY_META).forEach(renderClock);
    updateProgress();
    return;
  }
  const raw=safeGet(storageKey());
  if(raw){
    const data=JSON.parse(raw);
    TIME_CARDS = data.timecards || {};
    Object.entries(data).forEach(([id,val])=>{
      const el=document.getElementById(id);
      if(!el) return;
      if(el.type==="checkbox") el.checked=!!val;
      else el.value=val ?? "";
    });
    if(data.completed){
      Object.entries(data.completed).forEach(([day,val])=>{
        if(val && document.getElementById(day+"_complete")) document.getElementById(day+"_complete").classList.remove("hidden");
      });
    }
    if(data.subtabs){
      Object.entries(data.subtabs).forEach(([day,tab])=>switchSubtab(day,tab,false));
    }
  }
  Object.keys(DAY_META).forEach(renderClock);
  tickLiveClock();
  updateProgress();
  updateAllGates();
}

// Beginning-shift completion must ONLY evaluate fields/checklists inside the Beginning tab.
// Later shift fields exist on the same day page, but they must not block an employee from
// completing the first-hour checklist.
function beginningPanelEl(day){
  return document.querySelector(`[data-subpanel="${day}:beginning"]`);
}
function daySaveEls(day){
  const panel=beginningPanelEl(day);
  return panel ? [...panel.querySelectorAll(`[data-save]`)] : [];
}
function dayRequired(day){
  const panel=beginningPanelEl(day);
  return panel ? [...panel.querySelectorAll(`[data-required]`)] : [];
}

function updateProgress(){
  Object.keys(DAY_META).forEach(day=>{
    const els=daySaveEls(day);
    const checks=els.filter(el=>el.type==="checkbox");
    const required=dayRequired(day);
    const checked=checks.filter(el=>el.checked).length;
    const filled=required.filter(el=>String(el.value).trim()!=="").length;
    const taskScore=checks.length?checked/checks.length:0;
    const reqScore=required.length?filled/required.length:0;
    const pct=Math.round(taskScore*75+reqScore*25);

    const bar=document.getElementById(day+"_bar");
    const weekBar=document.getElementById(day+"WeekBar");
    const pctEl=document.getElementById(day+"_pct");
    if(bar) bar.style.width=pct+"%";
    if(weekBar) weekBar.style.width=pct+"%";
    if(pctEl) pctEl.textContent=pct+"% complete";

    const req=document.getElementById(day+"_req");
    const missing=required.length-filled;
    if(req){
      if(AUTH_ROLE==="manager"){
        req.textContent="Manager Override · requirements bypassed";
        req.className="pill good";
      }else if(missing===0){req.textContent="Required fields complete";req.className="pill good";}
      else{req.textContent=missing+" required field(s) missing";req.className="pill warn";}
    }

    const completeEl=document.getElementById(day+"_complete");
    const done=completeEl ? !completeEl.classList.contains("hidden") : false;
    const summary=document.getElementById(day+"Summary");
    if(summary) summary.textContent=done?`1st Hour complete · ${pct}% filled`:(pct?`In progress · ${pct}%`:"Not started");
  });
}

function markComplete(day){
  if(AUTH_ROLE==="manager"){
    const completeEl=document.getElementById(day+"_complete");
    if(completeEl) completeEl.classList.remove("hidden");
    updateGateState(day);
    updateProgress();
    return;
  }
  const missing=dayRequired(day).filter(el=>String(el.value).trim()==="");
  const unchecked=daySaveEls(day).filter(el=>el.type==="checkbox"&&!el.checked);
  if(missing.length||unchecked.length){
    alert(`Not complete yet.

Missing required fields: ${missing.length}
Unchecked checklist items: ${unchecked.length}`);
    updateGateState(day);
    return;
  }
  document.getElementById(day+"_complete").classList.remove("hidden");
  save(false);
  updateGateState(day);
}

function switchSubtab(day,tab,doSave=true){
  RAPID_CHECK_TIMES=[];
  const nav=document.querySelector(`[data-daytabs="${day}"]`);
  if(!nav) return;

  if(AUTH_ROLE!=="manager"){
    updateGateState(day);
    const target=nav.querySelector(`.subtab[data-subtab="${tab}"]`);
    if(target?.disabled){
      alert("Finish the previous shift section first. The lock only checks that specific shift — not tasks from later shifts.");
      return;
    }
  }

  nav.querySelectorAll(".subtab").forEach(btn=>btn.classList.toggle("active",btn.dataset.subtab===tab));
  document.querySelectorAll(`[data-subpanel^="${day}:"]`).forEach(panel=>{
    panel.classList.toggle("active",panel.dataset.subpanel===`${day}:${tab}`);
  });
  const activePanel=document.querySelector(`[data-subpanel="${day}:${tab}"]`);
  if(activePanel)setTimeout(()=>refreshTaskPacing(activePanel),0);
  if(doSave) save(false);
}

document.addEventListener("click",e=>{
const finishBtn=e.target.closest("[data-finish-day]");
  if(finishBtn){
    markComplete(finishBtn.dataset.finishDay);
    return;
  }

  const btn=e.target.closest(".subtab");
  if(btn){
    if(btn.disabled) return;
    const nav=btn.closest("[data-daytabs]");
    switchSubtab(nav.dataset.daytabs,btn.dataset.subtab,true);
    if(btn.dataset.subtab==="mid3") renderContactCards(nav.dataset.daytabs);
  }
});


document.addEventListener("input",e=>{
  const panel=e.target.closest?.("[data-subpanel]");
  if(panel){
    const [day]=panel.dataset.subpanel.split(":");
    setTimeout(()=>updateGateState(day),0);
  }
});


const TEAM_MESSAGES_KEY=WEEK_KEY+"::TEAM_MESSAGES_V1";
let ACTIVE_MESSAGE_PEER=null;
function currentMessageUser(){
  if(AUTH_ROLE==="manager")return {id:MANAGER_ID,name:"Manager"};
  if(AUTH_ROLE==="employee"&&AUTHENTICATED_EMPLOYEE)return {id:AUTHENTICATED_EMPLOYEE,name:AUTHENTICATED_DISPLAY_NAME||employeeById(AUTHENTICATED_EMPLOYEE)?.displayName||"Employee"};
  return null;
}
function registeredMessagePeople(){
  const me=currentMessageUser();
  const people=allEmployees().filter(e=>!!getAuthRecord(e.id)).map(e=>({id:e.id,name:e.displayName}));
  if(safeGet(managerAuthKey()))people.push({id:MANAGER_ID,name:"Manager"});
  return people.filter(p=>!me||p.id!==me.id);
}
function getTeamMessages(){return readJsonKey(TEAM_MESSAGES_KEY,[]);}
function saveTeamMessages(v){writeJsonKey(TEAM_MESSAGES_KEY,v);}
function messageThread(a,b){return getTeamMessages().filter(m=>(m.from===a&&m.to===b)||(m.from===b&&m.to===a)).sort((x,y)=>new Date(x.at)-new Date(y.at));}
function renderMessages(){
  const peopleEl=document.getElementById("messagePeople"),listEl=document.getElementById("messageList"),head=document.getElementById("messageThreadHead");
  if(!peopleEl||!listEl)return;
  const me=currentMessageUser(),people=registeredMessagePeople();
  peopleEl.innerHTML=people.length?people.map(p=>`<button type="button" class="message-person ${ACTIVE_MESSAGE_PEER===p.id?"active":""}" onclick="openMessagePeer('${escapeHtml(p.id)}')"><span class="chat-avatar">${escapeHtml(initials(p.name))}</span><span><strong>${escapeHtml(p.name)}</strong><small style="display:block;color:var(--muted);margin-top:3px">${p.id===MANAGER_ID?"Manager Override":"Team account"}</small></span></button>`).join(""):`<div class="message-empty"><strong>No conversations yet.</strong><br><small>Other created Team Hub accounts will appear here.</small></div>`;
  const peer=people.find(p=>p.id===ACTIVE_MESSAGE_PEER);
  const draft=document.getElementById("messageDraft"),send=document.getElementById("messageSendBtn");
  if(!me||!peer){
    head.textContent="Choose someone to message";
    listEl.innerHTML='<div class="message-empty">Select an account to open the conversation.</div>';
    draft.disabled=true;send.disabled=true;return;
  }
  head.textContent=peer.name;
  draft.disabled=false;send.disabled=false;
  const msgs=messageThread(me.id,peer.id);
  listEl.innerHTML=msgs.length?msgs.map(m=>`<div class="message-bubble ${m.from===me.id?"mine":""}">${escapeHtml(m.text)}<small>${escapeHtml(new Date(m.at).toLocaleString())}</small></div>`).join(""):'<div class="message-empty">No messages yet. Start the conversation.</div>';
  listEl.scrollTop=listEl.scrollHeight;
}
function openMessagePeer(id){ACTIVE_MESSAGE_PEER=id;renderMessages();}
function sendTeamMessage(){
  const me=currentMessageUser(),text=document.getElementById("messageDraft")?.value.trim();
  if(!me||!ACTIVE_MESSAGE_PEER||!text)return;
  const valid=registeredMessagePeople().some(p=>p.id===ACTIVE_MESSAGE_PEER);
  if(!valid){alert("That account is not currently available.");return;}
  const list=getTeamMessages();
  list.push({id:"msg_"+Date.now()+"_"+Math.random().toString(36).slice(2),from:me.id,fromName:me.name,to:ACTIVE_MESSAGE_PEER,text,at:new Date().toISOString()});
  saveTeamMessages(list);
  addNotification(ACTIVE_MESSAGE_PEER,"New message from "+me.name,text.slice(0,120),"#messages","message");
  document.getElementById("messageDraft").value="";
  renderMessages();
  showSaved("Message sent");
}


/* ================= V18 COMMAND CENTER DATA ================= */
const HOURLY_RATE_V18=7.75;
const PAY_PERIOD_LABEL="Sep 28 – Oct 11, 2026";
const SCHEDULES_KEY=WEEK_KEY+"::SCHEDULES_V1";
const SHIFT_ISSUES_KEY=WEEK_KEY+"::SHIFT_ISSUES_V1";
const NOTIFICATIONS_KEY=WEEK_KEY+"::NOTIFICATIONS_V1";
const INVENTORY_KEY=WEEK_KEY+"::INVENTORY_V1";
const INVENTORY_COLORS=["Black","Gray","Brown","Off-White Brown","Off-White Orange","Pink"];
const INVENTORY_SIZES=["S","M","L","XL"];

function v18Read(key,fallback){return readJsonKey(key,fallback);}
function v18Write(key,val){writeJsonKey(key,val);}
function currentUserId(){return AUTH_ROLE==="manager"?MANAGER_ID:AUTHENTICATED_EMPLOYEE;}
function currentUserName(){return AUTH_ROLE==="manager"?"Manager":(AUTHENTICATED_DISPLAY_NAME||employeeById(AUTHENTICATED_EMPLOYEE)?.displayName||"Employee");}

function dayKeyFromToday(){
  const d=new Date(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");
  const key=m+day;
  return DAY_META[key]?key:null;
}
function parseScheduleDateTime(day,time){
  if(!day||!time)return null;
  const meta=DAY_META[day]; if(!meta)return null;
  const [m,d,y]=meta.date.split("/").map(Number),[hh,mm]=time.split(":").map(Number);
  return new Date(y,m-1,d,hh,mm,0,0).getTime();
}

/* Notifications */
function allNotifications(){return v18Read(NOTIFICATIONS_KEY,[]);}
function saveNotifications(v){v18Write(NOTIFICATIONS_KEY,v);}
function addNotification(to,title,text,href="#overview",type="info"){
  if(!to)return;
  const list=allNotifications();
  list.unshift({id:"nt_"+Date.now()+"_"+Math.random().toString(36).slice(2),to,title,text,href,type,at:new Date().toISOString(),read:false});
  saveNotifications(list.slice(0,250));
  updateNotificationBadge();
}
function userNotifications(){
  const id=currentUserId(); if(!id)return[];
  return allNotifications().filter(n=>n.to===id);
}
function updateNotificationBadge(){
  const badge=document.getElementById("notificationBadge"); if(!badge)return;
  const n=userNotifications().filter(x=>!x.read).length;
  badge.textContent=n>99?"99+":n;
  badge.classList.toggle("hidden",!n);
}
function openNotifications(){renderNotifications();document.getElementById("notificationOverlay").classList.add("show");}
function closeNotifications(){document.getElementById("notificationOverlay").classList.remove("show");}
function renderNotifications(){
  const el=document.getElementById("notificationList");if(!el)return;
  const list=userNotifications();
  el.innerHTML=list.length?list.map(n=>`<div class="notification-item ${n.read?"":"unread"}" onclick="openNotification('${escapeHtml(n.id)}')"><strong>${escapeHtml(n.title)}</strong><div>${escapeHtml(n.text)}</div><small>${escapeHtml(new Date(n.at).toLocaleString())}</small></div>`).join(""):`<div class="notification-empty">You're all caught up.</div>`;
  updateNotificationBadge();
}
function openNotification(id){
  const list=allNotifications(),n=list.find(x=>x.id===id);if(!n)return;
  n.read=true;saveNotifications(list);renderNotifications();
  if(n.href){closeNotifications();location.hash=n.href;}
}
function markAllNotificationsRead(){
  const id=currentUserId();if(!id)return;
  const list=allNotifications();list.forEach(n=>{if(n.to===id)n.read=true;});saveNotifications(list);renderNotifications();
}

/* Schedule Center */
function getSchedules(){return v18Read(SCHEDULES_KEY,{});}
function saveSchedules(v){v18Write(SCHEDULES_KEY,v);}
function scheduleFor(emp,day){return getSchedules()?.[emp]?.[day]||null;}
function formatScheduleTime(t){
  if(!t)return"Not assigned";
  const [h,m]=t.split(":").map(Number),d=new Date();d.setHours(h,m,0,0);
  return d.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});
}
function renderScheduleCenter(){
  const empView=document.getElementById("employeeScheduleView"),issue=document.getElementById("employeeScheduleIssue"),mgr=document.getElementById("managerScheduleView");
  if(!empView||!mgr)return;
  const issueDay=document.getElementById("scheduleIssueDay");
  if(issueDay&&!issueDay.options.length)issueDay.innerHTML=Object.entries(DAY_META).map(([d,m])=>`<option value="${d}">${m.label} · ${m.date}</option>`).join("");

  if(AUTH_ROLE==="manager"){
    empView.classList.add("hidden");issue?.classList.add("hidden");mgr.classList.remove("hidden");
    const schedules=getSchedules();
    mgr.innerHTML=`<div class="statusline" style="margin-top:16px"><div><h3>Assign Employee Shifts</h3><p class="sub">Changes create an employee notification. Leave both times blank for no assigned shift.</p></div><span class="pill">Manager Edit</span></div>`+
      allEmployees().map(emp=>`<div class="schedule-employee-block"><strong>${escapeHtml(emp.displayName)}</strong>${Object.entries(DAY_META).map(([day,meta])=>{
        const s=schedules?.[emp.id]?.[day]||{};
        return `<div class="schedule-day-edit"><strong>${escapeHtml(meta.label)}</strong><div class="field"><label>Start</label><input type="time" id="sched_${emp.id}_${day}_start" value="${escapeHtml(s.start||"")}"></div><div class="field"><label>End</label><input type="time" id="sched_${emp.id}_${day}_end" value="${escapeHtml(s.end||"")}"></div><div class="field"><label>Note</label><input id="sched_${emp.id}_${day}_note" value="${escapeHtml(s.note||"")}" placeholder="Optional"></div><button type="button" onclick="saveScheduleAssignment('${escapeHtml(emp.id)}','${day}')">Save</button></div>`;
      }).join("")}</div>`).join("")+
      `<div class="statusline" style="margin-top:22px"><div><h3>Employee Schedule Issues</h3><p class="sub">Requests and problems employees submitted from Schedule Center.</p></div></div>`+
      (()=>{const issues=v18Read(SHIFT_ISSUES_KEY,[]).filter(x=>x.status==="open");return issues.length?issues.map(x=>`<div class="action-item urgent"><div class="action-copy"><strong>${escapeHtml(x.employeeName)} · ${escapeHtml(x.type)}</strong><small>${escapeHtml(DAY_META[x.day]?.label||x.day)} · ${escapeHtml(x.note)} · ${escapeHtml(new Date(x.at).toLocaleString())}</small></div><button type="button" onclick="resolveScheduleIssue('${escapeHtml(x.id)}')">Resolve</button></div>`).join(""):`<div class="manager-empty">No open schedule issues.</div>`;})();
  }else{
    mgr.classList.add("hidden");empView.classList.remove("hidden");issue?.classList.remove("hidden");
    const emp=AUTHENTICATED_EMPLOYEE,today=dayKeyFromToday();
    empView.innerHTML=Object.entries(DAY_META).map(([day,meta])=>{const sch=scheduleFor(emp,day),label=sch?.start&&sch?.end?`${formatScheduleTime(sch.start)} – ${formatScheduleTime(sch.end)}`:"OFF / NOT ASSIGNED";return `<div class="schedule-card ${day===today?"schedule-today":""}"><div class="ceo-kicker">${escapeHtml(meta.label)} · ${escapeHtml(meta.date)}</div><div class="schedule-time">${escapeHtml(label)}</div><div class="sub">${escapeHtml(sch?.note||"No manager note.")}</div>${sch?.start?`<button type="button" onclick="location.hash='#${day}'">OPEN SHIFT →</button>`:""}</div>`;}).join("");
  }
}
function saveScheduleAssignment(emp,day){
  if(AUTH_ROLE!=="manager")return;
  const start=document.getElementById(`sched_${emp}_${day}_start`).value,end=document.getElementById(`sched_${emp}_${day}_end`).value,note=document.getElementById(`sched_${emp}_${day}_note`).value.trim();
  if((start&&!end)||(!start&&end)){alert("Enter both a start and end time, or leave both blank.");return;}
  const schedules=getSchedules();schedules[emp]=schedules[emp]||{};
  schedules[emp][day]={start,end,note,updatedAt:new Date().toISOString()};saveSchedules(schedules);
  const meta=DAY_META[day];
  addNotification(emp,"Schedule updated",start?`${meta.label}: ${formatScheduleTime(start)} – ${formatScheduleTime(end)}${note?" · "+note:""}`:`${meta.label}: no shift assigned`,"#schedule","schedule");
  showSaved("Schedule updated");renderScheduleCenter();renderManagerActionCenter();
}
function resolveScheduleIssue(id){
  if(AUTH_ROLE!=="manager")return;
  const list=v18Read(SHIFT_ISSUES_KEY,[]),issue=list.find(x=>x.id===id);if(!issue)return;
  issue.status="resolved";issue.resolvedAt=new Date().toISOString();v18Write(SHIFT_ISSUES_KEY,list);
  addNotification(issue.employeeId,"Schedule issue reviewed",`${issue.type} for ${DAY_META[issue.day]?.label||issue.day} was marked reviewed by management.`,"#schedule","schedule");
  showSaved("Schedule issue resolved");renderScheduleCenter();renderManagerActionCenter();
}
function submitScheduleIssue(){
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE)return;
  const day=document.getElementById("scheduleIssueDay").value,type=document.getElementById("scheduleIssueType").value,note=document.getElementById("scheduleIssueNote").value.trim();
  if(!note){alert("Tell the manager what is going on before sending.");return;}
  const list=v18Read(SHIFT_ISSUES_KEY,[]);
  list.unshift({id:"issue_"+Date.now(),employeeId:AUTHENTICATED_EMPLOYEE,employeeName:currentUserName(),day,type,note,at:new Date().toISOString(),status:"open"});
  v18Write(SHIFT_ISSUES_KEY,list);document.getElementById("scheduleIssueNote").value="";
  addNotification(MANAGER_ID,"Schedule issue · "+currentUserName(),`${DAY_META[day]?.label||day}: ${type} — ${note}`,"#manager","schedule");
  showSaved("Schedule issue sent to manager");
}

/* My Pay */
function payStats(emp){
  const data=getEmployeeData(emp),cards=data.timecards||{};
  let actualMs=0,scheduledPaidMs=0;
  const rows=[];
  Object.entries(DAY_META).forEach(([day,meta])=>{
    const c=cards[day]||{};if(!c.in)return;
    const end=c.out||Date.now(),ms=Math.max(0,end-c.in),paid=Math.min(ms,4*60*60*1000);
    actualMs+=ms;scheduledPaidMs+=paid;
    rows.push({day,label:`${meta.label} · ${meta.date}`,in:c.in,out:c.out,ms,paid});
  });
  const hourly=(scheduledPaidMs/3600000)*HOURLY_RATE_V18;
  const commission=commissionTotal(emp);
  return {actualMs,scheduledPaidMs,hourly,commission,gross:hourly+commission,rows};
}
function renderPayCenter(){
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE){
    ["payHours","payHourly","payCommission","payGross"].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent="—";});
    const h=document.getElementById("payHistory");if(h)h.innerHTML='<div class="manager-empty">Employee pay view appears when an employee is signed in.</div>';return;
  }
  const s=payStats(AUTHENTICATED_EMPLOYEE);
  document.getElementById("payHours").textContent=(s.scheduledPaidMs/3600000).toFixed(2);
  document.getElementById("payHourly").textContent="$"+s.hourly.toFixed(2);
  document.getElementById("payCommission").textContent="$"+s.commission.toFixed(2);
  document.getElementById("payGross").textContent="$"+s.gross.toFixed(2);
  document.getElementById("payHistory").innerHTML=`<table class="pay-table"><thead><tr><th>Shift</th><th>Clock In</th><th>Clock Out</th><th>Paid Hours Displayed</th><th>Hourly</th></tr></thead><tbody>${s.rows.length?s.rows.map(r=>`<tr><td>${escapeHtml(r.label)}</td><td>${escapeHtml(formatTime(r.in))}</td><td>${r.out?escapeHtml(formatTime(r.out)):"Active"}</td><td>${(r.paid/3600000).toFixed(2)}</td><td>$${((r.paid/3600000)*HOURLY_RATE_V18).toFixed(2)}</td></tr>`).join(""):'<tr><td colspan="5">No timecards recorded yet.</td></tr>'}</tbody></table>`;
}

/* Inventory */
function defaultInventory(){
  const o={};INVENTORY_COLORS.forEach(c=>{o[c]={};INVENTORY_SIZES.forEach(s=>o[c][s]=null);});return o;
}
function getInventory(){const saved=v18Read(INVENTORY_KEY,null);return saved||defaultInventory();}
function stockLabel(v){
  if(v===null||v===""||Number.isNaN(Number(v)))return {text:"—",cls:""};
  const n=Number(v);if(n<=0)return{text:"SOLD OUT",cls:"stock-sold"};if(n<=2)return{text:String(n),cls:"stock-low"};return{text:String(n),cls:"stock-good"};
}
function renderInventory(){
  const el=document.getElementById("inventoryBoard");if(!el)return;
  const inv=getInventory(),manager=AUTH_ROLE==="manager";
  document.getElementById("inventoryModePill").textContent=manager?"Manager Edit":"Employee Reference";
  document.getElementById("inventoryManagerTools").classList.toggle("hidden",!manager);
  el.innerHTML=`<table class="inventory-table"><thead><tr><th>Color</th>${INVENTORY_SIZES.map(s=>`<th>${s}</th>`).join("")}</tr></thead><tbody>${INVENTORY_COLORS.map(c=>`<tr><th>${escapeHtml(c)}</th>${INVENTORY_SIZES.map(s=>{
    const v=inv?.[c]?.[s],lab=stockLabel(v);
    return `<td>${manager?`<input type="number" min="0" id="inv_${INVENTORY_COLORS.indexOf(c)}_${s}" value="${v===null||v===""?"":escapeHtml(v)}" placeholder="—">`:`<span class="${lab.cls}">${lab.text}</span>`}</td>`;
  }).join("")}</tr>`).join("")}</tbody></table>`;
}
function saveInventoryFromBoard(){
  if(AUTH_ROLE!=="manager")return;
  const inv=defaultInventory();
  INVENTORY_COLORS.forEach((c,ci)=>INVENTORY_SIZES.forEach(s=>{const raw=document.getElementById(`inv_${ci}_${s}`).value;inv[c][s]=raw===""?null:Math.max(0,Number(raw));}));
  v18Write(INVENTORY_KEY,inv);showSaved("Inventory board updated");
  allEmployees().filter(e=>getAuthRecord(e.id)).forEach(e=>addNotification(e.id,"Inventory board updated","Manager updated the Nocturne inventory reference.","#inventory","inventory"));
  renderInventory();
}

/* Today's Command Center */
function countDayTasksForEmployee(emp,day){
  if(!day)return{done:0,total:0};
  const data=getEmployeeData(emp);
  const ids=[...document.querySelectorAll(`[data-subpanel^="${day}:"] input[type="checkbox"][data-save]`)].map(x=>x.id);
  return {done:ids.filter(id=>data[id]===true).length,total:ids.length};
}
function renderCommandCenter(){
  syncV19Chrome();
  const greet=document.getElementById("commandGreeting");if(!greet)return;
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE){
    greet.textContent=AUTH_ROLE==="manager"?"Manager Override":"Welcome to FourthHaven.";
    document.getElementById("commandSub").textContent=AUTH_ROLE==="manager"?"Use Manager Dashboard for team-wide actions.":"Sign in to load today's priorities.";
    return;
  }
  const day=dayKeyFromToday(),emp=AUTHENTICATED_EMPLOYEE,name=currentUserName().split(" ")[0]||currentUserName();
  greet.textContent=`Good ${new Date().getHours()<12?"morning":new Date().getHours()<18?"afternoon":"evening"}, ${name}.`;
  document.getElementById("commandSub").textContent=day?`${DAY_META[day].label} · ${DAY_META[day].date} · Today's minimum goals are loaded below.`:"No Team Hub shift page is scheduled for today's calendar date.";
  const s=day?scheduleFor(emp,day):null;
  document.getElementById("commandShift").textContent=s?.start&&s?.end?`${formatScheduleTime(s.start)}–${formatScheduleTime(s.end)}`:"Not assigned";
  let status="Off clock";
  if(day){
    const c=(getEmployeeData(emp).timecards||{})[day];
    if(c?.in&&!c?.out)status="Clocked in";
    else if(c?.out)status="Shift complete";
    else if(s?.start){
      const start=parseScheduleDateTime(day,s.start),diff=start-Date.now();
      status=diff>0?`Starts in ${Math.max(1,Math.round(diff/60000))}m`:"Ready to clock in";
    }
  }
  document.getElementById("commandTime").textContent=status;
  const t=countDayTasksForEmployee(emp,day);
  document.getElementById("commandTasks").textContent=t.total?`${t.done}/${t.total}`:"—";
  document.getElementById("commandCommission").textContent="$"+(day?commissionTotal(emp,day):0).toFixed(2);
}

/* Employee profile */
function renderProfileDashboard(){
  const el=document.getElementById("profileDashboard");if(!el)return;
  if(AUTH_ROLE!=="employee"||!AUTHENTICATED_EMPLOYEE){el.innerHTML='<div class="manager-empty">Employee profile appears when an employee is signed in.</div>';return;}
  const emp=employeeById(AUTHENTICATED_EMPLOYEE),auth=getAuthRecord(AUTHENTICATED_EMPLOYEE)||{},s=performanceStats(AUTHENTICATED_EMPLOYEE),pay=payStats(AUTHENTICATED_EMPLOYEE);
  const avatar=auth.profilePhoto?`<img src="${auth.profilePhoto}" alt="">`:`<div class="profile-avatar-big">${escapeHtml(initials(emp?.displayName||currentUserName()))}</div>`;
  el.innerHTML=`<div class="profile-main">${avatar}<h2 style="margin:10px 0 2px">${escapeHtml(emp?.displayName||currentUserName())}</h2><div class="sub">${auth.username?escapeHtml("@"+auth.username):"Employee account"}</div><button type="button" style="margin-top:12px" onclick="openProfileModal(false)">Change Photo</button></div>
  <div class="profile-stats">
    <div class="profile-stat"><strong>${s.completion}%</strong><small>Task Completion</small></div>
    <div class="profile-stat"><strong>${s.doneTasks}</strong><small>Tasks Completed</small></div>
    <div class="profile-stat"><strong>${s.sales}</strong><small>Sales Reported</small></div>
    <div class="profile-stat"><strong>$${s.customerSpend.toFixed(2)}</strong><small>Customer Spend</small></div>
    <div class="profile-stat"><strong>$${pay.commission.toFixed(2)}</strong><small>Commission</small></div>
    <div class="profile-stat"><strong>${(pay.scheduledPaidMs/3600000).toFixed(2)}</strong><small>Recorded Paid Hours</small></div>
  </div>`;
}

/* Manager Action Center */
function pendingManagerActions(){
  const actions=[];
  const issues=v18Read(SHIFT_ISSUES_KEY,[]).filter(x=>x.status==="open");
  issues.forEach(x=>actions.push({kind:"schedule",title:`${x.employeeName} · ${x.type}`,text:`${DAY_META[x.day]?.label||x.day}: ${x.note}`,href:"#schedule",urgent:true,id:x.id}));
  allEmployees().forEach(emp=>{
    getCommissions(emp.id).filter(r=>r.status!=="verified").forEach(r=>actions.push({kind:"commission",title:`Commission · ${emp.displayName}`,text:`${r.customer} · $${Number(r.commission||0).toFixed(2)} awaiting verification`,href:"#commission",urgent:false,id:r.id}));
    const pace=getPaceData(emp.id);(pace.reports||[]).slice(0,3).forEach(r=>actions.push({kind:"pacing",title:`Pacing alert · ${emp.displayName}`,text:r.message||r.reason||"Pacing alert recorded",href:"#manager",urgent:true,id:r.at||Math.random()}));
  });
  return actions.slice(0,30);
}
function renderManagerActionCenter(){
  const el=document.getElementById("managerActionCenter");if(!el||AUTH_ROLE!=="manager")return;
  const actions=pendingManagerActions(),pill=document.getElementById("managerActionCount");
  pill.textContent=`${actions.length} action${actions.length===1?"":"s"}`;
  el.innerHTML=actions.length?actions.map(a=>`<div class="action-item ${a.urgent?"urgent":""}"><div class="action-copy"><strong>${escapeHtml(a.title)}</strong><small>${escapeHtml(a.text)}</small></div><button type="button" onclick="location.hash='${a.href}'">Open</button></div>`).join(""):`<div class="manager-empty">Nothing needs attention right now.</div>`;
}

/* Hooks */


/* V19 responsive studio behavior */
let V19_GALLERY_FILTER='All';
let V19_LAST_UNLOCKS={};
function v19CurrentShiftDay(){const t=dayKeyFromToday();if(t)return t;const ks=Object.keys(DAY_META),now=Date.now();return ks.find(k=>{const [m,d,y]=DAY_META[k].date.split('/').map(Number);return new Date(y,m-1,d,23,59,59).getTime()>=now;})||ks[ks.length-1];}
function syncV19Chrome(){const day=v19CurrentShiftDay(),side=document.getElementById('sideShiftLink'),mob=document.getElementById('mobileShiftLink');if(side)side.href='#'+day;if(mob)mob.href='#'+day;const name=document.getElementById('sideAccountName'),role=document.getElementById('sideAccountRole'),status=document.getElementById('sideAccountStatus'),img=document.getElementById('sideAvatar'),fb=document.getElementById('sideAvatarFallback');if(AUTH_ROLE==='manager'){if(name)name.textContent='Manager Override';if(role)role.textContent='FourthHaven / Control';if(status){status.textContent='● Management access';status.className='side-status';}img?.classList.add('hidden');fb?.classList.remove('hidden');if(fb)fb.textContent='IV';}else if(AUTH_ROLE==='employee'&&AUTHENTICATED_EMPLOYEE){const emp=employeeById(AUTHENTICATED_EMPLOYEE),auth=getAuthRecord(AUTHENTICATED_EMPLOYEE)||{};if(name)name.textContent=emp?.displayName||AUTHENTICATED_DISPLAY_NAME||'Employee';if(role)role.textContent='FourthHaven Team';const today=dayKeyFromToday(),c=today?(getEmployeeData(AUTHENTICATED_EMPLOYEE).timecards||{})[today]:null;if(status){status.textContent=c?.in&&!c?.out?'● Clocked in':'○ Clocked out';status.className=c?.in&&!c?.out?'side-status':'';}if(auth.profilePhoto&&img&&fb){img.src=auth.profilePhoto;img.classList.remove('hidden');fb.classList.add('hidden');}else{img?.classList.add('hidden');fb?.classList.remove('hidden');if(fb)fb.textContent=initials(emp?.displayName||'FH');}}else{if(name)name.textContent='Team Hub';if(role)role.textContent='Sign in to begin';if(status){status.textContent='FourthHaven IV';status.className='';}img?.classList.add('hidden');fb?.classList.remove('hidden');if(fb)fb.textContent='IV';}}
function openQuickActions(){document.getElementById('quickActionOverlay')?.classList.add('show');}
function closeQuickActions(){document.getElementById('quickActionOverlay')?.classList.remove('show');}
function quickGo(hash){closeQuickActions();location.hash=hash;}
function quickMessageManager(){closeQuickActions();location.hash='#messages';setTimeout(()=>{if(AUTH_ROLE==='employee'&&safeGet(managerAuthKey()))openMessagePeer(MANAGER_ID);},80);}
function closeEmployeeDrawer(){document.getElementById('employeeDrawerOverlay')?.classList.remove('show');}
function openEmployeeDrawer(employeeId){if(AUTH_ROLE!=='manager')return;const emp=employeeById(employeeId),s=performanceStats(employeeId);if(!emp)return;document.getElementById('employeeDrawerName').textContent=emp.displayName;document.getElementById('employeeDrawerBody').innerHTML=`<div class="profile-stats"><div class="profile-stat"><strong>${s.completion}%</strong><small>Task completion</small></div><div class="profile-stat"><strong>${s.doneTasks}/${s.totalTasks}</strong><small>Tasks</small></div><div class="profile-stat"><strong>${s.sales}</strong><small>Sales reported</small></div><div class="profile-stat"><strong>$${s.customerSpend.toFixed(2)}</strong><small>Customer spend</small></div><div class="profile-stat"><strong>$${s.commissionEarned.toFixed(2)}</strong><small>Commission</small></div><div class="profile-stat"><strong>${s.warnings+s.delays}</strong><small>Alerts</small></div></div><button type="button" class="primary" style="width:100%;margin-top:16px" onclick="closeEmployeeDrawer();renderManagerEmployeeReport('${escapeHtml(employeeId)}');document.getElementById('managerReportCard')?.scrollIntoView({behavior:'smooth'})">OPEN FULL EMPLOYEE REPORT</button>`;document.getElementById('employeeDrawerOverlay')?.classList.add('show');}
function renderV19ShiftStates(day){document.querySelectorAll(`[data-daytabs="${day}"] .subtab`).forEach(btn=>{const phase=btn.dataset.subtab,complete=shiftIsComplete(day,phase),key=day+':'+phase,was=V19_LAST_UNLOCKS[key],unlocked=!btn.disabled;btn.classList.toggle('phase-complete',complete);if(unlocked&&was===false){btn.classList.add('just-unlocked');setTimeout(()=>btn.classList.remove('just-unlocked'),900);}V19_LAST_UNLOCKS[key]=unlocked;});}
function v19MaybeShiftComplete(day){if(AUTH_ROLE!=='employee'||!AUTHENTICATED_EMPLOYEE||!shiftIsComplete(day,'closing'))return;const key=WEEK_KEY+'::V19_FINISH_SHOWN::'+AUTHENTICATED_EMPLOYEE+'::'+day;if(sessionStorage.getItem(key))return;sessionStorage.setItem(key,'1');const data=getEmployeeData(AUTHENTICATED_EMPLOYEE),c=(data.timecards||{})[day]||{},ms=c.in?Math.max(0,(c.out||Date.now())-c.in):0,ids=[...document.querySelectorAll(`[data-subpanel^="${day}:"] input[type="checkbox"][data-save]`)].map(x=>x.id),done=ids.filter(id=>data[id]===true).length;document.getElementById('shiftCompleteCopy').textContent=`Good work today, ${(currentUserName().split(' ')[0]||'team')}.`;document.getElementById('shiftCompleteTime').textContent=ms?humanDurationMins(Math.round(ms/60000)):'—';document.getElementById('shiftCompleteTasks').textContent=`${done}/${ids.length}`;document.getElementById('shiftCompleteCommission').textContent='$'+commissionTotal(AUTHENTICATED_EMPLOYEE,day).toFixed(2);document.getElementById('shiftCompleteOverlay')?.classList.add('show');document.documentElement.style.overflow='hidden';}
function dismissShiftComplete(){document.getElementById('shiftCompleteOverlay')?.classList.remove('show');document.documentElement.style.overflow='';location.hash='#overview';}
function updateV19Receipt(){const customer=document.getElementById('commissionCustomer')?.value.trim()||'—',spent=Number(document.getElementById('commissionSpent')?.value||0),c=document.getElementById('receiptCustomer'),s=document.getElementById('receiptSpent'),items=document.getElementById('receiptItems');if(c)c.textContent=customer;if(s)s.textContent='$'+spent.toFixed(2);if(items){const valid=COMMISSION_DRAFT_ITEMS.filter(x=>x.product||x.color||x.size);items.innerHTML=valid.length?valid.map(x=>`<div class="sale-receipt-line"><span>${escapeHtml((x.qty||1)+'× '+(x.color||'')+' '+(x.product||'Product')+' '+(x.size?'('+x.size+')':''))}</span><strong>ITEM</strong></div>`).join(''):'<div class="sale-receipt-line"><span>Products</span><strong>—</strong></div>';}}
function setGalleryFilter(filter){V19_GALLERY_FILTER=filter;document.querySelectorAll('[data-gallery-filter]').forEach(b=>b.classList.toggle('active',b.dataset.galleryFilter===filter));renderGallery();}
function renderManagerTeamStatus(){const el=document.getElementById('managerTeamStatusList');if(!el||AUTH_ROLE!=='manager')return;el.innerHTML=allEmployees().map(emp=>{const data=getEmployeeData(emp.id),cards=data.timecards||{};let liveDay=null,last=null;Object.keys(DAY_META).forEach(day=>{const c=cards[day];if(c?.in&&!c?.out)liveDay=day;if(c?.out)last=day;});const s=performanceStats(emp.id);return `<div class="team-status-row"><div><span class="team-live-dot ${liveDay?'live':''}"></span><strong>${escapeHtml(emp.displayName)}</strong><div class="tool-note">${liveDay?'Working · '+DAY_META[liveDay].label:last?'Last shift · '+DAY_META[last].date:'No shift recorded'}</div></div><div><strong>${s.completion}%</strong><div class="tool-note">production</div></div><button type="button" onclick="openEmployeeDrawer('${escapeHtml(emp.id)}')">View</button></div>`;}).join('')||'<div class="manager-empty">No employee accounts yet.</div>';const clock=document.getElementById('managerTeamClock');if(clock)clock.textContent='LIVE · '+new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});}
function syncV19Nav(page){document.querySelectorAll('.sidebar-link[data-page-link]').forEach(a=>a.classList.toggle('active',a.dataset.pageLink===page));const day=v19CurrentShiftDay();document.getElementById('sideShiftLink')?.classList.toggle('active',page===day);document.getElementById('mobileShiftLink')?.classList.toggle('active',page===day);}

function validPage(hash){
  const h=(hash||"").replace("#","");
  const allowed=["overview","0928","0929","1001","gallery","commission","messages","schedule","pay","inventory","resources","profile"];
  if(AUTH_ROLE==="manager") return [...allowed,"manager"].includes(h)?h:"manager";
  return allowed.includes(h)?h:"overview";
}
function showPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const el=document.getElementById("page-"+page);
  if(el) el.classList.add("active");
  document.querySelectorAll("[data-page-link]").forEach(a=>{
    a.classList.toggle("active",a.dataset.pageLink===page);
  });
  if(page==="gallery")renderGallery();
  if(page==="commission")renderCommissionCenter();
  if(page==="messages")renderMessages();
  if(page==="schedule")renderScheduleCenter();
  if(page==="pay")renderPayCenter();
  if(page==="inventory")renderInventory();
  if(page==="profile")renderProfileDashboard();
  if(page==="overview")renderCommandCenter();
  updateNotificationBadge();
  syncV19Nav(page);syncV19Chrome();
}
function route(){ showPage(validPage(location.hash)); }

window.addEventListener("hashchange",route);
document.addEventListener("DOMContentLoaded",()=>{
  initializeDeviceChoice();
  renderEmployeeOptions("");
  route();
  Object.keys(DAY_META).forEach(renderClock);
  tickLiveClock();
  updateProgress();
  updateAllGates();
  renderCommissionItems();
  renderGallery();
  renderInventory();
  renderScheduleCenter();
  renderPayCenter();
  renderProfileDashboard();
  renderCommandCenter();
  updateNotificationBadge();
  syncV19Chrome();
  Object.keys(DAY_META).forEach(renderV19ShiftStates);
  renderManagerTeamStatus();
});

document.getElementById("employeeSelect").addEventListener("change",e=>{
  const chosen=e.target.value;
  if(!chosen){
    e.target.value=AUTHENTICATED_EMPLOYEE || "";
    return;
  }
  if(AUTHENTICATED_EMPLOYEE===chosen){
    if(AUTH_ROLE==="manager"){ renderManagerDashboard(); location.hash="#manager"; }
    else load();
    return;
  }
  showAuth(chosen);
});

document.getElementById("authSubmit").addEventListener("click",submitAuth);
document.getElementById("authCancel").addEventListener("click",()=>closeAuth(true));
document.getElementById("forgotManagerPassword").addEventListener("click",resetManagerCredentials);
document.getElementById("authPhotoInput").addEventListener("change",e=>{ if(e.target.files?.[0]) handleAuthPhoto(e.target.files[0]); });
document.getElementById("authPassword").addEventListener("keydown",e=>{ if(e.key==="Enter" && !document.getElementById("confirmPasswordWrap").classList.contains("hidden")) return; if(e.key==="Enter") submitAuth(); });
document.getElementById("authPasswordConfirm").addEventListener("keydown",e=>{if(e.key==="Enter") submitAuth();});


document.getElementById("messageDraft")?.addEventListener("keydown",e=>{
  if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendTeamMessage();}
});

document.getElementById("logoutBtn").addEventListener("click",logout);
document.getElementById("changeProfilePhotoBtn").addEventListener("click",()=>openProfileModal(false));
document.getElementById("profileCancel").addEventListener("click",()=>document.getElementById("profileOverlay").classList.add("hidden"));
document.getElementById("profileSave").addEventListener("click",saveProfilePhoto);
document.getElementById("profilePhotoInput").addEventListener("change",async e=>{
  if(!e.target.files?.[0]) return;
  try{
    const data=await fileToProfileData(e.target.files[0]);
    document.getElementById("profilePhotoPreview").src=data;
    document.getElementById("profileError").textContent="";
  }catch(err){document.getElementById("profileError").textContent=err.message||"Could not preview photo.";}
});
document.getElementById("refreshManagerBtn").addEventListener("click",refreshManagerLatest);
document.getElementById("managerAddEmployeeBtn").addEventListener("click",()=>openManagerEdit("add"));
document.getElementById("managerEditCancel").addEventListener("click",closeManagerEdit);
document.getElementById("managerEditSave").addEventListener("click",saveManagerEdit);
document.getElementById("returnLiveBtn").addEventListener("click",returnToLiveManager);
document.getElementById("managerSnapshots").addEventListener("click",e=>{
  const item=e.target.closest("[data-snapshot-id]"); if(item)useSnapshot(item.dataset.snapshotId);
});
document.getElementById("managerRoster").addEventListener("click",e=>{
  const card=e.target.closest("[data-manager-employee]");
  if(card) renderManagerEmployeeReport(card.dataset.managerEmployee);
});
document.getElementById("saveBtn").addEventListener("click",()=>save(true));
document.getElementById("galleryUploadInput").addEventListener("change",e=>{if(e.target.files?.length)uploadGalleryFiles(e.target.files);e.target.value="";});
document.querySelectorAll("[data-device-choice]").forEach(btn=>{
  btn.addEventListener("click",()=>applyDeviceLayout(btn.dataset.deviceChoice,true));
});
document.getElementById("deviceAutoBtn").addEventListener("click",()=>applyDeviceLayout(recommendedDevice(),true));
document.getElementById("changeDeviceBtn").addEventListener("click",showDeviceChooser);
document.getElementById("notificationBtn")?.addEventListener("click",openNotifications);

let saveTimer;
document.addEventListener("input",e=>{
  if(e.target.matches("[data-save]")){
    updateProgress();
    updateAllGates();
    clearTimeout(saveTimer);
    saveTimer=setTimeout(()=>{save(false);renderCommandCenter();renderProfileDashboard();},180);
  }
});
document.addEventListener("change",e=>{
  if(e.target.matches("[data-save]")){
    updateProgress();
    updateAllGates();
    clearTimeout(saveTimer);
    saveTimer=setTimeout(()=>{save(false);renderCommandCenter();renderProfileDashboard();},150);
  }
});
