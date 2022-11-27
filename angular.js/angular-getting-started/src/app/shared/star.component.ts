import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    cropWidth: number = 75;

    @Input() rating: number = 4;

    ngOnChanges(changes: SimpleChanges): void {

        this.cropWidth = this.rating * 75/5;
    }

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() : void {

        this.ratingClicked.emit('clicked!');
    }
}