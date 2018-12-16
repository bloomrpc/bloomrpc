<p align="center">
  <img src="./resources/blue/256x256.png" />
</p>

# BloomRPC
The missing GUI Client for GRPC services. 

Inspired by **Postman** and **GraphQL Playground**. <br/>
**BloomRPC** aim to give the simplest and efficient developer experience for exploring
and querying your GRPC services.

Install the client, select your protobuf files and start making requests! <br/> 
**No extra** steps or configuration **needed**.

## Features

- Native GRPC calls
- Unary Calls and Server Side Streaming Support
- Client side and Bi-directional Streaming (**Coming soon!**)
- Automatic Input recognition
- Multi tabs operations
- Metadata support
- Persistent Workspace
- Request Cancellation
- Much more...

## Installation

#### MacOS and Linux Users:

Download the installer from the [Releases Page](https://github.com/uw-labs/bloomrpc/releases)

#### Windows
We currently don't officially support Windows, because we haven't
setup CI for building the Windows installer just yet.

**Build from source:**

```
git clone https://github.com/uw-labs/bloomrpc.git
cd bloomrpc

yarn install && ./node_modules/.bin/electron-rebuild
npm run package-win
```

## Preview

<img src="./resources/editor-preview.gif" />


## Planned Features

- [x] Client-Side Streaming and Bi-Directional Streaming Support
- [ ] Draggable tabs
- [ ] Multi theme Editor
- [ ] Web Version with GRPC-WEB

## Contributing

We are welcome to any kind of feedback and contributions.

#### Development Mode:

Run this 2 commands in two different terminals
```
npm run server-hot
npm run start-hot
```

## Built with amazing technologies

<p float="left">
  <img src="./resources/thirdparties/electron-logo.png" width="100"/>
  <img src="./resources/thirdparties/react-logo.png" width="120" />
  <img src="./resources/thirdparties/grpc-logo.png" width="160" />
</p>
