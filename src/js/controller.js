class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindOnModeltoView(allcountries => {
            return this.onModeltoView(allcountries);
        });

        this.model.bindOnShowDetails(details => {
            return this.onShowDetails(details);
        });

        this.view.bindOnClickDetails(name => {
            this.onClickDetails(name);
        });

        this.model.init();
    }
    onModeltoView(allcountries) {
        this.view.displayAllcountries(allcountries);
    }

    onShowDetails(details) {
        this.view.displayDetails(details);
    }

    onClickDetails(each_country) {
        this.model.showDetails(each_country);
    }
}

const app = new Controller(new Model(), new View());
