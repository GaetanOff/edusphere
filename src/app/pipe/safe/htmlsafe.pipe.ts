import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'htmlsafe',
  standalone: true
})
export class HtmlsafePipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
