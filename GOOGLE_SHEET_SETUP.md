# Contact Form → Google Sheet Setup

The website's contact form (bottom of the site) now POSTs to `/api/contact`
([app/api/contact/route.js](app/api/contact/route.js)), which forwards each
submission to a small Google Apps Script "Web App" bound to your Sheet. That
script appends one row per submission.

Your sheet: https://docs.google.com/spreadsheets/d/1XOttN5OQi1LvXD1wqVmgROJh3dvw6eFsRPaiyY_EHSA/edit

This takes about 5 minutes, one time.

## 1. Open the Apps Script editor

1. Open your Google Sheet (link above).
2. Menu: **Extensions → Apps Script**. This opens a new tab with a blank script bound to this sheet.

## 2. Paste this code

Delete whatever's in `Code.gs` and paste this in its place:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add header row once, if the sheet is empty.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Service",
      "Preferred Date",
      "Message",
      "Language",
    ]);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.service || "",
    data.date || "",
    data.message || "",
    data.language || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy it as a Web App

1. Top-right of the Apps Script editor: **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description**: `Contact form webhook` (anything you like)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** — this is required so the website's
     server can call it. It does *not* expose your sheet's data publicly;
     it only accepts submissions, it doesn't return sheet contents to
     callers.
4. Click **Deploy**. Google may ask you to authorize the script — approve it
   (it's your own script acting on your own sheet).
5. Copy the **Web app URL** it gives you — it looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Give that URL to the website (as a secret, not in the code)

**Locally** (for testing on your machine): create a file named `.env.local`
in the project root (it's already git-ignored, so it never gets committed):

```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

**On Netlify** (for the live site): go to
**Site configuration → Environment variables → Add a variable**, and add:
- Key: `GOOGLE_SHEET_WEBHOOK_URL`
- Value: the same Web app URL

Then trigger a new deploy so Netlify picks it up.

## 5. Test it

Fill out the contact form on the live site (or `npm run dev` locally with
`.env.local` set) and submit it — a new row should appear in your Sheet
within a couple of seconds.

If it doesn't:
- Double check the Web app's "Who has access" is set to **Anyone**, not
  "Only myself" — the server calling it isn't logged into your Google
  account, so a restricted deployment will silently reject it.
- Re-check the URL was copied in full (it should end in `/exec`, not
  `/dev`).
- If you edit the Apps Script code again later, you must create a **new
  deployment** (or use "Manage deployments → Edit → New version") for the
  changes to take effect — editing the code alone doesn't update a live
  Web app URL.

## Note on WhatsApp notifications

You asked for a WhatsApp alert on each submission too — that's intentionally
skipped for now per your last message. When you're ready, it needs a
WhatsApp-sending provider (e.g. the free CallMeBot API for a quick personal
alert, or Twilio's WhatsApp API for something more robust) — happy to wire
that into the same `/api/contact` route whenever you want to pick one.
