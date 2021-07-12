import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeId'
})
export class YoutubeIdPipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {
    return value.split("/")[value.split("/").length -1];
  }

}
