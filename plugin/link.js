let handler = async (m, { conn }) => {
    conn.reply(m.chat, `*Link Group:*\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat), m)
  }
  handler.help = ['linkgroup']
  handler.tags = ['group']
  handler.command = /^link(g(c)?ro?up)?$/i
  
  handler.group = true
  handler.botAdmin = true
  handler.user = true
  handler.owner = true
  handler.premium = true
  handler.mods = true
  
  module.exports = handler
