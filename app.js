const wa   = require('@open-wa/wa-automate');
const dbot = require('dbot-js');

wa.create().then(client => {
    client.onMessage(message => {
        dbot.get_response(message.body, (err, result) => {
            if(err) {
                client.reply(message.from, 'Maaf saya tidak ngerti maksudmu', message.id);
            }

            client.reply(message.from, result, message.id);
        })
    })
});