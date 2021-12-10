<template>
  <div class="about_container" >
      <div class="about_section">
          <div class="about_text">
              <h3 class="quote">From our court to yours</h3>
              <p class="quote">In the mid 19th century, Thomas J. Barden had a dream. After following business interests (and his future wife) to the New World, Thomas longed for 
                  tennis - the sport he and his family had so loved all his life. As the sport was still little known in America, courts were hard to find, and equipment expensive and difficult to procure.
                  Fueled by a desire to share the sport he loved so dearly, Thomas founded Barden Tennis Inc, helping to kick off the American tennis revolution. Within a few years, tennis had become a thriving sport on the continent. 
                  Less than a decade later, Thomas helped to organize the US Championships, known today as the US Open - one of the premier tennis tournaments in the world.</p>
                  <p style="text-align: center;">Every month we select a number of exceptional tennis products to highlight here. We know the best players demand the best equipment, and we want to help supply that. Each Barden distributed product is put through 
                      an intense testing process, and only approved for sale following the endorsement of our playtesters (including 23 players from the ATP and WTA Top 20 lists). We hope you enjoy these products, and if you don't please contact us. 
                      We'll be more than happy to provide you with a full refund, and take any feedback you may have. </p>
                 <p>Contact Info</p>
        <ul style="list-style-type: none;">
          <li>Phone: 800-588-2300</li>
          <li>Email: customer@barden.tennis.com</li>
        </ul>
          </div>
        </div>
        <div class="about_section">
          <img src="/tennis-logo-about.jpeg">
        </div>
      </div>
</template>


<style scoped>

.quote {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
    font-style: oblique;
    text-align: center;
  }
@media only screen and (max-width: 500px) {
    .about_text {
        font-size: 14px !important;
        word-spacing: 1px !important;
        line-height: 23px !important;
        padding-top: 15px!important;
        padding-bottom: 15px !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        font-family: 'Montserrat', sans-serif !important;
    }
    h1 {
        font-size: 30px !important;
    }

    .about_container {
        flex-direction: column !important;
        width:85% !important;
    }
    .this_image {
        width: 100% !important;
        margin-top: 15px !important;
        border-radius: 10px 10px 10px 10px !important;
    }
}

.about_text {
    padding-top:10%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    font-size: 15px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    word-spacing: 3px;
    letter-spacing: 0.2px;
    line-height: 35px;
}
h1 {
    font-size: 50px;
    font-family: 'Optima',sans-serif !important;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;

}

.about_section {
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    width: 80% !important;
    margin: 0 auto;
}

.about_container {
    display: flex;
    flex-direction: row;
    flex: 1 1 40%;
    margin: 15px;
    width: 70%;
    margin:auto;
    background-color: #ebe0d4;
    border-radius: 10px ;
}

img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
}
.this_image {
    width: 90%;
}

</style>