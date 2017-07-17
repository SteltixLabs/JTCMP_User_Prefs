define(['ojs/ojcore', 'text!./blank-component.html', './blank-component', 'text!./blank-component.json', 'css!./blank-component.css', 'ojs/ojcomposite'], function (oj, view, viewModel, metadata) {
        oj.Composite.register('blank-component', {
            view: {inline: view},
            viewModel: {inline: viewModel},
            metadata: {inline: JSON.parse(metadata)}
    });
    }   
);
