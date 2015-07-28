respite-use
=================================== 
scaffold for mobile page debugger

background
-----------------------------------
weinre: http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html<br><br>
Debugging mobile web page is kind of toublesome. Usually, we do it like this:<br>
step1: lanuch weinre.<br>
step2: lanuch fiddler.<br>
step3: connect mobile to fiddler agent.<br>
step4: crawl target page content.<br>
step5: modify target page content, inject some js code which used to connect to weinre server.<br>
step6: configure fiddler responser rules.<br>
In fact, you need to do some manual labour every time you debugging a mobile page. This process is tedious.<br>

The goal of using this tool is to simplify mobile page debugging process.

usage
-----------------------------------
* connect mobile to agent server.<br>
* launch "respite-use".<br>

get tool
-----------------------------------
### download
download and decompression.
### modify config.js
Check config.js, you do not need to modify attributions mostly. You need to watch out these points:<br>
1. If your operarion is window, you can (and you want to) use fiddler as a agent server. Assign proxy's active as fiddler. Configurate scriptPath and launchPath. ScriptPath is fiddler's attach/detach's script path.<br>
2. Other situations set active as node.<br>
3. Debug's chrome confaguration, launchPath is chrome's app or exe path. When set autoRun false, chrome won't start first.<br>
4. Configurate your debugging page's domain in debugDomains.<br>

self defined page handler
------------------------------------
You can set a set of js path in pageHandlers of config. These jses used to handle html content.<br>

* Interface norm<br>
```
*body        html content
*config      config object
*@return     new html content
module.exports = {
	handle: function(body, config) {
		return body;
	}
}
```


