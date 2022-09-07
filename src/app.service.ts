import { Injectable,Post } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  countString(str:string): Object {
    var counts = {};
    var ch, index, len, count;

    for (index = 0, len = str.length; index < len; ++index) {
      ch = str.charAt(index);
      count = counts[ch];
      counts[ch] = count ? count + 1 : 1;
    }
    var strings ="";
    for (ch in counts) {
      strings += (ch + " = " + counts[ch]+"; ");
    }
    counts["result"] = strings;
    
    console.log(counts)
    return counts;
  }
}
