import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedLevel: string = 'todos';

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  filterByLevel() {
    if (this.selectedLevel === 'todos') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(
        (c) => c.difficulty === this.selectedLevel
      );
    }
  }

  goToDetail(id: number) {
    this.router.navigate(['/courses', id]);
  }
}
