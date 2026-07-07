# Module 1: User Site (Public Website)

> Public-facing website for Shrushti Skin Clinic. No login required.
> Designed to be extensible — later modules (Reception, Doctor, Admin) plug into the same backend without touching this module.

---

## 1. Purpose

Showcase the clinic (services, doctors, work, location) and let visitors **book an appointment by selecting a date and paying the consult fee online**, before it becomes a confirmed queue entry.

---

## 2. Tech Stack (this module)

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js (React) | SEO-friendly, file-based routing, easy Vercel deploy |
| Styling | Tailwind CSS | Fast to build, easy to keep consistent |
| Backend API | Node.js + Express | Shared by all future modules |
| Database | MongoDB (Atlas) | Same DB used by Reception/Doctor/Admin modules later |
| Payments | Razorpay (UPI/Card/Netbanking) | India-friendly, good docs, test mode available |
| Image hosting | Cloudinary | Don't store images in DB or on server disk |
| Deployment | Vercel (frontend) + Render (backend) | Free/cheap, auto-deploy from GitHub |

---

## 3. Folder Structure

```
clinic-user-site/
├── pages/                        # Next.js routes
│   ├── index.js                  # Home
│   ├── about.js
│   ├── services/
│   │   ├── index.js              # All services
│   │   └── [slug].js             # Single service detail
│   ├── doctors/
│   │   ├── index.js
│   │   └── [slug].js
│   ├── gallery.js
│   ├── contact.js
│   ├── book-appointment/
│   │   ├── index.js              # Step 1: select service + doctor
│   │   ├── select-date.js         # Step 2: pick date/slot
│   │   ├── payment.js             # Step 3: pay consult fee
│   │   └── confirmation.js        # Step 4: booking confirmed
│   └── api/                       # (or separate Express repo — see note below)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SEOHead.jsx
│   ├── home/
│   │   ├── HeroBanner.jsx
│   │   ├── ClinicHighlights.jsx
│   │   ├── TestimonialsSlider.jsx
│   │   └── CTASection.jsx
│   ├── services/
│   │   ├── ServiceCard.jsx
│   │   └── ServiceDetailCard.jsx
│   ├── doctors/
│   │   ├── DoctorCard.jsx
│   │   └── DoctorBio.jsx
│   ├── gallery/
│   │   └── BeforeAfterCard.jsx
│   ├── booking/
│   │   ├── ServiceSelector.jsx
│   │   ├── DoctorSelector.jsx
│   │   ├── DatePicker.jsx
│   │   ├── SlotPicker.jsx
│   │   ├── FeeSummary.jsx
│   │   ├── PatientDetailsForm.jsx
│   │   ├── PaymentButton.jsx
│   │   └── BookingProgressBar.jsx
│   └── shared/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── LoadingSpinner.jsx
│       └── Toast.jsx
│
├── lib/
│   ├── api.js                     # Central fetch wrapper — all API calls go through this
│   ├── razorpay.js                # Payment helper functions
│   └── constants.js
│
├── styles/
│   └── globals.css
│
└── .env.local
```

**Why this matters for extensibility:** `components/shared/` and `lib/api.js` become the shared foundation. When you build the Reception/Doctor/Admin dashboard later (a separate app), it reuses the same `lib/api.js` pattern and hits the same backend — you're not rebuilding API logic per module.

---

## 4. Pages & Sub-components Breakdown

### 4.1 Home (`/`)
- `HeroBanner` — clinic name, tagline, "Book Appointment" CTA
- `ClinicHighlights` — years of experience, patients treated, specializations (static or DB-driven)
- `ServiceCard` (preview of top 3-4 services)
- `DoctorCard` (preview)
- `TestimonialsSlider`
- `CTASection` — book appointment banner

### 4.2 About (`/about`)
- Clinic story, mission
- Infra photos (waiting area, consultation room, equipment)

### 4.3 Services (`/services`, `/services/[slug]`)
- `ServiceCard` — grid of all services, pulled from DB (`GET /api/services`)
- `ServiceDetailCard` — description, what it treats, **consult fee shown here**, before/after images if applicable
- "Book this service" button → jumps into booking flow with service pre-selected

### 4.4 Doctors (`/doctors`, `/doctors/[slug]`)
- `DoctorCard` — photo, name, specialization
- `DoctorBio` — qualifications, experience, available days

### 4.5 Gallery (`/gallery`)
- `BeforeAfterCard` — grid of case study images (Cloudinary URLs from DB)

### 4.6 Contact (`/contact`)
- Address, phone, Google Maps embed, working hours
- Simple contact form (saves to `enquiries` collection — separate from appointments)

### 4.7 Book Appointment Flow — **the core feature**

This is a 4-step wizard. Each step is its own route so users can go back/forward and refresh without losing state (state also kept in a booking context or query params).

**Step 1 — `/book-appointment`**
- `ServiceSelector` — choose treatment/service
- `DoctorSelector` — choose doctor (optional if only one doctor)
- Shows consult fee for the selected service (pulled live from DB, never hardcoded in frontend)

**Step 2 — `/book-appointment/select-date`**
- `DatePicker` — calendar, disables past dates and clinic off-days
- `SlotPicker` — shows available time slots for the selected date (calls `GET /api/appointments/available-slots?date=&doctorId=`)
- Slot list is generated by checking existing bookings against clinic working hours — prevents double-booking the same slot

**Step 3 — `/book-appointment/payment`**
- `PatientDetailsForm` — name, phone, age, gender (creates/matches patient record by phone)
- `FeeSummary` — service, doctor, date, time, amount payable
- `PaymentButton` — triggers Razorpay checkout for the exact consult fee amount from DB (never trust a client-side amount)

**Step 4 — `/book-appointment/confirmation`**
- Shows booking confirmed, date/time, token will be assigned on the day
- SMS/email confirmation (can be phase 2)

---

## 5. Data Flow for Booking (High-Level)

```
1. GET /api/services            → populate ServiceSelector
2. GET /api/doctors             → populate DoctorSelector
3. GET /api/appointments/available-slots?date=X&doctorId=Y
4. POST /api/patients/find-or-create   { phone, name, age, gender }
5. POST /api/payments/create-order     { serviceId, amount }   → returns Razorpay order id
   (amount is looked up server-side from the services collection, not sent from frontend)
6. Razorpay checkout completes on client
7. POST /api/payments/verify            { razorpay_order_id, razorpay_payment_id, razorpay_signature }
8. POST /api/appointments/book          { patientId, doctorId, serviceId, date, slot, paymentId }
   → creates appointment with status: "confirmed" (not yet a queue token — token is generated by Reception on the actual day)
9. Redirect to /book-appointment/confirmation
```

**Important security rule:** the amount charged is always fetched from the `services` collection on the server when creating the payment order — never trusted from the frontend. This stops anyone tampering with the fee in browser dev tools.

---

## 6. Minimal Schema Needed for This Module

```js
// services
{
  _id, name, slug, description, consultFee, category, active: true
}

// doctors
{
  _id, name, slug, specialization, bio, photoUrl, availableDays: ["Mon","Wed","Fri"], active: true
}

// patients (shared with Reception module later)
{
  _id, name, phone, age, gender, address, createdAt
}

// appointments
{
  _id, patientId, doctorId, serviceId, date, slot,
  status: "pending" | "confirmed" | "checked-in" | "completed" | "no-show" | "cancelled",
  paymentId, amountPaid, createdAt
}

// payments
{
  _id, appointmentId, razorpayOrderId, razorpayPaymentId, amount, status: "created"|"paid"|"failed", createdAt
}
```

---

## 7. Extensibility Guidelines (so future modules plug in cleanly)

1. **One shared backend, many frontends.** Keep the Express API in its own repo/folder (`clinic-api/`), separate from this Next.js site. The Reception, Doctor, and Admin dashboards (future modules) will be separate frontend apps hitting the same API — never duplicate business logic per frontend.
2. **API versioning from day one.** Prefix routes with `/api/v1/...` so future breaking changes don't break this module.
3. **Role field on `users` collection from the start**, even though this module has no login — so Reception/Doctor/Admin auth (Module 2) drops in without a schema change.
4. **Status enums centralized.** Keep appointment/payment status values in one `lib/constants.js` (or a shared npm package later) so every module agrees on the same states.
5. **`active: true/false` flags** instead of deleting services/doctors — keeps historical appointment records intact even if a service is later discontinued.
6. **Feature folders, not type folders, as it grows.** Right now `components/booking/` etc. is fine. If the project grows a lot, consider grouping by feature (`features/booking/`, `features/services/`) rather than by component type — easier to find everything related to one module.

---

## 8. Suggested Build Order (for this module alone)

1. Static pages: Home, About, Services, Doctors, Gallery, Contact (no DB yet — hardcoded data)
2. Connect Services/Doctors pages to real API + DB
3. Build booking Step 1 & 2 (selection + slot picking) — no payment yet, just save a "pending" appointment
4. Integrate Razorpay for Step 3
5. Confirmation page + basic email/SMS (optional)

---

## 9. What's Deliberately Left Out of This Module

These belong to later modules — don't build them here:
- Reception login/queue/token generation
- Doctor consultation notes
- Patient visit history
- Admin reports

This module only ever **creates** a confirmed appointment with a paid consult fee. Turning that into a queue token happens in the Reception module on the day of the visit.
