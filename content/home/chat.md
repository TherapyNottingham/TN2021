---
# An instance of the Blank widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: blank

# Activate this widget? true/false
active: true

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 95

title:
subtitle:

design:
  columns: "1"
  background:
    image:
    image_darken: 0
    image_parallax: false
    image_position: center
    image_size: cover
    text_color_light: false
  spacing:
    padding: ["20px", "0", "20px", "0"]
advanced:
  css_class:
---

<div id="fb-root"></div>
<!-- Your Chat plugin code -->
  <div id="fb-customer-chat" class="fb-customerchat">
  </div>

  <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "496724583720363");
      chatbox.setAttribute("attribution", "biz_inbox");
  </script>

  <!-- Your SDK code -->
  <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v13.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>