<template>


  <div class="animate__animated animate__bounce">
      <div class="form-wrapper pb-5 my-5">
    <div class="d-none d-md-block">
      <Steps class="px-5 pt-5 pb-3 b-b" />
    </div>
  
    <form @submit="getItems">
      <div class="px-4">
        <div class=" pb-4 pt-5">
          <h5 class="text-center mb-4">Please enter your details below</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div class="radio-box mr-2 px-3 py-2">
              <label>
                <input
                  type="radio"
                  class="option-input radio"
                  name="example"
                  checked
                />
                De heer
              </label>
            </div>
            <div class="radio-box px-3 py-2">
              <label>
                <input type="radio" class="option-input radio" name="example" />
                Mevrouv
              </label>
            </div>
          </div>
        </div>

        <div class="form-group mt-3 mb-0">
          <input
            v-model="f.firstName"
            type="text"
            class="form-control"
            id="fname"
            required
          />
          <label for="fname">First Name</label>
        </div>
        <div class="form-group mb-0">
          <input
            v-model="f.lastName"
            type="text"
            class="form-control"
            id="lname"
            required
          />
          <label for="lname mb-0">Last Name</label>
        </div>

        <div class="form-group mb-0">
          <input
            v-model="f.email"
            type="text"
            class="form-control"
            id="email"
            required
          />
          <label for="email">Email</label>
        </div>

        <label for="usr">Date of birth: </label>
        <div class="d-flex justify-content-between my-3">
          <div class="form-group w-100">
            <select
              v-model="f.dob.date"
              class="form-select w-100"
              aria-label="Date"
            >
              <option selected>Date</option>
              <option :value="n" v-for="(n, index) in 31" :key="index">
                {{ n }}
              </option>
            </select>
          </div>
          <div class="form-group w-100 mx-3">
            <select
              v-model="f.dob.month"
              class="form-select w-100"
              aria-label="Date"
            >
              <option selected>Month</option>
              <option :value="n" v-for="(n, index) in 12" :key="index">
                {{ n }}
              </option>
            </select>
          </div>
          <div class="form-group w-100">
            <select
              v-model="f.dob.year"
              class="form-select w-100"
              aria-label="Date"
            >
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
    </form>
  </div>
  </div>
</template>


<script>
import Steps from './Steps.vue'
import Loading from './Loading.vue'
export default {
    emits: ["onloading"],
  components: {
    Steps,
    Loading
  },

  data() {
    return {
      title: ' Maak kans op een<br />€1000 Waardebon!',

      f: {
        firstName: '',
        lastName: '',
        email: '',
        dob: {
          date: 'Date',
          month: 'Month',
          year: 'Year',
        },
      },
    }
  },
  methods: {
    handlesubmit() {
      this.$emit('onloading',true);
      setTimeout(()=>{
          this.$emit('onloading',false);
          this.$router.push('exit')
      },2000)
    },
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
  font-size: 12px;
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
  padding-bottom: 12px;
  option {
    color: #e9edf3;
  }
}

.radio-box {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  height: 50px;
  width: 100%;
  font-size: 12px;
}

@keyframes click-wave {
  0% {
    height: 40px;
    width: 40px;
    opacity: 0.15;
    position: relative;
  }

  100% {
    height: 200px;
    width: 200px;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
  }
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 5px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 20px;
  transition: all 0.15s ease-out 0s;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
  border: 3px solid #fff;
}

.option-input:hover {
  background: #fff;
}

.option-input:checked {
  background: #2680eb;
}

.option-input:checked::after {
  -webkit-animation: click-wave 0.25s;
  -moz-animation: click-wave 0.25s;
  animation: click-wave 0.25s;
  background: #e91e63;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
  padding: auto;
}

.option-input.radio {
  border-radius: 50%;
}

.option-input.radio::after {
  border-radius: 50%;
}
</style>