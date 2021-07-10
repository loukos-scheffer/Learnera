const Like = require('../models/likeModel');

module.exports.hasLiked = async function hasLiked(uid, target){
    let like = await Like.findOne({uid: uid, target: target}).exec();
    return like;
}

module.exports.changeLike = async function changeLike(uid, target){
    const like = await this.hasLiked(uid, target);

    if(like){
        like.remove();
        return false;
    }else{
        const like = new Like();
        like.uid = uid;
        like.target = target;
        like.save();
        return true;
    }
}
