import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './AddCharacter.component.html',
  styleUrl: './addCharacter.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)
    debugger;
    this.character.name=''
    this.character.power=0
  }

}
