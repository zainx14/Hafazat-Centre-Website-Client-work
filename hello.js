function toggleMenu() {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
}

// part5
// Add event listener to like button
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle like button style
      btn.classList.toggle('liked');
    });
  });
