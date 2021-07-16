export class Comment {
    constructor(
        public cid: String,
        public id: String,
        public uid: String,
        public firstName: String,
        public lastName: String,
        public body: String,
        public date: Date,
        public likes: Number
    ) {}
}
