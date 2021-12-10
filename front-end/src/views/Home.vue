<template>
<div>
    <div class="background">
        <div class="header">
            <p>Fight for Greatness</p>
        </div>
        <br>
    <div class="text">A premier tennis shop selling handpicked gear for your best game</div>
  </div>
  <br>
  <div class="image_box">
    <img src="/Federer.jpg" class="large_image"/>
  </div>

  
</div>
</template>



<style scoped>
#id {
    text-align: center;
}
.header{
        font-size: 40px !important;
        text-align: center !important;
    }

@media only screen and (min-width: 1000px) {
    .navbar-nav {
        float:none;
        margin:0 auto;
        display: block;
        text-align: center;
    }
    .navbar-nav > li{
        display: inline-block;
        float:none;
        } 
}
@media only screen and (max-width: 500px) {
    .image {
        width: 50% !important;;
    }

    .text {
        font-size: 20px !important;
    }

    .footer {
        font-size: 11px !important;
    }
}


.bg-light {
    background-color:rgb(255, 255, 255) !important;
}

.navbar-brand, .nav-link{
    font-family: 'Montserrat', sans-serif !important;
    font-variant: small-caps !important;
    font-size: 27px !important;
}


.image {
    width:30%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.logo {
    max-width: 100%;
    object-fit: cover;
    padding-left: 10%;
}


.image_box {
    width: 100%;
    /* overflow: hidden; */
    margin-left: auto;
    margin-right: auto;
    display: block;
    /* opacity: 80%; */
    margin-bottom: 10px;

}

.large_image {
    max-width: 100%;
    object-fit: fill;
    object-position: bottom;
}

.background {
    text-align: center;
    padding-top: 10px;
}

.header {
    font-family: 'Montserrat', sans-serif;
    font-variant: small-caps;
    font-weight:lighter;
    font-size: 55px;
    letter-spacing: 1px;
    
}
.text {
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: bolder;
    word-spacing: 2%;
    letter-spacing: 2px;

}

.footer {
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #a7af91;
    color: white;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top: 200px;
    padding: 15px;
  }

  #foot {
      color: black;
  }

  #foot.hover {
    text-decoration: black  !important;
  }
</style>
