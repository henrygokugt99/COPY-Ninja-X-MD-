import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['263738403303', 'ASHLEY', true], 
  ['263780129060', 'Ashley Kakashi', true],
  ['233204120083', 'ASHLEY KAKASHI', -(𝘼𝙝𝙢𝙢𝙞)', true], 
  ['923127067592', 'USMAN 𝙺𝙸𝙽𝙶 ⚡', true],
  ['2348100671814', 'Kelly Media', true],
  ['256789810043', 'Nexa Goku', true],
  
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['256789810043', '2348100671814', '923127067592','263738403303','233208179431'] 
global.prems = ['263738403303','263780129060','923127067592', '256789810043','2348100671814']
global.allowed = ['263738403303', '263780129060', '923127067592', '2348100671814','256789810043']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'COPY-NINJA-X-MD'
global.premium = 'true'
global.packname = 'COPYNINJA TEAM' 
global.author = 'COPY-NINJA-X-MD' 
global.menuvid = 'https://telegra.ph/file/f7f7b9d097f22ce01e239.mp4'
global.igfg = '▢✓ Follow My channel\https://whatsapp.com/channel/0029VacnXAQ4CrfkpwQeJd0w\n' 
global.dygp = 'https://chat.whatsapp.com/BfH0KLkICn2BjmGFMRcGMW'
global.fgsc = 'https://github.com/uchihalord/COPY-NINJA-X-MD-' 
global.fgyt = 'https://youtube.com/@s4salmanyt'
global.fgpyp = 'https://youtube.com/@s4salmanyt'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')


global.wait = '*🕣 COPYNINJA IS LOADIND..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '📃'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
