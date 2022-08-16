---
author : "Rajdeep Singh"
categories : ["Raspberry", "Raspberry pi 4", "ras pi", "pycharm", "pycharm in raspi", "install pycharm"]
date : "2021-01-20T07:10:27Z"
description : ""
draft : false
image : "/images/How-to-install-pycharm-in-raspi-4.png"
slug : "how-to-install-pycharm-in-raspi-4"
tags : ["Raspberry", "Raspberry pi 4", "ras pi", "pycharm", "pycharm in raspi", "install pycharm"]
title : "How to install pycharm in raspi 4"
id: 8
---


Hey!, Everyone my name is Rajdeep Singh. Welcome again to my new post on Raspberry pi 4.In this post, We Learn How to install Pycharm Community Version On Raspberry pi 4.

**Watch This video after following my articles steps:**

<iframe width="356" height="200" src="https://www.youtube.com/embed/jAjwzkEDrgI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Steps:

1. Download
2. Config

### Download:

Go to [Pycharm](https://www.jetbrains.com/pycharm/download/#section=linux) official website and download the latest Linux version in your Raspberry pi 4.

[Download Pycharm Linux Version](images/2021/01/download-pycharm.png) 

---

### Config:

* Go to the **download folder** and Select your **download File**. then the **press right-click** after selecting the **extract here** option after your file **successfully extract**. make sure file extract takes time.
* Open your Linux Terminal using **ctrl+alt+t.**

```command
ctrl+alt+t
```

* Go to the **Downloads** folder using **cd Downloads.**

```commands
cd Downloads
```

[Go to cd Downloads folders](images/pycharm1.png)

* paste **ls commands** inside the Downloads folder

```command
ls
```

[paste ls command in terminal](images/pycharm-2.png)

* after you see, your pycharm **pycharm-community-2020.3.2** file in the Downloads folder or **similar file** you see it.
* Then **Move** your **pycharm file** to the pi opt folder. using the **mv command**

```
 sudo mv pycharm-community-2020.3.2  /opt/pycharm-community-2020.3.2
```

[paste mv command inside terminal](images/pycharm-3.png)

* Successfully move the file to the **opt folder**. then go back using the **cd command.**

```
cd
```

[go back in main root folder](images/pycharm-4.png) 

* **go to use cd /opt/**pycharm-community-2020.3.2/**bin** command into **bin folder**

```command
cd /opt/pycharm-community-2020.3.2/bin
```

[go to bin folder in raspi 4](images/pycharm-5.png) 

* after run **./pycharm.sh** pycharm Script and your pycharm successful Install now.

```command
 ./pycharm.sh
```

[paste command to install pycharm](images/pycharm-6.png) 



### Note:

you alwayes open your pycharm using . /pycharm.sh command.this pycharm not be show in your rapberry pi **programing** folder

```command
. /pycharm.sh
```

---

### Refrenece:

[https://www.element14.com/community/community/raspberry-pi/blog/2019/09/12/installing-pycharm-on-raspberry-pi](https://www.element14.com/community/community/raspberry-pi/blog/2019/09/12/installing-pycharm-on-raspberry-pi)

---

### Hire me:

**Fiverr:**[https://www.fiverr.com/users/officialrajdeep/](https://www.fiverr.com/users/officialrajdeep/)

**Upwork:**[https://www.upwork.com/freelancers/~01a4e8ba7a41795229](https://www.upwork.com/freelancers/~01a4e8ba7a41795229)

---

# Contact me

* [https://www.facebook.com/officialrajdeepsingh/](https://www.facebook.com/officialrajdeepsingh/)
* [https://medium.com/officialrajdeepsingh](https://medium.com/officialrajdeepsingh)
* [officialrajdeepsingh@gmail.com](mailto:officialrajdeepsingh@gmail.com)


---



