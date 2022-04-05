let fetch = require('node-fetch')
const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let pantek = 'https://telegra.ph/file/b65957f39a82395bb09d0.jpg'
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER> \n\n jika anda lupa sn silahkan ketik ${usedPrefix}sn`
  if (!Reg.test(text)) throw `Format salah!\nContoh: *${usedPrefix}daftar ${conn.getName(m.sender)}.17*`
  let [_, name, splitter, age] = text.match(Reg)
  let totalreg = Object.keys(global.db.data.users).length
  if (!name) throw 'Nama tidak boleh kosong!'
  if (!age) throw 'Umur tidak boleh kosong!'
  if (age < 13) throw 'Maaf, Anda belum bisa mendaftar.\n*Minimal umur 13 Ke Atas*'
  if (age > 30) throw 'Maaf, Anda terlalu tua.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
━━━ 「 *Successful Registration* 」━━━

╭─• 〘 INFO 〙
│➥ 👤Nama: ${name}
│➥ 🌟Umur: ${age} Tahun
│➥ 🎫SN  : ${sn}
│➥ 📁Db  : ${totalreg}
╰──────•

_*Note*_ :
-Simpan/bintangi pesan ini karena
SN (Serial Number) digunakan untuk
daftar ulang atau ganti identitas
-Kalau mau unreg, lupa sn ketik ${usedPrefix}sn
`.trim()
await conn.send2ButtonLoc(m.chat, await(await fetch(fla + 'Daftar')).buffer(), caption, watermark, 'Menu', `.menu`, 'Tutorial', `.tutorial`, m)
}
handler.help = ['daftar <nama|umur>','register <nama|umur>']
handler.tags = ['main']
handler.command = /^daftar|register$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
