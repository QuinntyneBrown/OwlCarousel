import { Vehicles } from './Shared/Components/Vehicles';

document.addEventListener("readystatechange", function () {
    if (document.readyState === 'complete') {        
        new Vehicles().init();
    }
});