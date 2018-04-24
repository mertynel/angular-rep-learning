import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simple test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6mpM2aSqyb1Si_3yZmJQna400ovXePGQRubgwFBuU5U4vBPHOw'),
    new Recipe('A test Recipe 1', 'this is simple test22', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6mpM2aSqyb1Si_3yZmJQna400ovXePGQRubgwFBuU5U4vBPHOw'),
  ];
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl){
    this.recipeWasSelected.emit(recipeEl);
  }

}
