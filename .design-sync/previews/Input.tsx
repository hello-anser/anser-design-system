import { Input } from '@anser/ui';

export const BusinessName = () => (
  <div style={{ width: 340 }}>
    <Input
      label="Business name"
      defaultValue="Smith's Plumbing & Heating"
      hint="Callers hear this when Anser answers."
    />
  </div>
);

export const MonoUrl = () => (
  <div style={{ width: 340 }}>
    <Input
      label="Booking page"
      mono
      defaultValue="https://smithsplumbing.co.uk"
      hint="Sent in the confirmation text after a booking."
    />
  </div>
);

export const ErrorState = () => (
  <div style={{ width: 340 }}>
    <Input
      label="Divert number"
      mono
      defaultValue="0161 496 33"
      error="That number is too short — UK landlines have 11 digits."
    />
  </div>
);

export const Disabled = () => (
  <div style={{ width: 340 }}>
    <Input
      label="Anser number"
      mono
      defaultValue="0330 043 9276"
      disabled
      hint="Assigned once your number port completes."
    />
  </div>
);
