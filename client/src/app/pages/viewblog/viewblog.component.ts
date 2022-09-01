import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
  blogId!: string
  blog?: Blog
  alertMessage: string

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = params['id']

      this.blogService.getBlog(this.blogId).subscribe(
        res => {
          if (res.success) {
            this.blog = res.blog
          }
        },
        err => {console.log(err)}
      )
    })
  }

  delete(id: string){
    let alert = document.getElementById('alert-div')
    let alertP = document.getElementById('alert-p')
    alert.style.display = "block"
    alert.style.transform = "translateY(0)"

    this.blogService.deleteBlog(id).subscribe(
      res => {
        if (res.success) {
          this.alertMessage = res.message
          alertP.style.borderLeft = "thick solid green"
          alertP.style.color = "green"

          setTimeout(() => {
            this.router.navigate(['/'])
          }, 3000)
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
