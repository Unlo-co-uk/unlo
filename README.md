# Unlo Cars — Next.js 14 App

Dark luxury finance UI for car equity valuation. Built for conversion psychology.

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit [http://localhost:3000/cars](http://localhost:3000/cars)

Try registration plates: `AB12CDE`, `LK21ABC`, `GF18XYZ`

## Architecture

### `/app`
- `layout.tsx` — Root layout
- `cars/page.tsx` — Main component (the flow you see)

### `/api`
- `vrm` — Vehicle lookup (currently mocked, ready for real VRM data)
- `waitlist` — Email capture (currently local JSON, ready for Supabase)

### Types
- `types/vehicle.ts` — TypeScript interface for vehicle data

## Next Milestones (Ordered by Impact)

### 1. Real VRM Integration (Do this first)
Install the UK vehicle data library:
```bash
npm install ukvehicledata
```

Then in `/api/vrm.ts`, replace the mock with:
```typescript
import { UKVehicleData } from 'ukvehicledata';

const vrm = new UKVehicleData(process.env.NEXT_PUBLIC_VRM_API_KEY);
const vehicle = await vrm.lookup(registration);
```

**Cost**: Free tier covers ~1000 lookups/month. Upgrade to paid if you hit limits.

### 2. Waitlist to Supabase
Currently emails are captured to `waitlist.json`. When you're ready:

```bash
npm install @supabase/supabase-js
```

Then in `/api/waitlist.ts`, replace local storage with:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

await supabase.from('waitlist').insert({ email });
```

### 3. Welcome Emails via Resend
```bash
npm install resend
```

In `/api/waitlist.ts`:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'unlo@unlo.co.uk',
  to: email,
  subject: 'Your car unlocked £...',
});
```

### 4. Analytics (PostHog)
Track Screen 1→2→3→4 completion rates and drop-off.

```bash
npm install posthog-js
```

Use in component:
```typescript
import { usePostHog } from 'posthog-js/react';
const posthog = usePostHog();
posthog.capture('screen_2_viewed', { vehicle: make });
```

## Deployment

### Vercel (Recommended)
```bash
vercel
```

Auto-deploys on git push. Free tier works for early usage.

### Environment Variables on Vercel
Add to project settings:
- `NEXT_PUBLIC_VRM_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY`

## File Structure

```
unlo/
├── app/
│   ├── layout.tsx
│   ├── cars/
│   │   └── page.tsx
│   └── api/
│       ├── vrm/
│       │   └── route.ts
│       └── waitlist/
│           └── route.ts
├── types/
│   └── vehicle.ts
├── package.json
├── tsconfig.json
├── next.config.js
├── .env.example
├── .env.local (create with: cp .env.example .env.local)
└── README.md
```

## Key Psychology Notes

**The equity animation** — Numbers that count up from zero create visceral "that's mine" response. Static numbers don't move conversion.

**The LTV bar** — 60% in gold, 40% in grey. Colour reframes the narrative *before* rational thought kicks in.

**Screen 1→2 velocity** — The faster users see their equity number, the more likely they share it. Sharing is the real conversion metric early on.

**Screen 2 as the sharable moment** — All trust velocity happens here. Email ask comes after the dopamine hit, not before.

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors on startup?**
```bash
rm -rf .next
npm run dev
```

**Waitlist not saving?**
Check `/public` folder exists. Create if needed:
```bash
mkdir -p public
```

## License

Private. Built for Unlo.
