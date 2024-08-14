document.addEventListener('DOMContentLoaded', function() {
    // Get forms
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerBtn = document.querySelector('.register-btn');
    const logoutBtn = document.getElementById('logoutBtn');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const profilePic = document.getElementById('profilePic');
    const uploadPic = document.getElementById('uploadPic');

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
        if (usernameInput) usernameInput.value = loggedInUser.username;
        if (emailInput) emailInput.value = loggedInUser.email;
        if (profilePic && loggedInUser.profilePic) {
            profilePic.src = loggedInUser.profilePic;
        }
        if (registerBtn) registerBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
    } else {
        if (registerBtn) registerBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }

    // Register Button Redirection
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    // Logout Button Functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser'); 
            alert('You have been logged out.');
            window.location.href = 'login.html';
        });
    }

    // Registration Form Submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;

            if (validateForm(username, email, password)) {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const userExists = users.some(user => user.username === username || user.email === email);

                if (userExists) {
                    alert('Username or Email already exists.');
                } else {
                    users.push({ username, email, password });
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Registration successful! Redirecting to login.');
                    registerForm.reset();
                    window.location.href = 'login.html'; 
                }
            }
        });
    }

    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                alert(`Welcome, ${user.username}! Redirecting to dashboard.`);
                loginForm.reset();
                window.location.href = 'index.html';  // Redirect to main dashboard page after login
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Edit profile button
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            if (usernameInput) usernameInput.readOnly = false;
            if (emailInput) emailInput.readOnly = false;
            if (uploadPic) uploadPic.style.display = 'block';
            editProfileBtn.style.display = 'none';
            if (saveProfileBtn) saveProfileBtn.style.display = 'inline-block';
        });
    }

    // Save profile button
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', function() {
            const updatedUser = {
                username: usernameInput.value,
                email: emailInput.value,
                profilePic: profilePic.src
            };

            localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
            alert('Profile updated successfully!');

            if (usernameInput) usernameInput.readOnly = true;
            if (emailInput) emailInput.readOnly = true;
            if (uploadPic) uploadPic.style.display = 'none';
            if (editProfileBtn) editProfileBtn.style.display = 'inline-block';
            saveProfileBtn.style.display = 'none';
        });
    }

    // Handle profile picture upload
    if (uploadPic) {
        uploadPic.addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                if (profilePic) profilePic.src = e.target.result;
            };
            
            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }
});

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

// Function to handle form submission for new posts
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const text = document.querySelector('#postText').value;
    const imageInput = document.querySelector('#postImage');
    const image = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : null;

    const newPost = {
        text,
        image,
        username: JSON.parse(localStorage.getItem('loggedInUser')).username,
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
        const username = JSON.parse(localStorage.getItem('loggedInUser')).username;
        posts[index].comments.push({ username, text: commentText });
        textarea.value = '';
        displayPosts();
    }
}

// Add event listener for form submission
document.querySelector('#postForm').addEventListener('submit', handleFormSubmit);

// Initial call to display posts
displayPosts();