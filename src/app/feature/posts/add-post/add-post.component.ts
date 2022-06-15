import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  user$ = this.userService.currentUserProfile$;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  addPostFormGroup: FormGroup = this.formBuilder.group({
    'postContent': new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
  }

  handleAddPost(): void{
    if(this.addPostFormGroup.invalid){
      throw new Error('Post can\'t be empty!');
    }
    console.log(this.addPostFormGroup.value);
    this.addPostFormGroup.reset();
    this.user$.subscribe((user) => {
      console.log(user);
    })
  }

}
