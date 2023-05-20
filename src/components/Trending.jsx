import { Carousel } from "flowbite-react";

const Trending = () => {
    return (
        <div className="mt-20 mb-20">
            <h1 className="text-4xl font-bold text-center">Trending Toys</h1>
            <div>
                <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-10">
                    <div data-aos="zoom-in-right">
                        <Carousel >
                            <img
                                src="https://cdn.pixabay.com/photo/2023/04/24/10/37/car-7947765_640.jpg"
                                alt="..."
                            />
                            <img
                                src="https://media.istockphoto.com/id/1363867603/es/foto/coche-de-juguete.jpg?s=612x612&w=0&k=20&c=hDM4YfAZR4YaVXdWXsF04AoqiJ6vlctA_einpdUoaUk="
                                alt="..."
                            />
                            <img
                                src="https://media.istockphoto.com/id/1316414600/es/foto/manos-de-ni%C3%B1o-jugando-con-coches-de-juguete-multicolores-sobre-fondo-de-madera-blanca.jpg?s=612x612&w=0&k=20&c=sPCb_hn0rs1aIFer76x8HnSKwoM3GdbiYexN3ul3Jz8="
                                alt="..."
                            />
                            <img
                                src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600"
                                alt="..."
                            />
                            <img
                                src="https://images.freeimages.com/images/previews/d50/racing-car-model-1413571.jpg"
                                alt="..."
                            />
                        </Carousel>
                    </div>
                    <div data-aos="zoom-out">
                        <Carousel indicators={false}>
                            <img
                                src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600"
                                alt="..."
                            />
                            <img
                                src="https://images.freeimages.com/images/previews/0c7/vehicle-1156020.jpg"
                                alt="..."
                            />
                            <img
                                src="https://media.istockphoto.com/id/1150095816/es/foto/macro-imagen-de-coche-de-juguete-vintage.jpg?s=612x612&w=0&k=20&c=98t3wD5wZ6pL5r-JBO8zwhFe8yoPkeJn05QKpfvW5L0="
                                alt="..."
                            />
                            <img
                                src="https://media.istockphoto.com/id/1363606790/es/foto/coche-de-pl%C3%A1stico-de-juguete-feliz-para-ni%C3%B1os-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=v_r79SxTXIycgUwc8QaaPU6WeajBlqUC-t1I_Brs7yI="
                                alt="..."
                            />
                            <img
                                src="https://images.freeimages.com/images/previews/6c6/toy-car-1413903.jpg"
                                alt="..."
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;