import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUsers() {
    return [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
  }
}
