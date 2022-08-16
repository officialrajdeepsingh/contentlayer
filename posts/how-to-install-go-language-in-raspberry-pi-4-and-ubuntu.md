---
author : "Rajdeep Singh"
categories : ["go language", "Linux", "Raspberry pi 4", "Ubuntu", "install go language"]
date : "2022-03-15T10:59:50Z"
description : ""
draft : false
image : "/images/install-go-langauge.png"
slug : "how-to-install-go-language-in-raspberry-pi-4-and-ubuntu"
tags : ["go language", "Linux", "Raspberry pi 4", "Ubuntu", "install go language"]
title : "How to Install Go language in Raspberry pi 4 and Ubuntu?"
id: 6
---


You install go language in raspberry pi 4, Ubuntu and Linux. The go language installation process is similar for all the Linux distros.

There is two way to install the go language in raspberry pi 4.

1. Snap
2. Command-line

### Snap

With the help of the [Snap store](https://snapcraft.io/go), the easy way to install Go language in Raspberry pi 4 and ubuntu.

Simple you paste only one snap command in raspberry pi 4, and your go language install and config path automatics in raspberry pi 4.

```Command
sudo snap install go --classic
```

[Install Go language raspberry pi and ubuntu](images/2022/03/carbon--3-.png)

> https://snapcraft.io/go

### Note

> Install the go lang with Snap. Firstly, install snap cli in raspberry pi 4, and Ubuntu comes pre-install with a snap cli.

---

### Command-line

The command-line provides both armhf and armd binary format of go language. Moreover, the command line utility helps the config everything inside raspberry pi 4 and ubuntu.

```
sudo apt-get install golang-go
```

[Install go language with apt-get in raspberry pi and ubuntu](images/carbon--5-.png)

---

### Check the go language version in raspberry pi 4 and ubuntu.

```
go version
```

[Check go language version in the terminal](images/carbon--6--1.png)



---

### How to remove the go language package?

* Snap
* command-line

### Snap

Remove all the go language configurations and packages in Raspberry pi 4 and ubuntu.

```
snap remove go
```
[remove go language](images/2022/03/carbon--4-.png)

### Note

> If you install go with a snap then you remove go with a snap.



### Command-line

Remove or uninstall the go language package with all configuration use of the apt-get command.

```command
sudo apt-get purge golang-go
```



---

### Conclusion

I hope my article helps you. I'm not the go lang developer.



