export class Comment {
    constructor(
        public cid: String,
        public tid: String,
        public uid: String,
        public body: String,
        public date: Date,
        public likes: Number
    ) {}
}
