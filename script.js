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
                    <div>
                        <p class="username">${post.username}</p>
                        <p>${post.location}</p>
                    </div>
                    <button class="post-options btn">
                        <i class="bi bi-three-dots-vertical"></i>
                    </button>
                </div>

                <div class="post-img">
                    <img src="${post.img}" class="post-img">
                </div>

                <div class="post-info">
                    <div class="actions">
                        <button class="btn new-post">
                            <i class="bi bi-heart"></i>           
                        </button>
                        <button class="btn new-post">
                            <i class="bi bi-chat"></i>
                        </button>
                        <button class="btn new-post">
                            <i class="bi bi-send"></i> 
                        </button>
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