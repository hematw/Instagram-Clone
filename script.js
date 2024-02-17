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
];

const stories = [
    {
        username: "jamshid_ha",
        avatar: "images/jamshid.jpg",
    },
    {
        username: "karim.bak",
        avatar: "images/karim.jpeg",
    },
    {
        username: "sahilgaba",
        avatar: "images/sahil.jpeg"
    },
    {
        username: "hematw",
        avatar: "images/profile.jpg"
    }
]


const postsSection = document.getElementById("posts-section");

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

// Stories part
const storiesContainer = document.getElementById("stories")

let allStories = "";
stories.forEach((story)=> {
    allStories += `
    <div class="story-container">
        <img src="${story.avatar}" class="story-img">
        <p class="story-user">${story.username}</p>
    </div>
    `
})

storiesContainer.innerHTML += allStories