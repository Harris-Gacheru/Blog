import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL: string = 'http://localhost:3500/blogs'

  constructor(private http: HttpClient) { 

  }

  createBlog(blog: Blog){
    return this.http.post(this.BASE_URL, blog)
  }

  getAllBlogs(){
    return this.http.get(this.BASE_URL)
  }

  getBlog(id: string){
    return this.http.get(`${this.BASE_URL}/${id}`)
  }

  updateBlog(id: string, blog: Blog){
    return this.http.patch(`${this.BASE_URL}/${id}`, blog)
  }

  deleteBlog(id: string){
    return this.http.delete(`${this.BASE_URL}/${id}`)
  }
}
