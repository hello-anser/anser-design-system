import { Tag } from '@anser/ui';

export const WordsToCatch = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, width: 360 }}>
    {['Worcester Bosch', 'Vaillant', 'Ideal Logic', 'combi', 'Hive', 'Solihull'].map((word) => (
      <Tag key={word} onRemove={() => {}}>
        {word}
      </Tag>
    ))}
  </div>
);
export const ReadOnly = () => <Tag>Sutton Coldfield</Tag>;
