export interface IPost{
    postContent: string,
    userUid: string,
    userFirstName: string,
    userLastName: string,
    createdAt: Date,
    userProfilePicUrl: string,
    postImageUrl?: string
}