#discord #bot 

透過官方提供的 `REST` 函式方法來註冊指令，首先要產生一個實例

```js
const { REST,client } = require('discord.js');

client.on('ready',async()=>{
	try{
		// version: is used to detect discord version
		// botToken: get in your application's page
		const rest = new REST({version:'10'}).setToken(botToken)
	}catch(error){
		//set error handle logic
	}
})
```

> 這邊選擇 ready 事件是為了確定 discord 準備好再執行後面的動作。

接下來我們要產生指令 ，要先引入 `SlashCommandBuilder` 函式，用這個函式來設定指令的細節。

```js
// it must be array type, because API limit
const commands = [new SlashCommandBuilder()]
```


延伸閱讀

[[客製化 slash command 選項]]
[[設計指令觸發行為]]
