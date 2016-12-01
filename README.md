GetSome... TODOs
=======================

TODO list, [node-webkit](https://github.com/rogerwang/node-webkit) , [angularjs](https://angularjs.org/) , [sqlite3](http://www.sqlite.org/) application.

Download
======================
Supported operating systems, Linux and Windows, unpack and run/double click on nw (linux) and nw.exe (windows)


[Download: Linux x64](https://github.com/katropine/GetSome/releases/download/v1.6.2/getsome-v1.6.2-linux-x64.zip)

[Download: Windows](https://github.com/katropine/GetSome/releases/download/v1.6.2/getsome-v1.6.2-win32.zip)

Potential Issues
======================
```
error while loading shared libraries: libudev.so.0
```
Try:
```
cat nw | sed s/libudev.so.0/libudev.so.1/ > fixed_nw
chmod a+x fixed_nw
```
Execute `fixed_nw`


Screenshots
======================

![](https://github.com/katropine/GetSome/blob/master/res/images/getsome-dark.png)

![](https://github.com/katropine/GetSome/blob/master/res/images/getsome-light.png)






