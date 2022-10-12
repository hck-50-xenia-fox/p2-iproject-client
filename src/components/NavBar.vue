<script>
export default {

}
</script>

<template>
    <nav class="fh5co-nav" role="navigation">
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-xs-2">
                        <div id="fh5co-logo"><a href="index.html">SewaMotor<span>.</span></a></div>
                    </div>
                    <div class="col-xs-10 text-right menu-1">
                        <ul>
                            <li class="active"><a @click.prevent="$router.push({ name: 'home'})" href="index.html">Home</a></li>
                            <li class="active"><a @click.prevent="$router.push({ name: 'rent'})" href="index.html">Rent a Motorcycle</a></li>
                            <li><a href="" @click.prevent="$router.push({name: 'about'})" >About</a></li>
                            <li class="btn-cta"><a href="#"><span>Login</span></a></li>
                            <li class="btn-cta"><a href="#"><span>Register</span></a></li>
                            <li><a href="contact.html">Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>