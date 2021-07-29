import Recipe from "../models/recipeModel.js";
import asyncHandler from "express-async-handler";
import puppeteer from 'puppeteer';


import { fetchTitle } from "./scrape.js";
import { fetchContent } from "./scrape.js";
import { fetchCategory } from "./scrape.js";


// @desc    Get logged in user recipes
// @route   GET /api/recipes
// @access  Private
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({ user: req.user._id });
  res.json(recipes);
});

//@description     Fetch single Recipe
//@route           GET /api/recipes/:id
//@access          Public
const getRecipeById = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe) {
    return res.json(recipe);
  } else {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
});

//@description     Create single Recipe
//@route           GET /api/recipes/create
//@access          Private
const CreateRecipe = asyncHandler(async (req, res) => {
  const { title, content, instructions, category } = req.body;

  if (!title || !content || !instructions || !category) {
    res.status(400);
    throw new Error("Please Fill all the fields");
    return;
  } else {
    const recipe = new Recipe({ user: req.user._id, title, content, instructions, category });

    const createdRecipe = await recipe.save();

    res.status(201).json(createdRecipe);
  }
});


//@description     Fetch URL for a single recipe
//@route           GET /api/recipes/fetch
//@Access          Private
const FetchRecipe = asyncHandler(async (req, res) => {


  //Webscraping  goes here 
const recipeData = {};

(async () => {

   
  const {link } = req.body;

    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(link, {waitUntil: 'networkidle2'});

    let title = await page.evaluate(() => {

        return document.querySelector('div[class="headline-wrapper"] > h1').innerText;
    })
    let content = await page.evaluate(() => {

      return document.querySelector('ul[class="ingredients-section"]').innerText;
  })
  let instructions = await page.evaluate(() => {

    return document.querySelector('ul[class="instructions-section"]').innerText;
})
let category = await page.evaluate(() => {

  return document.querySelector('div[class="partial recipe-nutrition-section"]').innerText;
})

    recipeData.title = title;
    recipeData.content = content;
    recipeData.instructions = instructions;
    recipeData.category = category;
    recipeData.user = req.user._id;

    const urlRecipe = new Recipe(recipeData);
    const recipeSend = await urlRecipe.save();
    res.status(201).json(recipeSend);

})();
 
  
});


//@description     Delete single Recipe
//@route           GET /api/recipes/:id
//@access          Private
const DeleteRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (recipe) {
    await recipe.remove();
    res.json({ message: "Recipe Removed" });
  } else {
    res.status(404);
    throw new Error("Recipe not Found");
  }
});

// @desc    Update a recipe
// @route   PUT /api/recipes/:id
// @access  Private
const UpdateRecipe = asyncHandler(async (req, res) => {
  const { title, content, instructions, category } = req.body;

  const recipe = await Recipe.findById(req.params.id);

  if (recipe.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (recipe) {
    recipe.title = title;
    recipe.content = content;
    recipe.instructions = instructions;
    recipe.category = category;

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } else {
    res.status(404);
    throw new Error("Recipe not found");
  }
});

export { getRecipeById, getRecipes, CreateRecipe, DeleteRecipe, UpdateRecipe,FetchRecipe };
