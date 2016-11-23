module.exports = {
  servers: {
    one: {
      host: '54.200.31.83',
      username: 'ubuntu',
       pem: 'C:/Users/molli_000/Documents/GitHub/NeuralNeta1/neuralnet-kp-actual.ppk'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'NeuralNeta1',
    path: 'C:/Users/molli_000/Documents/GitHub/NeuralNeta1/.deploy',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      //ROOT_URL: 'app.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    dockerImage: "abernix/meteord:base",
    //dockerImage: 'kadirahq/meteord',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};
