<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section class="main-bgcolor light-color" id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
          <h2 style="font-size: 2.5rem;">{HEADING}</h2>
        <p>{DECRIPTION}</p>
      </div>
      <div class="col-md-4">
          <img style="width: 200px;" src="images/home.png" alt="" class="img-fluid" />
      </div>
    </div>
  </div>
  <img src="images/weave.svg" alt="" class="wave-img" />
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  section {
    padding-top: 5%;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }

  .watch-btn {
    margin: auto 20px;
    position: relative;
    top: 8px;
  }

  section a {
    text-decoration: none;
  }

  .wave-img {
    width: 100%;
    height: auto;
  }
</style>
