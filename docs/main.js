(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container pt-4\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand pointer\" routerLink=\"/\">Recipe Book</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link pointer\" [routerLink]=\"['/']\" routerLinkActive=\"active\">Recipes</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link pointer\" routerLink=\"/shopping-list\" routerLinkActive=\"active\">Shopping List</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle pointer\" appDropdown id=\"navbarDropdownMenuLink\" role=\"button\"\r\n            data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n            Manage\r\n          </a>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item pointer\">Save Data</a>\r\n            <a class=\"dropdown-item pointer\">Fetch Data</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-details/recipe-details.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-details/recipe-details.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Name -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h2>{{recipe.name}}</h2>\r\n  </div>\r\n</div>\r\n\r\n<!-- Image -->\r\n<div class=\"row mb-2\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <img [src]=\"recipe.imagePath\" alt=\"Image\" class=\"img-fluid\" style=\"height: 400px\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Manage Button -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"btn-group\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary btn-sm dropdown-toggle\" appDropdown data-toggle=\"dropdown\"\r\n        aria-expanded=\"false\">Manage</button>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item pointer\" (click)=\"onMange('shopping-list')\">To Shopping List</a>\r\n        <a class=\"dropdown-item pointer\" (click)=\"onMange('edit')\">Edit Recipe</a>\r\n        <a class=\"dropdown-item pointer\" (click)=\"onMange('delete')\">Delete Recipe</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Description -->\r\n<div class=\"row mt-4\">\r\n  <div class=\"col-sm-12\">\r\n    <p>{{recipe.description}}</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- Ingredients -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let ingredient of recipe.ingredients\">\r\n        {{ingredient.name}} {{ingredient.amount}}</li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 text-center\">\r\n  <h3>Edit Recipe</h3>\r\n</div>\r\n\r\n<form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <button class=\"btn btn-outline-danger btn-sm float-right\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\r\n      <button class=\"btn btn-outline-success btn-sm float-right mr-2\" type=\"submit\"\r\n        [disabled]=\"!recipeForm.valid\">Save</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Recipe Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"url\">Image URL</label>\r\n        <input type=\"url\" class=\"form-control\" id=\"url\" formControlName=\"imagePath\" #imagePath>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 div form-group\" *ngIf=\"imagePath.value\">\r\n      <img [src]=\"imagePath.value\" alt=\"recipe-image\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <textarea class=\"form-control\" id=\"description\" rows=\"4\" formControlName=\"description\"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div formArrayName=\"ingredients\">\r\n    <div class=\"row mb-2\" *ngFor=\"let item of ingredientsControl(); let i=index\" [formGroupName]=\"i\">\r\n      <div class=\"col-8\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ingredient Name\" formControlName=\"name\">\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <input type=\"number\" class=\"form-control\" formControlName=\"amount\">\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteIngredient(i)\">X</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <button type=\"button\" class=\"btn btn-outline-success btn-sm\" (click)=\"addIngredient()\">Add Ingredient</button>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"list-group-item list-group-item-action\" [routerLink]=\"[index]\" routerLinkActive=\"active\">\r\n  <div class=\"d-flex w-100 justify-content-between align-items-center\">\r\n    <h5 class=\"mb-1\">{{recipe.name}}</h5>\r\n    <img [src]=\"recipe.imagePath\" alt=\"{{recipe.name}}\" style=\"height: 50px\" class=\"img-fluid\">\r\n  </div>\r\n  <p class=\"my-2\">{{recipe.description}}</p>\r\n</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <button type=\"button\" class=\"btn btn-outline-success btn-sm\" [routerLink]=\"['./new']\">New Recipe</button>\r\n    </div>\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"list-group\">\r\n          <!-- <app-recipe-item *ngFor=\"let recipe of recipes\" [recipe]=\"recipe\"\r\n            (selectedRecipe)=\"onRecipeSelectedEmit($event)\"></app-recipe-item> -->\r\n          <app-recipe-item *ngFor=\"let recipe of recipes; let i = index\" [recipe]=\"recipe\" [index]=\"i\">\r\n          </app-recipe-item>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Please select a recipe</h3>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-5\">\r\n    <app-recipe-list></app-recipe-list>\r\n  </div>\r\n\r\n  <div class=\"col-sm-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(fd)\" #fd=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" ngModel name=\"name\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Amount\" ngModel name=\"amount\" required\r\n      pattern=\"^[1-9]+[0-9]*$\">\r\n  </div>\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n    <button type=\"submit\" class=\"btn btn-outline-primary\"\r\n      [disabled]=\"!fd.valid\">{{editMode ? 'Update' : 'Add'}}</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onFormAction('delete')\" [disabled]=\"!editMode\">Delete</button>\r\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onFormAction('clear')\">Clear</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\r\n  <div class=\"col-sm-8 offset-sm-2\">\r\n    <app-shopping-edit></app-shopping-edit>\r\n    <ul class=\"list-group mt-4\">\r\n      <li class=\"list-group-item\" *ngFor=\"let ingredient of ingredients; let i = index\" (click)=\"onEditItem(i)\">\r\n        {{ingredient.name}} {{ingredient.amount}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-details/recipe-details.component */ "./src/app/recipes/recipe-details/recipe-details.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");








var routes = [
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_4__["RecipesComponent"],
        children: [
            {
                path: '',
                component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"]
            },
            {
                path: 'new',
                component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"]
            },
            {
                path: ':id',
                component: _recipes_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsComponent"]
            },
            {
                path: ':id/edit',
                component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"]
            }
        ]
    },
    {
        path: 'shopping-list',
        component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-details/recipe-details.component */ "./src/app/recipes/recipe-details/recipe-details.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shared_directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/directive/dropdown.directive */ "./src/app/shared/directive/dropdown.directive.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/service/shopping-list.service */ "./src/app/shared/service/shopping-list.service.ts");
/* harmony import */ var _shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/service/recipe.service */ "./src/app/shared/service/recipe.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
                _recipes_recipe_details_recipe_details_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailsComponent"],
                _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipeListComponent"],
                _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__["RecipeItemComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingEditComponent"],
                _shared_directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownDirective"],
                _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_14__["RecipeStartComponent"],
                _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_15__["RecipeEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_16__["ShoppingListService"], _shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_17__["RecipeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a#navbarDropdownMenuLink.show + .dropdown-menu {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxFZHVjYXRpb25cXEdpdEh1YlxcUmVjaXBlLUJvb2svc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEjbmF2YmFyRHJvcGRvd25NZW51TGluay5zaG93Ky5kcm9wZG93bi1tZW51IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufSIsImEjbmF2YmFyRHJvcGRvd25NZW51TGluay5zaG93ICsgLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-details/recipe-details.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/recipes/recipe-details/recipe-details.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.btn.btn-outline-primary.btn-sm.dropdown-toggle.show + .dropdown-menu {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlscy9EOlxcRWR1Y2F0aW9uXFxHaXRIdWJcXFJlY2lwZS1Cb29rL3NyY1xcYXBwXFxyZWNpcGVzXFxyZWNpcGUtZGV0YWlsc1xccmVjaXBlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbHMvcmVjaXBlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1kZXRhaWxzL3JlY2lwZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5LmJ0bi1zbS5kcm9wZG93bi10b2dnbGUuc2hvdyArIC5kcm9wZG93bi1tZW51IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuIiwiYnV0dG9uLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5LmJ0bi1zbS5kcm9wZG93bi10b2dnbGUuc2hvdyArIC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-details/recipe-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-details/recipe-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RecipeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsComponent", function() { return RecipeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/recipe.service */ "./src/app/shared/service/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecipeDetailsComponent = /** @class */ (function () {
    function RecipeDetailsComponent(recipeService, activatedRoute, router) {
        this.recipeService = recipeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    RecipeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get RecipeDetails by index
        this.activatedRoute.params.subscribe(function (params) {
            _this.recipeIndex = +params.id;
            _this.recipe = _this.recipeService.getRecipeById(_this.recipeIndex);
        });
    };
    // Manage button
    RecipeDetailsComponent.prototype.onMange = function (action) {
        if (action === 'shopping-list') {
            this.recipeService.onAddToShoppingList(this.recipe.ingredients);
        }
        else if (action === 'edit') {
            this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
        }
        else if (action === 'delete') {
            this.recipeService.deleteRecipe(this.recipeIndex);
            this.router.navigate(['recipes']);
        }
    };
    RecipeDetailsComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RecipeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-details',
            template: __webpack_require__(/*! raw-loader!./recipe-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-details/recipe-details.component.html"),
            styles: [__webpack_require__(/*! ./recipe-details.component.scss */ "./src/app/recipes/recipe-details/recipe-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipeDetailsComponent);
    return RecipeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + .75rem);\n  background-repeat: no-repeat;\n  background-position: center right calc(.375em + .1875rem);\n  background-size: calc(.75em + .375rem) calc(.75em + .375rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9EOlxcRWR1Y2F0aW9uXFxHaXRIdWJcXFJlY2lwZS1Cb29rL3NyY1xcYXBwXFxyZWNpcGVzXFxyZWNpcGUtZWRpdFxccmVjaXBlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseURBQUE7RUFDQSw0REFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgcGFkZGluZy1yaWdodDogY2FsYygxLjVlbSArIC43NXJlbSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgY2FsYyguMzc1ZW0gKyAuMTg3NXJlbSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjYWxjKC43NWVtICsgLjM3NXJlbSkgY2FsYyguNzVlbSArIC4zNzVyZW0pO1xyXG59IiwiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0IGNhbGMoLjM3NWVtICsgLjE4NzVyZW0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNhbGMoLjc1ZW0gKyAuMzc1cmVtKSBjYWxjKC43NWVtICsgLjM3NXJlbSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/recipe.service */ "./src/app/shared/service/recipe.service.ts");





var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(router, activatedRoute, recipeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.recipeService = recipeService;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params.id;
            _this.editMode = params.id != null;
            _this.editRecipe = _this.recipeService.getRecipeById(_this.id);
            console.log(_this.editRecipe);
        });
        this.FromInit();
        // this.tempFormControl();
    };
    RecipeEditComponent.prototype.FromInit = function () {
        var name = '';
        var description = '';
        var imagePath = '';
        var ingredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            name = this.editRecipe.name;
            description = this.editRecipe.description;
            imagePath = this.editRecipe.imagePath;
            if (this.editRecipe.ingredients) {
                for (var _i = 0, _a = this.editRecipe.ingredients; _i < _a.length; _i++) {
                    var iterator = _a[_i];
                    ingredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](iterator.name),
                        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](iterator.amount)
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](imagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ingredients: ingredients
        });
    };
    RecipeEditComponent.prototype.ingredientsControl = function () {
        return this.recipeForm.get('ingredients').controls;
    };
    RecipeEditComponent.prototype.addIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
        }));
    };
    RecipeEditComponent.prototype.deleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    };
    RecipeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] }
    ]; };
    RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.scss */ "./src/app/recipes/recipe-edit/recipe-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.scss */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/recipe.service */ "./src/app/shared/service/recipe.service.ts");



var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe(function (recipes) {
            _this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.recipesChangedSubscription.unsubscribe();
    };
    RecipeListComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }
    ]; };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.scss */ "./src/app/recipes/recipe-list/recipe-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-start',
            template: __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__(/*! ./recipe-start.component.scss */ "./src/app/recipes/recipe-start/recipe-start.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    Recipe.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.scss":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () { };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.scss */ "./src/app/recipes/recipes.component.scss")]
        })
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/shared/directive/dropdown.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directive/dropdown.directive.ts ***!
  \********************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(render, elementRef) {
        this.render = render;
        this.elementRef = elementRef;
        this.manageButtonCounter = 0;
    }
    DropdownDirective.prototype.onClick = function (eventData) {
        this.manageButtonCounter++;
        if (this.manageButtonCounter % 2 === 0) {
            this.render.removeClass(this.elementRef.nativeElement, 'show');
        }
        else {
            this.render.addClass(this.elementRef.nativeElement, 'show');
        }
    };
    DropdownDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "onClick", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    Ingredient.ctorParameters = function () { return [
        { type: String },
        { type: Number }
    ]; };
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/service/recipe.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/service/recipe.service.ts ***!
  \**************************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_recipes_recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/recipes/recipe.model */ "./src/app/recipes/recipe.model.ts");
/* harmony import */ var _ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shared/service/shopping-list.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var RecipeService = /** @class */ (function () {
    function RecipeService(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.recipes = [
            new src_app_recipes_recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Burger', 'A delicious burger recipe with ingredients', 'https://upload.wikimedia.org/wikipedia/commons/c/ce/McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg', [
                new _ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Buns', 2),
                new _ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Meat', 1),
            ]),
            new src_app_recipes_recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"]('Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
                new _ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('Meat', 1),
                new _ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"]('French Fries', 20)
            ])
        ];
        // public selectedRecipe = new EventEmitter<Recipe>();
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.onAddToShoppingList = function (ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    };
    RecipeService.prototype.getRecipeById = function (index) {
        var recipes = this.getRecipes();
        return recipes[index];
    };
    RecipeService.prototype.updateRecipe = function (index, recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"] }
    ]; };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/shared/service/shopping-list.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/service/shopping-list.service.ts ***!
  \*********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredients = [
            {
                name: 'Tomato',
                amount: 5
            },
            {
                name: 'Onion',
                amount: 10
            }
        ];
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.onItemAdd = function (event) {
        console.log(event);
        this.ingredients.push(event);
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log(this.ingredients);
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.updateIngredient = function (index, updatedIngredient) {
        this.ingredients[index] = updatedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // {providedIn: 'root'}
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingListService);
    return ShoppingListService;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/shopping-list.service */ "./src/app/shared/service/shopping-list.service.ts");




var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.ingredients = [];
        this.ingredient = {};
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingListService.startedEditing.subscribe(function (index) {
            _this.editMode = true;
            _this.editedItemIndex = index;
            _this.editedItem = _this.shoppingListService.getIngredient(index);
            _this.shoppingListForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (formData) {
        this.ingredient = new Object(formData.value);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, this.shoppingListForm.form.value);
        }
        else {
            this.shoppingListService.onItemAdd(this.ingredient);
        }
        this.shoppingListForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onFormAction = function (action) {
        if (action === 'clear') {
            this.editMode = false;
            this.shoppingListForm.reset();
        }
        else if (action === 'delete') {
            this.editMode = false;
            this.shoppingListForm.reset();
            this.shoppingListService.deleteIngredient(this.editedItemIndex);
        }
    };
    ShoppingEditComponent.ctorParameters = function () { return [
        { type: src_app_shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fd', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ShoppingEditComponent.prototype, "shoppingListForm", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.scss */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/shopping-list.service */ "./src/app/shared/service/shopping-list.service.ts");



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.ingredientsChangedSubscription.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.shoppingListService.startedEditing.next(index);
    };
    ShoppingListComponent.ctorParameters = function () { return [
        { type: _shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] }
    ]; };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.scss */ "./src/app/shopping-list/shopping-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Education\GitHub\Recipe-Book\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map