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
<form name="webassessmentbooking" method="POST" action="/message/thankyou" autocomplete="on" data-netlify-recaptcha="true" data-netlify="true">
  <fieldset>
    <legend>Your details:</legend>
  <p>
    <label>Name: <input type="text" name="name" /></label>    
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label> 
  </p>
  <p>
    <label>Telephone: <input type="text" name="telephone" /></label> 
  </fieldset>
  <fieldset>
    <legend>Your appointment:</legend>
    <p>Choose your preferred appointment.</p>
    <p><label><input type="radio" name="appt" value="Monday 11:00"> Monday at 11:00am</label></p>
    <p><label><input type="radio" name="appt" value="Tuesday 13:00"> Tuesday at 1:00pm</label></p>
    <!-- <p><label><input type="radio" name="appt" value="Wednesday 14:00"> Monday at 2:00pm</label></p> -->
  </fieldset>
  <p><textarea name="message" rows="4" cols="50" placeholder="You can include any further details here"></textarea></p>
  <p>We will contact you to confirm the date and time of your appointment.</p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

### For waiting list and general enquiries
  
You can [contact us]({{< relref "/#contact" >}}) to ask about waiting list times and any other general enquiry.

### For existing clients

For additional sessions, cancellations, or to re-arrange appointments, please contact your psychotherapist directly, or [contact us]({{< relref "/#contact" >}})
