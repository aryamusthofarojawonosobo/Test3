let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `
╭═══ 〘 SEWA 〙
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = 5k/grup (1 minggu)
║┊ ⌲ Sewa = 15k/grup (1 bulan)
║┊ ⌲ Sewa = 25k/grup (3 bulan)
╰═ ┅ ═══════
                
༅ KEUNTUNGAN
                
✧ Bebas Add bot ke grup
✧ bisa jaga grup kamu
✧ Bisa nyuruh Buka/Tutup Group
✧ bisa kick atau add seseorang
✧ Ada fitur khusus admin
✧ Ada fitur setting grup
✧ Antilink, antispam dll`.trim(), '❖ Kanao-Bot', 'Gopay', '#viadigi', 'Dana', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
