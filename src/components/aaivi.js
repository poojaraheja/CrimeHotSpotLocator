<div className="leadbox" id="leadbox">
  <form id="survey-form" onSubmit={submitForm}>
    <div className="flex-div">
      <label id="name-label" for="name">
        Customer Name
      </label>
      <input
        style={{ backgroundColor: "white" }}
        className="form-control"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        placeholder="Please enter Customer name"
        required
        disabled
      />
    </div>
    <div className="flex-div">
      <label id="name-label" for="name">
        Payment Date
      </label>
      <input
        className="form-control"
        type="date"
        name="date"
        id="date"
        onChange={handleChange}
        placeholder="Please enter date"
        required
      />
    </div>
    <div className="flex-div">
      <label id="number-label" for="number">
        Payment Mode
      </label>
      <select
        className="form-control form-select"
        aria-label="Default select example"
        name="mode"
        id="mode"
      >
        <option selected value="Cash">
          Cash
        </option>
        <option value="Paytm">Paytm</option>
        <option value="NEFT">NEFT</option>
        <option value="Cheque">Cheque</option>
      </select>
    </div>
    {/* <select name="situation" id="dropdown" required>
    <option disabled selected value onChange={handleChange}>
      Select
    </option>
    <option value="toddler">JustDial</option>
    <option value="student">Quikr SMS</option>
    <option value="job">Quikr DB</option>
    <option value="unemployed">Reference</option>
    <option value="other">Other</option>
  </select> */}
    <div className="flex-div">
      <label id="dropdown-label" for="dropdown">
        Amount To Pay
      </label>
      <input
        className="form-control"
        type="number"
        onChange={handleChange}
        name="amount_to_pay"
        id="amount_to_pay"
        placeholder="Please enter previous paid"
      />
    </div>
    <div className="flex-div">
      <label id="dropdown-label" for="dropdown">
        Discount
      </label>
      <input
        className="form-control"
        type="number"
        name="discount"
        id="discount"
        onChange={handleChange}
        placeholder="Please enter paid amount"
        required
      />
    </div>
    <div className="flex-div">
      <label>Discount Amount</label>
      <input
        className="form-control"
        type="number"
        name="discount_amount"
        id="discount_amount"
        onChange={handleChange}
        placeholder="Please enter balance"
        required
      />
    </div>
    <div className="flex-div">
      <label>Paid</label>
      <input
        className="form-control"
        type="number"
        name="paid"
        id="paid"
        onChange={handleChange}
        placeholder="Please enter discount amount"
        required
      />
    </div>
    <div className="flex-div">
      <label>Remaining Balance</label>
      <input
        className="form-control"
        type="number"
        name="remaining_balance"
        id="remaining_balance"
        onChange={handleChange}
        placeholder="Please enter total amount"
        required
      />
    </div>
    <button className="button my-4" type="submit" id="submit">
      + Create Customer Payment
    </button>
  </form>
</div>;
