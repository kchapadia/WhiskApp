import cheerio from 'cheerio';
import request from 'request';
import asyncHandler from "express-async-handler";


/*
request('https://www.allrecipes.com/recipe/232247/tennessee-meatloaf', (error, response, html) => {

    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteheading = $('.headline-wrapper');

        const ingredients = $('.ingredients-section__fieldset');
        console.log(siteheading.text());

        console.log(ingredients.text());

    }

});
*/
export const fetchTitle = (link) => asyncHandler(async () => {

    request(link, (error, response, html) => {

        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
    
             siteheading = $('.headline-wrapper');
    
           // siteheading = siteheading.toString();
           console.log(siteheading.text());
            return siteheading.text();

        }
    });
    
//end function
});


export const fetchContent = (link) => asyncHandler(async () => {

    request(link, (error, response, html) => {

        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
    
             siteIngredients = $('.ingredients-section__fieldset');
    
            //siteIngredients = siteIngredients.toString();
            console.log(siteIngredients.text());

            return siteIngredients.text();

        }

    });
    
//end function
});

export const fetchCategory = (link) => asyncHandler(async () => {

    request(link, (error, response, html) => {

        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
    
             siteCategory = $('.recipe-instructions recipe-instructions-new component container');
    
            //siteCategory = siteCategory.toString();
            console.log(siteCategory.text());

            return siteCategory.text();

        }

        
    });
    
//end function
});
