export default {
    name: "provider",
    title: "Provider",
    type: "document",
    fields: [{
        name: "provider",
        title: "Provider",
        type: "string"
    }, {
        name: "thumbnail",
        title: "Thumbnail",
        type: "image"
    }, {
        name: "details",
        title: "Details",
        type: "array",
        of: [{ type: "string" }]
    }]
}