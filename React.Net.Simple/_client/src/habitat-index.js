import reactHabitat from "react-habitat";
import * as components from "./Components";
import homePage from "./Page/HomePage";

class habitatApp extends reactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container builder:
        const builder = new reactHabitat.ContainerBuilder();
        
        // Register a components:
        for (let key in components) {
            if (components.hasOwnProperty(key)) {
                builder.register(components[key]).as(key);
            }
        }

        builder.register(homePage).as("HomePage");

        // Finally, set the container:
        this.setContainer(builder.build());
    }
}

// Always export a 'new' instance so it immediately evokes:
export default new habitatApp();
