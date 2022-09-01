import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { min } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service'

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  public Editor = ClassicEditor;
  alertMessage: string
  selectedFile: File
  
  blogForm: FormGroup

  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      coverImage: [null],
      body: ['', Validators.required]
    })
  }
  
  onFileChanged(event: any){
    this.selectedFile = event.target.files[0]

    this.blogForm.patchValue({
      coverImage: this.selectedFile
    })
  }

  submit(){
    let alert = document.getElementById('alert-div')
    let alertP = document.getElementById('alert-p')
    alert.style.transform = "translateY(0)"
    
    let formData = new FormData()
    formData.append('title', this.blogForm.get('title').value)
    formData.append('body', this.blogForm.get('body').value)
    formData.append('coverImage', this.blogForm.get('coverImage').value)

    this.blogService.createBlog(formData).subscribe(
      res => {
        if (res.success) {
          this.alertMessage = res.message
          alertP.style.borderLeft = "thick solid green"
          alertP.style.color = "green"

          setTimeout(() => {
            this.router.navigate(['/'])
          }, 3500)
        }else {
          this.alertMessage = res.message          
          alertP.style.borderLeft = "thick solid red"
          alertP.style.color = "red" 
        }
      },
      err => {
        this.alertMessage = err.message 
        alertP.style.borderLeft = "thick solid red"
        alertP.style.color = "red"

        console.log(err)
      }
    )
  }

}
