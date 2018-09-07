import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planning-form',
  templateUrl: './planning-form.component.html',
  styleUrls: ['./planning-form.component.css']
})
export class PlanningFormComponent implements OnInit, OnDestroy {

  public preload = false;
  private sub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    /*
    * Два пути для получения данных
    * - Snapshot
    * - Observable
    * */

    // Observable way (prefer to use)
    this.sub = this.route.data.subscribe(data => {
        this.preload = data.preload;
    });

    // Snapshot way
    this.preload = this.route.snapshot.data.preload;
}

  ngOnDestroy() {
    this.sub.unsubscribe(); // Обзательно отписываться;
  }
}
