export default {
    name: "wallet",
    title: "Wallet",
    type: "document",
    fields: [{
        name: "walletname",
        title: "Wallet Name",
        type: "string"
    }, {
        name: "owner",
        title: "Owner",
        type: "reference",
        to: [{ type: "player" }]
    }, {
        name: "image",
        title: "Image",
        type: "image"
    }, {
        name: "network",
        title: "Network",
        type: "string"
    }, {
        name: "address",
        title: "Address",
        type: "string"
    }, {
        name: "balances",
        title: "Balances",
        type: "array",
        of: [{ type: "string" }]
    }]
}