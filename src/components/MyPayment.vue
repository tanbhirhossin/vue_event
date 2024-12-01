<template>
   <div className="content-wrapper">
    <h2 className="mb-4" style="margin-top: 100px; text-align: center;">Payment status</h2>
        <table className="table table-striped table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>event</th>
                    <th>Pay Date</th>
                    <th>Total Amount</th>
                    <th>Pay Amount</th>
                    <th>Due</th>
                </tr>
                
                <tr>
                    <td>tanvir</td>
                    <td>IT conference</td>
                    <td>15/11/2024</td>
                    <td>500000</td>
                    <td>400000</td>
                    <td>100000</td>
                  
                </tr>
                <tr>
                    <td>tanvir</td>
                    <td>IT conference</td>
                    <td>15/11/2024</td>
                    <td>500000</td>
                    <td>400000</td>
                    <td>100000</td>
                  
                </tr>
                <tr>
                    <td>tanvir</td>
                    <td>IT conference</td>
                    <td>15/11/2024</td>
                    <td>500000</td>
                    <td>400000</td>
                    <td>100000</td>
                  
                </tr>

            </thead>
        </table>

   </div>
</template>

<script>
export default {
  name: 'MyPayment',
  props: {
    msg: String
  }
}
</script>