import { Component, OnInit, Input } from '@angular/core';

import { UIService } from '../../ui.service';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;

  constructor(
    private uiService: UIService
  ) {}

  ngOnInit() {}
}
