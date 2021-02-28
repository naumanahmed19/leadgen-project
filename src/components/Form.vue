<template>
  <div class="form-wrapper pb-5 my-5">
    <div class="d-none d-md-block">
      <Steps class="px-5 pt-5 pb-3 b-b" />
    </div>
      <form action="post" class="search__form" @submit="getItems">
        <div class="row px-5 ">
      <div class="row  mt-5">
        <div class="form-group">

     
          <input v-model="f.firstName" type="text" class="form-control" id="fname" required />
          <label for="fname">First Name</label>
        </div>
        <div class="form-group">
          <input v-model="f.lastName" type="text" class="form-control" id="lname" required />
          <label for="lname">Last Name</label>
        </div>

        <div class="form-group mb-2">
          <input v-model="f.email" type="text" class="form-control" id="email" required />
          <label for="email">Email</label>
        </div>

        <label for="usr">Date of birth: </label>
        <div class="d-flex justify-content-between my-3">
          <div class="form-group w-100">
            <select  v-model="f.dob.date" class="form-select" aria-label="Date">
              <option selected>Date</option>
              <option :value="n" v-for="(n, index) in 31" :key="index">
                {{ n }}
              </option>
            </select>
          </div>
          <div class="form-group w-100 mx-3">
            <select  v-model="f.dob.month" class="form-select" aria-label="Date">
              <option selected>Month</option>
              <option :value="n" v-for="(n, index) in 12" :key="index">
                {{ n }}
              </option>
            </select>
          </div>
          <div class="form-group w-100">
            <select  v-model="f.dob.year" class="form-select" aria-label="Date">
              <option selected>Year</option>
              <option :value="n" v-for="(n, index) in 31" :key="index">
                {{ n }}
              </option>
            </select>
          </div>
        </div>

        <button
         @click.prevent="handlesubmit"
          class="btn btn-primary btn-block rounded-2 r-5 btn-lg py-3 my-5"
        >
          ACCEPT T&C’S AND ENTER NOW
        </button>

        <div class="text-center">
          <img src="../assets/images/verify.svg" alt="" />
          Wij respecteren je privacy
        </div>
      </div>
    </div>
      </form>
  </div>
</template>


<script>

import Steps from './Steps.vue'
export default {
  components: {
    Steps,

  },

  data() {
    return {
      title: ' Maak kans op een<br />€1000 Waardebon!',
       
       f: {
          firstName:'',
        lastName:'',
        email:'',
        dob:{
          date:'Date',
          month:'Month',
          year:'Year',
        }
       },
        
    }
  },
  methods:{
    handlesubmit(){
      console.log(this.f);


    }
  },

  
}
</script>
<style scoped lang="scss">
.form-wrapper {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  padding: auto;
}
.b-b {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.btn-primary {
  background: #0046a7;
  border-radius: 30px !important;
  border-color: #0046a7;
  font-weight: bold;
  font-size: 16px;
}

.form-control,
.form-select {
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 0;
  padding-left: 0;
  background-color: transparent;
  color: #fff;
}
.form-control:focus {
  color: #fff;
  background-color: transparent;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: none;
  border-bottom: 2px solid #fff;
  padding-left: 0;
}

.form-group > label {
  bottom: 34px;

  position: relative;
  background-color: transparent;
  padding: 0;
  font-size: 12px;
  transition: 0.2s;
  pointer-events: none;
}

.form-control:focus ~ label {
  bottom: 60px;
  padding: 0;
}

.form-control:valid ~ label {
  bottom: 60px;
}

.form-select {
  option {
    color: #0046a7;
  }
  &::after {
    background-image: url('../assets/images/arrow.svg') !important;
    display: block;
    width: 20px;
    height: 20px;
    color: red;
    display: block;
  }
}
</style>