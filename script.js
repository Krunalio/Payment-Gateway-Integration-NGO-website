let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');

}

let section = document.querySelectorALL('section');
let navLinks = document.querySelectorALL('header .nav a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach( sec => {
        
        let top = window.scrollY;
        let height = set.offsetHeight;
        let offset = set.offsetTop - 150;
        let id = set.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');


            });


        };


    });

}










<!-- bootstrap cdn link -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- font awesome cdn link -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<!-- custom css file link -->
<link rel="stylesheet" href="/style.css">

</head>
<body>

<!-- header section starts -->
    <header class="fixed-top py-3">
        <div class="container d-flex align-items-center justify-content-between">
            <a href="#" class="logo">Save Child</a>
            <div id="menu-bar" class="fas fa-bars d-lg-inline-block d-md-none">
            </div>
