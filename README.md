respite-use
=================================== 
scaffold for mobile page debugger

background
-----------------------------------
weinre: http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html<br>
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
* lanch "respite-use".<br>

get tool
-----------------------------------
### download
download and decompression.
### modify config.js
Check config.js
