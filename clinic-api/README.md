# Shrushti Clinic API and Database Module

This is the separate backend/database module for the public website and future Reception, Doctor and Admin modules.

## Database Design

MongoDB collections are modeled with Mongoose. Each collection lives in its own file under `src/database/models`, all active models are exported from `src/database/models/index.js`, and the human-readable collection registry lives in `src/database/registry.js`.

To add a future collection:

1. Create a model file in `src/database/models`.
2. Export it from `src/database/models/index.js`.
3. Add one entry in `src/database/registry.js`.
4. Add routes/services only where the feature needs them.

To remove or retire a collection:

1. Prefer `active: false` for business data like services, doctors and users.
2. Remove the model export only when historical data is no longer needed.
3. Remove the registry entry only after the model is truly retired.
4. Keep appointment/payment history intact for audit purposes.

## Setup

```bash
cd clinic-api
copy .env.example .env
npm install
npm run db:check
npm run db:seed
npm run dev
```

Use MongoDB Atlas by replacing `MONGODB_URI` in `.env`, or run a local MongoDB server.

## Current Collections

- `services`
- `doctors`
- `patients`
- `appointments`
- `payments`
- `enquiries`
- `users`
- `gallery_items`
