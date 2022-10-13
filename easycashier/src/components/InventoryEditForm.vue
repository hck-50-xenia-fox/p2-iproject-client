<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataStore } from "../stores/dataprocess";

export default {
  data() {
    return {
      InventoryForm: {
        productName: "",
        supplierName: "",
        quantity: "",
        pricePerItem: "",
        rev: "",
      },
      dataId: "",
    };
  },
  watch: {
    "$route.params": {
      handler(params) {
        this.dataId = params.id;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useDataStore, ["getInventoryById", "editInventory"]),
    editInventoryHandler() {
      this.editInventory(this.InventoryForm, this.dataId);
    },
    getInventoryByIdHandler() {
      this.getInventoryById(this.dataId);
      this.InventoryForm.productName = this.oneInventory?.productName;
      this.InventoryForm.quantity = this.oneInventory?.quantity;
      this.InventoryForm.supplierName = this.oneInventory?.supplierName;
      this.InventoryForm.pricePerItem = this.oneInventory?.pricePerItem;
      this.InventoryForm.rev = this.oneInventory?.rev;
    },
  },
  computed: {
    ...mapState(useDataStore, ["oneInventory"]),
  },
  created() {
    this.getInventoryById(this.dataId);
    // this.InventoryForm.productName = this.oneInventory?.productName;
    // this.InventoryForm.quantity = this.oneInventory?.quantity;
    // this.InventoryForm.supplierName = this.oneInventory?.supplierName;
    // this.InventoryForm.pricePerItem = this.oneInventory?.pricePerItem;
    // this.InventoryForm.rev = this.oneInventory?.rev;
  },
};
</script>
<template>
  <main class="form-signup mt-5" style="background-color: whitesmoke">
    <form @submit.prevent="editInventoryHandler">
      <h1 class="h3 mb-3 fw-normal text-center">
        Please Fill the Inventory Form
      </h1>
      <button @click.prevent="getInventoryByIdHandler">show old data</button>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="product name"
          v-model="InventoryForm.productName"
        />
        <label for="floatingInput">Product Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name of supplier"
          v-model="InventoryForm.supplierName"
        />
        <label for="floatingInput">Supplier Name</label>
      </div>
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the quantity"
          v-model="InventoryForm.quantity"
        />
        <label for="floatingInput">Quantity</label>
      </div>
      <div class="form-floating">
        <input
          type="number"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the Price Per Item"
          v-model="InventoryForm.pricePerItem"
        />
        <label for="floatingInput">Price Per Item</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the Reference Item"
          v-model="InventoryForm.rev"
        />
        <label for="floatingInput">Reference Item</label>
      </div>
      <br />
      <div class="d-flex justify-content-center gap-2">
        <router-link
          class="text-dark w-45 btn btn-lg btn-warning"
          style="text-decoration: none"
          to="/inventory"
          >Cancel</router-link
        >
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
