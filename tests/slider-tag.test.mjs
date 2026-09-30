import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Slider, Tag } from '../dist/index.js';

test('Slider is a native range input a plain form posts, with words at both ends and no raw number', () => {
  const html = renderToStaticMarkup(
    createElement(Slider, { name: 'voice_speed_step', label: 'Speaking speed', valueText: 'A little slower', lo: 'Slower', hi: 'Faster', min: 0, max: 4, step: 1, defaultValue: 1 }),
  );
  assert.match(html, /<input[^>]*type="range"/);
  assert.match(html, /name="voice_speed_step"/);
  assert.match(html, /Speaking speed/);
  assert.match(html, /A little slower/);
  assert.match(html, /Slower<\/span><span>Faster/);
  // The label names the input it sits over.
  const id = html.match(/<input[^>]*id="([^"]+)"/)[1];
  assert.match(html, new RegExp(`<label[^>]*for="${id.replace(/[:]/g, '\\:')}"`));
});

test('Tag with onRemove carries a button that can never submit the form it sits in', () => {
  const html = renderToStaticMarkup(createElement(Tag, { onRemove: () => {} }, 'Worcester Bosch'));
  assert.match(html, /<button type="button"[^>]*aria-label="Remove Worcester Bosch"/);
  const plain = renderToStaticMarkup(createElement(Tag, null, 'Vaillant'));
  assert.doesNotMatch(plain, /<button/);
});

test('Slider and Tag CSS use tokens only, never a hex literal', () => {
  for (const file of ['../src/components/Slider/slider.css', '../src/components/Tag/tag.css']) {
    const css = readFileSync(new URL(file, import.meta.url), 'utf8');
    assert.doesNotMatch(css, /#[0-9a-fA-F]{3,8}\b/, file);
  }
  const sheet = readFileSync(new URL('../dist/anser.css', import.meta.url), 'utf8');
  assert.match(sheet, /\.anser-slider__input/);
  assert.match(sheet, /\.anser-tag__remove/);
});
