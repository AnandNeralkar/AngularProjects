import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})

export class MarvellousComponent {
public BatchName="Python ML"

DemoFun()
{
  return "Inside Demo Fun Function"
}

Display()
{
console.log();
  ("Inside Typescript")
}
}
