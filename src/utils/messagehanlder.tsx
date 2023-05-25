const Ably = require('ably');

//const ably = new Ably.Realtime.Promise('sqLe5g.JKstrA:*****');


export default class MessageHandler {

    // Your Ably keys
    #apiKey = 'ably_api_key';
    userId: string;
    channelName: string;
    channel: any;
    message: any;
    listener: any;
    ably: any;
    constructor(userId: string) {
        this.userId = userId
        this.channelName = ''
        this.message = ''
        this.ably = new Ably.Realtime.Promise(this.#apiKey)
    }

    subscribeToChannel = (channelName: string) => {
        this.channel = this.ably.channels.get(channelName);
        console.log(this.channel)
        console.log('subscrubied to channel');
        return this.channel;
    }

    setChannel = (channelName: string) => {
        this.channelName = channelName;
    }

    setMessage = (message: string) => {
        console.log('SET MESSAGE', message)
        this.message = message
    }

    publishMessage = () => {
        this.channel.publish('message', {message: this.message, userId: this.userId}, (error: any) =>  {
                console.log("Message published")
            }    
        )
    }
}

