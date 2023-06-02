import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html",
  styleUrls: ["./slideshow.component.scss"]
})
export class SlideshowComponent implements OnInit {
  images = [`1.jpg`, `2.jpg`, `3.jpg`];
  headlines = [
    `Bring engeneering to the next level`,
    `Born to code`,
    `Graduated at Developer Akademie`
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 20);
    }, 5000);
  }
}
