---
widget: contact
headless: true  # This file represents a page section.

# Order that this section appears on the page.
weight: 97

# Section title
title: Contact Us
# ... Put Your Section Options Here (title etc.) ...

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: 
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true
 # Contact details (edit or remove options as required)
  
  email: hello@therapynottingham.co.uk
  phone: 0115 7722132
  address:
    street: Knight & Whitehall House, 4 Carlton Street
    city: Nottingham
    region: Notts
    postcode: 'NG1 1NN'
    country: United Kingdom
    country_code: GB
  coordinates:
    latitude: '52.9532'
    longitude: '-1.1439'
  directions: Appointments only. Press buzzer for Office E, on the first floor, there is no lift available.

  office_hours:
    - 'Monday 10:00 to 20:00'
    - 'Tuesday 10:00 to 20:00'
    - 'Wednesday 10:00 to 20:00'
    - 'Thursday 10:00 to 20:00'
    - 'Friday 10:00 to 20:00'
    - 'Saturday Closed'
    - 'Sunday Closed'
  appointment_url: '/booking'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM us
      link: 'https://twitter.com/TherapyNotts'
    - icon: whatsapp
      icon_pack: fab
      name: Message us on WhatsApp
      link: 'https://wa.me/447519821746'

design:
  columns: '2'
---

{{< icon name="fa-comment-pen" pack="fas" >}} [Click here to send us a message online](https://us10.list-manage.com/contact-form?u=d64b1f151f0dee2ea7b9863e5&form_id=a64c7dbd3f2f297a325771e9a49a27ec)