import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post} from './post';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public post: Post[] = [
    new Post("João", "Meu post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Maria", "Meu post", "Sub Maria", "joao@gmail.com", "Minha msg"),
    new Post("Vitor", "Meu post", "Sub Vitor", "joao@gmail.com", "Minha msg"),
    new Post("Ruan", "Meu post", "Sub Ruan", "joao@gmail.com", "Minha msg"),
    new Post("Bruna", "Meu post", "Sub Bruna", "joao@gmail.com", "Minha msg"),
    new Post("Tadeu", "Meu post", "Sub Tadeu", "joao@gmail.com", "Minha msg"),
    new Post("Ana", "Meu post", "Sub Ana", "joao@gmail.com", "Minha msg"),
    new Post("Bia", "Meu post", "Sub Bia", "joao@gmail.com", "Minha msg"),
  ];

  constructor(public dialog: MatDialog){} 

  openDialog(){
    const dialogref = this.dialog.open(PostDialogComponent, {      
    });
    dialogref.afterClosed().subscribe(
      (result) => {
        if (result) {
          
        }
      }
    );
  }
}
