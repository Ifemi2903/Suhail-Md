const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8147177798";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_31_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4SlhoTnhaRUx5Q0h3SG9oSngwTStJNVhVa2ZUcitZWGNVSVJ1YzNmbElVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDcxNzc3OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyRENEOEZBMjk3Njk5MkYzNTgxOEVBQUU2NUI2NTM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTYwNjcxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJETDZJbFdLOVFweWpKX2VjZ3pDTTB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjNTVmMzg2LTE1ZWEtNGY3Ni05MzkzLWE4NDI4YjA5YmU0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDIwNCxcbiAgICAgIDE5NSxcbiAgICAgIDEyMixcbiAgICAgIDE5NCxcbiAgICAgIDM3LFxuICAgICAgOTAsXG4gICAgICAxNzUsXG4gICAgICA4OSxcbiAgICAgIDIzMCxcbiAgICAgIDExMCxcbiAgICAgIDExNyxcbiAgICAgIDYwLFxuICAgICAgMTUzLFxuICAgICAgMTg5LFxuICAgICAgNDcsXG4gICAgICA5MCxcbiAgICAgIDExMixcbiAgICAgIDcyLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDIyMCxcbiAgICAgIDMyLFxuICAgICAgODEsXG4gICAgICAxMTQsXG4gICAgICA2NSxcbiAgICAgIDM0LFxuICAgICAgNzgsXG4gICAgICA4MyxcbiAgICAgIDc5LFxuICAgICAgMjQyLFxuICAgICAgOCxcbiAgICAgIDExOCxcbiAgICAgIDk3LFxuICAgICAgMjIzLFxuICAgICAgMTI3LFxuICAgICAgNTIsXG4gICAgICA2NyxcbiAgICAgIDE4OCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUTREU05HM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NzE3Nzc5ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjAyMjQ2MTU5MzIwODE6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKR3A0SkFHRUxPNy9MTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZGaU82UlN1cFZYZ1pwZC9VUUVFM1JMb2xqUjBOT2FJdjE4VTFKL0R5UjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYk83MVNLQUVOYituQS9zU241a2FyVlNJNFhrb3ZHNi9KZ2FYd1J3Z1BkcjZXTGVSL0huY2hBNXY2MU53ZmFBeEFRRlh6YjQ5dW9PUFdtOEd0MjlvQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0JISDNZdXU5ZGN3QzdQaGppUFNnM2ZURUdyTGp4MDlMT0djY3A1dWJlampzN080L29rNmlUQmRNNThmaTg2QVZjL1AzZS9PZ2dNRDZCM1pvZmphZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NzE3Nzc5ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTYwNjcxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh5UlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHlSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ1Z2ZGxiNUg3NVlUbDhoa0UvclE5cDdBMHA1OFZXOFVYNTR5NHR6YTVRcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQ1NzQ1Mjk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2MDY3MTc3MTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
