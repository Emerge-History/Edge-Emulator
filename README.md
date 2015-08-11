# Edge-Emulator
Edge emulator

Usage
======
[1] **append a line to /etc/hosts:**
```
127.0.0.1 api.wi.fi
```
[2] **append contents of nginx/nginx.conf to your nginx.conf**

[3] **run program**
* dynamic:
```
$ edge-emu -d app.js
```
* static:
```
$ edge-emu -s tests/
```

[4] **dump API**
```
$ edge-emu -l
```