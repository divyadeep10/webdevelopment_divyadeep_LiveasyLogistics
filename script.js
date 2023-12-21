document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search_icon');
    const searchBar = document.getElementById('googlesearchbar_input');
    const searchButton = document.getElementById('button1');
    const gmailBar = document.querySelector('.bar_gmail');
    const imageBar = document.querySelector('.bar_image');
    const gridBar = document.querySelector('.bar_grid');
    const signInButton = document.querySelector('.signinbutton');
   


    searchIcon.addEventListener('click', toggleSearchBar);
    searchButton.addEventListener('click', handleSearch);
    gmailBar.addEventListener('click', handleGmailClick);
    imageBar.addEventListener('click', handleImageClick);
    gridBar.addEventListener('click', handleGridClick);
    signInButton.addEventListener('click', handleSignIn);
    

    searchBar.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
        
    });

    function toggleSearchBar() {
        searchBar.classList.toggle('active');
        searchBar.focus();
        updateClearIconVisibility();
    }

    function handleSearch() {
        const searchTerm = searchBar.value.trim();
        if (searchTerm !== '') {
            alert('Searching for: ' + searchTerm);
        } else {
            alert('Please enter a search term.');
        }
    }

    function clearSearch() {
        searchBar.value = '';
        updateClearIconVisibility();
    }

    function handleGmailClick() {
        alert("Gmail clicked!");
        
    }

    function handleImageClick() {
        alert("Images clicked!");
        
    }

    function handleGridClick() {
        alert("Grid clicked!");
        
    }

    function handleSignIn() {
        alert("Sign in clicked!");
        // window.location.href = "https://www.google.com";
    }
});