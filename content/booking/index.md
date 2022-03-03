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

<style>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #3c5d55;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type=submit] {
  width: 100%;
  background-color: #149f9d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #00c0c0;
}

.assessmentbookingform {
  border-radius: 5px;
  background-color: #eaece9;
  padding: 20px;
}
</style>

<div class="assessmentbookingform">
<form name="webassessmentbooking" method="POST" action="/message/thankyou" autocomplete="on" data-netlify-recaptcha="true" data-netlify="true">
    <fieldset>
    <legend>Available appointments:</legend>
    <p>
    The Therapy Nottingham service is very busy right now, and we have extremely limited capacity for new clients at this time.<br>
    Choose your preferred option.</p>
    <p>
      <!-- List available appointments here, comment out any unavailable ones using html commenting-->
      <label><input type="radio" name="appt" value="Abi Monday 10:00"> Monday at 10:00am with {{% mention "abi" %}}</label><br>
      <label><input type="radio" name="appt" value="Abi Monday 12:00"> Monday at 12:00pm with {{% mention "abi" %}}</label><br>
      <!--
      <label><input type="radio" name="appt" value="Justin Tuesday 11:00"> Tuesday at 11:00am with {{% mention "justin" %}}</label><br>
      <label><input type="radio" name="appt" value="Andrea Wednesday 14:30"> Wednesday at 2:30pm with {{% mention "andrea" %}}**</label><br>
      -->
      <label><input type="radio" name="appt" value="Abi Friday 10:30"> Friday at 10:30am with {{% mention "abi" %}}</label><br>
      <!--
      <label><input type="radio" name="appt" value="Abi Friday 12:00"> Friday at 12:00pm with {{% mention "abi" %}}</label><br>
      <label><input type="radio" name="appt" value="Abi Friday 14:00"> Friday at 2:00pm with {{% mention "abi" %}}</label><br>
      <label><input type="radio" name="appt" value="Abi Friday 15:30"> Friday at 3:30pm with {{% mention "abi" %}}</label><br>
      -->
      <label><input type="radio" name="appt" value="Abi Friday 17:00"> Friday at 5:00pm with {{% mention "abi" %}}</label><br>
      <!--
      <br>
      ** During the current building works at our new city centre offices, some appointments will be temporarily moved to alternative locations.
      -->
    </p>
    <legend>Waiting list:</legend>
      <p>
      If you are unable to attend any of the available times, you can join the waiting list.<br>
      Please be aware that we can not guarantee when further appointments will become available.<br>
      </p>
      <p>
      <label><input type="radio" name="appt" value="Waiting List"> Join the waiting list (if you have any specific requirements, please include this information below)</label><br>
    </p>
  </fieldset>
  <fieldset>
    <legend>Your details:</legend>
  <p>
    <label for="uname">Name:</label>
    <input type="text" id="uname" name="yourname" placeholder="Your name...">
    <label for="uemail">Email address:</label>
    <input type="text" id="uemail" name="youremail" placeholder="Your email..">
    <label for="utel">Telephone:</label>
    <input type="text" id="utel" name="yourtel" placeholder="Preferred telephone number....">  
  </fieldset>
  <p><textarea name="message" rows="4" cols="50" placeholder="You can include any further details here."></textarea></p>
  <p>We will contact you to confirm the date and time of your appointment.</p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</div>

## For waiting list and general enquiries
  
You can [contact us]({{< relref "/#contact" >}}) to ask about the waiting list times and any other general enquiry.

## For Supervision and Consultation enquiries

You can [contact us]({{< relref "/#contact" >}}) to discuss availability and what it is you are looking for.

## For existing clients

For additional sessions, cancellations, or to re-arrange appointments, please contact [your psychotherapist]({{< relref "/people" >}}) directly, or [contact us]({{< relref "/#contact" >}}).
