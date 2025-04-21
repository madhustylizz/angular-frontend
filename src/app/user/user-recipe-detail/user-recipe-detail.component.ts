import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/recipies';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRecipeCrudService } from 'src/app/admin/admin-recipe-crud/admin-recipe-crud.service';

@Component({
  selector: 'app-user-recipe-detail',
  templateUrl: './user-recipe-detail.component.html',
  styleUrls: ['./user-recipe-detail.component.css']
})
export class UserRecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminRecipeCrudService: AdminRecipeCrudService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let recipeId = params.get('id');
      if (recipeId != null) {
        this.adminRecipeCrudService.searchRecipeByid(parseInt(recipeId)).subscribe(
          response => {
            this.recipe = response;
          }
        )

      }
    });
  }
  liked(){
    window.alert('Thank you so much for your satisfaction😍')
  }
  disliked(){
    window.alert('Sorry we will make it better next time😞')
  }
}
