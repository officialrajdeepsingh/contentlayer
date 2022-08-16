---
author : "Rajdeep Singh"
categories : ["Rust", "Linux", "Raspberry pi 4", "Install Rust in Linux", "Ubuntu"]
date : "2022-03-17T07:05:24Z"
description : ""
draft : false
image : "/images/install-Rust-langauge.png"
slug : "how-to-install-rust-language-in-raspberry-pi-4-and-ubuntu"
tags : ["Rust", "Linux", "Raspberry pi 4", "Install Rust in Linux", "Ubuntu"]
title : "How to install rust language in raspberry pi 4 and ubuntu?"
id: 9
---


Installation of Rust in raspberry pi 4 and Ubuntu is a very easy process for all  Linux distros. You can install Rust with one single command. So simple, you copy and paste in your terminal.

### Install Rust

```command
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After you paste the command in a terminal, the rust setup asks one question to start the installation rust in your distro.

```
rajdeepsingh@rajdeepsingh:/$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
info: downloading installer
Welcome to Rust!
....
Current installation options:
default host triple: aarch64-unknown-linux-gnu
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes
1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
> 1
```

I select default rust installation in raspberry pi 4. so everything is mange by rust lang.

### The rust command output

```
rajdeepsingh@officialrajdeepsingh:/$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
info: downloading installer
Welcome to Rust!
This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.
Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:
/home/rajdeepsingh/.rustup
This can be modified with the RUSTUP_HOME environment variable.
The Cargo home directory located at:
/home/rajdeepsingh/.cargo
This can be modified with the CARGO_HOME environment variable.
The cargo, rustc, rustup and other commands will be added to
Cargo's bin directory, located at:
/home/rajdeepsingh/.cargo/bin
This path will then be added to your PATH environment variable by
modifying the profile files located at:
/home/rajdeepsingh/.profile
  /home/rajdeepsingh/.bashrc
You can uninstall at any time with rustup self uninstall and
these changes will be reverted.
Current installation options:
default host triple: aarch64-unknown-linux-gnu
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes
1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>1
info: profile set to 'default'
info: default host triple is aarch64-unknown-linux-gnu
info: syncing channel updates for 'stable-aarch64-unknown-linux-gnu'
686.2 KiB / 686.2 KiB (100 %) 170.5 KiB/s in  5s ETA:  0s
info: latest update on 2022-02-24, rust version 1.59.0 (9d1b2106e 2022-02-23)
info: downloading component 'cargo'
  5.5 MiB /   5.5 MiB (100 %) 267.0 KiB/s in 23s ETA:  0s
info: downloading component 'clippy'
  2.3 MiB /   2.3 MiB (100 %) 275.9 KiB/s in 11s ETA:  0s
info: downloading component 'rust-docs'
 19.3 MiB /  19.3 MiB (100 %) 321.3 KiB/s in 59s ETA:  0s    
info: downloading component 'rust-std'
 31.6 MiB /  31.6 MiB (100 %) 540.1 KiB/s in  1m 38s ETA:  0s    
info: downloading component 'rustc'
 73.1 MiB /  73.1 MiB (100 %) 270.2 KiB/s in  4m 41s ETA:  0s    
info: downloading component 'rustfmt'
  3.4 MiB /   3.4 MiB (100 %) 294.1 KiB/s in 13s ETA:  0s
info: installing component 'cargo'
  5.5 MiB /   5.5 MiB (100 %)   5.3 MiB/s in  1s ETA:  0s
info: installing component 'clippy'
info: installing component 'rust-docs'
 19.3 MiB /  19.3 MiB (100 %) 851.2 KiB/s in 38s ETA:  0s
  8 IO-ops /   8 IO-ops (100 %)   5 IOPS in  1s ETA:  0s    
info: installing component 'rust-std'
 31.6 MiB /  31.6 MiB (100 %)   5.1 MiB/s in 25s ETA:  0s
info: installing component 'rustc'
 73.1 MiB /  73.1 MiB (100 %)   4.6 MiB/s in 35s ETA:  0s
  5 IO-ops /   5 IO-ops (100 %)   0 IOPS in  8m  2s ETA: Unknown
info: installing component 'rustfmt'
  1 IO-ops /   1 IO-ops (100 %)   0 IOPS in 10s ETA: Unknown
info: default toolchain set to 'stable-aarch64-unknown-linux-gnu'
stable-aarch64-unknown-linux-gnu installed - rustc 1.59.0 (9d1b2106e 2022-02-23)
Rust is installed now. Great!
To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).
To configure your current shell, run:
source $HOME/.cargo/env
rajdeepsingh@officialrajdeepsingh:/$
```

### How to delete or uninstall the rust lang?

You can uninstall the Rust with rustup. rustup in inbuild command utility in rust lang.

```
rustup self uninstall

```

---

### Reference

> https://www.rust-lang.org/tools/install

---

### Conclusion

I hope my article solve your problem. If you have any queries, then ask in the comment section.



