# Edge-Emulator
Edge emulator

Usage
======
[0] **please use linux, if your dev env under MAC OS X, then install bindfs:**
```
$ brew install bindfs
```

[1] **run program**
* dynamic (in app.js, you should export express app) :
```
$ edge-emu -d demo/app.js
```
* static:
```
$ edge-emu -s demo/
```

[2] **dump API**
```
$ edge-emu -l
```

[3] **specify hosts**
```
$ edge-emu -h xxx.com
```

[4] **clean hosts**
```
$ edge-emu -c
```

[5] **specify global resource folder (absolute path): **
```
$ edge-emu -g /repo/global
```