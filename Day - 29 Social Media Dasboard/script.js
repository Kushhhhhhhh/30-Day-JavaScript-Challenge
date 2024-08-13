// Array to store posts
let posts = [];

// Function to display posts in the feed
function displayPosts() {
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.innerHTML = ''; // Clear the container before rendering posts

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <img src="${post.image || 'default-image.jpg'}" alt="Post Image">
            <div class="post-content">
                <p class="post-text">${post.text}</p>
                <div class="post-actions">
                    <button class="like-button" onclick="likePost(${index})">Like</button>
                    <span class="likes-count">${post.likes} Likes</span>
                    <button class="comment-button" onclick="toggleCommentForm(${index})">Comment</button>
                </div>
                <div class="comments-section" id="comments-${index}">
                    ${post.comments.map(comment => `
                        <div class="comment">
                            <span class="comment-author">${comment.username}:</span>
                            <span class="comment-text">${comment.text}</span>
                        </div>
                    `).join('')}
                    <div class="comment-form" id="comment-form-${index}" style="display: none;">
                        <textarea placeholder="Add a comment..."></textarea>
                        <button onclick="addComment(${index})">Submit</button>
                    </div>
                </div>
                <div class="post-footer">
                    <span class="username">${post.username}</span>
                    <span class="timestamp">${post.timestamp}</span>
                </div>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const text = document.querySelector('#postText').value;
    const imageInput = document.querySelector('#postImage');
    const image = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : null;

    const newPost = {
        text,
        image,
        username: JSON.parse(sessionStorage.getItem('loggedInUser')).username,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };

    posts.push(newPost);
    displayPosts();

    event.target.reset();
}

// Function to handle liking a post
function likePost(index) {
    posts[index].likes++;
    displayPosts();
}

// Function to toggle the comment form
function toggleCommentForm(index) {
    const form = document.getElementById(`comment-form-${index}`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Function to handle adding a comment
function addComment(index) {
    const form = document.getElementById(`comment-form-${index}`);
    const textarea = form.querySelector('textarea');
    const commentText = textarea.value.trim();
    if (commentText) {
        const username = JSON.parse(sessionStorage.getItem('loggedInUser')).username;
        posts[index].comments.push({ username, text: commentText });
        textarea.value = '';
        displayPosts();
    }
}

// Add event listener for form submission
document.querySelector('#postForm').addEventListener('submit', handleFormSubmit);

// Initial call to display posts
displayPosts();