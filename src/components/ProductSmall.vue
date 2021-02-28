<template>
  <div class="bg-white text-md-center box2">
    <h4 class="my-3">{{ item.title }}</h4>
    <figure>
      <img  :src="item.image" alt="" />
       <span class="time">{{item.time}}</span>
    </figure>
  
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';



.box2 {
  padding: 1rem 2rem;
  margin-bottom: 10px;
  border-radius: 6px;
  h4 {
    font-size: 14px;
    padding: 0 10px;
  }
  figure {
    position: relative;
      img {
        max-height: 100px;
      }
    }
  .time {
    border-color: 32px solid #b4d1f8;
    color: #fff;
    border-radius: 30px;
    position: absolute;
    background:#F44336;
    font-size: 12px;
    font-weight: bold;
    padding: 8px;
    left: 0;
    right: 0;
    
    top: 50px;
  }
}
  

@media (max-width: 767px) {
  
  .box2 {
    padding: 30px 0px 30px 200px;
    figure {
    position: absolute;
    left: 40px;
    top: 20px;
    bottom: 0;
      .time{
      font-size: 10px;

  }
  
 
  }

  h4 {
    font-size: 20px;
    padding: 0 0;
  }
  }
}
</style>
