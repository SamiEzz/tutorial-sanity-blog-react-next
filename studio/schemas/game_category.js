export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [{
        name: "Category",
        title: "Category",
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