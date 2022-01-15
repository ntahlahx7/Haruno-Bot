let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Topup/Pin 〕
├ Umobile🌸: 60189830350
├ Digi🌸: 60149431385
├ Umobile🌸: 60189830350
├ Digi🌸: 60149431385
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
