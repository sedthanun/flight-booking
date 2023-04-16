<template lang="">
  <div class="fullscreen flex-column">
    <div
      class="jumbotron d-flex flex-column justify-content-center align-items-center gradient p-5 mb-5"
    >
      <h1 class="display-4 text-light">สวัสดีคุณ User</h1>

      <p class="text-light lead">
        <b> จองตั๋วเครื่องบินสุดสบายได้ที่นี่ </b> <br /><br /><br />
      </p>
    </div>
    <div class="">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center mb-5 text-primary">Booking/ จองตั๋ว</h1>

        <div class="container shadow rounded p-5 mb-5 mt-3">
          <form
            @submit.prevent="submitForm"
            class="row g-3 needs-validation"
            novalidate
          >
            <div class="mb-3 col-md-4">
              <label for="exampleFormControlTextarea1" class="form-label"
                >สายการบิน</label
              >
              <select
                class="form-select"
                aria-label="Default select example"
                ref="airlineEl"
              >
                <option v-for="item in brand">{{ item }}</option>
              </select>
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleFormControlTextarea1" class="form-label"
                >เดินทางจาก</label
              >
              <select
                class="form-select"
                aria-label="Default select example"
                ref="fromEl"
              >
               
                <option v-for="item in location">{{ item }}</option>
              </select>
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleFormControlTextarea1" class="form-label"
                >เดินทางไป</label
              >
              <select
                class="form-select"
                aria-label="Default select example"
                ref="destinationEl"
              >
                <option v-for="item in location">{{ item }}</option>
              </select>
            </div>
            <div class="mb-3 col-md-6">
              <label for="exampleFormControlTextarea1" class="form-label"
                >วันเดินทางไป</label
              >
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                ref="dateEl"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="exampleFormControlTextarea1" class="form-label"
                >เวลาเดินทาง</label
              >
              <input
                type="time"
                class="form-control"
                id="exampleFormControlInput1"
                ref="timeEl"
              />
            </div>
            <div class="mb-3 col-md-12">
              <label for="exampleFormControlTextarea1" class="form-label"
                >ประเภทที่นั่ง</label
              >
              <select
                class="form-select"
                aria-label="Default select example"
                ref="seattypeEl"
              >
              <option value="" selected>เลือกประเภทที่นั่ง</option>
                <option v-for="item in seattype">{{ item }}</option>
              </select>
            </div>
            <div class="d-grid gap-2 col-4 mb-3 mx-auto">
              <button type="submit" class="btn gradient text-light">
                จองตั๋ว
              </button>
            </div>
          </form>
        </div>
        <!-- show user's form inputs -->
        <h1 class="text-center mb-5 text-primary">Payment/ จ่ายเงิน</h1>
        <div class="container shadow rounded p-5 mb-5 mt-3 ">
        <div class="row g-3">
          <div class="col-md-6">
        <p> เส้นทาง: {{ booking.from }} - {{ booking.destination }}</p>
        <p> ประเภทที่นั่ง {{ booking.seattype }}</p>
         <p>ราคา:  <span class="h1 text-danger">{{ calculatedPrice }}</span> บาท </p>
       
         <button class="btn gradient text-light">ใส่โค้ดส่วนลด</button>
        </div>
        <div class="col-md-6 mt-md-3">
          <p>สแกน QR Code ที่นี่</p>
          <img src="src/assets/qrticket.png" class="img-fluid w-50" alt="" srcset="">
        </div>
        <div class="col-md-12">
          <form 
          class="row g-4"
          @submit.prevent="submitForm2"
          >
            <div class="col-12">
              <label for="" class="form-label">ธนาคารของคุณ</label>
              <select name="" id="" class="form-select" ref="yourbankRef" required>
                <option v-for="bank in banks">{{ bank }}</option>
              </select>
            </div>
            <div class="col-12">
              <label for="" class="form-label">หลักฐานการโอนเงิน</label>
              <input type="file" class="form-control" required>
            </div>
            <div class="col-12">
              <label for="" class="form-label">เวลาทำรายการ</label>
              <!-- tactime คือ transaction time -->
              <input type="time" name="" id="" class="form-control" ref="tactimeRef" required>
            </div>
            <div class="col-12">
              <label for="" class="form-label">หมายเลขบัญชี 4 หลักสุดท้าย (XXXX-XX0-12-3)</label>
              <input type="text" name="" id="" class="form-control" ref="booknumRef">
            </div>
            <div class="col-4 d-grid gap-2 mb-3 mx-auto">
              <button type="submit" class="btn gradient text-white">ส่งหลักฐานการชำระเงิน</button>
            </div>
          </form>
        </div>
        <!-- Promotion ที่ลบออก -->
        <!-- <div class="col-md-12 mt-md-3 text-center">
          <h2 class="text-primary">PROMOTION</h2>
        </div>
        <div class="col-md-4">
          <div class="promocard">
            
          </div>
        </div>
        <div class="col-md-4">
          <div class="promocard">
            
          </div>
        </div>
        <div class="col-md-4">
          <div class="promocard">
            
          </div>
        </div>
        <div class="col-md-4">
          <div class="promocard">
            
          </div>
        </div>
        <div class="col-md-4">
          <div class="promocard">
            
          </div>
        </div>
        <div class="col-md-4">
          <div class="promocard">
          
          </div>
        </div> -->

        </div>
        </div>
        <h1 class="text-center mb-5 text-primary" v-if="isconfirmed">ยืนยันข้อมูล</h1>
        <div class="container shadow rounded p-5 mb-5" v-if="isconfirmed" >
          <div class="row g-3">
            <div class="col-md-12 text-center">
              <p>เส้นทาง: {{ booking.from }} - {{ booking.destination }}</p>
              <p>สายการบิน: {{ booking.airline }}</p>
              <p>วันและเวลาเดินทาง {{ booking.startdate }} {{ booking.time }} น.</p>
              <p>ประเภทที่นั่ง: {{ booking.seattype }}</p>
              <h3>ข้อมูลการชำระเงิน</h3>
              <p>ธนาคาร: {{ booking.yourbank }}</p>
              <p>เวลาที่ทำรายการ: {{ booking.tactime }} น.</p>
              <p>หมายเลขบัญชี 4 หลักสุดท้าย: XXXX-XX-{{ booking.booknum }}</p>
              <p>จำนวนเงิน: {{ calculatedPrice }} บาท</p>
            </div>
            <div class="col-md-12">
              <div class="col-4 d-grid gap-2 mx-auto">
                <button @click="showTicket" class="btn gradient text-white">ยืนยันข้อมูลการชำระเงิน</button>
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-center text-primary" v-if="issubmitted">My Ticket</h1>
        <p v-if="issubmitted">โปรดเก็บหลักฐานการชำระเงินนี้ไว้</p>
        <div class="container shadow rounded p-5 mb-5" v-if="issubmitted">
          <div class="row g-3">
            <div class="col-md-6">
              <h1>My Flight Ticket</h1>
              
              <h4 class="text-danger"> {{ booking.airline }}</h4>
              <h4 class="text-danger">{{ booking.from }} - {{ booking.destination }}</h4>
              <h4 class="text-danger">{{ booking.startdate }} {{ booking.time }} GMT+7</h4>
              <h4 class="text-primary">{{ booking.seattype }}</h4>
              <h4>PAIDED</h4>
            </div>
            <div class="col-md-6">
              <img src="src/assets/qrticket.png" class="img-fluid w-50" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isconfirmed:false,
      issubmitted: false,
      booking: {
        airline: "",
        from: "",
        destination: "",
        startdate: "",
        time: "",
        seattype: "",
        price: 0,
        yourbank: "",
        tactime: "",
        booknum: "",
      },
      location: [
        "สุวรรณภูมิ (BKK)",
        "ดอนเมือง (DMK)",
        "สนามบินภูเก็ต (HKT)",
        "สนามบินเชียงใหม่ (CNX)",
        "สนามบินกระบี่ (KBV)",
        "สนามบินเชียงราย (CEI)",
        "สนามบินหาดใหญ่ (HDY)",
        "ท่าอากาศยานสุราษฎร์ธานี (URT)",
        "สนามบินแม่สอด (MAQ)",
        "สนามบินนครศรีธรรมราช (NST)",
        "ท่าอากาศยานนานาชาติอุบลราชธานี (UBP)",
        "สนามบินลำปาง (LPT)",
        "สนามบินบุรีรัมย์ (BFV)",
        "สนามบินสมุย (USM)",
        "ท่าอากาศยานอุดรธานี (UTH)",
        "สนามบินขอนแก่น (KKC)",
        "สนามบินระนอง (UNN)",
        "สนามบินพิษณุโลก (PHS)",
        "สนามบินสกลนคร (SNO)",
        "สนามบินชุมพร (CJM)",
        "ท่าอากาศยานตรัง (TST)",
      ],
      brand: [
        "BANGKOK AIR",
        "NOK AIR",
        "THAI  ASIA",
        "ESPRESS WING",
        "MENTARI",
        "THAI",
        "THAI SMILE",
      ],
      seattype: ["NORMAL", "VIP"],
      banks: [
        "KASIKORN BANK",
        "BANGKOK BANK",
        "KRUNG THAI BANK",
        "SIAM COMMERCIAL BANK",
        "TMB BANK",
        "BANK OF AYUDHYA",
      ],
    };
  },
  // คำณวนราคาของตั๋วเครื่องบินโดยใช้ computed propeties
  computed: {
    calculatedPrice() {
      return this.booking.seattype == "VIP"
        ? 20000
        : this.booking.seattype == "NORMAL"
        ? 10000
        : 0;
    },
  },
  // reassign ค่าของฟอร์มตามค่าที่ส่งเข้าไปใน input
  methods: {
    submitForm(e) {
      //  e.preventDefault();
      console.log(this.booking.seattype);
      this.booking.airline = this.$refs.airlineEl.value;
      this.booking.from = this.$refs.fromEl.value;
      this.booking.destination = this.$refs.destinationEl.value;
      this.booking.startdate = this.$refs.dateEl.value;
      this.booking.time = this.$refs.timeEl.value;
      // console.log(this.$refs.seattypeEl.value)
      this.booking.seattype = this.$refs.seattypeEl.value;
      // if(this.$refs.seattypeEl.value = "NORMAL"){
      //   this.booking.price = 15000;
      // } if(this.$refs.seattypeEl.value = "VIP"){
      //   this.booking.price = 20000;
      // }
      // console.log(this.$refs.seattypeEl.value)
      // console.log(this.booking.price)

      // console.log(this.$refs.paymentEl.value);
      
    },
    submitForm2() {
      this.booking.yourbank = this.$refs.yourbankRef.value;
      this.booking.tactime = this.$refs.tactimeRef.value;
      this.booking.booknum = this.$refs.booknumRef.value;
      this.isconfirmed = true;
      console.log(this.isconfirmed);
    },
    showTicket(){
      this.issubmitted = true;
    }

  },
};
</script>

<style scoped>
.promocard {
  min-width: 280px;
  min-height: 80px;
  background: blue;
}
</style>
