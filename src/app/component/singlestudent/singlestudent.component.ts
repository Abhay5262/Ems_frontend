import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataproviderService } from 'src/app/service/dataprovider.service';
import { UpdateemployeComponent } from 'src/app/updateemploye/updateemploye.component';

@Component({
  selector: 'app-singlestudent',
  templateUrl: './singlestudent.component.html',
  styleUrls: ['./singlestudent.component.css']
})
export class SinglestudentComponent {
  constructor(
    public dialogRef: MatDialogRef<SinglestudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dataprovider: DataproviderService, public dialog: MatDialog
  ) {
    console.log(data.info.name)
  }

  updateData() {
    const dialogRef = this.dialog.open(UpdateemployeComponent, {
  
    });
    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }
}
