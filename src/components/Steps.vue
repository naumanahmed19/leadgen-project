<template>
  <div class="d-flex steps text-center justify-content-between">
    <div class="text-center active-step">
      <div class="number">1</div>
      <p>
        Beantwoord <br />
        de vragen
      </p>
    </div>
    <div>
      <div class="number">2</div>
      <p>
        Vul je <br />
        gegevens in
      </p>
    </div>
    <div>
      <div class="number">3</div>
      <p>Heb je <br />gewonnen?</p>
    </div>
  </div>
</template>

<style lang="scss">
.steps {

  p {
    font-weight: 500;
    font-size: 13px;
  }
  .number {
    width: 50px;
    height: 50px;
    display: block;
    background: #fff;
    border-radius: 50%;
    line-height: 43px;
    color: #2b58bf;
    margin: 0 auto 10px;
    border: 3px solid #fff;
    font-weight: 700;
  }
  .active-step {
    color: #2b58bf;
    @media (min-width: 767px) {
    color:#fff
    }

    .number {
      color: #fff;
      background-image: url('../assets/images/active.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  
@media (max-width: 767px) {
    color:#434343
    }
}
</style>