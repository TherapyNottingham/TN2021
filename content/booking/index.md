---
title: Booking with Therapy Nottingham
summary: Book now

reading_time: false  # Show estimated reading time?
share: true  # Show social sharing links?
profile: false  # Show author profile?
comments: false  # Show comments?

# Optional header image (relative to `assets/media/` folder).
header:
  caption: ""
  image: "diary.jpg"
---
{{< toc >}}
## For individual psychotherapy

### If you are a new client and want to book an assessment session
<!--
{{% callout warning %}}
<p>Sorry, currently we have no availability for new clients.</p>
{{% /callout %}}
-->
<style>
input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}

.assessmentbookingform {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>

<div class="assessmentbookingform">
<form name="webassessmentbooking" method="POST" action="/message/thankyou" autocomplete="on" data-netlify-recaptcha="true" data-netlify="true">
  <fieldset>
    <legend>Your details:</legend>
  <p>
    <label>Name: <input type="text" name="name" placeholder="Your Name" required/></label>    
  </p>
  <p>
    <label>Email: <input type="text" name="email" placeholder="Your email" required/></label> 
  </p>
  <p>
    <label>Telephone: <input type="text" name="telephone" placeholder="Your telephone"/></label> 
  </fieldset>
  <fieldset>
    <legend>Your appointment:</legend>
    <p>Choose your preferred appointment.</p>
    <p>
      <!-- List available appointments here, comment out any unavailable ones using html commenting -->
      <label><input type="radio" name="appt" value="Justin Tuesday 11:00"> Tuesday at 11:00am with {{% mention "justin" %}}</label><br>
      <label><input type="radio" name="appt" value="Justin Tuesday 12:30"> Tuesday at 12:30pm with Justin</label><br>
    </p>
    <p>
      If there are no appointments availabe or you are unable to attend any of the available times, you can join the waiting list.<br>
      Please be aware that we can not guarantee when further appointments will become available.<br>
      <label><input type="radio" name="appt" value="Waiting List"> Waiting List (if you have any specific requirements, please include this information below)</label><br>
    </p>
  </fieldset>
  <p><textarea name="message" rows="4" cols="50" placeholder="You can include any further details here"></textarea></p>
  <p>We will contact you to confirm the date and time of your appointment.</p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</div>

### For waiting list and general enquiries
  
You can [contact us]({{< relref "/#contact" >}}) to ask about the waiting list times and any other general enquiry.

### For existing clients

For additional sessions, cancellations, or to re-arrange appointments, please contact your psychotherapist directly, or [contact us]({{< relref "/#contact" >}})
