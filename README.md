# chatroom-app-frontend 🚀


## functional overview

## what is this project ?
The Chat'spoil (clever play on words between chat and spoiler) is real-time web chat application realized with modern web technologies. 
Chat'spoil connect people who wants to spoil movies or series - even if these people are execrable, they need a place to express themselves.

- several chat rooms are available. 
- user can read new messages from other users
- user can write and send new messages
- user can see a list of available chat rooms
- user can join and leave a chat room
- user can see a list of active users
- user can create a chat room by giving it a name

Bonus : users can switch between dark 🌙  and light ☀️ mode

## how the project was designed ?
On the front side, I used socket io to manage the websocket.   
I also create an API (see chatroom-app-backend repo), to add data. Due to lack of time, I could only fetch the profiles entered in the database. I have nevertheless "connected" the API to the front, it only remains to recover the data.

# project setup
## technology stack use with Next.js
- Language : Typescript
- Websocket: Socket.io-client
- CSS management : [styled-components](https://styled-components.com/)
- Context API
- Tests: Jest
- Axios to fetch data:
  **https://chatroom-api-backend.onrender.com**

  
## getting Started

1. Open the repo on your IDE

2. Setup environment variables before running the api :
```bash
cp .env.tpl .env.local
```


3. Install dependencies:

```bash
yarn 
```

4. Build and run the development server:

```bash
yarn build && yarn dev
```

5. Go to [http://localhost:3005](http://localhost:3005)

Thank you 🙏