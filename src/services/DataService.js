import http from "../http-common";

class DataService {
  login(data) {
    return http.post("/client/login", data);
  }
  getPaymentApi(uid) {
    return http.get(`/payment?client_id=${uid}`);
  }
  //   faq(data) {
  //     return http.get("/faq", data);
  //   }
  //   customers(id) {
  //     return http.get(`/customers/${id}`);
  //   }


  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();