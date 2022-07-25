import reactHabitat from "react-habitat";
//import * as components from "./Components";
//import hero from "./Components/Hero/Hero";
//import banner from "./Components/Banner/Banner";
//import homePage from "./Page/HomePage";

class habitatApp extends reactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container builder:
        const builder = new reactHabitat.ContainerBuilder();
        
        // Register a components:
        //for (let key in components) {
        //    if (components.hasOwnProperty(key)) {
        //        builder.register(components[key]).as(key);
        //    }
        //}

        //builder.register(hero).as("Hero");
        //builder.register(banner).as("Banner");

        //builder.register(homePage).as("HomePage");

        builder.registerAsync(() => System.import('./Components/Hero/Hero')).as('Hero');
        builder.registerAsync(() => System.import('./Components/Freetext/Freetext')).as('Freetext');
        builder.registerAsync(() => System.import('./Components/Header/Header')).as('Header');
        builder.registerAsync(() => System.import('./Components/Intro/Intro')).as('Intro');
        builder.registerAsync(() => System.import('./Components/Banner/Banner')).as('Banner');
        builder.registerAsync(() => System.import('./Page/HomePage')).as('HomePage');

        // Finally, set the container:
        this.setContainer(builder.build());
    }
}

// Always export a 'new' instance so it immediately evokes:
export default new habitatApp();
