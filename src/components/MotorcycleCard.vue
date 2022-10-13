<script>
export default {
    props: ['motorcycle', 'id']
}
</script>

<template>
    <!-- {{motorcycle}} -->
    <div class="col-md-4">
        <div class="fh5co-blog">
            <img class="blog-bg" :src="motorcycle.imageUrl" style="height: 300px"/>
            <!-- <a href="#" class="blog-bg" style="background-image: url(motorcycle.imageUrl.substring(0, 200));"></a> -->
            <div class="blog-text">
                <span class="posted_on">{{motorcycle.brand}}</span>
                <h3><a href="#">{{motorcycle.model}}</a></h3>
                <p>Rp{{motorcycle.price}} /day</p>
                <ul class="stuff">
                    <li><a @click.prevent="$router.push(`/motorcycles/${id}`)" href="#">See Details<i class="icon-arrow-right22"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>