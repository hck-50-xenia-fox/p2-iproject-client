<script>
export default {
    name: 'Carousel'
}
</script>

<template>
    <section id="carousel-image">
        <div class="container mb-5" style="margin-top: 3em">
            <div class="row">
                <div class="col-8 mx-auto">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cdn3.f-cdn.com/contestentries/54965/9049204/52d94d007d0be_thumb900.jpg"
                                    class="d-block w-100" style="height: 400px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://wallpapers-hub.art/wallpaper-images/219800.jpg"
                                    class="d-block w-100" style="height: 400px;" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://sibukliburan.id/wp-content/uploads/2022/07/6.-Consortia-Travel-Agent-di-Indonesia.jpg"
                                    class="d-block w-100" style="height: 400px;" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>