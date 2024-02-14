const posts = [
    {
        username: "jamshid_hashimi",
        location: "California, USA",
        avatar: "images/jamshid.jpg",
        img: "images/j.jpg",
        comment: "wow nice setup",
        likes: "21,092"
    },
    {
        username: "karim.bakhsh",
        location: "Kabul, Afghanistan",
        avatar: "images/karim.jpeg",
        img: "images/levels_of.jpg",
        comment: "it wasa really nice",
        likes: "4,281"
    },
    {
        username: "sahilgaba",
        location: "California, USA",
        avatar: "images/sahil.jpeg",
        img: "images/sahil_post.jpg",
        comment: "awesome 🙂",
        likes: "152"
    },
    {
        username: "hematw",
        location: "Kabul, Afghanistan",
        avatar: "images/profile.jpg",
        img: "images/post.jpg",
        comment: "🧡🧡🧡",
        likes: "113"
    }
]


const postsSection = document.getElementById("posts-section");
console.log(postsSection);

let allPosts = "";
posts.forEach((post) => {
    allPosts += `
    <div class="post">

                <div class="post-user">
                    <img src="${post.avatar}" class="user-profile">
                    <p class="username">${post.username}</p>
                    <p class="location">${post.location}</p>
                </div>

                <div class="post-img">
                    <img src="${post.img}" class="post-img">
                </div>

                <div class="post-info">
                    <div class="actions">
                        <img src="images/icon-heart.png" class="actions-icon">
                        <img src="images/icon-comment.png" class="actions-icon">
                        <img src="images/icon-dm.png" class="actions-icon">
                    </div>

                    <div class="like-comments">
                        <p class="likes">${post.likes} likes</p>
                        <p class="comments"><span class="comment-user">hematw</span> ${post.comment}</p>
                    </div>
                </div>
                
            </div>
    `
})

postsSection.innerHTML = allPosts;