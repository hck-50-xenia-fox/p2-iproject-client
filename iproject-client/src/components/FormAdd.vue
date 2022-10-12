<script>
import {useProductStore} from '../stores/storeProduct'
import { useLoginStore } from "../stores/storeLogin";
import {mapActions, mapState} from 'pinia'
export default {
    name: "FormAdd",
    data(){
        return{
            dataProduct:{
                name: "",
                description: "",
                price: "",
                stock: "",
                weight: "",
                imgUrl: "",
                categoryId: ""
            }
        }
    },
    methods:{
        ...mapActions(useProductStore, ["addProduct", "fetchCategory"]),
        ...mapActions(useLoginStore, ["loginCheck"])
    },
    computed:{
        ...mapState(useProductStore, ["dataCategory"])
    },
    created(){
        this.loginCheck()
        this.fetchCategory()
    }
}
</script>

<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-6 mx-auto">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <h3>Add Product</h3>
                        <form method="post" @submit.prevent="addProduct(dataProduct)">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input v-model="dataProduct.name" type="text" class="form-control" id="name" />
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <input v-model="dataProduct.description" type="text" class="form-control"
                                    id="description" />
                            </div>
                            <div class="mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input v-model="dataProduct.price" type="number" class="form-control"
                                    id="price" />
                            </div>
                            <div class="mb-3">
                                <label for="stock" class="form-label">Stock</label>
                                <input v-model="dataProduct.stock" type="number" class="form-control"
                                    id="stock" />
                            </div>
                            <div class="mb-3">
                                <label for="weight" class="form-label">Weight</label>
                                <input v-model="dataProduct.weight" type="text" class="form-control"
                                    id="weight" />
                            </div>
                            <div class="mb-3">
                                <label for="imgUrl" class="form-label">Image URL</label>
                                <input v-model="dataProduct.imgUrl" type="text" class="form-control"
                                    id="imgUrl" />
                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">Category</label>
                                <select v-model="dataProduct.categoryId" class="form-select" aria-label="Default select example">
                                    <option value="" disabled selected>--Select Category--</option>
                                    <option v-for="category in dataCategory" :key="category.id" :value="category.id">    
                                        {{category.name}}
                                    </option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-danger me-3">
                                Add <i class="bi bi-plus-circle"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>