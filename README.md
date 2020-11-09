<p align="center">
  <img src="./resources/blue/256x256.png" />
</p>
<h1 align="center">BloomRPC</h1>

<p align="center">
  <img src="https://img.shields.io/github/release/uw-labs/bloomrpc.svg" />
  <a href="https://uw-labs.slack.com/">
    <img src="https://img.shields.io/badge/Join-Slack-e44a61.svg" />
  </a>
</p>
<p align="center">The missing GUI Client for GRPC services. 🌸 </p>

<p align="center">Inspired by <b>Postman</b> and <b>GraphQL Playground</b> <br/>
  <b>BloomRPC</b> aims to provide the simplest and most efficient developer experience for exploring
and querying your GRPC services.
</p>

<br/>

<p align="center">
  Install the client, select your protobuf files and start making requests! <br/>
  <b>No extra</b> steps or configuration <b>needed</b>.
</p>

## Features

- Native GRPC calls
- Unary Calls and Server Side Streaming Support
- Client side and Bi-directional Streaming
- Automatic Input recognition
- Multi tabs operations
- Metadata support
- Persistent Workspace
- Request Cancellation
- Much more...

### Shortcuts

<kbd>CTRL</kbd>+<kbd>w</kbd> or <kbd>CMD</kbd>+<kbd>w</kbd>: close tab

<kbd>ESC</kbd>: focos editor

<kbd>CTRL</kbd>+<kbd>Enter</kbd> or <kbd>CMD</kbd>+<kbd>Enter</kbd>: send request

### GRPC Web

GRPC Web is now supported! Just toggle the `GRPC` switch to `WEB`.

Note on https:

- add https to the url, note for GRPC-Web it also supports path, e.g. https://example.com/grpcweb/v1
- or turn on "TLS" -> Server certificate (default port will change to 443)
- self-signed certificate not supported at the moment

## Installation
We support all the major operation systems, **MacOS / Windows / Linux Deb - Arch Linux**

You can install the client downloading the installer directly from the [Releases Page](https://github.com/uw-labs/bloomrpc/releases)

#### For MacOS and Homebrew users:

```
brew cask install bloomrpc
```
The app will get installed and copied to the path `/Applications/BloomRPC.app`

### Build from source:

```
git clone https://github.com/uw-labs/bloomrpc.git
cd bloomrpc

yarn install && ./node_modules/.bin/electron-rebuild
npm run package
```
The installer will be located in the `release` folder

## Preview

<img src="./resources/editor-preview.gif" />


## Planned Features

- [x] Client-Side Streaming and Bi-Directional Streaming Support
- [x] Draggable tabs
- [x] Web Version with GRPC-WEB

## Contributing

We are welcome to any kind of feedback and contributions.

#### Development Mode:

Run this 2 commands in two different terminals
```
npm run start-server-dev
npm run start-main-dev
```

## Built with amazing technologies

<p float="left">
  <img src="./resources/thirdparties/electron-logo.png" width="100"/>
  <img src="./resources/thirdparties/react-logo.png" width="120" />
  <img src="./resources/thirdparties/grpc-logo.png" width="160" />
</p>
