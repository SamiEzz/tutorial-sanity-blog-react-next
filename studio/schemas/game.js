export default {
    name: "game",
    title: "Game",
    type: "document",
    fields: [{
            name: "name",
            title: "Name",
            type: "string",
        }, {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image"
        }, {
            name: "iframe",
            title: "Iframe",
            type: "text"
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: 'category' }]
        }, {
            name: "provider",
            title: "Provider",
            type: "reference",
            to: [{ type: 'provider' }]
        }, {
            name: "players",
            title: "Players",
            type: "array",
            of: [{
                name: "fan_players",
                title: "Fan players",
                type: "object",
                fields: [{
                    name: "player",
                    type: "reference",
                    to: [{
                        type: "player"
                    }]
                }, {
                    name: "loss_value",
                    title: "Loss value",
                    type: "string",
                }, {
                    name: "gain_value",
                    title: "Gain value",
                    type: "string",
                }, {
                    name: "enter_time",
                    type: "datetime",
                    title: "Enter time"
                }, {
                    name: "exit_time",
                    type: "datetime",
                    title: "Exit time"
                }]
            }]
        }
    ]
}