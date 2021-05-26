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
<form name="webassessmentbooking" method="POST" action="/message/thankyou" autocomplete="on" data-netlify-recaptcha="true" data-netlify="true">
  <fieldset>
    <legend>Your details:</legend>
  <p>
    <label for="name">Your Name: </label><input type="text" id="name">   
  </p>
  <p>
    <label for="email">Your Email: </label><input type="email" id="email">
  </p>
  <p>
    <label for="phone">Enter your phone number: </label><input type="tel" id="phone" name="phone">
  </fieldset>
  <firldset>
    <legend>Your appointment:</legend>
    <p>
    <input type="radio" id="monday11" name="appt" value="Monday at 11:00am"><label for="monday11"> Monday at 11:00am</label><br>
    <input type="radio" id="tuesday14" name="appt" value="Tuesday at 2:00pm"><label for="tuesday11"> Tuesday at 2:00pm</label><br>
    <!-- <input type="radio" id="wednesday1730" name="appt" value="Wednesday at 5:30pm"><label for="wednesday1730">Wednesday at 5:30pm</label><br> -->
    </p>
  <p>We will contact you to confirm the date and time of your appointment.</p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
<textarea name="message" form="webassessmentbooking" rows="4" cols="50" placeholder="You can include any further details here"></textarea>


### For waiting list and general enquiries
  
You can [contact us]({{< relref "/#contact" >}}) to ask about waiting list times and any other general enquiry.

### For existing clients

For additional sessions, cancellations, or to re-arrange appointments, please contact your psychotherapist directly, or [contact us]({{< relref "/#contact" >}})
