import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRecipeCrudService } from './../../admin/admin-recipe-crud/admin-recipe-crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Recipe } from 'src/app/Models/recipies';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  searchRecipeGroup: FormGroup;
  recipeList: any;
  constructor(
    private formBuilder: FormBuilder,
    private adminRecipeCrudService: AdminRecipeCrudService,
    private router: Router) { }

  ngOnInit(): void {
    this.adminRecipeCrudService.getRecipeList().subscribe(
      response => {
        this.recipeList = response;
        console.log(response);
      }
    );

    this.searchRecipeGroup = this.formBuilder.group({
      searchByCategory: [''],
    });
  }

  onNav() {
    this.router.navigate(['/userbklst']);
  }

  onSearchByCat() {
    this.adminRecipeCrudService.searchByCategory(this.searchRecipeGroup.value['searchByCategory']).subscribe(
      response => {
        if (response) {
          this.recipeList = response;
        }
      }
    )
  }

  recipeDetails(recipe: Recipe) {
    console.log(recipe);
    this.router.navigateByUrl("userdetails/"+ recipe.id);
  }

  public logout(){
    this.router.navigate(['/']);
  }
 
}
