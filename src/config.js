// Discord webhook for receiving booking + contact form notifications.
// Owner-provided; rotating this in Discord requires updating it here too.
export const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1520209130978148504/OtUlDLlA98MVIst1mb2WHWzkwsELLAcr6aRwMc7cTuy4Fvs3HYL33RV4qkj1slGRLz_v'

// Discord rejects embed field values over 1024 chars; clip to be safe.
const DISCORD_MAX = 1024
export function clip(value) {
  const s = value == null ? '' : String(value)
  if (!s.trim()) return '\u2014'
  return s.length > DISCORD_MAX ? s.slice(0, DISCORD_MAX - 1) + '\u2026' : s
}

// Fire-and-forget POST to the Discord webhook. Never throws — failures only log.
export async function notifyDiscord({ embed, username = 'Zyron Site Bot' }) {
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        embeds: [embed],
      }),
    })
  } catch (err) {
    console.error('Discord notify failed:', err)
  }
}