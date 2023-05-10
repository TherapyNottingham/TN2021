---
title: Testing page for JC
summary: Test it all!

reading_time: false  # Show estimated reading time?
share: true  # Show social sharing links?
profile: false  # Show author profile?
comments: false  # Show comments?

# Optional header image (relative to `assets/media/` folder).
header:
  caption: ""
  image: ""
---

<script>
async function apiCall() {
    const url = `/.netlify/functions/one`;
    try {
        const response = await fetch(url);
        const data = await response.text;
        return data;
    } catch (err) {
        console.log(err);
    }
}
</script>