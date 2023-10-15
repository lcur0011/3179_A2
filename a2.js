
var idiom_2 = "map.json";
var idiom_1 = "bar.json";
var idiom_3 = "map2.json";
var idiom_4 = "pie.json";
var idiom_5 = "box.json"

vegaEmbed("#bar", idiom_1).then(function(result){}).catch(console.error);
vegaEmbed("#mappy", idiom_2).then(function(result){}).catch(console.error);
vegaEmbed("#map", idiom_3).then(function(result){}).catch(console.error);
vegaEmbed("#pie", idiom_4).then(function(result){}).catch(console.error);
vegaEmbed("#box", idiom_5).then(function(result){}).catch(console.error);


const spec1 = "map.json";
const spec2 = "map2.json";

function toggleVisualization(specName) {
    let newSpec;

    // Determine which specification to use based on the button clicked
    if (specName === 'spec1') {
        newSpec = spec1;
    } else if (specName === 'spec2') {
        newSpec = spec2;
    }

    // Embed the new specification using Vega-Embed
    vegaEmbed('#yourVegaContainer', newSpec)
        .catch(console.error);
}

document.addEventListener('DOMContentLoaded', function () {
    // Render the initial visualization (e.g., spec1)
    vegaEmbed('#yourVegaContainer', spec1)
        .catch(console.error);
});
