<script>
import { mapActions, mapState } from 'pinia'
import { useSewamotorStore } from '../stores/sewamotor.js'
import MotorcycleCard from '../components/MotorcycleCard.vue';

export default {
	components: { MotorcycleCard },
	computed: {
		...mapState(useSewamotorStore, ['motorcycles'])
	},
	methods: {
		...mapActions(useSewamotorStore, ['getMotorcycles'])
	},
	created() {
		this.getMotorcycles()
	}
}
</script>

<template>
	<div id="fh5co-blog">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Discover our Motorcycle Fleet</h2>
					<p>See our selection of motorcycles that we have to offer you and start your adventure.</p>
				</div>
			</div>
			<div class="row">
				<MotorcycleCard v-for="motorcycle in motorcycles" :key="motorcycle._id" :motorcycle="motorcycle"
					:id="motorcycle._id" />
			</div>
		</div>
	</div>
</template>