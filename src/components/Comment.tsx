"use client";

import { CommentProps, ReplyProps } from "@/libs/types";
import Reply from "./Reply";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}: CommentProps) {
  return (
    <div>
      <div className="d-flex gap-2 my-2 c text-white">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C"}}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            {likeNum > 0 && <img src="/like.svg" width={20}></img>}
            {likeNum > 0 && <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>}
          </div>
        </div>
      </div>
      {replies && replies.map((r: ReplyProps) => <Reply {...r} key={r.replyText} />)}
    </div>
  );
}