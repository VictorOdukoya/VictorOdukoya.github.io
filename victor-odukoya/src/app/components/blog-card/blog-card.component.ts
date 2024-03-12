import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomScullyRoute } from 'src/app/interfaces/custom-scully-route.interface';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit{
  @Input()
  public scullyRoute: CustomScullyRoute;
  
  @Input()
  public size: 'xl' | 'l' | 'm' | 's' =  'm'; 


  ngOnInit(): void {
  }
}
