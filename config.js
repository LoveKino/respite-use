module.exports = {

	handlerServer: {
		port: 4000
	},

	proxy: {
		active: "node",
		servers: {
			"fiddler": {
				scriptPath: "C:/Users/chenjunyu/Documents/Fiddler2/Scripts/CustomRules.js",
				launchPath: "D:/axe/Fiddler2/Fiddler.exe",
				desc: "just work for window"
			},
			"node": {
				port: 8200,
			}
		},
		pageHandlers: []
	},

	debug: {
		weinre: {
			port: 8088
		},
		chrome: {
			launchPath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
			autoRun: true
		}
	},

	debugDomains: [
		"waimai.baidu.com",
		"cp01-ocean-728.epc.baidu.com"
	]
}