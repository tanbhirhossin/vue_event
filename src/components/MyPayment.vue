<template>
   <main id="main">
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pt-5">
            <h2>Payment status</h2>
          </div>
          
        </div>
      </div>
    </section>

    <section id="speakers" class="wow fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>event</th>
                        <th>Pay Date</th>
                        <th>Pay Amount</th>
                    </tr>
                    
                    <tr v-for="d in datas" :key="d.id">
                        <td>{{ d.event?.event_details }}</td>
                        <td>{{ d.pay_date }}</td>
                        <td>{{d.pay_amount}}</td>
                    </tr>

                </thead>
            </table>
          </div>
        </div>
      </div>

    </section>
    
        

   </main>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: 'MyPayment',
  data() {
    return {
      datas:[]
    };
  },
  methods: {
    getPayment() {
      let uid=sessionStorage.getItem('uid');
      DataService.getPaymentApi(uid)
        .then(response => {
            console.log(response)
          if(response.data.data)
            this.datas= response.data.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.getPayment();
  }
}
</script>