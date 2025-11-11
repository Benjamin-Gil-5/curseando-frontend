import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.base}/courses`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.base}/courses/${id}`);
  }

  enrollStudent(courseId: number, data: { name: string; email: string }): Observable<{ message?: string; error?: string }> {
    const payload = { fullName: data.name, email: data.email, courseId };
    return this.http.post<{ message?: string; error?: string }>(`${this.base}/enrollments`, payload);
  }
}
