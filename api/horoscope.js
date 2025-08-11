// api/horoscope.js
// Vercel serverless function: proxies request to Aztro and returns JSON with CORS headers.
// Put this file in your repo at: /api/horoscope.js

export default async function handler(req, res) {
  // allow preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  try {
    const sign = (req.query.sign || req.body?.sign || '').toLowerCase();
    const day = req.query.day || 'today';
    if (!sign) {
      res.status(400).json({ error: 'missing sign parameter' });
      return;
    }

    // Server-side fetch to the Aztro API (no CORS issues server->server)
    const apiRes = await fetch(`https://aztro.sameerkumar.website/?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(day)}`, {
      method: 'POST'
    });

    if (!apiRes.ok) {
      const txt = await apiRes.text();
      res.status(502).json({ error: 'upstream error', status: apiRes.status, body: txt });
      return;
    }

    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('proxy error', err);
    res.status(500).json({ error: err.message || 'server error' });
  }
}
