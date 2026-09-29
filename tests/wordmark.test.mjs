import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Sidebar, Wordmark } from '../dist/index.js';

const logo = (f) => readFileSync(new URL(`../src/assets/logo/${f}`, import.meta.url), 'utf8');
const decode = (src) => {
  const m = /^data:image\/svg\+xml(;base64)?,(.*)$/s.exec(src);
  assert.ok(m, `not an SVG data URL: ${src.slice(0, 40)}`);
  return m[1] ? Buffer.from(m[2], 'base64').toString('utf8') : decodeURIComponent(m[2]);
};
const render = (props) => renderToStaticMarkup(createElement(Wordmark, props));
const unescape = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
const images = (html) => [...html.matchAll(/<img [^>]*src="([^"]+)"/g)].map((m) => decode(unescape(m[1])));
const textOf = (html) => html.replace(/<[^>]*>/g, '').trim();

test('the wordmark places the supplied files, primary for light and reversed for dark, and no text', () => {
  const html = render({ size: 28 });
  assert.deepEqual(images(html), [logo('anser-wordmark-primary.svg'), logo('anser-wordmark-reversed.svg')]);
  assert.match(html, /class="anser-wordmark__on-light"[^>]*>.*class="anser-wordmark__on-dark"/s);
  assert.equal(textOf(html), '');
  assert.doesNotMatch(textOf(html), /anser/i);
});

test('below 96px wide it places the mark instead', () => {
  // 18px tall is 95.4px wide at the wordmark's proportions; 19px is 100.7px.
  assert.deepEqual(images(render({ size: 18 })), [logo('anser-mark-navy.svg'), logo('anser-mark-darkmode.svg')]);
  assert.deepEqual(images(render({ size: 19 })), [logo('anser-wordmark-primary.svg'), logo('anser-wordmark-reversed.svg')]);
  assert.deepEqual(images(render({ variant: 'icon', size: 48 })), [logo('anser-mark-navy.svg'), logo('anser-mark-darkmode.svg')]);
});

test('sub= and lockup put no words inside the lockup', () => {
  for (const props of [{ size: 22, sub: 'AI RECEPTIONIST' }, { variant: 'lockup', size: 30 }]) {
    const html = render(props);
    assert.equal(textOf(html), '');
    assert.equal(images(html).length, 2);
  }
  const rail = renderToStaticMarkup(createElement(Sidebar, null));
  assert.doesNotMatch(textOf(rail), /anser|RECEPTIONIST/i);
});
