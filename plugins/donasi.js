let handler = async m => m.reply(`
            .β΅.ππ’π‘ππ¦π π£πΉπππΌππΌπ.β΅.
β’π’π©π’: 085794829914
β’πππ‘π: 083822910734
β’π§ππ₯ππ π πππ¦ππ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler