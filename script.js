document.addEventListener('DOMContentLoaded', function () {
    const searchicon = document.getElementById('search_icon');
    const searchbar = document.getElementById('googlesearchbar_input');
    const searchbutton = document.getElementById('button1');
    const gmailbar = document.querySelector('.bar_gmail');
    const imagebar = document.querySelector('.bar_image');
    const gridbar = document.querySelector('.bar_grid');
    const signInbutton = document.querySelector('.signinbutton');
    const clearsearchbar = document.getElementById('clear_searchicon');


    searchicon.addEventListener('click', togglesearchbar);
    searchbutton.addEventListener('click', handlesearch);
    gmailbar.addEventListener('click', handlegmailclick);
    imagebar.addEventListener('click', handleimageclick);
    gridbar.addEventListener('click', handlegridclick);
    signInbutton.addEventListener('click', handlesignin);
    clearsearchbar.addEventListener('click', clearbar);

    clearsearchbar.style.display='none';

    searchbar.addEventListener('input', function () {
        clearsearchbar.style.display = searchbar.value.trim() !== '' ? 'block' : 'none';
    });

    clearsearchbar.addEventListener('click', clearbar);

    function clearbar(){
        searchbar.value ='';
        clearsearchbar.style.display='none'; 
    }


    searchbar.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
        
    });

    function togglesearchbar() {
        searchbar.classList.toggle('active');
        searchbar.focus();
       
    }

    function handlesearch() {
        const searchterm = searchbar.value.trim();
        if (searchterm !== '') {
            alert('Searching for: ' + searchterm);
        } else {
            alert('Please enter a search term.');
        }
    }



    function handlegmailclick() {
        alert("Gmail clicked!");
        
    }

    function handleimageclick() {
        alert("Images clicked!");
        
    }

    function handlegridclick() {
        alert("Grid clicked!");
        
    }

    function handlesignin() {
        alert("Sign in clicked!");
        // window.location.href = "https://www.google.com";
    }
});