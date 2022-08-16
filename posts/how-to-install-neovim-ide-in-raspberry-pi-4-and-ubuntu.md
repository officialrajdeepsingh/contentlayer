---
author : "Rajdeep Singh"
date : "2022-03-18T17:11:14Z"
description : ""
draft : false
image : "/images/install--neovim.png"
slug : "how-to-install-neovim-ide-in-raspberry-pi-4-and-ubuntu"
title : "How to install neovim IDE in Raspberry pi 4 and Ubuntu?"
tags : ["neovim", "Linux", "linux editor"]
categories :  ["neovim", "Linux", "linux editor"]
id: 7
---


The neovim ide base on linuix vim text editor. neovim ide work inside your terminal. You do not need to install a big IDE in raspberry pi 4. The Biggest IDE Eat more ram and resources. So that reason your raspberry pi is very slow. The slowness of raspberry pi gives motivation and strength to shift vscode Editor to neovim.

**You can install neovim in two ways**

1. Snap store
2. Apt-get or Apt

## Snap store

You install neovim is very easy with the snap store. You do not need to use other configurations. all the configurations handle snap cli.

```
sudo snap install  nvim --classic
```

### Note

> Snap cli all ready install in ubuntu and raspberry pi user firstly install snap cli after run snap following neovim install command.

## Apt-get or Apt

You can install neovim with inbuild apt-get command-line utility in Linux distro. Simple, you run the following command, and your neovim start to download in Linux.

```
sudo apt-get install neovim

```

> apt and apt-get is similar command. you can use one of them. some of distro support apt and some of apt-get. but raspberry pi and ubuntu support both of them.

### How to run neovim in raspberry pi 4 and Ubuntu?

You can run neovim with terminal very easily.

```
nvim
```

Open the file with neovim.

```
nvim snapPackage.txt 

```



### How to uninstall or remove neovim?

Based on the installation, you can easily remove neovim IDE.

1. Snap
2. Apt or Apt-get

### Snap

If you use snap, you run the following command to remove neovim in raspberry pi and ubuntu.

```
sudo snap remove nvim
```



### Apt or Apt-get

If you use Apt or Apt-get, you can run the following command to remove neovim in raspberry pi and ubuntu.

```
 sudo apt-get purge neovim
```

---

### References

> https://snapcraft.io/nvim



> https://github.com/neovim/neovim


---

### Conclusion

I hope my article helps you a lot. If you have any queries and ask me in the comment section.

> **You can also subscribe our email for notification.**

