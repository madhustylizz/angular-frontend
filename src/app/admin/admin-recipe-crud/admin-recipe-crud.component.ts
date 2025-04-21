import { Component, OnInit } from '@angular/core';
import { AdminRecipeCrudService } from './admin-recipe-crud.service';
import { Recipe } from 'src/app/Models/recipies';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-recipe-crud',
  templateUrl: './admin-recipe-crud.component.html',
  styleUrls: ['./admin-recipe-crud.component.css']
})
export class AdminRecipeCrudComponent implements OnInit {

  recipeList: any;
  editAdminFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminRecipeCrudService: AdminRecipeCrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminRecipeCrudService.getRecipeList().subscribe(
      response => {
        this.recipeList = response;
        console.log(response);
      }
    )

    this.editAdminFormGroup = this.formBuilder.group(
      {
        id: [null, { 'disabled': true }],
        name: [''],
        category: [''],
        ingrediants: [''],
        cookingSteps: [''],
        imgurl: [''],
      }
    );
    // this.editAdminFormGroup.get('id')?.disable();
  }

  deleteByid(recipe: Recipe) {
    this.adminRecipeCrudService.deleteById(recipe).subscribe(
      response => {
        //  this.router.navigateByUrl("admincrud");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['admincrud']);
        });
      }
    )
  }


  updateRecipeModal(recipe: Recipe) {
    this.editAdminFormGroup.patchValue(recipe);
  }

  updateRecipe() {
    this.adminRecipeCrudService.udpateRecipe(this.editAdminFormGroup.value).subscribe(
      response => {
        alert("recipe updated successfully.");
      }
    )
  }

  addNewRecipe() {
   //  this.editAdminFormGroup.patchValue(recipe);
    
  }

  addRecipe()
{
  this.adminRecipeCrudService.addRecipeList(this.editAdminFormGroup.value).subscribe(
    response=>{
      alert("New recipe added ." );
    }
  )
}

public goback(){
  this.router.navigate(['/admindash'])
}
}
