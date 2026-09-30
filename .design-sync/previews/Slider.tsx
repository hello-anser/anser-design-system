import { Slider } from '@anser/ui';

export const SpeakingSpeed = () => (
  <div style={{ width: 360 }}>
    <Slider label="Speaking speed" valueText="A little slower" lo="Slower" hi="Faster" min={0} max={4} step={1} defaultValue={1} />
  </div>
);
export const Interruption = () => (
  <div style={{ width: 360 }}>
    <Slider label="How easily a caller can talk over it" valueText="Middle" lo="Harder" hi="Easier" min={0} max={4} step={1} defaultValue={2} />
  </div>
);
export const Disabled = () => (
  <div style={{ width: 360 }}>
    <Slider label="Speaking speed" valueText="Normal" lo="Slower" hi="Faster" min={0} max={4} step={1} defaultValue={2} disabled />
  </div>
);
