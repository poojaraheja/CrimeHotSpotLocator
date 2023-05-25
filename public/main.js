function remove(input) {
  alert("Entry Deleted successfully!");
  const sendData = {
    s_no: input.name,
    email: sessionStorage.getItem("email"),
  };
  axios
    .post("http://localhost:80/CRM-api/remove.php", sendData)
    .then((result) => {
      document.getElementById("lead_table").innerHTML = result.data;
    });
}

function removecustomer(input) {
  alert("Entry Deleted successfully!");
  const sendData = {
    s_no: input.name,
    email: sessionStorage.getItem("email"),
  };
  axios
    .post("http://localhost:80/CRM-api/removecustomer.php", sendData)
    .then((result) => {
      document.getElementById("customer_table").innerHTML = result.data;
    });
}

function payment(input) {
  window.sessionStorage.setItem("payment_id", input.name);
  window.location.href = "/addpayment";
}
