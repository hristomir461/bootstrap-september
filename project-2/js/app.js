feather.replace();

let sliderItems = document.querySelector(".testi-slider");
const result = fetch('https://dummyjson.com/users?limit=5&select=firstName,lastName,email')
                .then(res => res.json())
                .then(res => {
                    res.users.forEach(user => {
                        sliderItems.innerHTML += `<div class="slider-item">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="client-review">
                                    <div class="name position-relative">
                                        <img src="images/quotation.png" alt="quotation" class="img-fluid">
                                        <h5 class="mt-4">${user.firstName} ${user.lastName}</h5>
                                        <p class="text-muted">${user.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-lg-6 mt-5 pt-5">
                                    <div class="cli-text text-center text-muted">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae accusantium dicta quibusdam esse laudantium illum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    });
                })
                .then(() => {
                    function initSlider(className, responsive) {
                        if (document.getElementsByClassName(className)[0] != undefined) {
                            var slider = tns({
                                container: '.' + className,
                                loop: true,
                                navPosition: "bottom",
                                speed: 400,
                                mouseDrag: true,
                                controls: false,
                                autoplay: true,
                                autoplayButtonOutput: false,
                                responsive: responsive
                            });
                        }
                    }

                    initSlider('feature-slider', {
                        640: {
                            edgePadding: 20,
                            gutter: 20,
                            items: 1
                        },
                        700: {
                            edgePadding: 20,
                            gutter: 30,
                            items: 2
                        },
                        900: {
                            edgePadding: 20,
                            items: 4
                        }
                    });

                    initSlider('testi-slider', {
                        640: {
                            edgePadding: 20,
                            gutter: 20,
                            items: 1
                        },
                        700: {
                            edgePadding: 20,
                            gutter: 30,
                            items: 1
                        },
                        900: {
                            edgePadding: 20,
                            items: 1
                        }
                    });
                });



