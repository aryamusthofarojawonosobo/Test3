let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
┌─〔 Donasi 〕
├ PULSA : 6285795035419
├ DANA : 6285795035419
├ Saweria : saweria.co/AzryCb
├ TrakTeer : trakteer.id/AzRyCb
└────
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
