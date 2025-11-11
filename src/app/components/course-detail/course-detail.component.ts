import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  form!: FormGroup;
  course!: Course;
  message = '';
  error = '';
  allowLastSuccess = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourse(id).subscribe((c: Course) => (this.course = c));

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  goBack() {
  this.location.back();
}

onEnroll() {
  if (this.form.invalid || !this.course) {
    this.error = 'Por favor completá todos los campos correctamente';
    this.message = '';
    return;
  }

  const enrollmentData = {
    name: this.form.value.name,
    email: this.form.value.email
  };

  this.courseService.enrollStudent(this.course.id, enrollmentData).subscribe({
    next: (res: any) => {
      this.message = res.message || 'Inscripción exitosa';
      this.error = '';

      // Guardamos el valor previo para detectar si llenó el último cupo
      const wasLastSpot = this.course.enrolledCount + 1 === this.course.capacity;

      this.course.enrolledCount++;

      // Si era el último cupo, marcamos un flag local
      if (wasLastSpot) {
        this.allowLastSuccess = true;
      }
    },
    error: (err) => {
      if (err.error && (err.error.error === 'El curso está lleno' || err.error.message === 'El curso está lleno')) {
        this.error = 'El curso está lleno';
      } else if (err.error && err.error.error) {
        this.error = err.error.error;
      } else {
        this.error = 'No se pudo completar la inscripción';
      }
      this.message = '';
    }
  });
}



}
