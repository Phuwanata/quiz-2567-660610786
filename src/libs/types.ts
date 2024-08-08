interface OwnerProps{
    userImagePath:string,
    username: string,
    postText: string,
    likeNum: number,
}

interface CommentProps{
    userImagePath:string,
    username:string,
    commentText:string,
    likeNum:number,
    replies:ReplyProps[]|any,
}

interface ReplyProps {
    username: string,
    userImagePath: string,
    replyText: string,
    likeNum: number,
}
export type { ReplyProps ,CommentProps, OwnerProps};