// Google Auth Checker
function checkAdminAccess(user) {
    const myEmail = "dhanulyasas200611@gmail.com";
    if (user.email === myEmail) {
        // Edit buttons පෙන්වන්න
        document.querySelectorAll('.edit-btn').forEach(btn => btn.style.display = 'block');
    }
}
