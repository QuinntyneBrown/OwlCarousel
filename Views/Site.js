import { initVehiclesCarousel } from './Shared/Components/Vehicles';

document.addEventListener("readystatechange", function () {
    if (document.readyState === 'complete') {        
        initVehiclesCarousel();
    }
});