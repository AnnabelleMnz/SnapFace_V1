import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

@Input() faceSnap! : FaceSnap;


snapButton!:string;


constructor(private faceSnapsService : FaceSnapsService, private router : Router){}
ngOnInit(): void {
 
  this.snapButton="Oh snap!";

}

onViewFaceSnap(){
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
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
