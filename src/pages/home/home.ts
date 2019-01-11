import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

import 'tracking/build/tracking';
import 'tracking/build/data/face';

declare var tracking: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public texto: string = "Em detecção...";

  @ViewChild('canvas') canvasEl: ElementRef;

  constructor(public navCtrl: NavController, private cameraPreview: CameraPreview) {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: 320,
      height: 240,
      camera: 'front',
      tapPhoto: false,
      previewDrag: false,
      toBack: false,
      alpha: 1
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });

  }

  ionViewDidLoad() {
    // var video = document.getElementById('video');
    // var canvas = this.canvasEl.nativeElement;
    // var context = canvas.getContext('2d');

    // var tracker = new tracking.ObjectTracker('face');
    // tracker.setInitialScale(4);
    // tracker.setStepSize(2);
    // tracker.setEdgesDensity(0.1);

    // tracking.track('#video', tracker, { camera: true });

    // tracker.on('track', (event) => {

    //     context.clearRect(0, 0, canvas.width, canvas.height);

    //     event.data.forEach(async (rect) => {
    //       this.texto = "DETECTADO";
    //       context.strokeStyle = '#a64ceb';
    //       context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    //       context.font = '11px Helvetica';
    //       context.fillStyle = "#000";
    //       context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
    //       context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    //     });
    // });

  }
}
