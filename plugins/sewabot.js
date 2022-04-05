let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
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
✧ Antilink, antispam dll`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rm5.00\nSewa bot 1 Minggu.", rowId:".masuk"},
        {title: '2 Minggu', description: "Rm10.00\nSewa bot 2 Minggu.", rowId:".masuk"},
        {title: '3 Minggu', description: "Rm15.00\nSewa bot 3 Minggu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rm20.00\nSewa bot 1 Bulan.", rowId:".masuk"},
        {title: 'Trial', description: "Free\nBot Free 1 Hari.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot LynXzy.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
