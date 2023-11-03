import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  lang = new FormGroup({
    langEN: new FormControl(true),
  });

  contact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private translateService: TranslateService) {
    this.lang.valueChanges.subscribe(data => {
      const isEn = data.langEN ? 'en' : 'pt';
      this.setLang(isEn)
    })
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }
}
