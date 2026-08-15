# लॉन्च से पहले क्या बदलना है / What to Replace Before Launch

यह फ़ाइल उन सभी जगहों की सूची है जहाँ अभी अस्थायी/नमूना जानकारी (placeholder) भरी हुई है।
This file lists every place in the project that currently holds placeholder / sample
information instead of Pandit Ji's real business details.

> **सबसे ज़रूरी बात / Most important:** पूरी वेबसाइट की सारी टेक्स्ट एक ही फ़ाइल से आती है:
> **All website text comes from ONE file:**
>
> ```
> data/siteContent.json
> ```
>
> नई जानकारी भरने के लिए सिर्फ़ इसी फ़ाइल को खोलें और `"TODO..."` वाले हिस्सों को बदलें।
> Open only this file, search for `"TODO` and replace each one. You do **not** need to
> touch any `.jsx` component file.

---

## 1. ब्रांड / मूल जानकारी — Brand & Core Info

फ़ाइल में जगह / Location in JSON: `brand`

| फ़ील्ड / Field | अभी क्या है / Current value | क्या भरना है / What to do |
|---|---|---|
| `brand.name.hi` | `TODO: पंडित जी का नाम` | पंडित जी का पूरा नाम हिंदी में लिखें (जैसे: "पंडित श्री रमेश शर्मा") |
| `brand.name.en` | `TODO: Pandit Ji's Name` | Same name in English/Roman script |

यह नाम नीचे इन जगहों पर अपने आप दिखेगा — इसे दोबारा कहीं और टाइप करने की ज़रूरत नहीं:
This single name automatically appears in:
- नेवबार / Navbar logo
- Footer
- JSON-LD structured data (Google के लिए)
- Metadata / page title

---

## 2. संपर्क जानकारी — Contact Details

फ़ाइल में जगह / Location: `contact`

| फ़ील्ड / Field | अभी क्या है | क्या भरना है |
|---|---|---|
| `contact.phone.value` | `TODO: Replace with actual phone number.` | असली मोबाइल/फ़ोन नंबर, जैसे: `+91 9XXXXXXXXX` |
| `contact.email.value` | `TODO: Replace with actual email.` | असली ईमेल पता |
| `contact.whatsapp.value` | `TODO: Replace WhatsApp link.` | पूरा WhatsApp लिंक भरें, फॉर्मेट: `https://wa.me/91XXXXXXXXXX` |
| `contact.address.value.hi` / `.en` | `...TODO: Replace with exact address.` | अकबरपुर, कानपुर देहात का पूरा/सटीक पता (मकान नं., गली, लैंडमार्क आदि) |

**ज़रूरी / Important:** जैसे ही आप असली फ़ोन/ईमेल भरेंगे, वे अपने आप Google Structured Data
(JSON-LD) में भी शामिल हो जाएंगे — अभी वहां जानबूझकर नहीं दिखाए जाते क्योंकि असली नंबर नहीं है।
Once you fill the real phone/email, they will automatically start appearing in the
JSON-LD structured data in `app/layout.jsx` — they are intentionally omitted right now
so that fake "TODO" text is never sent to Google.

`contactCta.secondaryCta` का बटन ("WhatsApp पर बात करें") भी इसी `contact.whatsapp.value`
लिंक का इस्तेमाल करता है, इसलिए एक जगह भरने से दोनों जगह ठीक हो जाएगा।

---

## 3. पंडित जी का परिचय — About Pandit Ji

फ़ाइल में जगह: `about`

| फ़ील्ड | अभी क्या है | क्या भरना है |
|---|---|---|
| `about.body.hi` / `.en` | `TODO: Replace with actual Pandit Ji biography...` | वास्तविक जीवनी: पृष्ठभूमि, शिक्षा, कार्यशैली, कितने वर्षों से सेवा, परिवार परंपरा आदि |
| `about.credentialsNote.hi` / `.en` | `TODO: Add वास्तविक शिक्षा / आचार्य परंपरा / प्रमाण-पत्र...` | अगर कोई प्रमाण-पत्र, आचार्य उपाधि, गुरु-परंपरा है तो यहाँ लिखें, नहीं तो यह लाइन हटा भी सकते हैं |
| `about.stats[0].value` (`XX+`) | Years of Experience | असली वर्षों की संख्या डालें, जैसे `15+` |
| `about.stats[1].value` (`XXXX+`) | Rituals Performed | असली अनुमानित संख्या, जैसे `2000+` |
| `about.stats[2].value` (`XX+`) | Families Served | असली अनुमानित संख्या, जैसे `500+` |

**नोट:** झूठे आंकड़े मत भरें — अगर सही संख्या पता नहीं है तो एक ईमानदार अनुमान या "जल्द अपडेट होगा"
जैसा कुछ लिखें, गलत claims से बचें (जैसे "100% गारंटी", "निश्चित भविष्यवाणी")।

---

## 4. सेवाएँ — Services Availability

फ़ाइल में जगह: `services.items[]`

हर सेवा में एक फ़ील्ड है: `"available": true`

अगर कोई सेवा फ़िलहाल पंडित जी नहीं देते, तो उसे `false` कर दें — वेबसाइट पर अपने आप
"उपलब्धता हेतु संपर्क करें / Contact for availability" लिख कर दिखेगा।

```json
{ "id": "vivah-sanskar", "hi": "विवाह संस्कार", "en": "Marriage Ceremonies", "available": true }
```

---

## 5. ग्राहक प्रतिक्रियाएँ — Testimonials

फ़ाइल में जगह: `testimonials.items[]` (अभी 4 नमूने हैं)

| फ़ील्ड | अभी क्या है | क्या भरना है |
|---|---|---|
| `name.hi` / `name.en` | `TODO: ग्राहक का नाम` / `TODO: Customer Name` | असली ग्राहक का नाम (उनकी अनुमति से) |
| `review.hi` / `review.en` | `TODO: Replace with genuine customer testimonial.` | असली प्रतिक्रिया — कृपया मनगढ़ंत रिव्यू न डालें |
| `rating` | `5` | 1–5 के बीच असली रेटिंग |

ग्राहक की सहमति के बिना उनका नाम/फोटो/समीक्षा न डालें।

---

## 6. FAQ के कुछ जवाब — FAQ Policy Answers

फ़ाइल में जगह: `faq.items[]`

कुछ जवाबों में `TODO: Replace with actual policy` लिखा है — ये वो सवाल हैं जिनका जवाब
पंडित जी की अपनी नीति/प्रक्रिया पर निर्भर करता है:
- पूजा सामग्री की सूची कैसे दी जाती है?
- क्या ऑनलाइन ज्योतिष परामर्श उपलब्ध है?
- पूजा की बुकिंग कितने दिन पहले करनी चाहिए?

इन्हें असली जवाब से बदल दें।

---

## 7. सोशल मीडिया लिंक — Social Media Links

फ़ाइल में जगह: `footer.social[]`

तीनों (`facebook`, `instagram`, `youtube`) में अभी `"TODO: Replace with actual social link."`
लिखा है। असली प्रोफ़ाइल URL डालें, या अगर कोई अकाउंट नहीं है तो उस entry को JSON array से
पूरा हटा दें।

---

## 8. तस्वीरें — Images

फ़ोल्डर: `public/images/`

अभी सिर्फ़ एक `README.md` है, असली फ़ोटो नहीं। नीचे दी गई फ़ाइलों को इसी नाम से इस फ़ोल्डर
में डालें (नाम बिल्कुल यही रखें, नहीं तो कोड में बदलाव करना पड़ेगा — या आप चाहें तो
`data/siteContent.json` के `images` सेक्शन में पाथ बदल सकते हैं):

| फ़ाइल का नाम | कहाँ इस्तेमाल होती है |
|---|---|
| `hero-pandit.jpg` | होमपेज का सबसे बड़ा हीरो फ़ोटो (havan/पूजा करते या शास्त्र सहित बैठे पंडित जी) |
| `about-pandit.jpg` | "परिचय" सेक्शन का फ़ोटो |
| `puja.jpg` | शांति पूजा से जुड़ा फ़ोटो |
| `havan.jpg` | हवन/यज्ञ से जुड़ा फ़ोटो |
| `jyotish.jpg` | ज्योतिष सेक्शन का फ़ोटो (कुंडली/पंचांग/ज्योतिष सामग्री) |
| `kundli.jpg` | कुंडली/ज्योतिष से जुड़ा अतिरिक्त फ़ोटो |
| `griha-pravesh.jpg` | गृह प्रवेश अनुष्ठान का फ़ोटो |
| `vivah-sanskar.jpg` | विवाह संस्कार का फ़ोटो |
| `rudrabhishek.jpg` | रुद्राभिषेक का फ़ोटो |
| `naamkaran.jpg` | नामकरण संस्कार का फ़ोटो |

फ़ोटो बड़े साइज़ (कम से कम 1600px चौड़ी) और अच्छी क्वालिटी की डालें — साइट `next/image` का
उपयोग करती है, जो अपने आप छोटे साइज़ में optimize करके भेजती है, इसलिए बड़ी फ़ोटो डालने से
वेबसाइट धीमी नहीं होगी।

---

## 9. SEO / सर्च इंजन सेटिंग — Website Domain & SEO

फ़ाइल में जगह: `seo.siteUrl` (सबसे ऊपर `data/siteContent.json` में)

अभी लिखा है:
```
"siteUrl": "TODO: Replace with actual production domain, e.g. https://www.panditji-example.com"
```

जैसे ही वेबसाइट को कोई डोमेन नाम (जैसे `panditjimaharaj.in`) मिले, उसे यहाँ भरें:
```
"siteUrl": "https://www.panditjimaharaj.in"
```

इसका असर यहाँ पड़ता है:
- `app/layout.jsx` में Metadata (Google/Facebook को दिखने वाला title, description, OG image)
- `app/sitemap.js` — sitemap.xml
- `app/robots.js` — robots.txt में सही sitemap लिंक
- JSON-LD structured data में सही website URL

**Keywords:** `seo.hi.keywords` और `seo.en.keywords` में शुरुआती keyword list दी गई है —
इन्हें अपनी असली सेवाओं और इलाके के हिसाब से बढ़ाया/बदला जा सकता है।

---

## 10. ईमेल फ़ॉर्म कनेक्ट करना — Wiring the Contact Form

फ़ाइल: `components/ContactFooter.jsx`

फ़िलहाल संपर्क फ़ॉर्म सिर्फ़ UI तक काम करता है (submit करने पर "धन्यवाद" मैसेज दिखता है, लेकिन
यह ईमेल किसी को नहीं भेजता)। ऐसा जानबूझकर रखा गया है ताकि किसी और क्लाइंट की पुरानी private
EmailJS keys गलती से नए प्रोजेक्ट में न रह जाएँ।

लाइव करने से पहले, `handleSubmit` फ़ंक्शन में अपनी खुद की ईमेल सर्विस (जैसे EmailJS,
Resend, या कोई backend API) जोड़ें। कोड में यह जगह साफ़ comment से चिह्नित है:

```js
// NOTE: Wire this up to the client's own EmailJS / backend service before
// going live...
```

---

## Quick checklist (सब कुछ एक नज़र में)

- [ ] `brand.name.hi` / `brand.name.en` — पंडित जी का नाम
- [ ] `contact.phone.value` — फ़ोन नंबर
- [ ] `contact.email.value` — ईमेल
- [ ] `contact.whatsapp.value` — WhatsApp लिंक
- [ ] `contact.address.value.hi` / `.en` — पूरा पता
- [ ] `about.body.hi` / `.en` — जीवनी
- [ ] `about.credentialsNote.hi` / `.en` — शिक्षा/प्रमाण-पत्र (यदि हों)
- [ ] `about.stats[0..2].value` — अनुभव/अनुष्ठान/परिवार की संख्या
- [ ] `services.items[].available` — कौन-सी सेवाएँ अभी उपलब्ध हैं
- [ ] `testimonials.items[]` — असली ग्राहक प्रतिक्रियाएँ
- [ ] `faq.items[]` में बचे हुए `TODO: Replace with actual policy`
- [ ] `footer.social[]` — असली सोशल लिंक (या हटाएं)
- [ ] `public/images/*.jpg` — असली फ़ोटो अपलोड करें
- [ ] `seo.siteUrl` — असली डोमेन नाम
- [ ] `components/ContactFooter.jsx` — असली ईमेल/बुकिंग सर्विस से कनेक्ट करें

सब कुछ भरने के बाद एक बार `npm run build` चला कर देख लें कि कोई error नहीं आ रहा।
