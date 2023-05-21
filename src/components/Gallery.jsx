

const Gallery = () => {
    return (
        <div className="lg:mt-14 mt-5 mb-10">
            <h2 className="text-4xl text-center font-semibold">Gallery With Toy Car</h2>
            <div className="">

                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Sports Car</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Regular Car</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Truck</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Police Car</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div data-aos="fade-right" className="shadow-xl">
                        <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/vintage-miniature-car-fake-landscape_155003-1097.jpg?size=626&ext=jpg&ga=GA1.2.24677610.1673838713&semt=ais" alt="" />
                    </div>
                    <div className="row-span-2" data-aos="zoom-in-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://e0.pxfuel.com/wallpapers/724/564/desktop-wallpaper-md-syamim-on-%E2%9C%94%EF%B8%8F-cartoon-jdm-car-art-cars-car-jdm-cars-thumbnail.jpg" alt="" />
                    </div>
                    <div className="row-span-2" data-aos="fade-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://e1.pxfuel.com/desktop-wallpaper/748/662/desktop-wallpaper-vintage-mercedes-toy-car-mobile-mercedes-car-thumbnail.jpg" alt="" />
                    </div>
                    <div data-aos="flip-up">
                        <img className="h-auto max-w-full shadow-xl rounded-lg" src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-car_23-2149345298.jpg?size=626&ext=jpg&ga=GA1.2.24677610.1673838713&semt=ais" alt="" />
                    </div>
                    <div className="shadow-xl rounded-2xl" data-aos="zoom-in-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://images.freeimages.com/images/previews/d50/racing-car-model-1413571.jpg" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="flip-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="flip-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://images.freeimages.com/images/previews/0c7/vehicle-1156020.jpg" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="zoom-in-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1150095816/es/foto/macro-imagen-de-coche-de-juguete-vintage.jpg?s=612x612&w=0&k=20&c=98t3wD5wZ6pL5r-JBO8zwhFe8yoPkeJn05QKpfvW5L0=" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="flip-right">
                        <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/1363606790/es/foto/coche-de-pl%C3%A1stico-de-juguete-feliz-para-ni%C3%B1os-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=v_r79SxTXIycgUwc8QaaPU6WeajBlqUC-t1I_Brs7yI=" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="fade-right">
                        <img className="h-auto max-w-full rounded-lg" src="https://images.freeimages.com/images/previews/6c6/toy-car-1413903.jpg" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="zoom-in-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://media.istockphoto.com/id/526534571/photo/yellow-fifties-toy-model-car.jpg?b=1&s=612x612&w=0&k=20&c=uki8khthtBs_h7OdsIjHZN3XjQpbMBmq6wAH6GL9B2g=" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="fade-left">
                        <img className="h-auto  max-w-full rounded-lg" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG95JTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="fade-left">
                        <img className="h-auto  max-w-full rounded-lg" src="https://img.freepik.com/premium-photo/toys-collection-isolated-white-background_635416-2394.jpg?size=626&ext=jpg&ga=GA1.2.24677610.1673838713&semt=ais" alt="" />
                    </div>
                    <div className=" rounded-2xl" data-aos="fade-left">
                        <img className="h-auto  max-w-full rounded-lg" src="https://images.freeimages.com/images/previews/d50/racing-car-model-1413571.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;