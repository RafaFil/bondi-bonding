import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.sass']
})
export class TosComponent implements OnInit {

  tos : string = `
What you need is your Stand. What you can find beyond the powers of your Stand is where you need to go in order to find Heaven.
What you need is a trustworthy friend.
He must be someone capable of controlling his own desires.
He must be someone who is not interested in political power, fame, wealth, or sexual desire, and who chooses the will of God before the law of humans.
What you also need is the lives of more than 36 humans who have sinned, because those who have sinned harbor a strong power within.
There are 14 phrases that one must keep in mind:
Spiral staircase
Rhinoceros beetle
Desolation Row
Fig tart
Rhinoceros beetle Via Dolorosa
Rhinoceros beetle Singularity point Giotto Angel Hydrangea Rhinoceros beetle
Singularity point
Secret emperor
You must engrave these words into your Stand so you won't forget them.
 What is most necessary is "courage"; You must have the courage to destroy your Stand momentarily. As it disintegrates, your Stand will absorb the souls of the 36 sinners and will give birth to something utterly new.
Whatever is born will "awaken". It will show interest in the 14 words that your trusted friend will utter... Your friend will trust you and you will become his "friend".
Lastly, you need an appropriate location. North latitude, 28 degrees, 24 minutes, West longitude 80 degrees, 36 minutes...
Go there and wait for the New Moon...That's when Heaven will come.
  `;

  accepted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  acceptTerms(){
    if (this.accepted) {
      this.accepted = false;
    }
    else{
      this.accepted = true;
    }
  }

}
