import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  categories = ["Accounting", "Current Affairs", "Entrepreneurship", "Human Resources", "Technology", "For Fun", "Movies"]
  constructor() { }

  ngOnInit(): void {
  }

}
