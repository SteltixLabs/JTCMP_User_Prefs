
define(['ojs/ojcore', 'text!./user-prefs.html', './user-prefs', 'text!./user-prefs.json', 'css!./user-prefs.css', 'ojs/ojcomposite'], 
function (oj, view, viewModel, metadata) {
        oj.Composite.register('user-prefs', {
            view: {inline: view},
            viewModel: {inline: viewModel},
            metadata: {inline: JSON.parse(metadata)}
    });
    }   
);
