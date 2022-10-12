<script>
export default {

}
</script>

<template>
    <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center">
                    <div class="d-flex display-t js-fullheight">
                        <div class="display-tc js-fullheight animate-box justify-content-center"
                            data-animate-effect="fadeIn">
                            <h1>Explore &amp; Discover Depok</h1>
                            <h2>Explore Depok with relax riding position and powerful engines. Find your new experience
                                with our motorcycles fleet.</h2>
                            <p>
                                <a class="btn btn-primary btn-lg btn-demo" href="#"
                                    @click.prevent="$router.push({name: 'rent'})">Rent Now</a>
                                <a class="btn btn-primary btn-lg btn-learn"
                                    @click.prevent="$router.push({name: 'about'})">About</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div id="fh5co-started">
        <div class="overlay"></div>
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Rental Requirements</h2>
                    <p>1. ID Photo (KTP/Passport).
                        2. SIM C Photo.
                        3. Flights Ticket Photo or Format.
                        4. Hotel Reservation Photo or Format.
                        5. 2 Days Rent Durations Minimal.</p>
                    <p>Have a questions about the rental requirements?</p>
                    <p><a href="#" class="btn btn-default btn-lg">Contact Us</a></p>
                </div>
            </div>
        </div>
    </div>
</template>