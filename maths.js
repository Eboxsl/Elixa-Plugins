const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson, getBuffer } = require('../lib/functions');


cmd({
    pattern: "maths",
    desc: "AI Mathematics slover",
    category: "ai",
    react: "🌟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let data = await fetchJson(`https://bit-x-apis.vercel.app/math?q=${q}`);
        return reply(`${data.response}\n\n> 𝗚𝗲𝟆𝗮𝗿𝗮𝐭𝗲𝙙 𝝗𝞤 𝗘ꟾ𝖎✘𝗮 ‐𝝡𝗗༺`);
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
