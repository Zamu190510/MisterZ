import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.owner = [
  ['51955918117', 'Daniel', true],
  ['524434703586', 'Azami', true],
  ['519559158117'],
  ['519559158117'],
  ['519559158117'],
  ['519559158117'],
  ['519559158117'],
  ['519559158117'],
  ['519559158117']

]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.mods = []
global.prems = []
   
//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.packname = `Sumi Sakurasawa - MD`
global.author = 'Daniel'
global.botname = 'Sumi Sakurasawa - MD'
global.textbot = `© 2024 Starlights Team | All rights reserved`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.group = 'https://chat.whatsapp.com/DaZrhN5469XDs6lBNmcdOO'
global.group2 = 'https://chat.whatsapp.com/DavHccRC8t64mUUQXK4OrU'
global.group3 = 'https://chat.whatsapp.com/GFqGm6fI8ANDaIVZ2mQciQ'
global.group4 = 'https://chat.whatsapp.com/CqdWTXmS702JD31SQzr0Ph'
global.group5 = 'https://chat.whatsapp.com/G0JPb1IvBwUDVFqm5YUiGA'
global.canal = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
