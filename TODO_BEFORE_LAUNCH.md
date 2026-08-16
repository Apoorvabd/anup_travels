# डिप्लॉय से पहले क्या बाकी है / What's Left Before Deploy

अच्छी खबर: ज़्यादातर जानकारी (नाम, फ़ोन, ईमेल, जीवनी, टेस्टिमोनियल, फ़ोटो, Google Maps लोकेशन)
पहले ही असली डेटा से भर दी गई है। नीचे सिर्फ़ वही बचा है जो अभी भी placeholder है।

Good news: most content (name, phone, email, bio, testimonials, photos, Google Maps
location) is already filled in with real data. What's below is genuinely what's left.

> सब कुछ एक ही फ़ाइल में है: **`data/siteContent.json`** — बस `TODO` सर्च करें।
> Everything lives in one file: **`data/siteContent.json`** — search for `TODO`.

---

## बाकी बचे 5 TODO — The 5 remaining TODOs

| # | कहाँ / Where | अभी क्या है / Current | क्या करना है / What to do |
|---|---|---|---|
| 1 | `seo.siteUrl` | `TODO: Replace with actual production domain...` | जब डोमेन मिल जाए (जैसे `panditjimaharaj.in`), असली URL डालें — यह `app/layout.jsx` (Metadata/OG), `app/sitemap.js`, `app/robots.js` और JSON-LD में अपने आप इस्तेमाल होता है |
| 2 | `contact.whatsapp.value` | `TODO: Replace WhatsApp link.` | असली WhatsApp लिंक, फॉर्मेट: `https://wa.me/919140953442` — जब तक यह TODO रहेगा, फ़्लोटिंग WhatsApp बटन और CTA अपने आप फ़ोन नंबर (`9140953442`) से लिंक बना लेते हैं, इसलिए यह सख्ती से ज़रूरी नहीं पर बेहतर है भरना |
| 3–5 | `footer.social[0..2].href` (facebook, instagram, youtube) | `TODO: Replace with actual social link.` | असली प्रोफ़ाइल लिंक डालें, या अगर कोई अकाउंट नहीं है तो उस entry को array से पूरा हटा दें |

---

## पता — Exact Address

`contact.address.value.hi` / `.en` में अभी लिखा है:
> "अकबरपुर, कानपुर देहात, उत्तर प्रदेश (TODO: भवन संख्या / गली / लैंडमार्क जोड़ें)"

Google Maps पिन (नीचे देखें) पहले से सही है — बस अगर घर/ऑफ़िस का सटीक पता (मकान नं.,
गली, लैंडमार्क) लिखना चाहें तो इस लाइन में जोड़ दें, नहीं तो इलाके का नाम काफ़ी है।

The Google Maps pin (below) is already correct — this text field is only for an exact
street address if you want one displayed; the area name alone is fine to ship as-is.

---

## ✅ पहले से हो चुका — Already done

- **Google Maps**: असली लोकेशन embed है (`contact.mapEmbedUrl` / `contact.mapUrl`) —
  Contact सेक्शन में एक असली इंटरैक्टिव मैप iframe दिखता है, साथ में "Open in Google
  Maps" लिंक भी।
- **Hero mobile crop**: मोबाइल पर पंडित जी की फ़ोटो अब पूरी दिखती है (पहले चेहरा cropped
  हो जाता था)।
- **फ़्लोटिंग WhatsApp बटन**: right-bottom में fixed, हर पेज पर दिखता है।
- **Hero में संपर्क जानकारी**: फ़ोन और ईमेल अब हीरो सेक्शन में क्लिक करने योग्य लिंक की
  तरह दिखते हैं।
- **Services सेक्शन**: अब बड़े कार्ड्स की जगह compact numbered list है।
- सभी 10 इस्तेमाल हो रही फ़ोटो `public/images/` में मौजूद हैं और कोड में सही तरीके से
  जुड़ी हैं (कोई टूटी हुई इमेज लिंक नहीं)।
- FAQ के दो जवाबों में बचा हुआ अधूरा वाक्य ("— ...") ठीक कर दिया गया है।
- फ़ोन नंबर और पता फ़ील्ड में जो अतिरिक्त स्पेस/डैश (` `, `—`, `.`) रह गए थे, वे साफ़ कर
  दिए गए हैं।

---

## लॉन्च से ठीक पहले — Just before you go live

1. **Contact form** (`components/ContactFooter.jsx`) — अभी सबमिट पर सिर्फ़ "धन्यवाद"
   दिखता है, असल में कोई ईमेल नहीं भेजता (जानबूझकर, ताकि किसी और क्लाइंट की पुरानी
   private EmailJS keys गलती से यहाँ न रह जाएँ)। अपनी खुद की ईमेल सर्विस
   (EmailJS/Resend/backend API) से कनेक्ट करें — कोड में जगह साफ़ comment से चिह्नित है:
   `// NOTE: Wire this up to the client's own EmailJS / backend service...`

2. **बड़ी इमेज फ़ाइलें** — `public/images/about.png` (2.7MB) और `public/images/hawan.png`
   (2.1MB) थोड़ी भारी हैं। यह ब्रेकिंग issue नहीं है — `next/image` इन्हें अपने आप resize
   और compress करके भेजता है — लेकिन अगर चाहें तो deploy से पहले इन्हें JPEG/WebP में
   ~500KB से कम साइज़ में compress कर सकते हैं ताकि build/deploy थोड़ा तेज़ हो।
   These aren't blocking (`next/image` auto-optimizes them at request time), but
   compressing them below the source will speed up builds slightly if you want to.

3. आख़िर में एक बार यह ज़रूर चलाएँ / Run this once at the end:
   ```bash
   npm run lint && npm run build
   ```
   दोनों अभी क्लीन पास हो रहे हैं (कोई error/warning नहीं) — deploy से पहले फिर से चला कर
   पक्का कर लें कि आपके आख़िरी बदलावों के बाद भी सब ठीक है।
