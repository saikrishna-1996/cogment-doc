---
title: Installation
sidebar_position: 1
---

# How to Download and Install Cogment

[![Repository](https://img.shields.io/badge/repository-cogment%2Fcogment-%235217b8?style=for-the-badge&logo=github)](https://github.com/cogment/cogment) [![Latest Release](https://img.shields.io/github/v/release/cogment/cogment?label=latest%20release&sort=semver&style=for-the-badge)](https://github.com/cogment/cogment/releases)
[![Latest Docker Release](https://img.shields.io/docker/v/cogment/cogment?label=latest%20docker%20release&sort=semver&style=for-the-badge)](https://hub.docker.com/r/cogment/cogment)

## Installation methods

### Installation script (compatible with linux and macOS for `x86_64` architectures)

This installation method is compatible with virtually any Linux distribution, macOS and WSL2 on Windows. It only requires `bash` and `curl`.

First, download the install script and make sure you can run it using

```console
curl --silent -L https://raw.githubusercontent.com/cogment/cogment/main/install.sh --output install-cogment.sh
chmod +x install-cogment.sh
```

You can then download and install the latest version to `/usr/local/bin` using

```console
sudo ./install-cogment.sh
```

Other installation methods are available, for example:

-   Install version 2.0.0
    ```console
    sudo ./install-cogment.sh --version 2.0.0
    ```
-   Install preleased version 2.3.1-beta3, usefull because prereleases are not considered by default
    ```console
    sudo ./install-cogment.sh --version 2.0.0
    ```
-   Download the cogment exec in the current folder, make sure it is executable but skip the installation
    ```console
    ./install-cogment.sh --skip-install
    ```
-   Specify manually the arch and os
    ```console
    ./install-cogment.sh --arch amd64 --os Windows
    ```

All install options can be listed using

```console
./install-cogment.sh --help
```

Uninstall is as simple as running:

```console
sudo rm $(which cogment)
```

:::tip
Yes, it is possible to install Cogment as a one-line by piping the install script to `bash` ... at the risk of angering your system admin.

```console
curl --silent -L https://raw.githubusercontent.com/cogment/cogment/main/install.sh | sudo ./install-cogment.sh
```

:::

### Manual installation (compatible with linux, macOS and Windows for `x86_64` architectures)

If you are a Windows user (and also if you prefer to do a manual install), you can go through those instructions.

1. Download the desired version from [here](https://github.com/cogment/cogment/releases/) for your platform.
2. Copy it as `cogment` in a location that already belongs to your `PATH` (e.g. `/usr/local/bin`) or that you'll [add to your `PATH`](https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them), and make sure it is executable (e.g. using `chmod +x /usr/local/bin/cogment`).

### Docker

A Cogment docker image is available on [Docker Hub](https://hub.docker.com/r/cogment/cogment). It can be retrieved with the following:

```console
docker pull cogment/cogment
```

:::note
The docker version of Cogment is very handy for server deployment, however, because of the nature of docker, users need to take care of port forwarding and volume mounting if needed.
:::

### Unsupported platform

If your platform is not supported, especially if you are using an `arm64` architecture, add an [issue](https://github.com/cogment/cogment/issues) listing your platform details and do not hesitate to [contact us](./community-channels.md).

### Building from source

Building from sources is perfectly possible. Please refer to the [build instructions](https://github.com/cogment/cogment#developers) for more information.

## Test your installation

:::note

Depending on your platform and how you installed Cogment, it might be accessible as `cogment`, `./cogment`, `cogment.exe` or `docker run cogment/cogment`. We will use `cogment` for the rest of this page and throughout the documentation.

:::

With a working installation you can run the following in a terminal:

```console
cogment version
```

You can then list all the commands by typing:

```console
cogment help
```

or for help on each individual command:

```console
cogment help <command>
```

### Launching a Cogment app

:::note

These instructions are only compatible with unix-like environments such as Linux, macOS and WSL2 on Windows.

:::

In order to test that your installation is fully working, run an existing Cogment app, for example one of the steps of the tutorial.

Download or clone the sources for the official Rock-Paper-Scissors (_RPS_) tutorial from <https://github.com/cogment/cogment-tutorial-rps>.

To run this example you will need to have the following installed on top of Cogment:

-   [python](https://www.python.org/) 3.7 or later,
-   [virtualenv](https://virtualenv.pypa.io/en/latest/).

Once it is done, run the following in the directory you retrieved:

```console
cd 5-human-player
./run.sh build
./run.sh services_start
```

The first call to `./run.sh` command will copy the cogment.yaml, and every referenced proto file, to each module directory, create virtualenvs, and install the python dependencies.

The second will start Cogment and the different services for this app. In another terminal you can connect to it and play a few games of _RPS_ against a simple AI agent.

```console
./run.sh client_start
```

Congratulations, you have a working installation of Cogment! We recommend you head to the [Cogment tutorial](./guide/tutorial/index.md) to learn how to implement this _RPS_ app from scratch.

## Modules

Cogment is composed of different modules, further documented in dedicated pages:

-   The [orchestrator](./orchestrator.md) is the heart of Cogment, it orchestrates the execution of trials over actors and environments provided by ditributed services and clients.
-   The [trial datastore](./trial-datastore.md) is a storage and retrieval layer for the data generated by trials.
-   The [model registry](./model-registry.md) is a registry of AI models, that can be used to store, version, and make available models to AI actors.
-   The legacy `cogment init`, `cogment copy`, `cogment run` & `cogment generate` commands are still available but has been deprecated.
