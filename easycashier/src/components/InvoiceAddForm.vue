<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores/dataprocess";

export default {
  data() {
    return {
      InvoiceForm: {
        customerName: "",
        customerAddress: "",
        InventoryId: "",
        quantity: "",
        priceToSale: "",
        rev: "",
        customerEmail: "",
        customerPhoneNumber: "",
      },
    };
  },
  methods: {
    ...mapActions(useDataStore, ["addInvoice", "fetchInventory"]),
    addInvoiceHandler() {
      this.addInvoice(this.InvoiceForm);
    },
  },
  computed: {
    ...mapState(useDataStore, ["InventoryList"]),
  },
  created() {
    this.fetchInventory();
  },
};
</script>
<template>
  <main class="form-signup mt-5" style="background-color: whitesmoke">
    <form @submit.prevent="addInvoiceHandler">
      <h1 class="h3 mb-3 fw-normal text-center">
        Please Fill the Invoice Form
      </h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Customer name"
          v-model="InvoiceForm.customerName"
        />
        <label for="floatingInput">Customer Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Customer Address"
          v-model="InvoiceForm.customerAddress"
        />
        <label for="floatingInput">Customer Address</label>
      </div>
      <select
        class="form-select mb-3"
        aria-label="Default select example"
        v-model="InvoiceForm.InventoryId"
        v-for="(inventory, index) in InventoryList"
        :key="index"
      >
        <option Value="" selected disable>--Select--</option>
        <option :value="inventory.id">{{ inventory.productName }}</option>
      </select>
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the quantity"
          v-model="InvoiceForm.quantity"
        />
        <label for="floatingInput">Quantity</label>
      </div>
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the Price Per Item"
          v-model="InvoiceForm.priceToSale"
        />
        <label for="floatingInput">Price Per Item</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the Reference Item"
          v-model="InvoiceForm.rev"
        />
        <label for="floatingInput">Sales Reference</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Customer Email"
          v-model="InvoiceForm.customerEmail"
        />
        <label for="floatingInput">Customer Email</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Customer Phone Number"
          v-model="InvoiceForm.customerPhoneNumber"
        />
        <label for="floatingInput">Customer Phone Number</label>
      </div>
      <br />
      <div class="d-flex justify-content-center gap-2">
        <button class="w-45 btn btn-lg btn-warning" type="submit">
          <router-link
            class="text-dark"
            style="text-decoration: none"
            to="/inventory"
            >Cancel</router-link
          >
        </button>
        <button class="w-45 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  </main>
</template>
<style>
.form-signup {
  width: 100%;
  max-width: 550px;
  padding: 15px;
  margin: auto;
  border-color: black;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
