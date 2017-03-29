export interface Comment {
    _id: string,
    commentOnObjectId: any, // This should be type of ObjectID
    comment: string
}