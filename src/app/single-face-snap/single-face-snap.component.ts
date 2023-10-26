import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
faceSnap! : FaceSnap;
snapButton!:string;
  
  constructor(private faceSnapsService : FaceSnapsService, private route : ActivatedRoute){}
  ngOnInit(): void {
   
    this.snapButton="Oh snap!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  
  }
  onSnap(){
  if (this.snapButton === 'Oh snap!'){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap' )
    this.snapButton ='Oups snap';
  }
  else if (this.snapButton === 'Oups snap'){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    this.snapButton ='Oh snap!';
  }
  }
  
  }
  