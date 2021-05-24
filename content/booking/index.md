---
title: Bookings with Therapy Nottingham
summary: Book now

reading_time: false  # Show estimated reading time?
share: true  # Show social sharing links?
profile: false  # Show author profile?
comments: false  # Show comments?

# Optional header image (relative to `assets/media/` folder).
header:
  caption: ""
  image: ""
---
## For individual psychotherapy

### If you are a new client and want to book an assessment session
<form name="webassessmentbooking" method="POST" autocomplete="on" data-netlify-recaptcha="true" data-netlify="true">
  <fieldset>
    <legend>Your details:</legend>
  <p>
    <label for="name">Your Name:</label><input type="text" id="name">   
  </p>
  <p>
    <label for="email">Your Email:</label><input type="email" id="email">
  </p>
  <p>
    <label for="phone">Enter your phone number:</label><input type="tel" id="phone" name="phone">
  </fieldset>
  <firldset>
    <legend>Your appointment:</legend>
    <p>
    <input type="radio" id="monday11" name="monday11" value="Monday at 11:00am"><label for="monday11">Monday at 11:00am</label><br>
    <input type="radio" id="tuesday14" name="tuesday11" value="Tuesday at 2:00pm"><label for="tuesday11">Tuesday at 2:00pm</label><br>
    <!-- <input type="radio" id="wednesday1730" name="wednesday1730" value="Wednesday at 5:30pm"><label for="wednesday1730">Wednesday at 5:30pm</label><br> -->
    </p>
  <p>
    <label for="message">Message:</label><textarea name="message">
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


You can [contact us]({{< relref "/#contact" >}}) to ask about waiting list times

### For existing clients

For additional sessions, cancellations, or to re-arrange appointments, please contact your psychotherapist directly, or [contact us]({{< relref "/#contact" >}})
