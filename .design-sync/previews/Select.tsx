import { Select } from '@anser/ui';

export const Labelled = () => (
  <div style={{ maxWidth: 340 }}>
    <Select
      label="Vertical"
      hint="Sets the trades prompt template"
      options={[
        { label: 'Plumbing & Heating', value: 'plumbing' },
        { label: 'Electrical', value: 'electrical' },
        { label: 'Roofing', value: 'roofing' },
        { label: 'Landscaping', value: 'landscaping' },
      ]}
      defaultValue="plumbing"
    />
  </div>
);

export const WithChildren = () => (
  <div style={{ maxWidth: 340 }}>
    <Select label="Transfer target" hint="Where calls go when the agent hands off">
      <option value="">Select a number…</option>
      <option value="mobile">Dave&apos;s mobile — 07700 900418</option>
      <option value="office">Office line — 0118 496 0230</option>
    </Select>
  </div>
);

export const ErrorState = () => (
  <div style={{ maxWidth: 340 }}>
    <Select
      label="Booking calendar"
      error="Connect a calendar before enabling bookings"
      options={[
        { label: 'Choose a calendar…', value: '' },
        { label: 'Google Calendar — jobs@halloway.co.uk', value: 'google' },
        { label: 'Outlook — office@halloway.co.uk', value: 'outlook' },
      ]}
      defaultValue=""
    />
  </div>
);

export const Disabled = () => (
  <div style={{ maxWidth: 340 }}>
    <Select
      label="Voice"
      hint="Locked while a demo call is in progress"
      disabled
      options={[
        { label: 'ElevenLabs — Local warm', value: 'elevenlabs' },
        { label: 'Deepgram Aura', value: 'deepgram' },
        { label: 'Cartesia', value: 'cartesia' },
      ]}
      defaultValue="elevenlabs"
    />
  </div>
);
