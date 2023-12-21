document.addEventListener('DOMContentLoaded', function () {

     // Getting references to DOM elements
    const searchicon = document.getElementById('search_icon');
    const searchbar = document.getElementById('googlesearchbar_input');
    const searchbutton = document.getElementById('button1');
    const gmailbar = document.querySelector('.bar_gmail');
    const imagebar = document.querySelector('.bar_image');
    const gridbar = document.querySelector('.bar_grid');
    const signInbutton = document.querySelector('.signinbutton');
    const clearsearchbar = document.getElementById('clear_searchicon');

    // Adding event listeners
    searchicon.addEventListener('click', togglesearchbar);
    searchbutton.addEventListener('click', handlesearch);
    gmailbar.addEventListener('click', handlegmailclick);
    imagebar.addEventListener('click', handleimageclick);
    gridbar.addEventListener('click', handlegridclick);
    signInbutton.addEventListener('click', handlesignin);
    clearsearchbar.addEventListener('click', clearbar);

    // setting to make cross sign not avaliable during no input
    clearsearchbar.style.display='none';

    // adding event listener to show/hide cross sign based on input value
    searchbar.addEventListener('input', function () {
        clearsearchbar.style.display = searchbar.value.trim() !== '' ? 'block' : 'none';
    });
    
    // Adding click event listener to clear search icon
    clearsearchbar.addEventListener('click', clearbar);

    // Function to clear the search bar
    function clearbar(){
        searchbar.value ='';
        clearsearchbar.style.display='none'; 
    }

    // Adding keyup event listener to the search bar for handling Enter key press
    searchbar.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
        
    });

    // Function to toggle the search bar
    function togglesearchbar() {
        searchbar.classList.toggle('active');
        searchbar.focus();
       
    }

    // Function to handle the searched input
    function handlesearch() {
        const searchterm = searchbar.value.trim();
        if (searchterm !== '') {
            alert('Searching for: ' + searchterm);
        } else {
            alert('Please enter a search term.');
        }
    }


     // Function to handle Gmail click
    function handlegmailclick() {
        alert("Gmail clicked!");
        
    }

    // Function to handle Images click
    function handleimageclick() {
        alert("Images clicked!");
        
    }

    // Function to handle Grid click
    function handlegridclick() {
        alert("Grid clicked!");
        
    }

     // Function to handle Sign In click
    function handlesignin() {
        alert("Sign in clicked!");
        // window.location.href = "https://www.google.com";
    }
});