<script>
import { mapActions, mapState } from "pinia";
import { useHistoryStore } from "../stores/history";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "dashboard",
  data() {
    return {
      totalExpense: "",
      totalRevenue: "",
      grossProfit: "",
    };
  },
  components: {
    Sidebar,
  },
  methods: {
    ...mapActions(useHistoryStore, ["GetReportData"]),
    HandleGetReportData() {
      this.GetReportData();
      this.totalExpense = this.reportData.totalExpense;
      this.totalRevenue = this.reportData.totalRevenue;
      this.grossProfit = this.reportData.grossProfit;
    },
  },
  computed: {
    ...mapState(useHistoryStore, ["reportData"]),
  },
  created() {
    this.HandleGetReportData();
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["total Expense", "total Revenue", "Gross Profit"],
        datasets: [
          {
            label: "# of Votes",
            data: [
              Number(this.totalExpense),
              Number(this.totalRevenue),
              Number(this.grossProfit),
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <!-- <button type="button" class="btn btn-sm btn-outline-secondary">
                Share
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Export
              </button> -->
            </div>
            <!-- <button
              type="button"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar"></span>
              This week
            </button> -->
          </div>
        </div>
        <canvas id="myChart" height="200"></canvas>
      </main>
    </div>
  </div>
</template>
